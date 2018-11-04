import { Component } from '@angular/core';
import { Navigation } from './models/navigation/navigation.model';
import { ContentfulService } from './services/contentful.service';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  spaceName = 'Angular Contentful Page Tree';
  websiteName: string;
  navigation: Navigation;

  constructor(
    private contentfulService: ContentfulService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.navigation = this.navigationService.navigation;
    this.contentfulService.getSpace().then(space => {
      this.spaceName = space.name
      this.websiteName = this.navigationService.website.websiteName;
    });
  }
}
