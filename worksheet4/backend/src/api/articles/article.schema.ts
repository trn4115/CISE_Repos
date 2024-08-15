// src/api/articles/article.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  authors: string;

  @Prop({ required: true })
  source: string;

  @Prop({ required: true })
  pubYear: string;

  @Prop({ required: true })
  doi: string;

  @Prop({ required: true })
  claim: string;

  @Prop({ required: true })
  evidenceLevel: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
