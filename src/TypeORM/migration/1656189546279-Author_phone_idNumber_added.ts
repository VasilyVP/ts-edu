import { MigrationInterface, QueryRunner } from "typeorm";

export class AuthorPhoneIdNumberAdded1656189546279 implements MigrationInterface {
    name = 'AuthorPhoneIdNumberAdded1656189546279'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "author" ADD "phone" character varying`);
        await queryRunner.query(`ALTER TABLE "author" ADD "authIdNumber" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "authIdNumber"`);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "phone"`);
    }

}
