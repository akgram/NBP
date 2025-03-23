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
  offer: number;
  image: string;
  owner: string;
  desc: string;
  createdAt: string;
}

interface Users {
  email: string;
  password: string;
}

interface Offers {
  email: string;
  offer: number;
  id_auction: number;
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
  users: Users[] = [];
  offers: Offers[] = [];

  loading = true;
  error = '';

  // cena za bid
  startPrice: number = -1;
  offerPrice: number = -1;
  range: number = this.startPrice;
  isRangeVisible: boolean = false;

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
  isEditButtonVisible: boolean = false;

  // za naslov forme
  Label1Visible: boolean = false;
  Label2Visible: boolean = false;

  // za 1 formu ali 2 svrhe
  isEditBtnConVisible: boolean = false;
  isAddBtnConVisible: boolean = false;

  // za edit
  auctionTitle: string = '';
  auctionDesc: string = '';
  auctionPrice: number = 0;
  auctionOffer: number = 0;
  auctionImage: string = '';
  auctionTime: string = '';
  auctionIdToEdit: number | null = null;

  // za opis preko slike
  hoveredAuction: number | null = null;

  // da znamo koja je forma otvorena :)
  location: string = "";

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);

    this.getAuctions();
    this.getUsers();
    this.getOffers();
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

  getUsers() {
    this.http.get<Users[]>('http://localhost:3000/users').subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        //console.error('Greška pri učitavanju aukcija:', error);
        //this.error = 'Došlo je do greške pri učitavanju aukcija.';
        alert("Nema ponudjivaca!");
      }
    );
  }

  getOffers() {
    this.http.get<Offers[]>('http://localhost:3000/offers').subscribe(
      (data) => {
        this.offers = data;
      },
      (error) => {
        //console.error('Greška pri učitavanju aukcija:', error);
        //this.error = 'Došlo je do greške pri učitavanju aukcija.';
        alert("Nema ponuda!");
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
    this.isEditButtonVisible = false;

    this.isRangeVisible = false;
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

  onEmailChange() {
    const user = this.users.find(u => u.email === this.email);
    const auction = this.auctions.find(auction => auction.id === this.id);

    if(user && user.password === this.password)
    {
      if(this.location == 'create') {
        this.isNextButtonVisible = true;
        this.isDeleteButtonVisible = false;
        this.isEditButtonVisible = false;

        this.isAddBtnConVisible = true;
        this.isEditBtnConVisible = false;

        this.isRangeVisible = false;
      }
      else if(this.location == 'delete') {
        this.isDeleteButtonVisible = true;
        this.isNextButtonVisible = false;
        this.isEditButtonVisible = false;

        this.isAddBtnConVisible = false;
        this.isEditBtnConVisible = false;

        this.isRangeVisible = false;
      }
      else if(this.location == 'edit') {
        this.isDeleteButtonVisible = false;
        this.isNextButtonVisible = false;
        this.isEditButtonVisible = true;

        this.isAddBtnConVisible = false;
        this.isEditBtnConVisible = true;

        this.isRangeVisible = false;
      }
      else if(this.location == 'bid' && user?.email !== auction?.owner) {
        this.isDeleteButtonVisible = false;
        this.isNextButtonVisible = false;
        this.isEditButtonVisible = false;

        this.isAddBtnConVisible = false;
        this.isEditBtnConVisible = false;

        this.isRangeVisible = true;
      }
      else
      {
        alert("Ne mozete dati ponudu za svoj predmet!");
      }

    } else {
      this.isNextButtonVisible = false;
      this.isDeleteButtonVisible = false;
      this.isNextButtonVisible = false;
      this.isEditButtonVisible = false;

      this.isAddBtnConVisible = false;
      this.isEditBtnConVisible = false;

      this.isRangeVisible = false;
    }

  }

  onPasswordChange() {
    const user = this.users.find(u => u.email === this.email);
    const auction = this.auctions.find(auction => auction.id === this.id);

    //console.log(this.email);
    //console.log(user?.email);
    //console.log(auction?.owner);

    if (this.email && this.password === this.sentPassword) {

      if(this.location == 'create') {
        this.isNextButtonVisible = true;
        this.isDeleteButtonVisible = false;
        this.isEditButtonVisible = false;

        this.isAddBtnConVisible = true;
        this.isEditBtnConVisible = false;

        this.isRangeVisible = false;
      }
      else if(this.location == 'delete') {
        this.isDeleteButtonVisible = true;
        this.isNextButtonVisible = false;
        this.isEditButtonVisible = false;

        this.isAddBtnConVisible = false;
        this.isEditBtnConVisible = false;

        this.isRangeVisible = false;
      }
      else if(this.location == 'edit') {
        this.isDeleteButtonVisible = false;
        this.isNextButtonVisible = false;
        this.isEditButtonVisible = true;

        this.isAddBtnConVisible = false;
        this.isEditBtnConVisible = true;

        this.isRangeVisible = false;
      }
      else if(this.location == 'bid' && user?.email !== auction?.owner) {
        this.isDeleteButtonVisible = false;
        this.isNextButtonVisible = false;
        this.isEditButtonVisible = false;

        this.isAddBtnConVisible = false;
        this.isEditBtnConVisible = false;

        this.isRangeVisible = true;
      }
      else
      {
        alert("Ne mozete dati ponudu za svoj predmet!");
      }

    } else {
      this.isNextButtonVisible = false;
      this.isDeleteButtonVisible = false;
      this.isNextButtonVisible = false;
      this.isEditButtonVisible = false;

      this.isAddBtnConVisible = false;
      this.isEditBtnConVisible = false;

      this.isRangeVisible = false;
    }
  }

  openAuctionForm() {
    this.isAuctionFormVisible = true;

    if(this.location == "create")
    {
      this.Label1Visible = true;
      this.Label2Visible = false;
    }
    else if(this.location = "edit")
    {
      this.Label1Visible = false;
      this.Label2Visible = true;
    }
  }
  closeAuctionForm() {
    this.isAuctionFormVisible = false;
    this.isNextButtonVisible = false;
    this.closeModal();
  }

  addAuction() {
    const titleInput = document.getElementById('auctionTitle') as HTMLInputElement;
    const priceInput = document.getElementById('auctionPrice') as HTMLInputElement;
    const imageInput = document.getElementById('auctionImage') as HTMLInputElement;
    const owner = document.getElementById('emailOwner') as HTMLInputElement;
    const desc = document.getElementById('auctionDescription') as HTMLInputElement;

    if (!titleInput.value || !priceInput.value || !imageInput.files?.length || !owner.value) {
      alert('Sva polja moraju biti popunjena!');
      return;
    }

    const file = imageInput.files[0];

    if (file.size > 60 * 1024) { // 50KB = 50 * 1024 bytes
      alert('Slika je prevelika! Maksimalna veličina slike je 50KB.');
      return;
    }

    const reader = new FileReader();

    const maxId: number = this.auctions.reduce((max, auction) => { return Math.max(max, Number(auction.id)); }, 0);

    reader.onload = () => {
      const newAuction: Auction = {
        id: maxId + 1,
        title: titleInput.value,
        price: parseFloat(priceInput.value),
        offer: parseFloat(priceInput.value),
        image: reader.result as string,
        owner: owner.value,
        desc: desc.value,
        createdAt: new Date().toLocaleString(),
      };
  
      this.http.post<Auction>('http://localhost:3000/add-auction', newAuction).subscribe({
        next: (response) => {
          //this.auctions.push(response); // Dodaj aukciju u listu

          this.auctionIdToEdit = null;
          this.auctionTitle = '';
          this.auctionDesc = '';
          this.auctionPrice = 0;
          this.auctionOffer = 0;
          this.auctionImage = '';


          this.getAuctions();
          this.getUsers();
          this.getOffers();
          this.closeAuctionForm();
          this.closeModal();
        },
        error: (err) => {
          console.error('Greška pri dodavanju aukcije:', err);

          this.auctionIdToEdit = null;
          this.auctionTitle = '';
          this.auctionDesc = '';
          this.auctionPrice = 0;
          this.auctionOffer = 0;
          this.auctionImage = '';


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


  editAuction(): void {
    this.openAuctionForm(); // Otvori formu za izmenu
  
    const auction = this.auctions.find(a => a.id === this.id);

    if (auction) {
      this.auctionIdToEdit = auction.id;
      this.auctionTitle = auction.title;
      this.auctionDesc = auction.desc;
      this.auctionPrice = auction.price;
      this.auctionOffer = auction.price;
      this.auctionImage = auction.image;
      this.isAuctionFormVisible = true;
    } 
  }


  saveAuction(): void {

    const auction = this.auctions.find(auction => auction.id === this.id);

    if (auction && auction.owner === this.email) {
      const auctionData = {
        title: this.auctionTitle,
        desc: this.auctionDesc,
        price: this.auctionPrice,
        offer: this.auctionOffer,
        image: this.auctionImage,  // Slika u formatu URL-a
        createdAt: new Date().toLocaleString()
      };

      this.http.put(`http://localhost:3000/edit/${this.auctionIdToEdit}`, auctionData).subscribe(response => {
        alert('Aukcija uspešno ažurirana!');

        this.auctionIdToEdit = null;
        this.auctionTitle = '';
        this.auctionDesc = '';
        this.auctionPrice = 0;
        this.auctionOffer = 0;
        this.auctionImage = '';

        this.getAuctions();
        this.getUsers();
        this.getOffers();
      }, error => {

        this.auctionIdToEdit = null;
        this.auctionTitle = '';
        this.auctionDesc = '';
        this.auctionPrice = 0;
        this.auctionOffer = 0;
        this.auctionImage = '';

        console.error('Greška pri ažuriranju aukcije:', error);
      });
    } else {
      console.log("Ne možeš da ažuriraš ovu aukciju");

      this.auctionIdToEdit = null;
      this.auctionTitle = '';
      this.auctionDesc = '';
      this.auctionPrice = 0;
      this.auctionOffer = 0;
      this.auctionImage = '';


      alert('Nemate ovlašćenje za ažuriranje ove aukcije!');
    }
    this.closeAuctionForm();
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
    this.openModal();
  }

  bidAuctionForm() {
    this.location = "bid";
    this.openModal();
  }

  placeOffer() {
    console.log(this.range);


    // PUB SUB za notify

    if(this.range === this.startPrice * 100)
    {
      alert("Čestitamo!\nKupili ste ovaj predmet po najvišoj ceni.")

      // DAJ BACK-U DOZNANJA DA JE KUPLJEN PROIZVOD ili samo zovi delete za tu aukciju
    }

    let old = this.offerPrice;
    this.offerPrice = this.range;

    const of = this.offers.filter(off => off.id_auction === parseInt(this.id.toString()));


    const auctionData = {
      offer: this.offerPrice,
      bidder: this.email,
      count: of.length,
    };

    this.http.put(`http://localhost:3000/offer/${this.id}`, auctionData).subscribe(response => {
      alert('Ponuda uspešno ažurirana!');

      this.getAuctions();
      this.getUsers();
      this.getOffers();
    }, error => {
      this.range = old;
      console.error('Greška pri ažuriranju ponude:', error);
    });

    this.closeModal();
  }

  goToAuction(auctionId: number): void {
    console.log('Id aukcije:', auctionId);
    this.id = auctionId;

    const auction = this.auctions.find(auction => auction.id === this.id);

    if(auction)
    {
      this.startPrice = auction.price;
      this.offerPrice = parseFloat(this.startPrice.toString()) * 0.1 + parseFloat(auction.offer.toString());
      this.range = this.offerPrice;
    }
  }
}
