import { Component } from '@angular/core';
import { ListsPage } from '../lists/lists';


@Component ({selector: 'page-tabs',
template: `
    <ion-tabs>
    <ion-tab [root]="listsPage" tabTitle="Lists" tabIcon="list"></ion-tab>
   
    
    </ion-tabs>
    `
})

export class TabsPage {
    listsPage = ListsPage;

}