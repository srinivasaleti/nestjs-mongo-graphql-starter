import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Order {
  @Field()
  @Prop({ required: true })
  id: string;

  @Field()
  @Prop({ required: true })
  status: string;
}
