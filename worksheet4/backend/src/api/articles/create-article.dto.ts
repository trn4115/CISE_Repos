import { Date } from 'mongoose';

export class CreateArticleDto {
  title: string;
  authors: string;
  source: string;
  description: string;
  published_date: Date;
  doi: string;
  updated_date: Date;
}
