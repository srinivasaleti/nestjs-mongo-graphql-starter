import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { OrdersModule } from './orders/orders.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    OrdersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI), //drive it from env
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      transformAutoSchemaFile: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
  ],
})
export class AppModule {}
