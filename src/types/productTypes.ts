export interface IProduct {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate?: Date;
  reviews?: [];
  image?: string;
}
