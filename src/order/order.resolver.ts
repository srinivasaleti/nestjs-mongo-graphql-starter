import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Order } from './order.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderInput } from './order.schema';

@Resolver((of) => Order)
export class OrdersResolver {
  constructor(
    @InjectModel(Order.name) private orderMongoModel: Model<Order>,
  ) {}

  @Query((returns) => [Order])
  async orders(): Promise<Order[]> {
    return this.orderMongoModel.find().exec();
  }

  @Query((returns) => Order)
  async order(@Args('id', { type: () => String }) id: string) {
    return this.orderMongoModel.findById(id).exec();
  }

  @Mutation((returns) => Order)
  async createOrder(@Args('order') orderInput: OrderInput): Promise<Order> {
    const createdOrder = new this.orderMongoModel(orderInput);
    return createdOrder.save();
  }
}
