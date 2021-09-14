import {Component} from '@angular/core';
import {VERSION} from '@angular/material';
import {NavItem} from './nav-item';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent { 
  version = VERSION;
  navItems: NavItem[] = [
    {
        "Id": 72,
        "Name": "Appliances",
        "Slug": "appliances",
        "Parent": 0,
        "term_url": "appliances",
        "attr": 1,
        "children": [
            {
                "Id": 75,
                "Name": "AC",
                "Slug": "ac",
                "Parent": 72,
                "term_url": "appliances/ac",
                "attr": 2,
                "children": []
            },
            {
                "Id": 76,
                "Name": "Air Purifier",
                "Slug": "air-purifier",
                "Parent": 72,
                "term_url": "appliances/air-purifier",
                "attr": 2,
                "children": []
            },
            {
                "Id": 78,
                "Name": "Fans & Air Cooler",
                "Slug": "fans-and-air-cooler",
                "Parent": 72,
                "term_url": "appliances/fans-and-air-cooler",
                "attr": 2,
                "children": []
            },
            {
                "Id": 79,
                "Name": "Heater",
                "Slug": "heater",
                "Parent": 72,
                "term_url": "appliances/heater",
                "attr": 2,
                "children": []
            }
        ]
    }
]
    }
