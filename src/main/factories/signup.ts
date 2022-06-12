import { DbAddAccount } from '../../data/usecases/add-account/db-add-account';
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter';
import { Controller, SignUpController } from '../../presentation/controllers/signup';
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter';
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository';
import { LogControllerDecorator } from '../decorators/log';

export const makeSignUpController = (): Controller => {
    const salt = 12;
    const emailValidator = new EmailValidatorAdapter();
    const encrypter = new BcryptAdapter(salt);
    const accountMongoRepository = new AccountMongoRepository();
    const addAccount = new DbAddAccount(encrypter, accountMongoRepository);
    const signupController = new SignUpController(emailValidator, addAccount);
    return new LogControllerDecorator(signupController);
};
