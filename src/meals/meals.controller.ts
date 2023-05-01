import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { MealsService } from './meals.service';
import { Meal } from '../meals/schema/meals.schema';

// import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
// import { CreateMealDto } from './dto/create-meal.dto';
// import { UpdateMealDto } from './dto/update-meal.dto';

@UseGuards(JwtAuthGuard)
@Controller('meals')
export class MealsController {
  constructor(
    private mealsService: MealsService, // private authService: AuthService,
  ) {}

  @Get()
  getMeals(): Promise<Meal[]> {
    return this.mealsService.findAll();
  }

  @Get(':id')
  getMeal(@Param() mealId: { id: string }): Promise<Meal> {
    return this.mealsService.findOne(mealId.id);
  }

  // @Post()
  // create(@Body() createMealDto: CreateMealDto) {
  //   return this.mealsService.create(createMealDto);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMealDto: UpdateMealDto) {
  //   return this.mealsService.update(+id, updateMealDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.mealsService.remove(+id);
  // }
}
