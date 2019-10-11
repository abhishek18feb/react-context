import React, {useContext} from 'react';
import {ProductContext} from '../../context/product-contxt';
import ProdctItem from './ProductItem';

const Products = React.memo(props =>{
    const productList = useContext(ProductContext).products;
    console.log(productList);
    return (
        <React.Fragment>
            <h2 style={{textAlign:"center"}}>Product Card</h2>
            {productList.map(product=>(
                <ProdctItem 
                    key={product.id} 
                    id={product.id}
                    title={product.title}
                    decription={product.description}
                    imageUrl={product.imageUrl}
                    price = {product.price}
                    isCartItem={product.isCartItem}
                />
            ))}
            
            
        </React.Fragment>
    )
})

export default Products