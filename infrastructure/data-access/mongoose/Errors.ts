export class ReadDocumentError extends Error {
  private details: any;

  constructor(details: any) {
    super('Mongoose read error');
    this.details = details;
  }
}

export class WriteDocumentError extends Error {
  private details: any;

  constructor(details: any) {
    super('Mongoose write error');
    this.details = details;
  }
}
