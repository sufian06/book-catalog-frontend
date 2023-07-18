import { ReactNode } from 'react';

export interface IProduct {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate?: ReactNode;
  reviews?: [];
  image?: string;
}
