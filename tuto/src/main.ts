import { ConsoleLogger, ValidationPipe } from '@nestjs/common';
import { NestApplicationContextOptions } from '@nestjs/common/interfaces/nest-application-context-options.interface';
import { NestFactory } from '@nestjs/core';
import { appendFile } from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();


// nestjs = typescript javascript

// app.post("localhost:8000/auth",(res, req)=>{
//   Console.log(req);

//   res.send();
// })


// Axios.post("localhost:8000/auth",{Id}).then((res)=>{

// })