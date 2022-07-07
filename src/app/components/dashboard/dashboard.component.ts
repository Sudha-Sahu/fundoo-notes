import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/dataservice/data.service';
import { Subscription } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  param:any;
  filterString:string='';
  grid:any=true;

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message:any) => {
      this.filterString = message;
      console.log(this.filterString);
    })
    this.data.currentView.subscribe((nview:any) => {
      this.grid = nview;
      console.log(this.grid);
    })
  }
  gridView(){
    this.grid = false;
    this.data.changeNotesView(this.grid);
  }
  listView(){
    this.grid = true;
    this.data.changeNotesView(this.grid);
  }

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;

  constructor(private data:DataService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route: Router, private snackbar:MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    // this.subscription.unsubscribe();
  }
  searchKey(text:any){
    this.data.changeMessage(text.target.value);
  }
  logout(){
    localStorage.removeItem('token');
    this.snackbar.open("Logged out", "", { duration: 3000 });
    this.route.navigateByUrl('/signin');
  }
}













