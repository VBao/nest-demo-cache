import { Controller, Get, Param } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get('/:id')
  async getStudent(@Param('id') id: number): Promise<string> {
    return await this.studentService.getId(+id);
  }
}
