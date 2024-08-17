import { Injectable } from '@nestjs/common';
import { Article, ArticleDocument } from './article.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDto } from './create-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
  ) {}

  // Test method to check if the route is working
  test(): string {
    return 'article route testing';
  }

  // Method to fetch all articles from the database
  async findAll(): Promise<Article[]> {
    return await this.articleModel.find().exec();
  }

  // Method to fetch a single article by its ID
  async findOne(id: string): Promise<Article> {
    return await this.articleModel.findById(id).exec();
  }

  // Method to create a new article
  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(createArticleDto);
    return await createdArticle.save();
  }

  // Method to update an existing article by its ID
  async update(
    id: string,
    createArticleDto: CreateArticleDto,
  ): Promise<Article> {
    return await this.articleModel
      .findByIdAndUpdate(id, createArticleDto, { new: true })
      .exec();
  }

  // Method to delete an article by its ID
  async delete(id: string): Promise<Article> {
    return await this.articleModel.findByIdAndDelete(id).exec();
  }
}
