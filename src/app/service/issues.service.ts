import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IssuesService {
  data: any;
  key: any;
  constructor(
    private  httpc: HttpClient) {
  }


  getIssuesDetailService() {
    return this.httpc.get('https://api.github.com/repos/angular/angular');
  }

  
  getListIssuesService() {
    return this.httpc.get('https://api.github.com/search/issues?q=repo:angular/angular/node+type:issue+state:open&per_page=10&page=1');
  }
}
