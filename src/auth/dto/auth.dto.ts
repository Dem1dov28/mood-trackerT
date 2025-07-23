import { ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
  @ApiProperty({
    description: 'JWT access token',
    example: 'eyHDHDJSJKwwkDKDKEK6jxjusjsk...',
  })
  accessToken: string;
}
