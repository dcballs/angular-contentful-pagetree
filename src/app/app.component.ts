import { Component } from '@angular/core';
import { Navigation } from './models/navigation/navigation.model';
import { ContentfulService } from './contentful.service';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'angular-contentful-pagetree-ots';
  websiteName: string;
  navigation: Navigation;

  constructor(
    private contentfulService: ContentfulService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.navigation = this.navigationService.navigation;
    this.contentfulService.getSpace().then(space => {
      this.name = space.name
      this.websiteName = this.navigationService.website.websiteName;
    });
  }
}
