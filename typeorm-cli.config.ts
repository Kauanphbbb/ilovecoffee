import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeeRefactor1655306499008 } from 'src/migrations/1655306499008-CoffeeRefactor';
import { SchemaSync1655307146078 } from 'src/migrations/1655307146078-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1655306499008, SchemaSync1655307146078],
});
