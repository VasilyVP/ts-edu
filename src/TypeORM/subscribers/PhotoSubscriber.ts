import { EventSubscriber, EntitySubscriberInterface } from "typeorm";
import { Photo } from "../entity/Photo";


@EventSubscriber()
export class PhotoSubscripber implements EntitySubscriberInterface<Photo> {
    listenTo() {
        return Photo;
    }

    afterLoad(entity: Photo) {
        console.log('loaded: ', entity);
    }
}
