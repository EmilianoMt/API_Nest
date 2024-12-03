import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,   
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: +process.env.PORT_DB,
      username: "postgres",
      password: process.env.PASS,
      database: process.env.NAME,
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),],
  controllers: [],
  providers: [],
})
export class AppModule {}