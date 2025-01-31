import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DataSet, Network } from 'vis-network/standalone/umd/vis-network.min.js';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';  // Importuj CommonModule
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Dodaj FormsModule

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any[] = [];
  title: string = '';

  constructor(private dataService: DataService, private http: HttpClient) {}

  ngOnInit(): void {}

  onAkteriClick(): void {
    this.title = 'Akteri';
    this.dataService.getAkteri().subscribe({
      next: (response) => {
        this.data = response;
        this.drawGraph(response.nodes, response.edges, this.title);
      },
      error: (err) => {
        console.error('Greška prilikom preuzimanja aktera:', err);
      }
    });
  }

  onVozilaClick(): void {
    this.title = 'Vozila';
    this.dataService.getVozila().subscribe({
      next: (response) => {
        console.log('Vozila data:', response);  // Dodaj ovo da proveriš šta dobijaš
        this.data = response;
        this.drawGraph(response.nodes, response.edges, this.title);
      },
      error: (err) => {
        console.error('Greška prilikom preuzimanja vozila:', err);
      }
    });
  }

  onIncidentiClick(): void {
    this.title = 'Incidenti';
    this.dataService.getIncidenti().subscribe({
      next: (response) => {
        console.log('Incidenti data:', response);  // Dodaj ovo da proveriš šta dobijaš
        this.data = response;
        this.drawGraph(response.nodes, response.edges, this.title);
      },
      error: (err) => {
        console.error('Greška prilikom preuzimanja incidenata:', err);
      }
    });
  }

  onLokacijeClick(): void {
    this.title = 'Lokacije';
    this.dataService.getLokacije().subscribe({
      next: (response) => {
        console.log('Lokacije data:', response);  // Dodaj ovo da proveriš šta dobijaš
        this.data = response;
        this.drawGraph(response.nodes, response.edges, this.title);
      },
      error: (err) => {
        console.error('Greška prilikom preuzimanja lokacija:', err);
      }
    });
  }

  getNodeColor(title: string) {
    switch (title) {
      case 'Akteri':
        return { background: 'pink', border: 'black' };  // Roze za Aktere
      case 'Incidenti':
        return { background: 'red', border: 'black' };      // Crveno za Incidenti
      case 'Vozila':
        return { background: 'blue', border: 'black' };     // Plavo za Vozila
      case 'Lokacije':
        return { background: 'orange', border: 'black' }; // Narandžasto za Lokaciju
      default:
        return { background: 'gray', border: 'black' };        // Podrazumevano (sivo)
    }
  }

  drawGraph(nodes: any[], edges: any[], title: string): void {
    const container = document.querySelector('.graph');
    if (container) {

      const validEdges = edges;
      if(edges.length > 0)
      {
        const validEdges = edges.filter(edge => edge.to && edge.from);
      }

      const nodesData = new DataSet(nodes || []);
      const edgesData = new DataSet(validEdges || []); // vraca sve moguce veze i one sa null pa ih filtriramo da se izbace null veze

      console.log('Nodes data:', nodes);
      console.log('Edges data:', validEdges);

      const data = {
        nodes: nodesData,
        edges: edgesData
      };
      const options = {
        nodes: {
          shape: 'dot',
          size: 25,
          font: { size: 15 },
          color: this.getNodeColor(title),
        },
        edges: {
          color: 'white',
          width: 5,
          length: 300
        },
        physics: {
          enabled: true,
          solver: 'forceAtlas2Based',
          forceAtlas2Based: {
            gravitationalConstant: -120, // Udaljenost između čvorova
            centralGravity: 0.01, // Kontroliše privlačnost ka centru
            springLength: 200, // Dužina veze (proporcionalno rastojanju između čvorova)
            springConstant: 0.08
          }
        }
      };
  
      // Kreiraj graf samo ako su podaci validni
      if (nodesData.length > 0) {
        const network = new Network(container as HTMLElement, data, options);
        console.log('Graph initialized');
      } else {
        console.log('No data to display on graph');
      }
    } else {
      console.error('Element .graph not found');
    }
  }
/////////////////////////////////////////////////////////////////////////////////////////
//add element
  nodeTypes: string[] = []; // Lista tipova čvorova
  selectedType: string = ''; // Izabrani tip
  nodeAttributes: string[] = []; // Izabrani tip

  loadNodeTypes() {
    this.dataService.getTipovi().subscribe({
      next: (data) => {
        this.nodeTypes = data; // Ubacujemo tipove u listu
      },
      error: (error) => {
        console.error('Greška pri učitavanju tipova:', error);
      }
    });
  }

  loadNodeAttributes() {
    if (!this.selectedType) return; // Proveri da li je tip izabran
  
    this.dataService.getAttributesForType(this.selectedType).subscribe({
      next: (data) => {
        this.nodeAttributes = data; // Atributi za selektovani tip
        console.log(this.nodeAttributes);
        this.nodeAttributes = this.nodeAttributes.map(type => type.charAt(0).toUpperCase() + type.slice(1).toLowerCase());
      },
      error: (error) => {
        console.error('Greška pri učitavanju atributa:', error);
      }
    });
  }  


  showAddElement: boolean = false;
  toggleAddElement() {
    if(!this.showAddElement)
    {
      this.loadNodeTypes();
    }
    this.showAddElement = !this.showAddElement;
  }

  inputFields: string[] = []; // Polja koja će biti generisana
  // Metoda koja ažurira broj input polja na osnovu izabranog tipa
  updateInputFields() {
    this.inputFields = []; // Resetovanje polja
    if (this.selectedType === 'Kriminalac') {
      this.inputFields = ['', '', '', '', ''];
    } else if (this.selectedType === 'Vozilo') {
      this.inputFields = ['', '', '', ''];
    } else if (this.selectedType === 'Lokacija') {
      this.inputFields = ['', '', '', ''];
    } else if (this.selectedType === 'Incident') {
      this.inputFields = ['', '', '', ''];
    }
    this.inputFields = this.nodeAttributes;

    this.inputFields = Array(this.nodeAttributes.length).fill('');
    this.loadNodeAttributes();
  }

  //elementType: string = '';
  //additionalInfo: string = '';

  onSubmit() {
    if (this.inputFields.length === 0) {
      console.error('Nema unosa!');
      return;
    }
  
    // Kreiraj objekat sa podacima za unos sa pravilnim tipom
    const nodeData: Record<string, string> = this.inputFields.reduce((acc, value, index) => {
      acc[this.nodeAttributes[index]] = value;
      return acc;
    }, {} as Record<string, string>);  // Pravilno inicijalizujemo kao Record<string, string>
  
    nodeData['type'] = this.selectedType;

      console.log(nodeData)
    // Pozivamo DataService koji će slati podatke backendu
    this.dataService.addNodeToDatabase(nodeData).subscribe({
      next: (response) => {
        console.log('Uspešno dodato:', response);
        this.inputFields = Array(this.nodeAttributes.length).fill('');
        this.toggleAddElement();
        // Ovde možeš dodati logiku za uspešno dodavanje, kao što je obaveštenje korisnika
      },
      error: (error) => {
        console.error('Greška pri dodavanju:', error);
        // Obradi grešku ako je potrebno
      }
    });
  }
}
