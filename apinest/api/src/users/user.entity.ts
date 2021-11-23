import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
@Unique(['email'])
export class User extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({nullable: false, type: 'varchar', length: 200})
  public email: string;

  @Column({nullable: false, type: 'varchar', length: 20})
  public name: string;

  @Column({nullable: false, default: true})
  public status: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}