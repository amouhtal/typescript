import { Body, Controller, Get, Param, Post, Delete, ValidationPipe, UsePipes, ParseIntPipe, Query, ParseBoolPipe } from '@nestjs/common';
import { UserDto, UserParamsDto } from './dto/user.dto';
import { User } from './interface/user';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // HTTP GET /user
  @Get()
  getUsers(
    @Param('id', ParseIntPipe) id : number,
    @Query('sort', ParseBoolPipe) sort : boolean,
    @Body() data: UserDto
  ): User[] {
	//	console.log("log :" );

    return this.userService.getUsers();
  }

  @Get('/:email')
  getUser(@Param() params : UserParamsDto): User {
		//console.log("log :", email );

    return this.userService.getUser(params.email);
  }
  
  @Post()
  @UsePipes(new ValidationPipe())
  postUser(@Body() user: UserDto):User {

		// console.log("log : " ,user.username);
		// console.log("log : " ,user.email);

    return this.userService.addUser(user);
  }

  @Delete('/:email')
  deleteUser(@Param() params: UserParamsDto) :User [] {
    return this.userService.deleteUser(params.email);
  }
}
