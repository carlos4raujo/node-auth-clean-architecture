import { JwtAdapter } from "../../../config";
import { LoginUserDto } from "../../dtos";
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

interface LoginUserUseCase {
  execute(loginUserDto: LoginUserDto): Promise<UserToken>
}

export class LoginUser implements LoginUserUseCase {

  constructor(
    private readonly authRepository: AuthRepository,
    private readonly signToken: SignTokenFunction = JwtAdapter.generateToken,
  ) {}

  async execute(loginUserDto: LoginUserDto): Promise<UserToken> {

    const user = await this.authRepository.login(loginUserDto)

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