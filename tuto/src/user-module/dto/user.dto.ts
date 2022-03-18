import { IsDefined, IsEmail, isString, IsString } from "class-validator"

export class UserDto {
    @IsString()
    @IsEmail()
    @IsDefined()
    email : string;

    @IsString()
    @IsDefined()
    username : string;
}

export class UserParamsDto {

    @IsString()
    @IsEmail()
    @IsDefined()
    email : string;
}