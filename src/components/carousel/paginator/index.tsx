import React from "react";
import type { CarouselPaginatorProps} from "../types";
import {ProductId} from "../../../data-types";
//@ts-ignore
import stableHash from "stable-hash";

const CarouselPaginator = (props: CarouselPaginatorProps) =>{
    const {paginator, media, activeMedia, setActiveMedia, returnMediaFromIndx} = props;
    const TIMER = React.useRef(500).current;
    const paginatorElementTimer = React.useRef<NodeJS.Timeout | null>(null);

    const mediaFindIndex = React.useCallback((id: ProductId) => media.findIndex(el=> el.id === id),
        [stableHash(media)])

    const onMouseEnter = (id: ProductId) => {
        return (event:React.MouseEvent<HTMLElement>) => {
            const indx:number = mediaFindIndex(id);
            const returnValue = returnMediaFromIndx(indx);
            paginatorElementTimer.current = setTimeout(()=> setActiveMedia(returnValue), TIMER);
        }
    }

    const onMouseLeave = () => {
        return (event:React.MouseEvent<HTMLElement>) => {
            if(paginatorElementTimer.current != null){
                clearTimeout(paginatorElementTimer.current);
            }
            paginatorElementTimer.current = null;
        }
    }

    const onClick = (id: ProductId) => {
        return (event: React.MouseEvent<HTMLElement>) => {
            const indx:number = mediaFindIndex(id);
            const returnValue = returnMediaFromIndx(indx);
            setActiveMedia(returnValue);
        }
    }

    if(!paginator) return null;

    return  <>
        <div className={`paginator-inner my-2 h-[80px] flex flex-row items-center gap-3`}>
            {media.map(el =>(
                <button key={el.id}
                onMouseEnter={onMouseEnter(el.id)}
                onMouseLeave={onMouseLeave()}
                onClick={onClick(el.id)} className={`w-[60px] h-[70px] border-2 
                        ${el.id === activeMedia.id ?  "border-orange-400 shadow-md shadow-orange-300 outline-orange-600" : null}`}>
                    <img className={`w-full`} src={el.url} alt={``}/>
                </button>
                )
            )}
        </div>
    </>
}

export default React.memo<CarouselPaginatorProps>(CarouselPaginator);