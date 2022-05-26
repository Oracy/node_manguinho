import { HttpRequest, HttpRespose } from '../protocols/http';
import { MissingPramError } from '../errors/missing-param-error';

export class SignUpController {
    handle(httpRequest: HttpRequest): HttpRespose {
        if (!httpRequest.body.name) {
            return {
                statusCode: 400,
                body: new MissingPramError('name'),
            };
        }
        if (!httpRequest.body.email) {
            return {
                statusCode: 400,
                body: new MissingPramError('email'),
            };
        }
    }
}
