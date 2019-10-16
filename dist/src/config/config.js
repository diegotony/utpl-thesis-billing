"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/billing',
    REDIS_URI: process.env.REDIS_URI || 'redis://localhost:6379',
    PORT: process.env.PORT || '3001',
};
//# sourceMappingURL=config.js.map