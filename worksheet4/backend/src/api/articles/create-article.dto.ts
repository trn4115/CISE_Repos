// src/api/articles/dto/create-article.dto.ts
export class CreateArticleDto {
  _id: string;
  title: string;
  authors: string;
  source: string;
  pubYear: string;
  doi: string;
  claim: string;
  evidenceLevel: string;
}
