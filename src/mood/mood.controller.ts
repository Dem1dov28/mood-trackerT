import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { MoodService } from './mood.service';
import { CreateMoodDto } from './dto/create-mood.dto';
import { UserId } from 'src/auth/decorators/user-id.decorator';
import { JwtAuthGuard } from 'src/auth/guards/auth.guard';

@Controller('mood')
@UseGuards(JwtAuthGuard)
export class MoodController {
  constructor(private readonly moodService: MoodService) {}

  @Post()
  create(@Body() dto: CreateMoodDto, @UserId() userId: string) {
    return this.moodService.create(dto, userId);
  }

  @Get()
  async getAllMood(@UserId() userId: string) {
    return this.moodService.findAllByUser(userId);
  }
}
