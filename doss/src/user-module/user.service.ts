import { Injectable, Post } from '@nestjs/common';
import { map } from 'rxjs';
import { User } from './interface/user';

@Injectable()
export class UserService {
	public users: User []
	getUser(): User [] {
		return this.users;
	}

	addUser(user: User): User {
		this.users.push(user);
		return user;
	}
	

	deleteUser(email : string) : User [] {
		const remainingUser = this.users.filter(i => i.email !== email);
		this.users = remainingUser;
		return remainingUser;
	}
}
