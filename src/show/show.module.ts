import { Module } from '@nestjs/common';
import { ShowService } from './show.service';
import { ShowController } from './show.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from './entities/schedule.entity';
import { Seat } from './entities/seat.entity';
import { Show } from './entities/show.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Show, Schedule, Seat])],
  controllers: [ShowController],
  providers: [ShowService],
})
export class ShowModule {}
