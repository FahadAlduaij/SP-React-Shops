import decode from "jwt-decode";
import { action, makeObservable, observable } from "mobx";
import instance from "./instance";

class UserData {
	constructor() {
		makeObservable(this, {
			user: observable,
			signed: observable,
			signIn: action,
			signOut: action,
		});
	}

	user = null;
	signed = false;

	setUser = async (token) => {
		try {
			localStorage.setItem("myToken", token);
			instance.defaults.headers.common.Authorization = `Bearer ${token}`;
			this.user = decode(token);
		} catch (error) {
			console.log(error);
		}
	};

	signIn = async (userInfo) => {
		try {
			const res = await instance.post("/signin", userInfo);
			this.setUser(res.data.token);
			this.signed = true;
		} catch (error) {
			console.log(error);
		}
	};

	signOut = () => {
		delete instance.defaults.headers.common.Authorization;
		localStorage.removeItem("myToken");
		this.user = null;
		this.signed = false;
	};

	checkMyToken = () => {
		const token = localStorage.getItem("myToken");
		if (token) {
			let tempUser = decode(token);
			if (tempUser.exp >= Date.now()) {
				this.setUser(token);
			} else {
				this.signOut();
			}
		}
	};
}

const userData = new UserData();
userData.checkMyToken();
export default userData;
