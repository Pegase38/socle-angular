export class AuthResponse {
  id: string;
  token: string;
  userId: string;

  constructor(args: Partial<AuthResponse>) {
    this.id = args.id;
    this.token = args.token;
    this.userId = args.userId;
  }
}
