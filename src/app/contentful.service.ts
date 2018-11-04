import { Injectable } from '@angular/core';
import { createClient, Space, ContentfulClientApi } from 'contentful';
import { Website } from './models/website.model';
import { Page } from './models/page.model';

const DEFAULT_CONFIG = {
  credentials: {
    space: 'g4xluudzmbkx',
    accessToken: 'dec25cf8bc115c4548b15e0c85099b7c90c173c98fe7e4ea7d75a2996a174ea6',
  },

  contentTypeIds: {
    website: 'website',
    websitePage: 'websitePage'
  },

  websiteId: '7daP2a7KiAM8imKcaOEQiI'
}

@Injectable()
export class ContentfulService {
  cdaClient: ContentfulClientApi;
  config: {
    space: string,
    accessToken: string
  };
  titleHandlers: Function[]

  constructor() {
    try {
      this.config = JSON.parse(localStorage.websiteConfig);
    } catch (e) {
      this.config = DEFAULT_CONFIG.credentials;
    }

    this.titleHandlers = [];
    this._createClient();
    this.getSpace();
  }

  onTitleChange(fn): void {
    this.titleHandlers.push(fn)
  }

  getSpace(): Promise<Space> {
    return this.cdaClient.getSpace()
      .then(space => {
        this.titleHandlers.forEach(handler => handler(space.name))
        return space;
      })
  }

  getWebsite(): Promise<Website> {
    return this.cdaClient.getEntry(DEFAULT_CONFIG.websiteId)
      .then(entry => new Website().deserialize(entry.fields));
  }

  getPageByRoute(route: string): Promise<Page> {
    return this.cdaClient.getEntries({
      content_type: DEFAULT_CONFIG.contentTypeIds.websitePage,
      'fields.route': route
    })
      .then(res => new Page().deserialize(res.items[0].fields));
  }

  _createClient() {
    this.cdaClient = createClient({
      space: this.config.space,
      accessToken: this.config.accessToken
    });
  }
}