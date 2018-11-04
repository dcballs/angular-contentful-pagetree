import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  pageName: string;

  constructor(
    private router: Router,
    private contentful: ContentfulService
  ) { }

  ngOnInit() {
    this.contentful.getPageByRoute(this.router.url).then(page => {
      this.pageName = page.name;
    });
  }
}
