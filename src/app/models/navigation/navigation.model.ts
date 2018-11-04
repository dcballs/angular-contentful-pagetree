import { NavigationNode } from "./navigationNode.model";

export class Navigation {
  private _nodes: NavigationNode[];
  constructor() {
    this._nodes = new Array();
  }
  
  get nodes(): NavigationNode[] {
    return this._nodes;
  }
}