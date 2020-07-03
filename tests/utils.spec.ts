import { environ } from '../src/utils';

describe('Test various utility functions', () => {
    describe('Testing environ', () => {
        test('Get valid environ', () => {
            process.env.validEnv = 'hello world';
            expect(environ('validEnv')).toBe(process.env.validEnv);
        })

        test('Get invalid environ, no default', () => {
            expect(() => environ(Date.now().toLocaleString())).toThrowError(ReferenceError);
        })

        test('Get invalid environ with default value', () => {
            let valid: string = 'hi';
            expect(environ(Date.now().toLocaleString(), valid)).toBe(valid);
        })

        test('Pass invalid types', () => {
            let arr: any[] = [
                1,
                true,
                NaN,
                [],
                {}
            ]
            arr.forEach((v: any): void => {
                expect(() => environ(v)).toThrowError(TypeError);
            })
        })
    })
})