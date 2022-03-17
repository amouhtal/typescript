import { Injectable, NotFoundException, Post } from '@nestjs/common';
//import { map } from 'rxjs';
import { User } from './interface/user';

@Injectable()
export class UserService {
	public users: User [];

	getUsers(): User [] {
		return this.users;
	}
	
	getUser(email: string): User {
		if ( this.users && Array.isArray( this.users) &&  this.users.length > 0)
		{
			const userData = this.users.filter( i => i.email === email);

			if (userData && Array.isArray(userData) && userData.length > 0)
				return userData[0];
		}
		throw new NotFoundException('user not found');
	}

	addUser(user: User): User {
		if (!this.users)
			this.users = [user];
		this.users.push(user);
		return user;
	}
	

	deleteUser(email : string) : User [] {
		const remainingUser = this.users.filter( i => i.email !== email);
		this.users = remainingUser;
		return remainingUser;
	}
}
