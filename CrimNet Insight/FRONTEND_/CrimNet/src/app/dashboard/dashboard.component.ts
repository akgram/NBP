import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DataSet, Network } from 'vis-network/standalone/umd/vis-network.min.js';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';  // Importuj CommonModule
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Dodaj FormsModule
import { response } from 'express';
import { error, log } from 'console';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mongoData: any[] = [];
  data: any[] = [];
  title: string = '';

  constructor(private dataService: DataService, private http: HttpClient) {}

  ngOnInit(): void {}

    onNodeClick(id: any, type: any): void {
    this.dataService.getMongo(id, type).subscribe({
      next: (response) => {
        //this.mongoData = response;
        console.log(this.data);

        if (Array.isArray(response)) {
          this.mongoData = response;
        } else if (response) {
          this.mongoData = [response]; // napravi niz sa jednim elementom
        } else {
          this.mongoData = [];
        }
      },
      error: (err) => {
        console.error('Greška prilikom preuzimanja iz Mongo baze:', err);
      }
    });
  }

  onBazaClick(): void {
    this.selectedNode = null;
    this.title = 'Baza';
    this.dataService.getBaza().subscribe({
      next: (response) => {
        this.data = response;
        this.drawGraph(response.nodes, response.edges, this.title);
      },
      error: (err) => {
        console.error('Greška prilikom preuzimanja baze:', err);
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
  selectEdge: any = null;
  sourceNode:any = [2];
  targetNode:any = [2];
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
          size: 29,
          font: { size: 15, color: 'black' },
          ...(title !== "Baza" && { color: this.getNodeColor(title) }) //kad se pojedinacno zovu tipovi, inace za celu bazu se DataSetuje
        },
        edges: {
          color: 'white',
          width: 5,
          length: 300,
          //smooth: false,
          arrows: {
            to: { enabled: true, scaleFactor: 0.7, type: 'arrow' } // Dodavanje strelice na kraju
          }
        },
        physics: {
          enabled: true,
          solver: 'forceAtlas2Based',
          forceAtlas2Based: {
            gravitationalConstant: -120, // udaljenost cvorova
            centralGravity: 0.01, // privlacnost ka centru
            springLength: 200, // duzina veze
            springConstant: 0.08,
          },
          maxVelocity: 30, // Maksimalna brzina kretanja čvorova
            minVelocity: 0.75, // Minimalna brzina
            timestep: 0.5, // Korak vremena za svako ažuriranje
        },
        interaction: { hover: true },
        manipulation: { 
          enabled: true,
          addNode: (data: any, callback: Function) => {
            this.toggleAddNode();
            callback(data);
          },
          editNode: (data: any, callback: Function) => {
            this.toggleEditNode();
            callback(data);
          },
          deleteNode: (data: any, callback: Function) => {
            this.confirmDeleteNode(data, callback); // DELETE JE I ZA NODE I EDGE
          },
          addEdge: (data: any, callback: Function) => {
            const sourceNode = data.from;
            const targetNode = data.to;
      
            console.log('Izvorni čvor ID:', sourceNode);
            console.log('Ciljni čvor ID:', targetNode);
            let type1 = null;
            let type2 = null;
            let baza = false

            if(this.title === 'Baza')
            {
              let node1 = nodes.find((node) => node.id === sourceNode);
              type1 = node1.title;

              let node2 = nodes.find((node) => node.id === targetNode);
              type2 = node2.title;
              baza = true;
            }
            else
            {
              type1 = this.title;
              type2 = this.title;
            }

            let edgeName = this.showEdgeNameForm(sourceNode, targetNode);
            if(!edgeName)
              return;
            
            data.label = edgeName;//////////////////////////??????????????????????????????????

            this.addEdge(sourceNode, targetNode, edgeName, type1, type2, baza);
            callback(data);
          },
          deleteEdge: (data: any, callback: Function) => {
            this.confirmDeleteEdge(data, callback);
          },
          editEdge: (data: any, callback: Function) => {
            const newSourceNode = data.from;
            const newTargetNode = data.to;
            
            console.log('Novi izvorni čvor ID:', newSourceNode);
            console.log('Novi ciljni čvor ID:', newTargetNode);
            let newType1 = null;
            let newType2 = null;
            let baza = false

            if(this.title === 'Baza')
              {
              let node1 = nodes.find((node) => node.id === newSourceNode);
              newType1 = node1.title;

              let node2 = nodes.find((node) => node.id === newTargetNode);
              newType2 = node2.title;
              baza = true;
            }
            else
            {
              newType1 = this.title;
              newType2 = this.title;
            }
            console.log("Veza spaja čvorove:", newSourceNode, "[", newType1, "]", "->", newTargetNode, "[", newType2, "]");

            if(this.editEdge(data.label, this.sourceNode, this.targetNode, newSourceNode, newTargetNode, newType1, newType2, baza))
              callback(data);
            else
              callback();
          },
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
          // poziv mongodb
          const allNodes = nodesData.get();
          const selectedNodeData = allNodes.find(node => node.id === this.selectedNode);
          if (selectedNodeData) {
            this.selectedNode = {
              id: selectedNodeData.title !== 'Kriminalac' ? Number(this.selectedNode) : this.selectedNode.toString(),
              type: selectedNodeData.title, // Tip iz nodesData (Kriminalac, Vozilo...)
              color: selectedNodeData.color // Boja čvora
            };
            
            if(title !== "Baza")
              this.onNodeClick(this.selectedNode.id, this.selectedNode.type);

          } else {
            this.selectedNode = null;
          }
          console.log('Selected node:', this.selectedNode);
        });

        this.network.on("selectEdge", (params: any) => {
          if (params.edges.length > 0) {
            this.selectEdge = params.edges[0]; // ID veze koju je korisnik kliknuo
            const connectedNodes = this.network.getConnectedNodes(this.selectEdge); // Dohvata ID čvorova koje veza spaja

            console.log(nodesData.get().find(node => node.id === connectedNodes[0]).title);
            console.log(nodesData.get().find(node => node.id === connectedNodes[1]).title);

            this.sourceNode[1] = nodesData.get().find(node => node.id === connectedNodes[0]).title;
            this.targetNode[1] = nodesData.get().find(node => node.id === connectedNodes[1]).title;
        
            if (connectedNodes.length === 2) {
              this.sourceNode[0] = connectedNodes[0];
              this.targetNode[0] = connectedNodes[1];
        
              console.log("Veza spaja čvorove:", this.sourceNode[0], "[", this.sourceNode[1] ,"]", "->", this.targetNode[0], "[", this.targetNode[1] ,"]");
            }
          }
        });

        this.network.on('deselectEdge', () => {
          this.selectEdge = null;
          console.log('Edge deselected.');
        });

        this.network.on('deselectNode', () => {
          this.selectedNode = null;
          console.log('Node deselected.');
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

confirmDeleteEdge(data: any, callback: Function): void {

  const confirmed = confirm('Da li ste sigurni da zelite da obrisete ovu vezu?');
  
  if (confirmed) {

    console.log(data);

    this.dataService.deleteEdgeFromDatabase(this.sourceNode[0], this.sourceNode[1], this.targetNode[0], this.targetNode[1], this.title).subscribe(
      (response) => {
        console.log('Veza uspešno obrisana iz baze', response);
        alert('Veza je uspešno obrisana iz baze!');
        this.network.body.data.nodes.remove(this.selectEdge);
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

  showEditNode: boolean = false;
  toggleEditNode() {
    if(!this.showEditNode)
    {
      this.loadNodeTypes();
      this.selectedType = this.selectedNode.type;
      console.log(this.selectedType);
      this.loadNodeData();
    }
    this.showEditNode = !this.showEditNode;
  }

  showEdgeNameForm(sourceNode: any, targetNode: any): any {
    const edgeName = prompt("Unesite naziv veze između čvora " + sourceNode + " i čvora " + targetNode);
    //const edgeName = "aca lavaca";
    if (edgeName) { 
      return edgeName; 
    } 
    else { 
      alert("Naziv veze je obavezan!"); 
      return false; 
    }
  }

  loadNodeData() {
    if (!this.selectedNode) return;
  
    this.nodeAttributes = [];
    this.inputFields = [];

    this.dataService.loadNodeDataFromDatabase(this.selectedNode.id, this.selectedNode.type, this.title)
    .subscribe({
      next: (data) => {
        console.log(data);
        this.nodeAttributes = Object.keys(data); // Uzimaš sve ključeve objekta kao nazive atributa
        this.inputFields = Object.values(data); // Uzimaš vrednosti objekta za input polja
        console.log('Node attributes:', this.nodeAttributes);
        console.log('Input fields:', this.inputFields);
      },
      error: (error) => {
        console.error('Greška pri učitavanju podataka cvora:', error);
      }
    });
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
        console.error('Greška pri dodavanju:', error.error.message);
        alert( error.error.message);

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
      }
    });
  }

  editNode()
  {
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
    this.dataService.editNodeToDatabase(nodeData, this.selectedNode.id).subscribe({
      next: (response) => {
        console.log('Uspešno izmenjeno:', response);
        this.toggleEditNode();
        alert('Uspešno ste izmenili čvor iz baze!');

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
        console.error('Greška pri izmeni:', error.error.message);
        alert( error.error.message);
      }
    });
  }

  addEdge(from: any, to: any, edgeName: any, type1: any, type2: any, baza: any)
  {
    this.dataService.addEdgeToDatabase(from, to, edgeName, type1, type2, baza).subscribe({
      next: (response) => {
        alert('Uspešno ste dodali vezu izmedju cvorova!');
      },
      error: (error) => {
        alert('Greška pri dodavanju veze!');
      }
    });
  }

  editEdge(name: any, sourceNode: any, targetNode: any, from: any, to: any, type1: any, type2: any, baza: any): any
  {
    this.dataService.editEdgeToDatabase(name, sourceNode[0], sourceNode[1], targetNode[0], targetNode[1], from, to, type1, type2, baza).subscribe({
      next: (response) => {
        alert('Uspešno ste izmenili vezu izmedju cvorova!');
      },
      error: (error) => {
        alert(error.error.message);
        return false;
      }
    });
  }
}
