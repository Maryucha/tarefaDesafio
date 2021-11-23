import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from './create-user.dto';
import { ConflictException } from "@nestjs/common/exceptions";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

  async createUser(
   createUserDto: CreateUserDto
  ): Promise<User> {
    const {email, name, status} = createUserDto;

    let userValid = false;
    let errorMsg = '';

    if(!email){
       userValid = false;
       errorMsg = 'Email invalido'
    }else if(!name){
       userValid = false;
       errorMsg = 'Nome obrigatório'
    }else {
      userValid = true;
    }

    if(userValid){
      const user = this.create();
      user.email = email;
      user.name = name;
      user.status = false; 
      try{
        await user.email;
        await user.name;
        await user.status;
        return user;
      } catch(error){
        throw new ConflictException(errorMsg);
      }
    }else{
      throw new ConflictException(errorMsg);
    }
  }
}