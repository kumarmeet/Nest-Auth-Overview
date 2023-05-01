import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

// import { CreateMealDto } from './dto/create-meal.dto';
// import { UpdateMealDto } from './dto/update-meal.dto';

import { Meal, MealDocument } from '../meals//schema/meals.schema';

@Injectable()
export class MealsService {
  constructor(@InjectModel(Meal.name) private mealModel: Model<MealDocument>) {}

  async findAll(): Promise<Meal[]> {
    return this.mealModel.find();
  }

  async findOne(mealId: string): Promise<Meal> {
    return this.mealModel.findById({ _id: mealId });
  }

  // create(createMealDto: CreateMealDto) {
  //   return 'This action adds a new meal';
  // }

  // update(id: number, updateMealDto: UpdateMealDto) {
  //   return `This action updates a #${id} meal`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} meal`;
  // }
}
