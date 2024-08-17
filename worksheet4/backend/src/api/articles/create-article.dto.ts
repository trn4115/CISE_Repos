export class CreateArticleDto {
  _id: number;
  title: string;
  authors: string;
  source: string;
  pubYear: number;
  doi: string;
  claim: string;
  evidenceLevel: string;
}
