import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rijil';
  constructor() { }

  ngOnInit(): void {
    // this.activeRoute.fragment.subscribe((val) => {
    //   this.jumpTo(val);
    // });
  }

  jumpTo(section:any) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
