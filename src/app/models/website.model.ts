import { Page } from './page.model';
import { Deserializer } from "../interfaces/deserializer.interface";
import { Entry } from 'contentful';

export class Website implements Deserializer {
  websiteName: string;
  pages: Page[] = [];

  deserialize(input: any): this { 
    Object.assign(this, input);
    this.pages = [];
    input.pages.forEach((entry: Entry<any>) => {
      this.pages.push(new Page().deserialize(entry.fields));
    });
    return this;
  }
}