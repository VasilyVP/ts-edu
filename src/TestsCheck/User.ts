import axios from 'axios'

export const someData = { data: 'some data' };

export const get = async (str?: string) => someData;

export class ToDo {
    static async get(str?: string) {
        return someData;
    }
}

export default class User {
    static all() {
        return axios.get('https://ya.ru').then(resp => resp.data);
    }
}
