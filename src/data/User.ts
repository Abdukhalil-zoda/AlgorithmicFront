export class UserSignup {
    constructor(
        public fullName: string,
        public userName: string,
        public email: string,
        public passwordHash: string
    ) { }
}