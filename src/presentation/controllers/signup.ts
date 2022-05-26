import { HttpRequest, HttpRespose } from '../protocols/http';
import { MissingPramError } from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';

export class SignUpController {
    handle(httpRequest: HttpRequest): HttpRespose {
        if (!httpRequest.body.name) {
            return badRequest(new MissingPramError('name'));
        }
        if (!httpRequest.body.email) {
            return badRequest(new MissingPramError('email'));
        }
    }
}
