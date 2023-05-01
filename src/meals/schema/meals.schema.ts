import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type MealDocument = HydratedDocument<Meal>;

@Schema()
export class Meal {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' })
  menuId: string;

  @Prop({
    required: [true, 'Item title name is required!'],
    trim: true,
    unique: true,
  })
  title: string;

  @Prop({
    required: [true, 'Description is required!'],
    trim: true,
    unique: true,
  })
  description: string;

  @Prop({ required: [true, 'Slug is required!'], trim: true, unique: true })
  slug: string;

  @Prop({ required: [true, 'Image is required!'], trim: true })
  image: string;

  @Prop({ required: [true, 'Price is required!'], default: 0 })
  priceWithOffer: number;

  @Prop({
    required: [true, 'Filter is required!'],
    trim: true,
    validate: {
      validator: function (val: string) {
        return ['veg', 'nonveg'].includes(val);
      },
      message: (props: { value: string }) =>
        `${props.value} is incorrect. Please select one of these "veg" or "nonVeg"`,
    },
  })
  filter: string;

  @Prop({ default: 0 })
  bestSeller: number;

  @Prop({ default: true })
  status: boolean;

  @Prop({ type: Date, required: true })
  time: Date;
}

export const MealSchema = SchemaFactory.createForClass(Meal);
