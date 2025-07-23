import {
  IsInt,
  IsISO8601,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateMoodDto {
  @IsInt()
  @Min(1)
  @Max(10)
  mood: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsISO8601()
  customDate: string;
}
