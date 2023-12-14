import { Controller, OnModuleInit, Inject, Get } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface UserService {
  getUsers({}): Observable<any>;
}

@Controller('protousers')
export class ProtousersController  {
  private userService: UserService;

  constructor(@Inject('USERPROTO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UserService>('UserService');
  }

  @Get()
  async getProtoUsers() {
    return this.client.getService<UserService>('UserService').getUsers(null);
  }
}