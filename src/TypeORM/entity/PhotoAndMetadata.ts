import { BaseEntity, ViewColumn, ViewEntity } from "typeorm";

// , "photo_metadata"."orientation") as "count"
@ViewEntity({
    expression: `
        SELECT "photo"."name" as "name", COUNT("photo_metadata"."id") as "count"
        FROM "photo" LEFT JOIN "photo_metadata" ON "photo"."id" = "photo_metadata"."photoId"
        GROUP BY "name"
        ORDER BY "name"
    `,
})
export class PhotoAndMetadata extends BaseEntity {
    @ViewColumn()
    name: string;

    @ViewColumn()
    count: string;
}
