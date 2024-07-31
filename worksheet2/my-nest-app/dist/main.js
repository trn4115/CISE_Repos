"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
async function bootstrap() {
    dotenv.config();
    console.log(`PORT from .env: ${process.env.PORT}`);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const PORT = process.env.PORT || 3000;
    await app.listen(PORT);
    console.log(`Server is running on http://localhost:${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map