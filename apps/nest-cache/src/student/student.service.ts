import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  async getId(arg0: number): Promise<string> {
    return `${arg0}`;
  }
}
