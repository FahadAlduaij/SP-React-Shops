import React from "react";
import { Redirect, useParams } from "react-router";
import shopStore from "../stores/shopStore";
import ProductDetails from "./ProductDetails";
import AddProduct from "./AddProduct";

const ShopDetail = () => {
	const { shopSlug } = useParams();
	const shop = shopStore.shops.find((shop) => shop.slug === shopSlug);
	if (!shop) return <Redirect to="/shops" />;

	const productDetails = shop.product.map((product) => (
		<ProductDetails product={product} />
	));

	return (
		<div className=" flex row detail m-3">
			<AddProduct shop={shop} />

			{/* <img className="detail-img" src={shop.image} alt={shop.name} /> */}
			<h2 className="title">{shop.name}</h2>
			{productDetails}
		</div>
	);
};

export default ShopDetail;
