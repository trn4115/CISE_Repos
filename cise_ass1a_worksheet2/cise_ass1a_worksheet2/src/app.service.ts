import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Contemporary Issues in Software Engineering 2024!!!';
  }
}
