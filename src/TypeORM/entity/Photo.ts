import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, OneToOne, ManyToOne, ManyToMany, DeleteDateColumn, AfterLoad } from 'typeorm';
import { Album } from './Album';
import { Author } from './Author';
import { PhotoMetadata } from './PhotoMetadata';


@Entity()
export class Photo extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    @Column('text')
    description: string;

    @Column()
    filename: string;

    @Column('integer')
    views: number;

    @Column()
    isPublished: boolean;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToOne(type => PhotoMetadata, photoMetedata => photoMetedata.photo, { cascade: true })
    metadata: PhotoMetadata;

    @ManyToOne(type => Author, author => author.photos)
    author: Author;

    @ManyToMany(type => Album, album => album.photos)
    albums: Album[];

    /* @AfterLoad()
    postInfo() {
        console.log('Photo loaded');
    } */
}
