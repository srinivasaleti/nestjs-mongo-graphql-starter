import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersResolver } from './order.resolver';
import { Order } from './order.model';
import { OrderSchema } from './order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],

  providers: [OrdersResolver],
})
export class OrdersModule {}
