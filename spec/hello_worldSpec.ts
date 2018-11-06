import { hello } from '../src/hello_world';

describe('Greet the world', () => {
    it('says "Hello world"', () => {
        expect(hello()).toEqual('Hello world!');
    });

    it('says "Hello Alex"', () => {
        expect(hello('Alex')).toEqual('Hello Alex!');
    });
});
