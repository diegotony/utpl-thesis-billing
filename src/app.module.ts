import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TerminusOptionsService } from './services/terminus-options/terminus-options.service';
import config from './config/config';
import { TerminusModule } from '@nestjs/terminus';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://' + config.MONGO_HOST + '/' + config.MONGO_DB,
      { useNewUrlParser: true },
    ),
    // TerminusModule.forRootAsync({useClass:TerminusOptionsService}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
