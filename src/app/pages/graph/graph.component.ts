import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { RaceService } from '../../services/race.service.js';
Chart.register(...registerables);

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css',
})
export class GraphComponent implements OnInit {
  public totals: any[] = [];
  public raceService = inject(RaceService);
  public totalCountries: any[] = [];
  public totalParticipants: any[] = [];

  ngOnInit(): void {
    this.raceService.getTotals().subscribe((data) => {
      this.totals = data;
      if (!this.totals) return;
      for (let i = 0; i < this.totals.length; i++) {
        this.totalCountries.push(data[i].Country);
        this.totalParticipants.push(data[i].participants);
      }

      this.showChartBar(this.totalCountries, this.totalParticipants);
      this.showChartPie(this.totalCountries, this.totalParticipants);
    });
  }

  showChartBar(totalCountries: any[], totalParticipants: any[]) {
    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: totalCountries,
        datasets: [
          {
            label: 'Participants',
            data: totalParticipants,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  showChartPie(totalCountries: any[], totalParticipants: any[]) {
    new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: totalCountries,
        datasets: [
          {
            label: 'Participants',
            data: totalParticipants,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
