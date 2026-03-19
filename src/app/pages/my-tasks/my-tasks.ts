import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { PanelModule } from 'primeng/panel';
import { CalendarClock, Clock, Crown, ListFilter, LucideAngularModule, Rocket } from 'lucide-angular';
import { CollapsibleSection } from '@shared/component/collapsible-section/collapsible-section';
import { RandomQuote } from '@shared/component/random-quote/random-quote';

@Component({
  selector: 'app-my-tasks',
  imports: [ButtonModule, InputTextModule, PopoverModule, PanelModule, CollapsibleSection, RandomQuote, LucideAngularModule],
  templateUrl: './my-tasks.html',
  styleUrl: './my-tasks.css',
  standalone: true,
})
export class MyTasks {
  readonly Icons = {
    ListFilter,
    Crown,
    Clock,
    CalendarClock,
    Rocket
  };
}
