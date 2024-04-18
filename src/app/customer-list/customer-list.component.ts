import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {



  constructor(){

  }

  selectedCustomer:any;

  customers : Customer[] =[

    { customerNo:1,name:'Ashok1',city:'HNK',address:'Ashoka cly',country:'India'},
    { customerNo:2,name:'Ashok2',city:'HNK',address:'Ashoka cly',country:'India'},
    { customerNo:3,name:'Ashok3',city:'HNK',address:'Ashoka cly',country:'India'},
    { customerNo:4,name:'Ashok4',city:'HNK',address:'Ashoka cly',country:'India'}
  ]

}
