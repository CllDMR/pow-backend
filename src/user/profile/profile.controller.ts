import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileService } from './profile.service';

@Controller('users/:userId/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  findOne(@Param('userId') userId: string) {
    return this.profileService.findOne({ userId });
  }

  @Patch()
  update(
    @Param('userId') userId: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.profileService.update({
      where: {
        userId,
      },
      data: updateProfileDto,
    });
  }
}
