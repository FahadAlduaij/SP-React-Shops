import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ShopStore {
	constructor() {
		makeAutoObservable(this);
		// this will turn our class into a mobx store and all components can observe the changes that happen in the store
	}
	shops = [];

	fetchShops = async () => {
		try {
			const response = await instance.get("/shops");
			this.shops = response.data;
		} catch (error) {
			console.log("ShopStore -> fetchShops -> error", error);
		}
	};

	createShop = async (newShop) => {
		try {
			const formData = new FormData();
			for (const key in newShop) {
				formData.append(key, newShop[key]);
			}
			const response = await instance.post("/shops", formData);
			this.shops.push(response.data);
		} catch (error) {
			console.log(
				"🚀 ~ file: shopStore.js ~ line 16 ~ ShopStore ~ createShop= ~ error",
				error
			);
		}
	};

	createProduct = async (newProduct, shopID) => {
		try {
			const formData = new FormData();
			for (const key in newProduct) {
				formData.append(key, newProduct[key]);
			}
			const response = await instance.post(
				`/shops/${shopID}/products`,
				formData
			);
			const shop = this.shops.find((shop) => shop._id === shopID);
			shop.product.push(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	deleteProduct = async (product, shopID) => {
		try {
			await instance.delete(`/products/${product._id}`);
			const shop = this.shops.find((shop) => shop._id === shopID);
			shop.product = shop.product.filter(
				(_product) => _product._id !== product._id
			);
			console.log(this.shops);
		} catch (error) {
			console.log(error);
		}
	};
}

const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;
