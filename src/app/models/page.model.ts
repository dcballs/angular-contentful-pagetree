import { Deserializer } from "../interfaces/deserializer.interface";

export class Page implements Deserializer {
  name: string;
  title: string;
  navigationTitle: string;
  route: string;

  deserialize(input: any): this { 
    Object.assign(this, input);
    return this;
  }
}