import "reflect-metadata";
import { DataSource } from "typeorm";


export const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'learn_user',
    password: 'qwerty',
    database: 'learn',
    entities: [
        //Photo,
        __dirname.replace(/\\/g, '/') + '/entity/**/*.ts'
    ],
    migrations: [__dirname.replace(/\\/g, '/') + '/migration/**/*.ts'],
    subscribers: [__dirname.replace(/\\/g, '/') + '/subscribers/**/*.ts'],
    synchronize: true,
    logging: false,
    //migrationsRun: true,
})
