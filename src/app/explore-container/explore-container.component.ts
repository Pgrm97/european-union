import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
    @Input() name: string;
    DE: boolean;
    EU: boolean;

  constructor() { }

    ngOnInit() {
        if (this.name == "European Union") {
            this.DE = true;
            this.EU = false;
        }
        if (this.name == "Deutschland") {
            this.DE = false;
            this.EU = true;
        }
    }

}
