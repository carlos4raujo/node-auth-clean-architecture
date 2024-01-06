import { BcryptAdapter } from "../../config";
import { UserModel } from "../../data";
import { AuthDatasource, CustomError, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain";
import { UserMapper } from "../mappers";

type HashFunction = (password: string) => string
type CompareFunction = (password: string, hashed: string) => boolean

export class AuthDatasourceImpl implements AuthDatasource {

  constructor(
    private readonly hashPassword: HashFunction = BcryptAdapter.hash,
    private readonly comparePassword: CompareFunction = BcryptAdapter.compare
  ) {}
  
  async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
    const { email, password } = loginUserDto

    try {

      const user = await UserModel.findOne({ email })

      if(!user) throw CustomError.badRequest("User doesn't exists")

      const isMatching = this.comparePassword(password, user.password)

      if(!isMatching) throw CustomError.badRequest('Wrong password')

      return UserMapper.userEntityFromObject(user)

    }catch(error) {

      if(error instanceof CustomError) {
        throw error
      }

      throw CustomError.internalError()

    }

  }

  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { email, name, password } = registerUserDto

    try {

      const exists = await UserModel.findOne({ email })

      if(exists) throw CustomError.badRequest('User already exists')

      const user = await UserModel.create({
        name: name,
        email: email,
        password: this.hashPassword(password),
      })

      await user.save()

      return UserMapper.userEntityFromObject(user)

    } catch(error) {

      if(error instanceof CustomError) {
        throw error
      }

      throw CustomError.internalError()

    }

  }
}