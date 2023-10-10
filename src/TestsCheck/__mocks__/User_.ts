const users = [{ name: 'Bob' }];
const resp = { data: users };

export const get = async (str?: string) => resp;

export class ToDo {
    static async get(str?: string) {
        return resp;
    }
}

export default class User {
    static all() {
        return Promise.resolve(users);
    }
}
