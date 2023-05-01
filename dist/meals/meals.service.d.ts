import { Model } from 'mongoose';
import { Meal, MealDocument } from '../meals//schema/meals.schema';
export declare class MealsService {
    private mealModel;
    constructor(mealModel: Model<MealDocument>);
    findAll(): Promise<Meal[]>;
    findOne(mealId: string): Promise<Meal>;
}
