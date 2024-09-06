

export class UserModel {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  // image?: string[];
  createdOn?: Date;
  updatedOn?: Date;


  constructor(
    id?: string,
    name?: string,
    email?: string,
    password?: string,
    role?: string,
    // image?: string[],
    createdOn?: Date,
    updatedOn?: Date
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
    // this.image = image;
    this.createdOn = createdOn;
    this.updatedOn = updatedOn;
  }
}
