import mongoose, { HydratedDocument } from 'mongoose';
export type MealDocument = HydratedDocument<Meal>;
export declare class Meal {
    menuId: string;
    title: string;
    description: string;
    slug: string;
    image: string;
    priceWithOffer: number;
    filter: string;
    bestSeller: number;
    status: boolean;
    time: Date;
}
export declare const MealSchema: mongoose.Schema<Meal, mongoose.Model<Meal, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Meal>;
