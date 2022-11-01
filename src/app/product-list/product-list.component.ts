import { Component } from '@angular/core'
import { products } from '../products'


@Component({
    selector:'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
    products = products;

    share(){
        window.alert('The product has been shared!')
    }
    onNotify(){
        window.alert('Notification will be sent once the product will be on discount')
    }
    // onTrial(){
    //     window.alert('Trial period has ended!')
    // }
}