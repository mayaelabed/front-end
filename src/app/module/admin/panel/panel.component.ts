import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart: any;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  ngOnInit() {

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

  sideNavToggle = false;
  bodyClass= "g-sidenav-show bg-gray-100";
  toggleSidenavClass() {
    this.sideNavToggle = !this.sideNavToggle;
    if (!this.sideNavToggle) {
      this.bodyClass = "g-sidenav-show bg-gray-100";

    } else {
      this.bodyClass = "g-sidenav-show bg-gray-100 g-sidenav-pinned";

    }
  }
}
