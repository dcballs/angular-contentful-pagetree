import { Navigation } from "../models/navigation/navigation.model";
import { NavigationNode } from "../models/navigation/navigationNode.model";
import { Injectable } from "@angular/core";
import { Website } from "../models/website.model";

@Injectable()
export class NavigationService {
  private _navigation = new Navigation();
  private _website: Website;

  constructor() { }

  create(website: Website) {
    this._website = website;
    this._website.pages.forEach(page => {
      this._navigation.nodes.push(new NavigationNode().deserialize({
        label: page.navigationTitle,
        route: page.route
      }));
    });
  }

  get navigation(): Navigation {
    return this._navigation;
  }

  get website(): Website {
    return this._website;
  }
}