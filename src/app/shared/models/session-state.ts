export class SessionState {
  token?: string;
  tokenId?: string;
  userId?: string;

  constructor(args: Partial<SessionState> = {}) {
    this.token = args.token;
    this.tokenId = args.tokenId;
    this.userId = args.userId;
  }

  isSignedIn() {
    return this.token != null;
  }
}
