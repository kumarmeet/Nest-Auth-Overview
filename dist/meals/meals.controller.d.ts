import { MealsService } from './meals.service';
import { Meal } from '../meals/schema/meals.schema';
export declare class MealsController {
    private mealsService;
    constructor(mealsService: MealsService);
    getMeals(): Promise<Meal[]>;
    getMeal(mealId: {
        id: string;
    }): Promise<Meal>;
}
