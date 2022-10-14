import { Injectable } from "@angular/core";
import { retry } from "rxjs";
import { Arts } from "../model/arts";

@Injectable()
export class ArtsServices {

    arts = [
        {
            "title": "1",
            "image": "/assets/images/art2.png"
        },
        {
            "title": "2",
            "image": "/assets/images/art1.png"
        },
        {
            "title": "3",
            "image": "/assets/images/art2.png"
        },

   
    ];

    getArts(): Arts[]{
        return this.arts;
    }
}