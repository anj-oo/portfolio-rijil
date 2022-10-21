import { ArtsServices } from "../../services/arts.services";
import { Component, OnInit } from '@angular/core';
import { Arts } from "../../model/arts";

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {
  artImages: Arts[]= []
  breakpoint;
  constructor(private artsServices: ArtsServices ) { }

  ngOnInit(): void {
    this.artImages = this.artsServices.arts;
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 4;
  }
  handleSize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 4;
  }

}


