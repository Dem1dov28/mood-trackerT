import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMoodDto } from './dto/create-mood.dto';
import { UserId } from 'src/auth/decorators/user-id.decorator';

@Injectable()
export class MoodService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateMoodDto, userId: string) {
    return this.prisma.mood.create({
      data: {
        mood: dto.mood,
        description: dto.description,
        customDate: new Date(dto.customDate),
        userId: userId,
      },
    });
  }

  async findAllByUser(userId: string) {
    return this.prisma.mood.findMany({
      where: { userId },
      orderBy: { customDate: 'desc' },
    });
  }
}
