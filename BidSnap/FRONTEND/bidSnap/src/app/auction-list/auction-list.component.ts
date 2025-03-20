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
  owner: string;
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
  id: number = -1;
  sentPassword: string = 'N3v3r_Gu3ssM3_@123!ZyX0W';
  isButtonDisabled: boolean = false;
  timer: number = 5;
  isTimerVisible: boolean = false;
  isAuctionFormVisible: boolean = false;
  isNextButtonVisible: boolean = false;
  isDeleteButtonVisible: boolean = false;

  location: string = "";

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
        this.auctions = data;
      },
      (error) => {
        //console.error('Greška pri učitavanju aukcija:', error);
        //this.error = 'Došlo je do greške pri učitavanju aukcija.';
        alert("Nema aktivnih aukcija!");
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
    this.sentPassword = 'N3v3r_Gu3ssM3_@123!ZyX0W';
    this.isNextButtonVisible = false;
    this.isDeleteButtonVisible = false;
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
    if (this.email && this.password === this.sentPassword) {

      if(this.location == 'create') {
        this.isNextButtonVisible = true;
        this.isDeleteButtonVisible = false;
      }
      else if(this.location == 'delete') {
        this.isDeleteButtonVisible = true;
        this.isNextButtonVisible = false;
      }

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
    const owner = document.getElementById('emailOwner') as HTMLInputElement;
    const titleInput = document.getElementById('auctionTitle') as HTMLInputElement;
    const priceInput = document.getElementById('auctionPrice') as HTMLInputElement;
    const imageInput = document.getElementById('auctionImage') as HTMLInputElement;

    if (!titleInput.value || !priceInput.value || !imageInput.files?.length || !owner.value) {
      alert('Sva polja moraju biti popunjena!');
      return;
    }

    const file = imageInput.files[0];
    const reader = new FileReader();

    const maxId: number = this.auctions.reduce((max, auction) => { return Math.max(max, Number(auction.id)); }, 0);

    reader.onload = () => {
      const newAuction: Auction = {
        id: maxId + 1,
        title: titleInput.value,
        price: parseFloat(priceInput.value),
        image: reader.result as string,
        owner: owner.value,
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

  deleteAuction(): void {
    // Pronađi aukciju sa određenim id-jem
    const auction = this.auctions.find(auction => auction.id === this.id);
  
    if (auction && auction.owner === this.email) {
      this.http.delete(`http://localhost:3000/auction/${this.id}`).subscribe({
        next: () => {
          this.auctions = this.auctions.filter(a => a.id !== this.id);
          alert('Aukcija je uspešno obrisana');
          console.log('Aukcija je uspešno obrisana');
        },
        error: (err) => {
          console.error('Greška pri brisanju aukcije:', err);
        }
      });
    } else {
      console.log("Ne možeš da obrišeš ovu aukciju");
      alert('Nemate ovlascenje za brisanje ove aukcije!');
    }

    this.closeModal();
  }
  
  createAuctionForm() {
    this.location = "create";
    this.openModal();
  }

  deleteAuctionForm() {
    this.location = "delete";
    this.openModal();
  }

  editAuctionForm() {
    this.location = "edit";
    this.openAuctionForm();
  }


  placeBid(auctionId: number) {
    console.log(`Postavljanje ponude za aukciju ID: ${auctionId}`);
  }

  goToAuction(auctionId: number): void {
    console.log('Id aukcije:', auctionId);
    this.id = auctionId;
  }
}
