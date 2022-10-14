import { ArtsServices } from "./../../services/arts.services";
import { Component, OnInit } from '@angular/core';
import { Arts } from "../../model/arts";

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {
  artImages: Arts[]= []
  constructor(private artsServices: ArtsServices ) { }

  ngOnInit(): void {
    this.artImages = this.artsServices.arts;
  }

}


