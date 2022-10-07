import type {ExportedMediaType, ProductMediaType} from "../../data-types";
import {ResponsiveType, SetStateProps} from "../types";

export type CarouselMedia = Array<ProductMediaType>;

interface CarouselProps {
    media: CarouselMedia;
    paginator: boolean;
}

export type ActiveMediaProps = {
    index: number,
    id: string | number,
    url: string,
    type: ExportedMediaType
}

export type ResponsiveActiveMediaProps = ResponsiveType<ActiveMediaProps>;

export interface CarouselPaginatorProps {
    paginator: boolean;
    media: CarouselMedia;
    activeMedia: ActiveMediaProps;
    setActiveMedia: SetStateProps<ActiveMediaProps>;
    returnMediaFromIndx: (id: number) => ResponsiveActiveMediaProps;
}

export type CarouselButtonDirection = 'left' | 'right';

export interface CarouselButtonProps{
    direction: CarouselButtonDirection,
    media: CarouselMedia;
    activeMedia: ActiveMediaProps;
    setActiveMedia: SetStateProps<ActiveMediaProps>;
    returnMediaFromIndx: (id: number) => ResponsiveActiveMediaProps;
}

export default CarouselProps;