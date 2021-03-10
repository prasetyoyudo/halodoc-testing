import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../app/service/issues.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'github-issues';
  issuesList : any; 
  issuesDetail  : any;
  itemList : any;


  constructor(
    private issues : IssuesService
  ) {}

  ngOnInit() {
    this.getIssuesDetail()
    this.getListIssues()
  }

  getListIssues() {
    this.issues.getListIssuesService()
    .subscribe(data => {
      this.issuesList = data
      this.itemList = this.issuesList.items
      console.log(this.itemList)
    })
  }

  getIssuesDetail() {
    this.issues.getIssuesDetailService()
    .subscribe(data => {
      this.issuesDetail = data
      console.log(this.issuesDetail)
    })
  }
}
