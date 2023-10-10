import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, DeleteDateColumn } from "typeorm";
import { Photo } from "./Photo";


@Entity()
export class PhotoMetadata extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    height: number;

    @Column("int")
    width: number;

    @Column()
    orientation: 'portrait' | 'album';

    @Column()
    compressed: boolean;

    @Column()
    comment: string;

    @OneToOne(type => Photo, photo => photo.metadata, { onDelete: 'CASCADE' })
    @JoinColumn()
    photo: Photo;

    @DeleteDateColumn()
    deletedAt: Date;
}
