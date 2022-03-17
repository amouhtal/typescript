import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { User } from './interface/user';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // HTTP GET /user
  @Get()
  getUsers(): User[] {
	//	console.log("log :" );

    return this.userService.getUsers();
  }

  @Get('/:email')
  getUser(@Param('email') email : string): User {
		//console.log("log :", email );

    return this.userService.getUser(email);
  }
  @Post()
  postUser(@Body() user: User):User {

		// console.log("log : " ,user.username);
		// console.log("log : " ,user.email);

    return this.userService.addUser(user);
  }

  @Delete('/:email')
  deleteUser(@Param('email') email: string) :User [] {
    return this.userService.deleteUser(email);
  }
}
