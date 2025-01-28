import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DataSet, Network } from 'vis-network/standalone/umd/vis-network.min.js';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any[] = [];
  title: string = '';

  constructor(private dataService: DataService) {}

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
        return { background: 'pink', border: 'darkviolet' };  // Roze za Aktere
      case 'Incidenti':
        return { background: 'red', border: 'darkred' };      // Crveno za Incidenti
      case 'Vozila':
        return { background: 'blue', border: 'darkblue' };     // Plavo za Vozila
      case 'Lokacija':
        return { background: 'orange', border: 'darkorange' }; // Narandžasto za Lokaciju
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
          color: this.getNodeColor(title)
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
}
