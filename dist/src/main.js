"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("./config/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(helmet());
    app.enableCors();
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
    }));
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Billing api-rest')
        .setDescription('The billing API description')
        .setVersion('1.0')
        .addTag('billing')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(config_1.default.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map