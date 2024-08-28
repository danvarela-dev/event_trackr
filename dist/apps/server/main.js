/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.swaggerConfig = void 0;
const swagger_1 = __webpack_require__(3);
exports.swaggerConfig = new swagger_1.DocumentBuilder()
    .setTitle('Event Tracker API')
    .setVersion('1.0')
    .addServer('http://vps-96efac4c.vps.ovh.ca:3000/', 'Local Development')
    .build();


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseInterceptor = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const rxjs_1 = __webpack_require__(7);
let ResponseInterceptor = class ResponseInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.map)(res => this.responseHandler(res, context)), (0, rxjs_1.catchError)((err) => (0, rxjs_1.throwError)(() => this.errorHandler(err, context))));
    }
    errorHandler(exception, _context) {
        const context = _context.switchToHttp();
        const response = context.getResponse();
        const request = context.getRequest();
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        response.status(status).json({
            status: false,
            statusCode: status,
            path: request.url,
            message: exception.message,
            result: exception,
        });
    }
    responseHandler(res, _context) {
        const context = _context.switchToHttp();
        const response = context.getResponse();
        const request = context.getRequest();
        const statusCode = response.statusCode;
        response.status(statusCode).json({
            status: true,
            statusCode,
            path: request.url,
            result: res,
        });
    }
};
exports.ResponseInterceptor = ResponseInterceptor;
exports.ResponseInterceptor = ResponseInterceptor = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ResponseInterceptor);


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(6);
// eslint-disable-next-line @nx/enforce-module-boundaries
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(9);
const connection_config_1 = __webpack_require__(10);
const auth_module_1 = __webpack_require__(11);
const categories_module_1 = __webpack_require__(38);
const auth_guard_1 = __webpack_require__(42);
const people_module_1 = __webpack_require__(43);
const users_module_1 = __webpack_require__(35);
const genders_module_1 = __webpack_require__(47);
const events_module_1 = __webpack_require__(50);
const vault_module_1 = __webpack_require__(54);
const file_upload_module_1 = __webpack_require__(59);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            genders_module_1.GendersModule,
            typeorm_1.TypeOrmModule.forRoot({ ...connection_config_1.baseConfig }),
            categories_module_1.CategoriesModule,
            events_module_1.EventsModule,
            people_module_1.PeopleModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            vault_module_1.VaultModule,
            file_upload_module_1.FileUploadModule,
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
        ],
    })
], AppModule);


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.baseConfig = void 0;
exports.baseConfig = {
    type: 'mysql',
    host: 'vps-96efac4c.vps.ovh.ca',
    port: 3306,
    username: 'kevin.estrada',
    password: 'Emco2023**',
    database: 'event_trackr_dev',
    synchronize: false,
    autoLoadEntities: true,
};


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const auth_service_1 = __webpack_require__(12);
const auth_controller_1 = __webpack_require__(33);
const jwt_1 = __webpack_require__(13);
const jwt_config_1 = __webpack_require__(34);
const users_module_1 = __webpack_require__(35);
const common_module_1 = __webpack_require__(37);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [auth_service_1.AuthService],
        controllers: [auth_controller_1.AuthController],
        imports: [
            common_module_1.CommonModule,
            users_module_1.UsersModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: jwt_config_1.jwt_secret,
                signOptions: {
                    expiresIn: '7200s',
                },
            }),
        ],
    })
], AuthModule);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(13);
const users_service_1 = __webpack_require__(14);
const encryption_service_1 = __webpack_require__(29);
let AuthService = class AuthService {
    constructor(userService, jwtService, encryptionService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.encryptionService = encryptionService;
    }
    async login(user, pass) {
        const userFound = await this.userService.getUserByUsername(user);
        if (!userFound) {
            throw new common_1.UnauthorizedException('Usuario no encontrado');
        }
        const isPasswordValid = await this.encryptionService.comparePassword(pass, userFound.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Contraseña incorrecta');
        }
        const payload = { sub: userFound.id, username: userFound.username };
        const token = await this.jwtService.signAsync(payload);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...result } = userFound;
        return { ...result, token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof encryption_service_1.EncryptionService !== "undefined" && encryption_service_1.EncryptionService) === "function" ? _c : Object])
], AuthService);


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(9);
const typeorm_2 = __webpack_require__(15);
const users_entity_1 = __webpack_require__(16);
const encryption_service_1 = __webpack_require__(29);
let UsersService = class UsersService {
    constructor(usersRepository, encryptionService) {
        this.usersRepository = usersRepository;
        this.encryptionService = encryptionService;
    }
    async getAllUsers() {
        return await this.usersRepository.find();
    }
    async getUserByUsername(username) {
        return await this.usersRepository.findOne({
            where: {
                username,
            },
            relations: ['role', 'gender'],
        });
    }
    async getUserById(id) {
        return await this.usersRepository.findOne({
            where: {
                id,
            },
            relations: ['role', 'gender'],
        });
    }
    async createUser(user) {
        const userExists = await this.usersRepository.findOne({
            where: {
                username: user.username,
            },
        });
        if (userExists) {
            throw new Error('Este nombre de usuario ya existe.');
        }
        user = {
            ...user,
            photo: `https://avatar.iran.liara.run/public/${user.gender.id === 1 ? 'boy' : 'girl'}?username=[${user.username}]`,
            created_at: new Date(),
            updated_at: new Date(),
            password: await this.encryptionService.hashPassword(user.password),
        };
        return await this.usersRepository.save(user);
    }
    async updateUser(id, updatedUser) {
        await this.usersRepository.update({ id }, updatedUser);
        return this.usersRepository.findOne({
            where: {
                id,
            },
        });
    }
    async deleteUser(id) {
        await this.usersRepository.delete(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(users_entity_1.UsersEntity)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof encryption_service_1.EncryptionService !== "undefined" && encryption_service_1.EncryptionService) === "function" ? _b : Object])
], UsersService);


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersEntity = void 0;
const tslib_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(15);
const shared_1 = __webpack_require__(17);
const roles_entity_1 = __webpack_require__(27);
const genders_entity_1 = __webpack_require__(28);
let UsersEntity = class UsersEntity {
};
exports.UsersEntity = UsersEntity;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], UsersEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UsersEntity.prototype, "username", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UsersEntity.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UsersEntity.prototype, "photo", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UsersEntity.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UsersEntity.prototype, "telephone", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UsersEntity.prototype, "password", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => roles_entity_1.RolesEntity, role => role.id),
    (0, typeorm_1.JoinColumn)({ name: 'id_role' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof shared_1.Role !== "undefined" && shared_1.Role) === "function" ? _a : Object)
], UsersEntity.prototype, "role", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => genders_entity_1.GendersEntity, gender => gender.id),
    (0, typeorm_1.JoinColumn)({ name: 'id_gender' }),
    tslib_1.__metadata("design:type", typeof (_b = typeof shared_1.Gender !== "undefined" && shared_1.Gender) === "function" ? _b : Object)
], UsersEntity.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    tslib_1.__metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UsersEntity.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    tslib_1.__metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], UsersEntity.prototype, "updated_at", void 0);
exports.UsersEntity = UsersEntity = tslib_1.__decorate([
    (0, typeorm_1.Entity)('users')
], UsersEntity);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(6);
tslib_1.__exportStar(__webpack_require__(18), exports);
tslib_1.__exportStar(__webpack_require__(19), exports);
tslib_1.__exportStar(__webpack_require__(20), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);
tslib_1.__exportStar(__webpack_require__(22), exports);
tslib_1.__exportStar(__webpack_require__(23), exports);
tslib_1.__exportStar(__webpack_require__(24), exports);
tslib_1.__exportStar(__webpack_require__(25), exports);
tslib_1.__exportStar(__webpack_require__(26), exports);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesEntity = void 0;
const tslib_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(15);
let RolesEntity = class RolesEntity {
};
exports.RolesEntity = RolesEntity;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], RolesEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], RolesEntity.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], RolesEntity.prototype, "description", void 0);
exports.RolesEntity = RolesEntity = tslib_1.__decorate([
    (0, typeorm_1.Entity)('roles')
], RolesEntity);


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GendersEntity = void 0;
const tslib_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(15);
let GendersEntity = class GendersEntity {
};
exports.GendersEntity = GendersEntity;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], GendersEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], GendersEntity.prototype, "name", void 0);
exports.GendersEntity = GendersEntity = tslib_1.__decorate([
    (0, typeorm_1.Entity)('genders')
], GendersEntity);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EncryptionService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const bcrypt = tslib_1.__importStar(__webpack_require__(30));
const crypto_1 = __webpack_require__(31);
const config = tslib_1.__importStar(__webpack_require__(32));
let EncryptionService = class EncryptionService {
    constructor() {
        this.saltRounds = 10;
        this.encryptionAlgorithm = 'aes-256-cbc';
        this.secretKey = Buffer.from(config.secretKey, 'hex');
        this.iv = Buffer.from(config.iv, 'hex');
    }
    async hashPassword(password) {
        const salt = await bcrypt.genSalt(this.saltRounds);
        return bcrypt.hash(password, salt);
    }
    async comparePassword(password, hash) {
        return bcrypt.compare(password, hash);
    }
    async encryptString(text) {
        try {
            const cipher = (0, crypto_1.createCipheriv)(this.encryptionAlgorithm, this.secretKey, this.iv);
            let encrypted = cipher.update(text, 'utf8', 'hex');
            encrypted += cipher.final('hex');
            return encrypted;
        }
        catch (error) {
            throw new Error('Failed to encrypt string');
        }
    }
    async decryptString(encryptedText) {
        try {
            const decipher = (0, crypto_1.createDecipheriv)(this.encryptionAlgorithm, this.secretKey, this.iv);
            let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            return decrypted;
        }
        catch (error) {
            throw new Error('Failed to decrypt string');
        }
    }
};
exports.EncryptionService = EncryptionService;
exports.EncryptionService = EncryptionService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], EncryptionService);


/***/ }),
/* 30 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 31 */
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.iv = exports.secretKey = void 0;
exports.secretKey = 'b069ade74548c638cdf726197bfba05661760380d4263a9618e0dbf4e9960de4';
exports.iv = 'd83ebe84e14abaa9d7df3f15ecebe1c4';


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const auth_service_1 = __webpack_require__(12);
// eslint-disable-next-line @nx/enforce-module-boundaries
const jwt_config_1 = __webpack_require__(34);
const users_service_1 = __webpack_require__(14);
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    async login(credentials) {
        const { username, password } = credentials;
        return await this.authService.login(username, password);
    }
    async getProfile(req) {
        const username = req.user.username;
        const user = await this.userService.getUserByUsername(username);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...result } = user;
        return result;
    }
};
exports.AuthController = AuthController;
tslib_1.__decorate([
    (0, jwt_config_1.Public)(),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                username: {
                    type: 'string',
                    description: 'The username of the user',
                },
                password: {
                    type: 'string',
                    description: 'The password of the user',
                },
            },
        },
    }),
    (0, common_1.Post)('login'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
tslib_1.__decorate([
    (0, common_1.Get)('profile'),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
exports.AuthController = AuthController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _b : Object])
], AuthController);


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = exports.jwt_secret = void 0;
const common_1 = __webpack_require__(1);
exports.jwt_secret = '3d389a3051558ba0a417f1ce5e35f13aa0d2f6d657428c52325e75b436504b03';
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const users_controller_1 = __webpack_require__(36);
const users_service_1 = __webpack_require__(14);
const roles_entity_1 = __webpack_require__(27);
const users_entity_1 = __webpack_require__(16);
const typeorm_1 = __webpack_require__(9);
const common_module_1 = __webpack_require__(37);
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [common_module_1.CommonModule, typeorm_1.TypeOrmModule.forFeature([users_entity_1.UsersEntity, roles_entity_1.RolesEntity])],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
        exports: [users_service_1.UsersService],
    })
], UsersModule);


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const users_service_1 = __webpack_require__(14);
const users_entity_1 = __webpack_require__(16);
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getAllUsers() {
        return await this.usersService.getAllUsers();
    }
    async getUserById(id) {
        return await this.usersService.getUserById(id);
    }
    async createUser(user) {
        return await this.usersService.createUser(user);
    }
    async updateUser(id, updatedUser) {
        return await this.usersService.updateUser(id, updatedUser);
    }
    async deleteUser(id) {
        await this.usersService.deleteUser(id);
    }
};
exports.UsersController = UsersController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UsersController.prototype, "getAllUsers", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UsersController.prototype, "getUserById", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof users_entity_1.UsersEntity !== "undefined" && users_entity_1.UsersEntity) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UsersController.prototype, "createUser", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, typeof (_f = typeof Partial !== "undefined" && Partial) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], UsersController.prototype, "updateUser", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], UsersController.prototype, "deleteUser", null);
exports.UsersController = UsersController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const encryption_service_1 = __webpack_require__(29);
let CommonModule = class CommonModule {
};
exports.CommonModule = CommonModule;
exports.CommonModule = CommonModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [],
        providers: [encryption_service_1.EncryptionService],
        exports: [encryption_service_1.EncryptionService],
    })
], CommonModule);


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const categories_controller_1 = __webpack_require__(39);
const typeorm_1 = __webpack_require__(9);
const categories_entity_1 = __webpack_require__(41);
const categories_service_1 = __webpack_require__(40);
let CategoriesModule = class CategoriesModule {
};
exports.CategoriesModule = CategoriesModule;
exports.CategoriesModule = CategoriesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([categories_entity_1.CategoriesEntity])],
        controllers: [categories_controller_1.CategoriesController],
        providers: [categories_service_1.CategoriesService],
    })
], CategoriesModule);


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesController = void 0;
const tslib_1 = __webpack_require__(6);
/* eslint-disable @typescript-eslint/no-explicit-any */
const common_1 = __webpack_require__(1);
const categories_service_1 = __webpack_require__(40);
const swagger_1 = __webpack_require__(3);
let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    async getAllCategories() {
        return await this.categoriesService.getAllCategories();
    }
    async getCategoryById(id) {
        return await this.categoriesService.getCategoryById(id);
    }
    async createCategory(event) {
        return await this.categoriesService.createCategory(event.category);
    }
    async updateCategory(id, updatedEvent) {
        return await this.categoriesService.updateCategory(id, updatedEvent);
    }
    async deleteCategory(id) {
        await this.categoriesService.deleteCategory(id);
    }
};
exports.CategoriesController = CategoriesController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], CategoriesController.prototype, "getAllCategories", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CategoriesController.prototype, "getCategoryById", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], CategoriesController.prototype, "createCategory", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, typeof (_e = typeof Partial !== "undefined" && Partial) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], CategoriesController.prototype, "updateCategory", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], CategoriesController.prototype, "deleteCategory", null);
exports.CategoriesController = CategoriesController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Categories'),
    (0, common_1.Controller)('categories'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof categories_service_1.CategoriesService !== "undefined" && categories_service_1.CategoriesService) === "function" ? _a : Object])
], CategoriesController);


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(9);
const typeorm_2 = __webpack_require__(15);
const categories_entity_1 = __webpack_require__(41);
let CategoriesService = class CategoriesService {
    constructor(categoriesEntityRepository) {
        this.categoriesEntityRepository = categoriesEntityRepository;
    }
    async getAllCategories() {
        return await this.categoriesEntityRepository.find();
    }
    async getCategoryById(id) {
        return await this.categoriesEntityRepository.findOne({
            where: {
                id,
            },
        });
    }
    async createCategory(event) {
        return await this.categoriesEntityRepository.save(event);
    }
    async updateCategory(id, updatedEvent) {
        await this.categoriesEntityRepository.update({ id }, updatedEvent);
        return await this.categoriesEntityRepository.findOne({
            where: {
                id,
            },
        });
    }
    async deleteCategory(id) {
        await this.categoriesEntityRepository.delete(id);
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(categories_entity_1.CategoriesEntity)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CategoriesService);


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesEntity = void 0;
const tslib_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(15);
let CategoriesEntity = class CategoriesEntity {
};
exports.CategoriesEntity = CategoriesEntity;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], CategoriesEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], CategoriesEntity.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], CategoriesEntity.prototype, "color", void 0);
exports.CategoriesEntity = CategoriesEntity = tslib_1.__decorate([
    (0, typeorm_1.Entity)('category')
], CategoriesEntity);


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const jwt_1 = __webpack_require__(13);
const jwt_config_1 = __webpack_require__(34);
let AuthGuard = class AuthGuard {
    constructor(jwtService, reflector) {
        this.jwtService = jwtService;
        this.reflector = reflector;
    }
    async canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(jwt_config_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: jwt_config_1.jwt_secret,
            });
            request['user'] = payload;
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _b : Object])
], AuthGuard);


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PeopleModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(9);
const people_controller_1 = __webpack_require__(44);
const people_service_1 = __webpack_require__(45);
const people_entity_1 = __webpack_require__(46);
let PeopleModule = class PeopleModule {
};
exports.PeopleModule = PeopleModule;
exports.PeopleModule = PeopleModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([people_entity_1.PeopleEntity])],
        providers: [people_service_1.PeopleService],
        controllers: [people_controller_1.PeopleController],
    })
], PeopleModule);


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PeopleController = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const people_service_1 = __webpack_require__(45);
const people_entity_1 = __webpack_require__(46);
let PeopleController = class PeopleController {
    constructor(peopleService) {
        this.peopleService = peopleService;
    }
    async getAllPeople() {
        return await this.peopleService.getAllPeople();
    }
    async getPersonById(id) {
        return await this.peopleService.getPersonById(id);
    }
    async createPerson(person) {
        return await this.peopleService.createPerson(person);
    }
    async updatePerson(id, updatedPerson) {
        return await this.peopleService.updatePerson(id, updatedPerson);
    }
    async deletePerson(id) {
        await this.peopleService.deletePerson(id);
    }
};
exports.PeopleController = PeopleController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], PeopleController.prototype, "getAllPeople", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], PeopleController.prototype, "getPersonById", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof people_entity_1.PeopleEntity !== "undefined" && people_entity_1.PeopleEntity) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], PeopleController.prototype, "createPerson", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, typeof (_f = typeof Partial !== "undefined" && Partial) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], PeopleController.prototype, "updatePerson", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], PeopleController.prototype, "deletePerson", null);
exports.PeopleController = PeopleController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('People'),
    (0, common_1.Controller)('people'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof people_service_1.PeopleService !== "undefined" && people_service_1.PeopleService) === "function" ? _a : Object])
], PeopleController);


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PeopleService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(15);
const typeorm_2 = __webpack_require__(9);
const people_entity_1 = __webpack_require__(46);
let PeopleService = class PeopleService {
    constructor(peopleRepository) {
        this.peopleRepository = peopleRepository;
    }
    async getAllPeople() {
        return await this.peopleRepository.find();
    }
    async getPersonById(id) {
        return await this.peopleRepository.findOne({
            where: {
                id,
            },
        });
    }
    async createPerson(person) {
        return await this.peopleRepository.save(person);
    }
    async updatePerson(id, updatedPerson) {
        await this.peopleRepository.update({ id }, updatedPerson);
        return this.peopleRepository.findOne({
            where: {
                id,
            },
        });
    }
    async deletePerson(id) {
        return await this.peopleRepository.delete(id);
    }
};
exports.PeopleService = PeopleService;
exports.PeopleService = PeopleService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_2.InjectRepository)(people_entity_1.PeopleEntity)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], PeopleService);


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PeopleEntity = void 0;
const tslib_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(15);
let PeopleEntity = class PeopleEntity {
};
exports.PeopleEntity = PeopleEntity;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], PeopleEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], PeopleEntity.prototype, "first_name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], PeopleEntity.prototype, "last_name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], PeopleEntity.prototype, "birth_date", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], PeopleEntity.prototype, "death_date", void 0);
exports.PeopleEntity = PeopleEntity = tslib_1.__decorate([
    (0, typeorm_1.Entity)('people')
], PeopleEntity);


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GendersModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const genders_controller_1 = __webpack_require__(48);
const genders_service_1 = __webpack_require__(49);
const typeorm_1 = __webpack_require__(9);
const genders_entity_1 = __webpack_require__(28);
let GendersModule = class GendersModule {
};
exports.GendersModule = GendersModule;
exports.GendersModule = GendersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([genders_entity_1.GendersEntity])],
        controllers: [genders_controller_1.GendersController],
        providers: [genders_service_1.GendersService],
        exports: [],
    })
], GendersModule);


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GendersController = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const genders_service_1 = __webpack_require__(49);
let GendersController = class GendersController {
    constructor(gendersService) {
        this.gendersService = gendersService;
    }
    async findAll() {
        return await this.gendersService.findAll();
    }
};
exports.GendersController = GendersController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], GendersController.prototype, "findAll", null);
exports.GendersController = GendersController = tslib_1.__decorate([
    (0, common_1.Controller)('genderss'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof genders_service_1.GendersService !== "undefined" && genders_service_1.GendersService) === "function" ? _a : Object])
], GendersController);


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GendersService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(9);
const typeorm_2 = __webpack_require__(15);
const genders_entity_1 = __webpack_require__(28);
let GendersService = class GendersService {
    constructor(genderRepository) {
        this.genderRepository = genderRepository;
    }
    async findAll() {
        return await this.genderRepository.find();
    }
};
exports.GendersService = GendersService;
tslib_1.__decorate([
    (0, common_1.Get)('genders'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], GendersService.prototype, "findAll", null);
exports.GendersService = GendersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(genders_entity_1.GendersEntity)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], GendersService);


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventsModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(9);
const events_service_1 = __webpack_require__(51);
const events_controller_1 = __webpack_require__(53);
const events_entity_1 = __webpack_require__(52);
let EventsModule = class EventsModule {
};
exports.EventsModule = EventsModule;
exports.EventsModule = EventsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([events_entity_1.EventsEntity])],
        controllers: [events_controller_1.EventsController],
        providers: [events_service_1.EventsService],
    })
], EventsModule);


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventsService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(9);
const typeorm_2 = __webpack_require__(15);
const events_entity_1 = __webpack_require__(52);
let EventsService = class EventsService {
    constructor(eventsRepository) {
        this.eventsRepository = eventsRepository;
    }
    async getAllEvents() {
        return await this.eventsRepository.find({
            relations: ['category', 'createdBy', 'updatedBy'],
        });
    }
    async getEventById(id) {
        return await this.eventsRepository.findOne({
            where: {
                id,
            },
        });
    }
    async createEvent(event) {
        try {
            event = {
                ...event,
                startDate: new Date(event.startDate),
                ...(event.endDate ? { end_date: new Date(event.endDate) } : {}),
            };
            await this.eventsRepository.save(event);
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async updateEvent(id, updatedEvent) {
        try {
            await this.eventsRepository.update({ id }, updatedEvent); // Pass criteria as an object
            return await this.eventsRepository.findOne({
                where: {
                    id,
                },
            });
        }
        catch (error) {
            return undefined;
        }
    }
    async deleteEvent(id) {
        await this.eventsRepository.delete(id);
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(events_entity_1.EventsEntity)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], EventsService);


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventsEntity = void 0;
const tslib_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(15);
const users_entity_1 = __webpack_require__(16);
const categories_entity_1 = __webpack_require__(41);
let EventsEntity = class EventsEntity {
};
exports.EventsEntity = EventsEntity;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], EventsEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    tslib_1.__metadata("design:type", String)
], EventsEntity.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: 'start_date', type: 'datetime' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], EventsEntity.prototype, "startDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    tslib_1.__metadata("design:type", String)
], EventsEntity.prototype, "notes", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    tslib_1.__metadata("design:type", String)
], EventsEntity.prototype, "source", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    tslib_1.__metadata("design:type", String)
], EventsEntity.prototype, "frequency", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: 'end_date', type: 'datetime', nullable: true }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], EventsEntity.prototype, "endDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    tslib_1.__metadata("design:type", Number)
], EventsEntity.prototype, "occurrences", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => categories_entity_1.CategoriesEntity, category => category.id),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    tslib_1.__metadata("design:type", typeof (_c = typeof categories_entity_1.CategoriesEntity !== "undefined" && categories_entity_1.CategoriesEntity) === "function" ? _c : Object)
], EventsEntity.prototype, "category", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity, user => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    tslib_1.__metadata("design:type", typeof (_d = typeof users_entity_1.UsersEntity !== "undefined" && users_entity_1.UsersEntity) === "function" ? _d : Object)
], EventsEntity.prototype, "createdBy", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity, user => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    tslib_1.__metadata("design:type", typeof (_e = typeof users_entity_1.UsersEntity !== "undefined" && users_entity_1.UsersEntity) === "function" ? _e : Object)
], EventsEntity.prototype, "updatedBy", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
        name: 'created_at',
    }),
    tslib_1.__metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], EventsEntity.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
        name: 'updated_at',
    }),
    tslib_1.__metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], EventsEntity.prototype, "updatedAt", void 0);
exports.EventsEntity = EventsEntity = tslib_1.__decorate([
    (0, typeorm_1.Entity)('events')
], EventsEntity);


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventsController = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const events_service_1 = __webpack_require__(51);
const swagger_1 = __webpack_require__(3);
const shared_1 = __webpack_require__(17);
let EventsController = class EventsController {
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    async getAllEvents() {
        return await this.eventsService.getAllEvents();
    }
    async getEventById(id) {
        return await this.eventsService.getEventById(id);
    }
    async createEvent(event) {
        return await this.eventsService.createEvent(event.event);
    }
    async updateEvent(id, updatedEvent) {
        return await this.eventsService.updateEvent(id.id, updatedEvent);
    }
    async deleteEvent(id) {
        return await this.eventsService.deleteEvent(id);
    }
};
exports.EventsController = EventsController;
tslib_1.__decorate([
    (0, common_1.Get)(':time'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], EventsController.prototype, "getAllEvents", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], EventsController.prototype, "getEventById", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventsController.prototype, "createEvent", null);
tslib_1.__decorate([
    (0, common_1.Patch)(),
    tslib_1.__param(0, (0, common_1.Query)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_b = typeof shared_1.Events !== "undefined" && shared_1.Events) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventsController.prototype, "updateEvent", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], EventsController.prototype, "deleteEvent", null);
exports.EventsController = EventsController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Events'),
    (0, common_1.Controller)('events'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof events_service_1.EventsService !== "undefined" && events_service_1.EventsService) === "function" ? _a : Object])
], EventsController);


/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VaultModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const vault_controller_1 = __webpack_require__(55);
const vault_service_1 = __webpack_require__(56);
const common_module_1 = __webpack_require__(37);
const typeorm_1 = __webpack_require__(9);
const vault_entity_1 = __webpack_require__(57);
const vault_category_entity_1 = __webpack_require__(58);
let VaultModule = class VaultModule {
};
exports.VaultModule = VaultModule;
exports.VaultModule = VaultModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            common_module_1.CommonModule,
            typeorm_1.TypeOrmModule.forFeature([vault_entity_1.VaultEntity, vault_category_entity_1.VaultCategoryEntity]),
        ],
        controllers: [vault_controller_1.VaultController],
        providers: [vault_service_1.VaultService],
        exports: [],
    })
], VaultModule);


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VaultController = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const vault_service_1 = __webpack_require__(56);
const shared_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(3);
let VaultController = class VaultController {
    constructor(vaultService) {
        this.vaultService = vaultService;
    }
    async create(vault) {
        return await this.vaultService.createVault(vault);
    }
    async findAll() {
        return await this.vaultService.getAllVault();
    }
    async findAllCategories() {
        return await this.vaultService.getAllVaultCategories();
    }
    async findOne(id) {
        return await this.vaultService.findById(+id);
    }
    async update(id, vault) {
        return await this.vaultService.updateVault(+id, vault);
    }
    async remove(id) {
        return await this.vaultService.deleteVault(+id);
    }
};
exports.VaultController = VaultController;
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof shared_1.Vault !== "undefined" && shared_1.Vault) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VaultController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], VaultController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)('categories'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], VaultController.prototype, "findAllCategories", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], VaultController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_c = typeof shared_1.Vault !== "undefined" && shared_1.Vault) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VaultController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], VaultController.prototype, "remove", null);
exports.VaultController = VaultController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Vault'),
    (0, common_1.Controller)('vault'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof vault_service_1.VaultService !== "undefined" && vault_service_1.VaultService) === "function" ? _a : Object])
], VaultController);


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VaultService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(9);
const vault_entity_1 = __webpack_require__(57);
const typeorm_2 = __webpack_require__(15);
const encryption_service_1 = __webpack_require__(29);
const vault_category_entity_1 = __webpack_require__(58);
let VaultService = class VaultService {
    constructor(vaultRepository, vaultCategoryRepository, encryptionService) {
        this.vaultRepository = vaultRepository;
        this.vaultCategoryRepository = vaultCategoryRepository;
        this.encryptionService = encryptionService;
    }
    async createVault(vault) {
        const newVault = {
            ...vault,
            password: await this.encryptionService.encryptString(vault.password),
        };
        return await this.vaultRepository.save(newVault);
    }
    async getAllVault() {
        return await this.vaultRepository.find({
            select: [
                'id',
                'name',
                'username',
                'email',
                'description',
                'uri',
                'created_at',
                'updated_at',
            ],
            relations: ['vaultCategory'],
            order: {
                id: 'DESC',
            },
        });
    }
    async getAllVaultCategories() {
        return await this.vaultCategoryRepository.find();
    }
    async findById(id) {
        const result = await this.vaultRepository.findOne({
            where: {
                id,
            },
            select: [
                'id',
                'name',
                'username',
                'email',
                'description',
                'password',
                'uri',
                'created_at',
                'updated_at',
            ],
            relations: ['vaultCategory'],
        });
        return result
            ? {
                ...result,
                password: await this.encryptionService.decryptString(result.password),
            }
            : null;
    }
    async updateVault(id, newVault) {
        const vault = await this.vaultRepository.findOne({
            where: {
                id,
            },
            relations: ['vaultCategory'],
        });
        const updatedVault = {
            ...vault,
            ...newVault,
        };
        await this.vaultRepository.update({ id }, updatedVault);
        return updatedVault;
    }
    async deleteVault(id) {
        await this.vaultRepository.delete(id);
        return this.vaultRepository.find();
    }
};
exports.VaultService = VaultService;
exports.VaultService = VaultService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(vault_entity_1.VaultEntity)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(vault_category_entity_1.VaultCategoryEntity)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof encryption_service_1.EncryptionService !== "undefined" && encryption_service_1.EncryptionService) === "function" ? _c : Object])
], VaultService);


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VaultEntity = void 0;
const tslib_1 = __webpack_require__(6);
const vault_category_entity_1 = __webpack_require__(58);
const typeorm_1 = __webpack_require__(15);
let VaultEntity = class VaultEntity {
};
exports.VaultEntity = VaultEntity;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], VaultEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], VaultEntity.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], VaultEntity.prototype, "username", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], VaultEntity.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], VaultEntity.prototype, "password", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], VaultEntity.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], VaultEntity.prototype, "uri", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], VaultEntity.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], VaultEntity.prototype, "updated_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => vault_category_entity_1.VaultCategoryEntity, vaultCategory => vaultCategory.id),
    (0, typeorm_1.JoinColumn)({ name: 'id_vault_category' }),
    tslib_1.__metadata("design:type", typeof (_c = typeof vault_category_entity_1.VaultCategoryEntity !== "undefined" && vault_category_entity_1.VaultCategoryEntity) === "function" ? _c : Object)
], VaultEntity.prototype, "vaultCategory", void 0);
exports.VaultEntity = VaultEntity = tslib_1.__decorate([
    (0, typeorm_1.Entity)('vault')
], VaultEntity);


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VaultCategoryEntity = void 0;
const tslib_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(15);
let VaultCategoryEntity = class VaultCategoryEntity {
};
exports.VaultCategoryEntity = VaultCategoryEntity;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], VaultCategoryEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], VaultCategoryEntity.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], VaultCategoryEntity.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], VaultCategoryEntity.prototype, "image", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], VaultCategoryEntity.prototype, "icon", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], VaultCategoryEntity.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], VaultCategoryEntity.prototype, "updated_at", void 0);
exports.VaultCategoryEntity = VaultCategoryEntity = tslib_1.__decorate([
    (0, typeorm_1.Entity)('vault_category')
], VaultCategoryEntity);


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileUploadModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const file_upload_service_1 = __webpack_require__(60);
const file_upload_controller_1 = __webpack_require__(61);
let FileUploadModule = class FileUploadModule {
};
exports.FileUploadModule = FileUploadModule;
exports.FileUploadModule = FileUploadModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [file_upload_service_1.FileUploadService],
        controllers: [file_upload_controller_1.FileUploadController],
    })
], FileUploadModule);


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileUploadService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
let FileUploadService = class FileUploadService {
};
exports.FileUploadService = FileUploadService;
exports.FileUploadService = FileUploadService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FileUploadService);


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileUploadController = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
let FileUploadController = class FileUploadController {
};
exports.FileUploadController = FileUploadController;
exports.FileUploadController = FileUploadController = tslib_1.__decorate([
    (0, common_1.Controller)('file-upload')
], FileUploadController);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(3);
const swagger_config_1 = __webpack_require__(4);
const response_interceptor_service_1 = __webpack_require__(5);
const app_module_1 = __webpack_require__(8);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    app.useGlobalInterceptors(new response_interceptor_service_1.ResponseInterceptor());
    const port = process.env['PORT'] || 3000;
    const document = swagger_1.SwaggerModule.createDocument(app, swagger_config_1.swaggerConfig);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map