import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './events/events.controller';
import { Event } from './events/Event.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'example',
      database: 'nest-events',
      entities: [Event],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Event]),
  ],
  controllers: [AppController, EventsController],
  providers: [AppService],
})
export class AppModule {}
