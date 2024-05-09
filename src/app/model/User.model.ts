

export class UserModel {
  id?: string;
  fullname?: string;
  email?: string;
  password?: string;
  role?: string;
  // image?: string[];
  createdOn?: Date;
  updatedOn?: Date;


  constructor(
    id?: string,
    fullname?: string,
    email?: string,
    password?: string,
    role?: string,
    // image?: string[],
    createdOn?: Date,
    updatedOn?: Date
  ) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    this.role = role;
    // this.image = image;
    this.createdOn = createdOn;
    this.updatedOn = updatedOn;
  }
}
