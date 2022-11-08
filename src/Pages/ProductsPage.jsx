import React, {useEffect} from 'react';
import Products from "../Components/Products";
import Search from "../Components/Search";
import Category from "../Components/Category";
import {useDispatch, useSelector} from "react-redux";
import {handleInitialData} from "../Actions/products";
import Loading from "../Components/Loading";

const Clothes = [
    { id: 1, category: 'HOODIE', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'HOODIE', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'HOODIE', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'SVITSHOT', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'T-SHIRTS', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
]
const ProductsPage = () => {
    const products = useSelector((state) => state.products)
    return (
    <div className='productsPage'>
        <Search/>
        <Category Clothes={products}/>
        <div className='Row'>
            <Products Clothes={products}/>
        </div>
    </div>
    );
};

export default ProductsPage;