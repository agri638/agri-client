import React from "react";
import Carousel from "../carousel/index";
import {productData} from "../../data";
import IProductType, { ProductId} from "../../data-types";

const ProductDetails = ({id: productId}: {id: ProductId} ) => {
    const [product, setProduct] = React.useState<IProductType>(null);

    React.useEffect(()=>{
        const findProductById = (id: ProductId) => {
            return productData.find(product => product.id === id);
        }
        let _product: IProductType | null | undefined = findProductById(productId);
        setProduct(_product);
    }, [productId]);

    return <>
        {product && <React.Fragment>
            <div className={`px-12 py-2`}>
                <Carousel media={product.media} paginator={true}/>
            </div>
    </React.Fragment>}</>;
}

export default ProductDetails;