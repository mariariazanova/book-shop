export interface BookModel {
  name: string;
  description: string;
  price: number;
  category: Category;
  createDate: Date;
  isAvailable: number;
}

export enum Category {
  Poetry,
  Fantastic,
  Horror,
  Romance,
  Westerns,
  Drama,
  Children,
}
