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
  auctions: Auction[] = [];

  loading = true;
  error = '';

  isModalOpen = false;
  email = '';
  password = '';
  sentPassword: string = '';
  isButtonDisabled: boolean = false;
  timer: number = 5;
  isTimerVisible: boolean = false;
  isAuctionFormVisible: boolean = false;
  isNextButtonVisible: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);

    this.getAuctions();
    
  }

  getAuctions() {
    this.http.get<Auction[]>('http://localhost:3000/auctions').subscribe(
      (data) => {
        this.auctions = data;  // ✅ Ispravljena dodela podataka
      },
      (error) => {
        console.error('Greška pri učitavanju aukcija:', error);
        this.error = 'Došlo je do greške pri učitavanju aukcija.';
      }
    );
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

  async sendPassword() {
    if (!this.email) {
      alert('Unesite email!');
      return;
    }
  
    this.isButtonDisabled = true;
    this.isTimerVisible = true;
  
    try {
      const response : any = await this.http.post<{ password: string }>('http://localhost:3000/send-email', { email: this.email }).toPromise();
      console.log(response);
      this.sentPassword = response.password;
      this.startTimer();
    } catch (err) {
      console.error('Došlo je do greške:', err);
      alert('Greška pri slanju emaila!');
      this.isButtonDisabled = false;
      this.isTimerVisible = false;
    }
  }

  startTimer() {
    const interval = setInterval(() => {
      this.timer--;
      if (this.timer <= 0) {
        clearInterval(interval);
        this.isButtonDisabled = false;
        this.isTimerVisible = false;
        this.timer = 5;
      }
    }, 1000);
  }

  onPasswordChange() {
    if (this.password === this.sentPassword) {
      this.isNextButtonVisible = true;
    } else {
      this.isNextButtonVisible = false;
    }
  }

  openAuctionForm() {
    this.isAuctionFormVisible = true;
  }
  closeAuctionForm() {
    this.isAuctionFormVisible = false;
    this.isNextButtonVisible = false;
  }

  addAuction() {
    const titleInput = document.getElementById('auctionTitle') as HTMLInputElement;
    const priceInput = document.getElementById('auctionPrice') as HTMLInputElement;
    const imageInput = document.getElementById('auctionImage') as HTMLInputElement;

    if (!titleInput.value || !priceInput.value || !imageInput.files?.length) {
      alert('Sva polja moraju biti popunjena!');
      return;
    }

    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const newAuction: Auction = {
        id: this.auctions.length + 1,
        title: titleInput.value,
        price: parseFloat(priceInput.value),
        image: reader.result as string, // Slika se konvertuje u Base64 string
      };
  
      this.http.post<Auction>('http://localhost:3000/add-auction', newAuction).subscribe({
        next: (response) => {
          //this.auctions.push(response); // Dodaj aukciju u listu
          this.getAuctions();
          this.closeAuctionForm();
          this.closeModal();
        },
        error: (err) => {
          console.error('Greška pri dodavanju aukcije:', err);
          alert('Došlo je do greške pri dodavanju aukcije!');
        },
      });
    };
  
    reader.readAsDataURL(file);



    this.closeAuctionForm();
    this.closeModal();
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
