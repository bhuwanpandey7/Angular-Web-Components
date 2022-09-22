import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor(private dataService: DataService) { }

  newsArticles: any;

  ngOnInit(): void {
    this.dataService.getNewsData().subscribe((data: any) => {
      this.newsArticles = data['articles'];
    })
  }
}
