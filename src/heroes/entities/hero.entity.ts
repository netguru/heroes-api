import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Type } from '../../types';

@Entity()
export class Hero {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  full_name: string;

  @Column()
  avatar_url: string;

  @Column()
  description: string;

  @ManyToOne(() => Type, { nullable: false })
  type: Type;
}
