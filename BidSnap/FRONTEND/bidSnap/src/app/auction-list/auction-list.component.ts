import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'; 

interface Auction {
  id: number;
  title: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-auction-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss']
})
export class AuctionListComponent implements OnInit {
  auctions: Auction[] = [
    {
      id: 1,
      title: 'Laptop HP Pavilion',
      price: 40000,
      image: 'https://yekupi.blob.core.windows.net/ekupirs/1200Wx1200H/EK000523853_1.image',
    },
    {
      id: 2,
      title: 'Pametan telefon Samsung Galaxy S21',
      price: 75000,
      image: 'https://i.guim.co.uk/img/media/460229e455cd38808a11b1d0ebe866fcfd5f06ae/373_437_4638_2783/master/4638.jpg?width=1200&quality=85&auto=format&fit=max&s=8e5f2ac07c6de563bc79c746528b0cf7',
    },
    {
      id: 3,
      title: 'Gaming Monitor 27" 144Hz',
      price: 30000,
      image: 'https://img.gigatron.rs/img/products/large/image660bdebc57c79.jpg',
    },
    {
      id: 4,
      title: 'Mercedes E220 w211 176HP',
      price: NaN, // Pošto cena nije broj, koristim NaN umesto stringa
      image: 'https://cdn.xezii.com/static/photos/images/large_extend/84ccb1cbf67474ad71d6b3fbd6bf0e4109bd4134.jpg?1645457502',
    },
  ];

  loading = true;
  error = '';

  // Modal kontrola
  isModalOpen = false;
  email = '';
  password = '';
  sentPassword: string = ''; // Čuvanje poslate lozinke
  isButtonDisabled: boolean = false;
  timer: number = 5; // Početna vrednost tajmera
  isTimerVisible: boolean = false; // Kontrola vidljivosti tajmera
  isAuctionFormVisible: boolean = false; // Kontrola prikaza forme za dodavanje aukcije
  isNextButtonVisible: boolean = false; // Kontrola vidljivosti dugmeta za dalje

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.email = '';
    this.password = '';
    this.isNextButtonVisible = false;
  }

  sendPassword() {
    if (!this.email) {
      alert('Unesite email!');
      return;
    }

    this.isButtonDisabled = true; // Onemogući dugme
    this.isTimerVisible = true; // Prikazivanje tajmera

    this.http.post('http://localhost:3000/send-email', { email: this.email })
      .subscribe({
        next: (response) => {
          console.log(response);
          //alert('Lozinka je poslata!');
          this.sentPassword = '123456';
          this.startTimer(); // Pokretanje tajmera kada se uspešno pošalje email
        },
        error: (err) => {
          console.error('Došlo je do greške:', err);
          alert('Greška pri slanju emaila!');
          this.isButtonDisabled = false; // Omogući dugme u slučaju greške
          this.isTimerVisible = false; // Sakrij tajmer u slučaju greške
        }
      });

    //this.closeModal(); // Zatvori modal nakon slanja
  }

  startTimer() {
    const interval = setInterval(() => {
      this.timer--;
      if (this.timer <= 0) {
        clearInterval(interval);
        this.isButtonDisabled = false; // Omogući dugme nakon 5 sekundi
        this.isTimerVisible = false; // Sakrij tajmer
        this.timer = 5; // Resetuj timer
      }
    }, 1000); // Tajmer na 1 sekundu
  }

  onPasswordChange() {
    // Provera da li unesena lozinka odgovara poslatom
    if (this.password === this.sentPassword) {
      this.isNextButtonVisible = true; // Pokaži dugme za dalje ako se lozinka poklapa
    } else {
      this.isNextButtonVisible = false; // Sakrij dugme ako lozinka nije ispravna
    }
  }

  openAuctionForm() {
    this.isAuctionFormVisible = true; // Prikazivanje forme za dodavanje aukcije
  }
  closeAuctionForm() {
    this.isAuctionFormVisible = false;
    this.isNextButtonVisible = false;
  }

  addAuction() {
    // Ovdje obradite logiku za dodavanje aukcije
    alert('Aukcija je uspešno dodata!');
  }

  createAuction() {
    console.log('Kreiranje nove aukcije');
    this.openModal();
  }

  placeBid(auctionId: number) {
    console.log(`Postavljanje ponude za aukciju ID: ${auctionId}`);
  }

  goToAuction(auctionId: number): void {
    console.log('Id aukcije:', auctionId);
  }
}
