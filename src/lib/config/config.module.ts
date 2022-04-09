import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { app, database, jwt, mail } from "./configs";
import { validationSchema } from "./validate.config";

@Global()
@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: [`env/.env.${process.env.NODE_ENV}`],
			load: [app, jwt, database, mail],
			cache: true,
			isGlobal: true,
			expandVariables: true,
			validationSchema: validationSchema,
		}),
	],
	providers: [ConfigService],
	exports: [ConfigService],
})
export class NestConfigModule {}
