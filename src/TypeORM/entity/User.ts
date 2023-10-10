import { BaseEntity, Column, DeleteDateColumn, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    @Generated('uuid')
    uuid: string;

    @Column({ 
        array: true,
        type: 'varchar',
        default: [],
    })
    tags: string[];

    @DeleteDateColumn()
    deletedAt: Date;

}
