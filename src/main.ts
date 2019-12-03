import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import config from './config/config';
import { Transport } from '@nestjs/microservices';


async function bootstrap() {
  
  const redis = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: 'redis://localhost:6379',

    }
  });
  redis.listen(() => console.log('Billing-Microservice is listening'));
  
  
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Billing api-rest')
    .setDescription('The billing API description')
    .setVersion('1.0')
    .addTag('billing')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger/billing', app, document);

  await app.listen(config.PORT);
}
bootstrap();
