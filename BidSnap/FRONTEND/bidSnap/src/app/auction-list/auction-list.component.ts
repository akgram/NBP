import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
//import { MatSpinnerModule } from '@angular/material/progress-spinner';

interface Auction {
  id: number;
  title: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-auction-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss']
})
export class AuctionListComponent implements OnInit {
  auctions: any[] = [
    {
      id: '1',
      title: 'Laptop HP Pavilion',
      price: 40000,
      image: 'https://yekupi.blob.core.windows.net/ekupirs/1200Wx1200H/EK000523853_1.image',
    },
    {
      id: '2',
      title: 'Pametan telefon Samsung Galaxy S21',
      price: 75000,
      image: 'https://i.guim.co.uk/img/media/460229e455cd38808a11b1d0ebe866fcfd5f06ae/373_437_4638_2783/master/4638.jpg?width=1200&quality=85&auto=format&fit=max&s=8e5f2ac07c6de563bc79c746528b0cf7',
    },
    {
      id: '3',
      title: 'Gaming Monitor 27" 144Hz',
      price: 30000,
      image: 'https://img.gigatron.rs/img/products/large/image660bdebc57c79.jpg',
    },
    {
      id: '4',
      title: 'Mercedes E220 w211 176HP',
      price: 'priceless',
      image: 'https://cdn.xezii.com/static/photos/images/large_extend/84ccb1cbf67474ad71d6b3fbd6bf0e4109bd4134.jpg?1645457502',
    },
  ];
  loading = true;
  error = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Ako želiš da simuliraš učitavanje, možeš da koristiš setTimeout kao što je prikazano ispod
    setTimeout(() => {
      this.loading = false; // Ovdje se simulira učitavanje podataka
    }, 1000);
  }

  createAuction() {
    console.log('Kreiranje nove aukcije');
    // Ovdje ide kod za kreiranje nove aukcije (možda putem modala ili novog formulara)
  }

  placeBid(auctionId: number) {
    console.log(`Postavljanje ponude za aukciju ID: ${auctionId}`);
    // Ovdje ide kod za postavljanje ponude na aukciju
  }


  goToAuction(auctionId: string): void {
    console.log('Id aukcije:', auctionId);
    // Ovdje možeš implementirati logiku za prelazak na detalje aukcije
    // Na primer, router navigacija ili modals
  }
}
