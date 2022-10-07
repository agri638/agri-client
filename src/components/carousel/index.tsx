import CarouselProps, {CarouselMedia, ResponsiveActiveMediaProps} from "./types";
import React from "react";
import type {ResponsiveType} from "../types";
import type {ActiveMediaProps} from "./types";
import CarouselPaginator from "./paginator";
import CarouselButton from "./button/button";
// @ts-ignore
import stableHash from "stable-hash";

const Carousel = (props: CarouselProps) => {
    const {media, paginator} = props;
    const [activeMedia, setActiveMedia] = React.useState<ResponsiveType<ActiveMediaProps>>(null);

    React.useEffect(()=> {
        if(media.length > 0){
            setActiveMedia({index: 0, id: media[0].id, url: media[0].url, type: media[0].type});
        }
    }, [stableHash(media)])

    const returnMediaFromIndx: (id:number) => ResponsiveActiveMediaProps = React.useCallback((indx)=>{
        if(indx !== -1){
            return {
                index: indx,
                id: media[indx].id,
                url: media[indx].url,
                type:media[indx].type
            }
        }
        return null;
    },[stableHash(media)])

    return <>
        {activeMedia && <div className={"carousel"}>
            <div className={`carousel-inner w-[600px]`}>
                <div  className={`carousel-upper shadow-lg rounded-lg overflow-hidden h-[600px] relative`}>
                    {
                        activeMedia.index > 0 && <CarouselButton direction={"left"}
                                                 media={media}
                                                 activeMedia={activeMedia}
                                                 setActiveMedia={setActiveMedia}
                                                 returnMediaFromIndx={returnMediaFromIndx}/>
                    }
                    <div className={`carousel-middle w-full h-full overflow-hidden`}>
                        <img src={activeMedia.url} alt={""} className={`w-full h-full select-none`}/>
                    </div>
                    {
                        activeMedia.index < media.length - 1 && <CarouselButton direction={"right"}
                                                                media={media}
                                                                activeMedia={activeMedia}
                                                                setActiveMedia={setActiveMedia}
                                                                returnMediaFromIndx={returnMediaFromIndx}/>
                    }
                </div>
                <div className={`carousel-lower`}>
                    <CarouselPaginator media={media}
                                       paginator={paginator}
                                       activeMedia={activeMedia}
                                       setActiveMedia={setActiveMedia}
                                       returnMediaFromIndx={returnMediaFromIndx}
                    />
                </div>
            </div>
        </div>
        }
    </>
}

export default Carousel;