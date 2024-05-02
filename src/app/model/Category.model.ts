

export class CategoryModel {
    id?: string;
    name?: string;
    description?: string;
    createdOn?: Date;
    updatedOn?: Date;
  
  
    constructor(
      id?: string,
      name?: string,
      description?: string,
      createdOn?: Date,
      updatedOn?: Date
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.createdOn = createdOn;
      this.updatedOn = updatedOn;
    }
  }
  