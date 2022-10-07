import React from "react";
//@ts-ignore
import stableHash from "stable-hash";
import {CarouselButtonDirection, CarouselButtonProps} from "../types";

const CarouselButton = ({direction, activeMedia, setActiveMedia, media, returnMediaFromIndx }: CarouselButtonProps) => {
    console.log(direction);

    const onClick = React.useCallback((direction: CarouselButtonDirection)=> {
        return (_: React.MouseEvent<HTMLElement>) => {
            if(direction === 'left'){
                const indx = activeMedia.index - 1;
                if(indx > -1){
                    const returnValue = returnMediaFromIndx(indx);
                    setActiveMedia(returnValue);
                }
            }
            else {
                const indx = activeMedia.index + 1;
                if(indx < media.length){
                    const returnValue = returnMediaFromIndx(indx);
                    setActiveMedia(returnValue);
                }
            }
        }
    },[stableHash(media), activeMedia, setActiveMedia, returnMediaFromIndx])

    return <>
        {/* to fix -- tailwind producing some unwanted ui bug for below line due to dynamic generation of tailwind classes by component
                <div onClick={onClick(direction)} className={`absolute top-[285px] ${direction}-2`}>
         */}
        <div onClick={onClick(direction)} className={`absolute top-[285px] ${direction == "left" ? "left-2": "right-2"}`}>
            <button role={"button"} className={"w-[30px] h-[30px] bg-white rounded-full relative"}>
                <img className={`w-[22px] h-[22px] absolute top-[4px] ${direction == "left" ? "left-[2px]": "right-[3px]"} select-none`} src={`./assets/arrow-${direction}.svg`} alt={""}/>
            </button>
        </div>
    </>;
}

export default React.memo<CarouselButtonProps>(CarouselButton);