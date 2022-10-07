import type {ResponsiveType} from "./components/types";

export type ExportedMediaType = 'jpg' | 'jpeg' | 'png' | 'svg' | 'mp4';

export type ProductId = number | string

export type CurrencyType = 'INR' | 'USD';

export interface ProductMediaType{
    id: ProductId,
    url: string
    type: ExportedMediaType
}

export interface ProductType {
    id: ProductId,
    name: string;
    discount?: number;
    currency: CurrencyType;
    price: number;
    ratings?: number;
    totalRatings?:number;
    answeredQuestions?: number;
    media: ProductMediaType[];
}

type IProductType = ResponsiveType<ProductType>;

export default IProductType;