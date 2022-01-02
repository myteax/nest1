import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  desc: string;
  @Column()
  address: string;
  @Column()
  age: number;
}
