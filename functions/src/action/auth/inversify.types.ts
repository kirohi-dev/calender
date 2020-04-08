// interfaseの定義?
const TYPES = {
  Responder: Symbol.for('IResponder'),
  Translator: Symbol.for('ITranslator'),
  AuthService: Symbol.for('IAuthService'),
  Adapter: Symbol.for('IAdapter'),
  SignUpAction: Symbol.for('SignUpAction'),
  LoginAction: Symbol.for('LoginAction'),
  VerifyAction: Symbol.for('VerifyAction'),
};

export default TYPES;
