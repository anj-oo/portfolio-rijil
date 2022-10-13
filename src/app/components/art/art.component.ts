import { Arts } from "./../../model/arts";
import { artsServices } from "./../../services/arts.services";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {

  artImages:Arts[] = [];
  constructor(private artsServices: artsServices) { }

  ngOnInit(): void {
    // this.artImages = this.artsServices.arts;
  }

}
