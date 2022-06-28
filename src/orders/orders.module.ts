import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersResolver } from './orders.resolver';
import { Order } from './orders.model';
import { OrderSchema } from './orders.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],

  providers: [OrdersResolver],
})
export class OrdersModule {}
