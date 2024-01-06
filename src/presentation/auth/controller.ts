import { Request, Response } from "express"
import { AuthRepository, CustomError, RegisterUser, RegisterUserDto, LoginUser, LoginUserDto } from "../../domain"
import { JwtAdapter } from "../../config"
import { UserModel } from "../../data"

export class AuthController {

  constructor(
    private readonly authRepository: AuthRepository,
  ) {}

  private handleError = (error: unknown, res: Response) => {
    if(error instanceof CustomError) return res.status(error.statusCode).json({ error: error.message })

    console.log(error)

    return res.status(500).json({ error: 'Internal server error' })
  }

  registerUser = (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body)

    if(error) return res.status(400).json({ error })
    
    return new RegisterUser(this.authRepository)
    .execute(registerUserDto!)
    .then(data => res.json(data))
    .catch(error => this.handleError(error, res))
  }
  
  loginUser = (req: Request, res: Response) => {
    const [error, loginUserDto] = LoginUserDto.signIn(req.body)
    
    if(error) return res.status(400).json({ error })

    return new LoginUser(this.authRepository)
      .execute(loginUserDto!)
      .then(data => res.json(data))
      .catch(error => this.handleError(error, res))

  }

  getUsers = (req: Request, res: Response) => {
    UserModel.find()
    .then(users => res.json({user: req.body.user}))
    .catch(() => res.status(500).json({ message: 'Internal server error' }))
  }
}