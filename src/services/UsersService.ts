import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositorys/UsersRepository";

interface IUserCreate {
  email: string;
}

class UsersServices {
  async create({ email }: IUserCreate) {
    const usersRepository = getCustomRepository(UsersRepository);

    const userExists = await usersRepository.findOne({
      email,
    });

    if (userExists) {
      return userExists;
    }

    const user = usersRepository.create({
      email,
    });

    await usersRepository.save(user);
    return user;
  }
}

export { UsersServices };
