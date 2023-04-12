import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User()
    user.email = email
    user.name = name
    user.created_at = new Date()
    user.updated_at = new Date()

    this.users.push(user)   

    return user
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const findUser = this.users.filter(user => user.id === id)
    if(!findUser) {
      return null
    }

    return findUser[0]
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const findUser = this.users.filter(user => user.email === email)
    if(!findUser) {
      return undefined
    }

    return findUser[0]
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const findUser = this.users.filter(user => user.id === receivedUser.id)
    if(!findUser) {
      throw new Error("User not found!")
    }

    findUser[0].admin = true

    return findUser[0]
  }

  list(): User[] {
    // Complete aqui
    return this.users
  }
}

export { UsersRepository };
