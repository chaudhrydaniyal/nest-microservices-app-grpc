import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('')
export class UsersController {
    @GrpcMethod('UserService', 'getUsers')
    getUsers() {
        return {
            users: [
                {
                    id: 1,
                    name: 'John',
                },
                {
                    id: 2,
                    name: 'Roger',
                },
                {
                    id: 3,
                    name: "Ali",
                    field: "newField"
                }
            ],
        };
    }
}