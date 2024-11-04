export class ErrorResponse extends Error {
  httpStatus: number;

  constructor(message: string, httpStatus: number) {
    super(message);

    this.httpStatus = httpStatus;
  }
}
