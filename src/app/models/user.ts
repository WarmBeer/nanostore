export class User {
  email: string;
  name: string;
  role: number;

  constructor(email, name, role) {
    this.email = email;
    this.name = name;
    this.role = role;
  }
}
