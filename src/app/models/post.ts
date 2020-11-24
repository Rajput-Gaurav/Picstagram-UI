export class Post {
  _id: string;
  id: string;
  caption: string;
  description: string;
  imageUrl: string;
  active: boolean;
  date: Date;

  constructor(
    id: string,
    caption: string,
    imageUrl: string,
    description: string = ""
  ) {
    this.id = id;
    this.caption = caption;
    this.imageUrl = imageUrl;
    this.description = description;
    this.active = true;
    this.date = new Date();
  }
}
