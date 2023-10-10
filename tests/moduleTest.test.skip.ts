//import func from '../src/module';

function fetchData() {
    return new Promise((resolve, reject) => resolve('peanut butter'))
}

/* test('the data is peanut butter', async () => {
    expect.assertions(1);

    try {
        //cons
    } catch (err) {
        //expect(fetchData()).resolves.toMatch(/peanut/);
    }
}); */

/*
type dataT = {
    data: string
};

function fetchData(): Promise<dataT> {
    const data = { data: 'apple' };

    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 1000);
    });
}

test('Async test', async () => {
    expect.assertions(1);

    const data = await fetchData();
    expect(data.data).toBe('apple');
}); */


/* describe('Funcs tests', () => {
    const myMockFn = jest
    .fn()
    .mockReturnValue('default')
    //.mockImplementation(scalar => 42 + scalar)
    .mockName('add42');

    test('myMochFn', () => {
        expect(myMockFn(1)).toBe('defaultt');
    });
}); */