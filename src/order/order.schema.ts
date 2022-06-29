import { InputType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

@InputType()
@Schema({ collection: 'orders' })
export class OrderInput {
  @Field()
  @Prop({ required: true })
  status: string;
}

export type OrderDocument = OrderInput & Document;
export const OrderSchema = SchemaFactory.createForClass(OrderInput);
