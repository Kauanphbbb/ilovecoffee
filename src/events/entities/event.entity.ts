import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('entities')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  name: string;

  @Column()
  type: string;

  @Column('json')
  payload: Record<string, any>;
}
