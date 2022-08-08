import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiClientsService } from '../api-clients/api-clients.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly apiClientsService: ApiClientsService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.apiClientsService.validate(request.headers.appkey, request.headers.apptoken);
  }
}