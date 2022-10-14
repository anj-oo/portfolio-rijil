import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rijil';
  constructor(private activeRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    // this.activeRoute.fragment.subscribe((val) => {
    //   this.jumpTo(val);
    // });
  }

  jumpTo(section:any) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
