import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';

import { Meal, MealSchema } from '../meals/schema/meals.schema';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Meal.name, schema: MealSchema }]),
    UsersModule,
    JwtModule,
    AuthModule
  ],
  controllers: [MealsController],
  providers: [MealsService],
})
export class MealsModule {}
