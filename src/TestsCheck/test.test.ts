import User, { ToDo, get, someData } from './User'

const users = [{ name: 'Bob' }];
const resp = { data: users };

jest.mock('./User', () => {
    const original = jest.requireActual('./User');
    const originalDefault = jest.requireActual('./User').default;


    return {
        __esModule: true,
        ...original,
        default: {
            ...originalDefault,
            all: jest.fn().mockResolvedValue([{ name: 'Bob' }]),
        },
        get: jest.fn().mockResolvedValue({ data: [{ name: 'Bob' }] }),
        ToDo: {
            get: jest.fn().mockResolvedValue({ data: [{ name: 'Bob' }] }),
        },
    }
});

/* jest.mock('axios', () => ({
    get: async () => resp,
})) */

/* const mod = jest.createMockFromModule<{
    default: typeof User,
    ToDo: typeof ToDo,
    get: typeof get & { mock: jest.Mock },
    somethig: () => number;
}>('./User.ts'); */

//mod.somethig = () => 12345;

describe('Testing User module', () => {
    test('check mocking', () => {
        expect((get as jest.Mock).mock).toBeTruthy();
    })

    test('mocked get', () => {
        get().then(res => expect(res).toEqual(resp));
    })

    test('Mocked ToDo', () => {
        expect(ToDo.get()).resolves.toEqual(resp);
    })

    test('ToDo.get should be called once', () => {
        expect(ToDo.get).toBeCalledTimes(1);
    })

    it('should get users', () => {
        return User.all().then(data => expect(data).toEqual(users))
    })
})
