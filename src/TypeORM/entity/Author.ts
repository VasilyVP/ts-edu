import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, BaseEntity, Unique } from 'typeorm';
import { Photo } from './Photo';

@Entity()
export class Author extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    phone: string;

    @Column({ default: '' })
    authIdNumber: string;

    @OneToMany(type => Photo, photo => photo.author)
    photos: Photo[];
}
