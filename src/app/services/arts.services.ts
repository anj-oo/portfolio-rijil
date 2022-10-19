import { Injectable } from "@angular/core";
import { Arts } from "../model/arts";

@Injectable()
export class ArtsServices {

    arts = [
        {
            "title": "Eyes",
            "image": "/assets/images/art1.jpg"
        },
        {
            "title": "Fahad Fazil",
            "image": "/assets/images/art2.jpg"
        },
        {
            "title": "Ms Dhoni",
            "image": "/assets/images/art3.jpg"
        },        {
            "title": "Kid",
            "image": "/assets/images/art4.jpg"
        },        {
            "title": "",
            "image": "/assets/images/art5.jpg"
        },        {
            "title": "Asif Ali",
            "image": "/assets/images/art6.jpg"
        },        {
            "title": "Jayasurya",
            "image": "/assets/images/art7.jpg"
        },        {
            "title": "Boy",
            "image": "/assets/images/art8.jpg"
        },        {
            "title": "",
            "image": "/assets/images/art9.JPG"
        },        {
            "title": "3",
            "image": "/assets/images/art10.jpg"
        }
    ];

    getArts(): Arts[]{
        return this.arts;
    }
}
