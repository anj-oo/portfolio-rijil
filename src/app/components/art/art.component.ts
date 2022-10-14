import { Arts } from "./../../model/arts";
import { ArtsServices } from "./../../services/arts.services";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {


  
  constructor(private artsServices: ArtsServices) { }

  ngOnInit(): void {
  }

}
