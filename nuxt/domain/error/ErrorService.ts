export class ErrorService {
  private errorMessages: string;

  constructor(e?: string) {
    this.errorMessages = e || 'Something went wrong...';
  }

  get returnErrorMessages() {
    return this.errorMessages;
  }

  showError() {
    console.error(this.errorMessages);
    alert(this.errorMessages);
  }
}
