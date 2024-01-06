import { UserEntity } from "../entities";
import { LoginUserDto, RegisterUserDto } from "../dtos";

export abstract class AuthRepository {

  abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>
  abstract login(loginUserDto: LoginUserDto): Promise<UserEntity>

}