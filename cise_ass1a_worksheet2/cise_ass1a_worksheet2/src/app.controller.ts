import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ARTICLES } from './dummydata/article';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/articles')
  getArticles(): any[] {
    return ARTICLES;
  }

  @Get('/api/articles/:id')
  getArticleById(@Param('id') id: string): any {
    console.log(`Received id: ${id}`);
    return ARTICLES.find((n) => n._id === id);
  }

  @Post('/api/articles')
  addArticle(@Body() article: any): any {
    ARTICLES.push(article);
    return article;
  }
}
