import { SignUpController } from './signup';
import { MissingPramError } from '../errors/missing-param-error';

const makeSut = (): SignUpController => {
    return new SignUpController();
};

describe('SignUp Controller', () => {
    test('Should return 400 if no name is provided', () => {
        const sut = makeSut();
        const httpRequest = {
            body: {
                email: 'any_email@mail.com',
                password: 'any_password',
                passwordConfirmation: 'any_password',
            },
        };
        const httpReponse = sut.handle(httpRequest);
        expect(httpReponse.statusCode).toBe(400);
        expect(httpReponse.body).toEqual(new MissingPramError('name'));
    });

    test('Should return 400 if no name is provided', () => {
        const sut = makeSut();
        const httpRequest = {
            body: {
                name: 'any_name',
                password: 'any_password',
                passwordConfirmation: 'any_password',
            },
        };
        const httpReponse = sut.handle(httpRequest);
        expect(httpReponse.statusCode).toBe(400);
        expect(httpReponse.body).toEqual(new MissingPramError('email'));
    });

    test('Should return 400 if no password is provided', () => {
        const sut = makeSut();
        const httpRequest = {
            body: {
                name: 'any_name',
                email: 'any_email@mail.com',
                passwordConfirmation: 'any_password',
            },
        };
        const httpReponse = sut.handle(httpRequest);
        expect(httpReponse.statusCode).toBe(400);
        expect(httpReponse.body).toEqual(new MissingPramError('password'));
    });

    test('Should return 400 if no password is provided', () => {
        const sut = makeSut();
        const httpRequest = {
            body: {
                name: 'any_name',
                email: 'any_email@mail.com',
                password: 'any_password',
            },
        };
        const httpReponse = sut.handle(httpRequest);
        expect(httpReponse.statusCode).toBe(400);
        expect(httpReponse.body).toEqual(new MissingPramError('passwordConfirmation'));
    });
});
