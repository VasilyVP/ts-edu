interface CustomMatchers<R = unknown> {
    check(param: 1 | -1 = 1): R;
}

export declare global {
    namespace jest {
        interface Expect extends CustomMatchers { }
        interface Matchers<R> extends CustomMatchers<R> { }
        interface InverseAsymmetricMatchers extends CustomMatchers { }
    }
}
