import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  // constructor() {}

  @Get()
  getUser(): string {
    return 'Hello from Getuser';
  }

  @Post()
  postUser() : string {
    return 'Hello from Postuser'
  }
}
