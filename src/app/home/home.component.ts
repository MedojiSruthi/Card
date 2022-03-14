import { Component, OnInit } from '@angular/core';
import { CardList } from '../card-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
cardList:CardList[]|undefined;
  constructor() { }

  ngOnInit(): void {
    
  
this.cardList=[{
  img:"https://i1.fnp.com/assets/images/custom//decoration-services/decoration-by-occasion/kids-decoration-19-march-2019.jpg",
title:"SS Event",
address:"Coimbature",
},
{
img:"https://i1.fnp.com/assets/images/custom//decoration-services/decoration-by-occasion/kids-decoration-19-march-2019.jpg",
title:"SS Event",
address:"Coimbature",
},

{
  img:"https://i1.fnp.com/assets/images/custom//decoration-services/decoration-by-occasion/kids-decoration-19-march-2019.jpg",
  title:"SS Event",
  address:"Coimbature",
  },

  {
    img:"https://i1.fnp.com/assets/images/custom//decoration-services/decoration-by-occasion/kids-decoration-19-march-2019.jpg",
    title:"SS Event",
    address:"Coimbature",
    },


]
}
}
