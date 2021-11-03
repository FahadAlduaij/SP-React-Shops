import React from "react";
import { Redirect, useParams } from "react-router";
import shopStore from "../stores/shopStore";
import ProductList from "./ProductList";

const ShopDetail = () => {
	const { shopSlug } = useParams();
	const shop = shopStore.shops.find((shop) => shop.slug === shopSlug);
	if (!shop) return <Redirect to="/shops" />;



	return (
		<div className=" flex row detail m-3">
			<h2 className="title">{shop.name}</h2>
			<img className="detail-img" src={shop.image} alt={shop.name} />
			<ProductList products={shop.product} />
		</div>
	);
};

export default ShopDetail;
