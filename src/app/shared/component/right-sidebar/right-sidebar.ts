import { Component } from '@angular/core';
import { CalendarClock, CircleCheck, CircleDashed, Clock, Crown, ListFilter, LucideAngularModule, Rocket } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { PopoverModule } from 'primeng/popover';
import { CollapsibleSection } from '../collapsible-section/collapsible-section';
import { RandomQuote } from '../random-quote/random-quote';

@Component({
  selector: 'app-right-sidebar',
  imports: [ButtonModule, InputTextModule, PopoverModule, PanelModule, CollapsibleSection, RandomQuote, LucideAngularModule],
  templateUrl: './right-sidebar.html',
  styleUrl: './right-sidebar.css',
  standalone: true
})
export class RightSidebar {
  readonly Icons = {
    ListFilter,
    Crown,
    Clock,
    CalendarClock,
    Rocket,
    CircleDashed,
    CircleCheck
  };
}
