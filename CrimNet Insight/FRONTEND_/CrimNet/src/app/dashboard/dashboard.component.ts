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

  onBazaClick(): void {
    this.selectedNode = null;
    this.title = 'Baza';
    this.dataService.getBaza().subscribe({
      next: (response) => {
        this.data = response;
        this.drawGraph(response.nodes, response.edges, this.title);
      },
      error: (err) => {
        console.error('Greška prilikom preuzimanja aktera:', err);
      }
    });
  }

  onAkteriClick(): void {
    this.selectedNode = null;
    this.title = 'Kriminalac';
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
    this.selectedNode = null;
    this.title = 'Vozilo';
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
    this.selectedNode = null;
    this.title = 'Incident';
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
    this.selectedNode = null;
    this.title = 'Lokacija';
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
      case 'Kriminalac':
        return { background: '#b30059', border: 'black' };  // Tamnoroze
      case 'Incident':
        return { background: '#800000', border: 'black' };  // Tamnocrveno
      case 'Vozilo':
        return { background: '#000080', border: 'black' };  // Tamnoplavo
      case 'Lokacija':
        return { background: '#cc5500', border: 'black' };  // Tamnonarandžasto
      default:
        return { background: '#4d4d4d', border: 'black' };  // Tamnosivo
    }
  }  

  selectedNode: any = null;
  network: any = null;

  drawGraph(nodes: any[], edges: any[], title: string): void {
    const container = document.querySelector('.graph');
    if (container) {

      const validEdges = edges;
      if(edges.length > 0)
      {
        const validEdges = edges.filter(edge => edge.to && edge.from);
      }

      let nodesData = null;
      let clr: any = false;

      if(title === 'Baza')
      {
        nodesData = new DataSet(nodes.map(node => ({
          id: node.id.toString(),
          label: node.label,
          title: node.title, 
          color: this.getNodeColor(node.title) // Svaki čvor dobija svoju boju
        })));

      }
      else
      {
        clr = this.getNodeColor(title);
        nodesData = new DataSet(nodes || []);
      }
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
          font: { size: 15, color: 'black' },
          ...(title !== "Baza" && { color: this.getNodeColor(title) }) //kad se pojedinacno zovu tipovi, inace za celu bazu se DataSetuje
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
            gravitationalConstant: -120, // udaljenost cvorova
            centralGravity: 0.01, // privlacnost ka centru
            springLength: 200, // duzina veze
            springConstant: 0.08
          }
        },
        interaction: { hover: true },
        manipulation: { 
          enabled: true,
          addNode: false,
          deleteNode: (data: any, callback: Function) => {
            // Prikazivanje dijaloga za potvrdu brisanja čvora
            this.confirmDeleteNode(data, callback); // Ova funkcija prikazuje dijalog
          }
        }
      };
  
      // Kreiraj graf samo ako su podaci validni
      if (nodesData.length > 0) {
        this.network = new Network(container as HTMLElement, data, options);
        console.log('Graph initialized');

        //let selectedNode = null; // Držimo selektovani čvor

        // Postavljamo listener za selektovanje čvora
        this.network.on('selectNode', (event: any) => {
          this.selectedNode = event.nodes[0]; // Čuvanje ID-a selektovanog čvora
          const allNodes = nodesData.get();
          const selectedNodeData = allNodes.find(node => node.id === this.selectedNode);
          if (selectedNodeData) {
            this.selectedNode = {
              id: Number(this.selectedNode),
              type: selectedNodeData.title, // Tip iz nodesData (Kriminalac, Vozilo...)
              color: selectedNodeData.color // Boja čvora
            };
          } else {
            this.selectedNode = null;
          }

          console.log('Selected node:', this.selectedNode);
        });
        
      } else {
        console.log('No data to display on graph');
      }
    } else {
      console.error('Element .graph not found');
    }
  }
/////////////////////////////////////////////////////////////////////////////////////////
//delete element

confirmDeleteNode(data: any, callback: Function): void {

  const confirmed = confirm('Da li ste sigurni da zelite da obrisete ovaj element?');
  
  if (confirmed) {

    console.log(data);

    if(this.selectedNode.type !== 'Kriminalac')
    {
      this.selectedNode.id = this.selectedNode.id.toString();
    }

    this.dataService.deleteNodeFromDatabase(this.selectedNode.id, this.selectedNode.type, this.title).subscribe(
      (response) => {
        console.log('Čvor uspešno obrisan iz baze', response);
        alert('Element uspešno obrisan iz baze!');
        this.network.body.data.nodes.remove(this.selectedNode.id);
      },
      (error) => {
        console.error('Došlo je do greške pri brisanju iz baze', error);
        alert('Došlo je do greške pri brisanju iz baze.');
      }
    );
    callback(data);
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


  showAddNode: boolean = false;
  toggleAddNode() {
    if(!this.showAddNode)
    {
      this.loadNodeTypes();
      this.selectedType = '';
      this.inputFields = [];
      this.nodeAttributes = [];
    }
    this.showAddNode = !this.showAddNode;
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

  addNode() {
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
        this.toggleAddNode();
        alert('Uspešno ste dodali čvor u bazu!');

        if(this.title == 'Kriminalac')
        {
          this.onAkteriClick();
        }
        else if(this.title == 'Vozilo')
        {
          this.onVozilaClick();
        }
        else if(this.title == 'Incident')
        {
          this.onIncidentiClick();
        }
        else if(this.title == 'Lokacija')
        {
          this.onLokacijeClick();
        }
        else if(this.title == 'Baza')
          {
            this.onBazaClick();
          }
        // Ovde možeš dodati logiku za uspešno dodavanje, kao što je obaveštenje korisnika
      },
      error: (error) => {
        console.error('Greška pri dodavanju:', error);
        // Obradi grešku ako je potrebno
        //alert(`Greška: ${error.message}`);

        if (error.message.includes('id') || error.message.includes('jmbg')) {
          alert('Greška pri odabiru ID-a ili JMBG-a. \nJMBG mora biti 13 cifara!\nID mora biti jedinstven!\nMolimo proverite unete podatke.');
        } else {
          alert('Došlo je do greške pri dodavanju podataka. \nJMBG mora biti 13 cifara! \nID mora biti jedinstven!\nPokušajte ponovo.');
        }

        this.inputFields = Array(this.nodeAttributes.length).fill('');
      }
    });
  }
}
