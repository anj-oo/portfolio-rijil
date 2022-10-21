import {Component, ElementRef, OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rijil';
  constructor(private el: ElementRef) { }
  isMobile = window.innerWidth <= 1023


  ngOnInit(): void {
    // this.activeRoute.fragment.subscribe((val) => {
    //   this.jumpTo(val);
    // });
  }

  jumpTo(section:any) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  onCloseOnMobile() {
    // removes the visibility class and adds the hidden class.
    this.el.nativeElement.classList.remove('show-menu')
    this.el.nativeElement.classList.add('hide-menu')
  }

  onCloseWhenClickingOnMobile() {
    // just on mobile devices.
    if (window.innerWidth <= 1023) {
      // when the menu or backdrop is clicked the menu is closed.
      this.el.nativeElement.addEventListener('click', () => {
        this.onCloseOnMobile()
      })
    }
  }
}
