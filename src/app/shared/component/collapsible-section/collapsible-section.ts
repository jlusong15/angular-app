import { AfterContentInit, Component, ContentChild, ElementRef, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ChevronDown, LucideAngularModule, LucideIconData } from 'lucide-angular';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-collapsible-section',
  imports: [PanelModule, LucideAngularModule],
  templateUrl: './collapsible-section.html',
  styleUrl: './collapsible-section.css',
  standalone: true
})
export class CollapsibleSection implements AfterContentInit {
  readonly ChevronDown = ChevronDown;
  @ContentChild('csContent') content!: ElementRef;
  @ContentChild('csHeader') header!: ElementRef;

  @Input() collapsed: boolean = true;
  @Input() icon!: LucideIconData;

  childContent: SafeHtml | undefined;
  headerContent: SafeHtml | undefined;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngAfterContentInit() {
    this.headerContent = this.cleanHtml(this.header?.nativeElement?.innerHTML);
    this.childContent = this.cleanHtml(this.content?.nativeElement?.innerHTML);
  }

  cleanHtml(rawHtml: string) {
    return this.sanitizer.bypassSecurityTrustHtml(rawHtml);
  }
}
