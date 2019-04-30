export class Credential {
  username: string;
  password: string;

  constructor(fields?: Partial<Credential>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
