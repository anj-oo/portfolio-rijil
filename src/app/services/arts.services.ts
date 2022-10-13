import { Injectable } from "@angular/core";
import { retry } from "rxjs";
import { Arts } from "../model/arts";

@Injectable()
export class artsServices {

    arts = [
        {
            "title": "snapshot",
            "link": "https:\/\/www.flickr.com\/photos\/192421892@N04\/52421938322\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52421938322_6bf261b108_m.jpg" },
            "date_taken": "2022-10-12T04:55:50-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/192421892@N04\/\">Smith and Lace<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/192421892@N04\/52421938322\/\" title=\"snapshot\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52421938322_6bf261b108_m.jpg\" width=\"240\" height=\"180\" alt=\"snapshot\" \/><\/a><\/p> <p><a href=\"http:\/\/maps.secondlife.com\/secondlife\/Sindaria\/134\/133\/1300\" rel=\"noreferrer nofollow\">Visit this location at Sindaria - Elven Cyberpunk Fantasy Roleplay in Second Life<\/a><\/p>",
            "published": "2022-10-12T11:55:50Z",
            "author": "nobody@flickr.com (\"Smith and Lace\")",
            "author_id": "192421892@N04",
            "tags": "firestorm secondlife secondlife:region=sindaria secondlife:parcel=sindariaelvencyberpunkfantasyroleplay secondlife:x=134 secondlife:y=132 secondlife:z=1300"
        },
        {
            "title": "Ch\u00e2teau de Prague",
            "link": "https:\/\/www.flickr.com\/photos\/didchreg\/52421939252\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52421939252_0b20c5055c_m.jpg" },
            "date_taken": "2022-09-29T18:25:46-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/didchreg\/\">didch64<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/didchreg\/52421939252\/\" title=\"Ch\u00e2teau de Prague\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52421939252_0b20c5055c_m.jpg\" width=\"240\" height=\"135\" alt=\"Ch\u00e2teau de Prague\" \/><\/a><\/p> ",
            "published": "2022-10-12T11:56:26Z",
            "author": "nobody@flickr.com (\"didch64\")",
            "author_id": "191300166@N02",
            "tags": ""
        },
        {
            "title": "Xiaomi",
            "link": "https:\/\/www.flickr.com\/photos\/196676340@N05\/52421939452\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52421939452_b796350e75_m.jpg" },
            "date_taken": "2022-09-23T10:26:41-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/196676340@N05\/\">charlesmaupas<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/196676340@N05\/52421939452\/\" title=\"Xiaomi\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52421939452_b796350e75_m.jpg\" width=\"180\" height=\"240\" alt=\"Xiaomi\" \/><\/a><\/p> ",
            "published": "2022-10-12T11:56:33Z",
            "author": "nobody@flickr.com (\"charlesmaupas\")",
            "author_id": "196676340@N05",
            "tags": ""
        },
        {
            "title": "2022 - 10 - 11 - Champignons - 085-4.jpg",
            "link": "https:\/\/www.flickr.com\/photos\/186746869@N02\/52421939492\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52421939492_288f350f5b_m.jpg" },
            "date_taken": "2022-10-11T13:49:26-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/186746869@N02\/\">Dark Philippus<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/186746869@N02\/52421939492\/\" title=\"2022 - 10 - 11 - Champignons - 085-4.jpg\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52421939492_288f350f5b_m.jpg\" width=\"240\" height=\"160\" alt=\"2022 - 10 - 11 - Champignons - 085-4.jpg\" \/><\/a><\/p> ",
            "published": "2022-10-12T11:56:34Z",
            "author": "nobody@flickr.com (\"Dark Philippus\")",
            "author_id": "186746869@N02",
            "tags": "04macro flore champignons"
        },
        {
            "title": "cat-20220927JAS_DSC0942.jpg",
            "link": "https:\/\/www.flickr.com\/photos\/31167455@N04\/52421939762\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52421939762_184a8605b0_m.jpg" },
            "date_taken": "2022-09-27T18:35:04-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/31167455@N04\/\">Tins Pics<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/31167455@N04\/52421939762\/\" title=\"cat-20220927JAS_DSC0942.jpg\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52421939762_184a8605b0_m.jpg\" width=\"160\" height=\"240\" alt=\"cat-20220927JAS_DSC0942.jpg\" \/><\/a><\/p> ",
            "published": "2022-10-12T11:56:47Z",
            "author": "nobody@flickr.com (\"Tins Pics\")",
            "author_id": "31167455@N04",
            "tags": "3mi portrait catross"
        },
        {
            "title": "_6_J9000.jpg",
            "link": "https:\/\/www.flickr.com\/photos\/99231563@N04\/52422449571\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52422449571_4e4a66496d_m.jpg" },
            "date_taken": "2022-10-11T22:25:03-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/99231563@N04\/\">jim_tralee<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/99231563@N04\/52422449571\/\" title=\"_6_J9000.jpg\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52422449571_4e4a66496d_m.jpg\" width=\"240\" height=\"160\" alt=\"_6_J9000.jpg\" \/><\/a><\/p> ",
            "published": "2022-10-12T11:56:12Z",
            "author": "nobody@flickr.com (\"jim_tralee\")",
            "author_id": "99231563@N04",
            "tags": ""
        },
        {
            "title": "'s-Gravenpolder",
            "link": "https:\/\/www.flickr.com\/photos\/63018044@N02\/52422449681\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52422449681_d26e885c7b_m.jpg" },
            "date_taken": "2022-10-12T04:56:16-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/63018044@N02\/\">Omroep Zeeland<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/63018044@N02\/52422449681\/\" title=\"&#039;s-Gravenpolder\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52422449681_d26e885c7b_m.jpg\" width=\"240\" height=\"135\" alt=\"&#039;s-Gravenpolder\" \/><\/a><\/p> <p>Door Kristian de Winter, 's-Gravenpolder<br \/> Lokaal wat ochtend mist vanochtend in 's-Gravenpolder. Het was vrij koud, maar de schapen hebben het denk ik niet zo koud met een dikke wol laag. De rijp ligt verder nog op de velden.<\/p>",
            "published": "2022-10-12T11:56:16Z",
            "author": "nobody@flickr.com (\"Omroep Zeeland\")",
            "author_id": "63018044@N02",
            "tags": ""
        },
        {
            "title": "Banff",
            "link": "https:\/\/www.flickr.com\/photos\/25012306@N07\/52422450201\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52422450201_9b88152572_m.jpg" },
            "date_taken": "2022-09-02T11:51:57-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/25012306@N07\/\">Doris&#039;s family photos<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/25012306@N07\/52422450201\/\" title=\"Banff\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52422450201_9b88152572_m.jpg\" width=\"180\" height=\"240\" alt=\"Banff\" \/><\/a><\/p> ",
            "published": "2022-10-12T11:56:35Z",
            "author": "nobody@flickr.com (\"Doris's family photos\")",
            "author_id": "25012306@N07",
            "tags": ""
        },
        {
            "title": "How I've been getting off",
            "link": "https:\/\/www.flickr.com\/photos\/196696814@N07\/52422733869\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52422733869_bb6bc06a33_m.jpg" },
            "date_taken": "2022-10-12T04:55:28-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/196696814@N07\/\">mark 329<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/196696814@N07\/52422733869\/\" title=\"How I&#039;ve been getting off\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52422733869_bb6bc06a33_m.jpg\" width=\"240\" height=\"171\" alt=\"How I&#039;ve been getting off\" \/><\/a><\/p> <p>AN5861 Sexworkers on the streets of downtown Tijuana Baja California Mexico<\/p>",
            "published": "2022-10-12T11:55:28Z",
            "author": "nobody@flickr.com (\"mark 329\")",
            "author_id": "196696814@N07",
            "tags": "prostitute sex sexworker hotel redlight flowers standing miniskirt virgin heels cheap taudry migration exploitation sexy whore back street store downtown urban clients"
        },
        {
            "title": "Rohit, Eat That Sweet And Please Say Congrats To Me, Your Wife Is Pregnant, Doctor Told Me Just Now.",
            "link": "https:\/\/www.flickr.com\/photos\/hemas_lol\/52422734419\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52422734419_e97ea3d34a_m.jpg" },
            "date_taken": "2022-10-12T07:53:52-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/hemas_lol\/\">&quot; Hk&#039;s Romantic Comedy Clix&quot;<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/hemas_lol\/52422734419\/\" title=\"Rohit, Eat That Sweet And Please Say Congrats To Me, Your Wife Is Pregnant, Doctor Told Me Just Now.\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52422734419_e97ea3d34a_m.jpg\" width=\"240\" height=\"110\" alt=\"Rohit, Eat That Sweet And Please Say Congrats To Me, Your Wife Is Pregnant, Doctor Told Me Just Now.\" \/><\/a><\/p> ",
            "published": "2022-10-12T11:55:53Z",
            "author": "nobody@flickr.com (\"\" Hk's Romantic Comedy Clix\"\")",
            "author_id": "184519960@N03",
            "tags": ""
        },
        {
            "title": "DHS Varsity Girls Volleyball vs Foothill_579.jpg",
            "link": "https:\/\/www.flickr.com\/photos\/192943803@N07\/52422735494\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52422735494_7bc41aab6a_m.jpg" },
            "date_taken": "2022-10-06T20:27:58-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/192943803@N07\/\">A. Tam<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/192943803@N07\/52422735494\/\" title=\"DHS Varsity Girls Volleyball vs Foothill_579.jpg\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52422735494_7bc41aab6a_m.jpg\" width=\"240\" height=\"160\" alt=\"DHS Varsity Girls Volleyball vs Foothill_579.jpg\" \/><\/a><\/p> ",
            "published": "2022-10-12T11:56:32Z",
            "author": "nobody@flickr.com (\"A. Tam\")",
            "author_id": "192943803@N07",
            "tags": "dhsvarsitygirlsvolleyballfoothill2022 ca"
        },
        {
            "title": "DSCF5431",
            "link": "https:\/\/www.flickr.com\/photos\/78021228@N00\/52422735544\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52422735544_33f222f76a_m.jpg" },
            "date_taken": "2022-10-11T09:57:17-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/78021228@N00\/\">Carl_Daniel<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/78021228@N00\/52422735544\/\" title=\"DSCF5431\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52422735544_33f222f76a_m.jpg\" width=\"160\" height=\"240\" alt=\"DSCF5431\" \/><\/a><\/p> ",
            "published": "2022-10-12T11:56:34Z",
            "author": "nobody@flickr.com (\"Carl_Daniel\")",
            "author_id": "78021228@N00",
            "tags": ""
        },
        {
            "title": " ",
            "link": "https:\/\/www.flickr.com\/photos\/157452351@N02\/52422903175\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52422903175_2b14f4eb7e_m.jpg" },
            "date_taken": "2022-03-26T13:47:32-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/157452351@N02\/\">jeannie.loyd<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/157452351@N02\/52422903175\/\" title=\" \"><img src=\"https:\/\/live.staticflickr.com\/65535\/52422903175_2b14f4eb7e_m.jpg\" width=\"180\" height=\"240\" alt=\" \" \/><\/a><\/p> ",
            "published": "2022-10-12T11:55:21Z",
            "author": "nobody@flickr.com (\"jeannie.loyd\")",
            "author_id": "157452351@N02",
            "tags": ""
        },
        {
            "title": "Munich - oktoberfest",
            "link": "https:\/\/www.flickr.com\/photos\/alessiomiccoliph\/52422903555\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52422903555_c6ae762b36_m.jpg" },
            "date_taken": "2022-09-24T13:41:38-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/alessiomiccoliph\/\">alessio242<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/alessiomiccoliph\/52422903555\/\" title=\"Munich - oktoberfest\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52422903555_c6ae762b36_m.jpg\" width=\"240\" height=\"160\" alt=\"Munich - oktoberfest\" \/><\/a><\/p> <p>Sony alpha 7iii with tamron 28-75<\/p>",
            "published": "2022-10-12T11:55:37Z",
            "author": "nobody@flickr.com (\"alessio242\")",
            "author_id": "196479236@N04",
            "tags": "tamron sonyalpha sony oktoberfest germany munich"
        },
        {
            "title": "M12 Wheel Bolts set of 12 for Smart Roadster and ForTwo models",
            "link": "https:\/\/www.flickr.com\/photos\/edsmartparts\/52422904310\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52422904310_85c06aabb4_m.jpg" },
            "date_taken": "2022-10-12T04:56:12-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/edsmartparts\/\">edsmartparts.nl<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/edsmartparts\/52422904310\/\" title=\"M12 Wheel Bolts set of 12 for Smart Roadster and ForTwo models\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52422904310_85c06aabb4_m.jpg\" width=\"240\" height=\"240\" alt=\"M12 Wheel Bolts set of 12 for Smart Roadster and ForTwo models\" \/><\/a><\/p> <p>M12 Wheel Bolts set of 12 for Smart Roadster and ForTwo models<br \/> \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/<br \/> Description:<br \/> NEW Wheel Bolts set of 12 suitable for Smart Roadster 452 or ForTwo 450\/451<br \/> M12x1.5x 24mm length<br \/> HEAD 15mm<br \/> product reference: N303<br \/> <br \/> Price: \u20ac54.04<br \/> <a href=\"http:\/\/www.edsmartparts.com\" rel=\"noreferrer nofollow\">www.edsmartparts.com<\/a><br \/> #edsmartparts<br \/> @edsmartparts<\/p>",
            "published": "2022-10-12T11:56:12Z",
            "author": "nobody@flickr.com (\"edsmartparts.nl\")",
            "author_id": "190622906@N05",
            "tags": "edsmartparts smart 451 450 452 bolts m12x15x 24mm length q0002158v005c35a00"
        },
        {
            "title": "PEtEMCPRcs",
            "link": "https:\/\/www.flickr.com\/photos\/196599491@N07\/52422904680\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52422904680_a83eb168d9_m.jpg" },
            "date_taken": "2022-10-12T04:56:26-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/196599491@N07\/\">uladzislau.ivanou<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/196599491@N07\/52422904680\/\" title=\"PEtEMCPRcs\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52422904680_a83eb168d9_m.jpg\" width=\"240\" height=\"129\" alt=\"PEtEMCPRcs\" \/><\/a><\/p> ",
            "published": "2022-10-12T11:56:26Z",
            "author": "nobody@flickr.com (\"uladzislau.ivanou\")",
            "author_id": "196599491@N07",
            "tags": ""
        },
        {
            "title": "Constitution Gardens",
            "link": "https:\/\/www.flickr.com\/photos\/186222493@N05\/52422904845\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52422904845_05ed391efb_m.jpg" },
            "date_taken": "2022-10-12T06:52:29-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/186222493@N05\/\">Jeannie in D.C.<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/186222493@N05\/52422904845\/\" title=\"Constitution Gardens\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52422904845_05ed391efb_m.jpg\" width=\"240\" height=\"180\" alt=\"Constitution Gardens\" \/><\/a><\/p> ",
            "published": "2022-10-12T11:56:32Z",
            "author": "nobody@flickr.com (\"Jeannie in D.C.\")",
            "author_id": "186222493@N05",
            "tags": ""
        },
        {
            "title": "PA100299-2-ORF_DxO_DeepPRIME.jpg",
            "link": "https:\/\/www.flickr.com\/photos\/43256651@N07\/52422964963\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52422964963_1e8773bd16_m.jpg" },
            "date_taken": "2022-10-10T15:20:03-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/43256651@N07\/\">macmmh<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/43256651@N07\/52422964963\/\" title=\"PA100299-2-ORF_DxO_DeepPRIME.jpg\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52422964963_1e8773bd16_m.jpg\" width=\"240\" height=\"180\" alt=\"PA100299-2-ORF_DxO_DeepPRIME.jpg\" \/><\/a><\/p> ",
            "published": "2022-10-12T11:55:30Z",
            "author": "nobody@flickr.com (\"macmmh\")",
            "author_id": "43256651@N07",
            "tags": "\u30ce\u30d3\u30bf\u30ad"
        },
        {
            "title": "sch\u00f6ner Perlmutterfalter",
            "link": "https:\/\/www.flickr.com\/photos\/12639178@N07\/52422965243\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52422965243_2417d61353_m.jpg" },
            "date_taken": "2022-10-11T11:31:35-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/12639178@N07\/\">naturgucker.de<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/12639178@N07\/52422965243\/\" title=\"sch\u00f6ner Perlmutterfalter\"><img src=\"https:\/\/live.staticflickr.com\/65535\/52422965243_2417d61353_m.jpg\" width=\"240\" height=\"240\" alt=\"sch\u00f6ner Perlmutterfalter\" \/><\/a><\/p> <p>Kleiner Perlmutterfalter (Issoria lathonia)<br \/> (c) Inge Bartholom\u00e4us-Kaelcke<\/p>",
            "published": "2022-10-12T11:55:40Z",
            "author": "nobody@flickr.com (\"naturgucker.de\")",
            "author_id": "12639178@N07",
            "tags": "ngidn1860518716 issorialathonia kleinerperlmutterfalter"
        },
        {
            "title": " ",
            "link": "https:\/\/www.flickr.com\/photos\/31153460@N07\/52422966898\/",
            "media": { "m": "https:\/\/live.staticflickr.com\/65535\/52422966898_1c6181442e_m.jpg" },
            "date_taken": "2022-10-12T12:03:44-08:00",
            "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/31153460@N07\/\">EvisNP<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/31153460@N07\/52422966898\/\" title=\" \"><img src=\"https:\/\/live.staticflickr.com\/65535\/52422966898_1c6181442e_m.jpg\" width=\"240\" height=\"180\" alt=\" \" \/><\/a><\/p> ",
            "published": "2022-10-12T11:56:46Z",
            "author": "nobody@flickr.com (\"EvisNP\")",
            "author_id": "31153460@N07",
            "tags": ""
        }
    ];
}