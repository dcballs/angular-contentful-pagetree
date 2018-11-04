import { Injectable, Injector } from "@angular/core";
import { ContentfulService } from "./contentful.service";
import { Website } from "./models/website.model";
import { NavigationService } from "./navigation.service";
import { PageComponent } from "./page/page.component";
import { Route, Router } from "@angular/router";

@Injectable()
export class PreloadService {
  private _website: Website;

  private _promise: Promise<Website>;
  private _promiseDone: boolean = false;

  constructor(private contentful: ContentfulService) { }

  loadWebsite(): Promise<any> {
    if (this._promiseDone) {
      return Promise.resolve();
    }

    if (this._promise != null) {
      return this._promise;
    }

    this._promise = this.contentful.getWebsite().then(website => {
      this._promiseDone = true;
      return website;
    });
    return this._promise;
  }

  get website(): Website {
    return this._website;
  }
}


export function preloadServiceFactory(injector: Injector, navigationService: NavigationService, preloadService: PreloadService): Function {
  return () => {
    return preloadService
      .loadWebsite()
      .then(website => {

        navigationService.create(website);

        let websiteRoutes: Route[] = [{
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        }]

        navigationService.navigation.nodes.forEach(node => {
          websiteRoutes.push({
            path: node.route.substr(1),
            component: PageComponent
          });
        });

        const router: Router = injector.get(Router);
        router.resetConfig(websiteRoutes);
      });
  }
}
