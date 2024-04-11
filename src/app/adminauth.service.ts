import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AdminauthService {
	authenticate(username2: string, password2: string) {
		console.log(username2);
		console.log(password2);
		if (username2 === "admin" && password2 === "admin") {
			sessionStorage.setItem('username2', username2)
			return true;
		} else {
			return false;
		}
	}
	isUserLoggedIn() {
		let user = sessionStorage.getItem('username2')
		console.log(!(user === null))
		return !(user === null)
	}
	logOut() {
		sessionStorage.removeItem('username2')
	}
}
