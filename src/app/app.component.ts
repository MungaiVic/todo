import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'list-overview',
  standalone: true,
  imports: [MatListModule],
  template: `
    <mat-list>
      @for (item of items; track item.id) {
        <mat-list-item>{{ item.name }}</mat-list-item>
      }
    </mat-list>
  `,
})

export class ListOverviewComponent {
  items = [{id: 1, name: 'item 1'}, {id: 2, name: 'item 2'}, {id: 3, name: 'item 3'}];
}


@Component({
  selector: 'card-overview',
  standalone: true,
  imports: [MatCardModule],
  template: `
    @for (card of cards; track card.id) {
      <mat-card>
        <mat-card-content
          style="display: flex; justify-content: space-between; align-items: center; color: aqua"
        >{{ card.name }}
        </mat-card-content>
      </mat-card>
    }
  `
})

export class CardOverviewComponent {
  cards = [{id: 1, name: 'card 1'}, {id: 2, name: 'card 2'}, {id: 3, name: 'card 3'}];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListOverviewComponent, CardOverviewComponent],
  template: `
    <section>
      <list-overview></list-overview>
    </section>
    <section>
      <card-overview></card-overview>
    </section>
  `
  // styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}
