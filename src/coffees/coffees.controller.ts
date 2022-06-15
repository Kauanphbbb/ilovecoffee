import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  async findAll(): Promise<Coffee[]> {
    return await this.coffeesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Coffee> {
    return await this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return await this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.coffeesService.remove(id);
  }
}
