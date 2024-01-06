import { JwtAdapter } from "../../../config";
import { RegisterUserDto } from "../../dtos";
import { CustomError } from "../../errors";
import { AuthRepository } from "../../repositories";

interface UserToken {
  token: string,
  user: {
    id: string,
    name: string,
    email: string
  }
}

type SignTokenFunction = (payload: Object, duration?: string) => Promise<string | null>

interface RegisterUserUseCase {
  execute(registerUserDto: RegisterUserDto): Promise<UserToken>
}

export class RegisterUser implements RegisterUserUseCase {

  constructor(
    private readonly authRepository: AuthRepository,
    private readonly signToken: SignTokenFunction = JwtAdapter.generateToken,
  ) {}

  async execute(registerUserDto: RegisterUserDto): Promise<UserToken> {

    const user = await this.authRepository.register(registerUserDto)

    const token = await this.signToken({ id: user.id }, '2h')

    if(!token) throw CustomError.internalError()

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      }
    }
  }

}