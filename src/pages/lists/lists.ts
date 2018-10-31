import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';



@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {
  items = ['Apples', 'Bananas', 'Berries'];

  constructor (private navCtrl: NavController){}

  reorderItems(indexes){
    this.items = reorderArray(this.items, indexes);
}

}
