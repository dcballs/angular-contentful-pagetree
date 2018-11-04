import { Deserializer } from "../../interfaces/deserializer.interface";

export class NavigationNode implements Deserializer {
  label: string;
  route: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}