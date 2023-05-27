export interface Article {
  body: string;
  description: string;
  favourited: boolean;
  favouritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  createdAt: string;
  updatedAt: string;
  //TODO: add author interface
}
