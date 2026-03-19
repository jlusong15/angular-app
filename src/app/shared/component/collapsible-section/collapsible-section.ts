import { AfterContentInit, Component, ContentChild, ElementRef, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CsContentDirective, CsHeaderDirective } from '@shared/directives/collapsible-section';
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
  @ContentChild(CsHeaderDirective) header!: CsHeaderDirective;
  @ContentChild(CsContentDirective) content!: CsContentDirective;

  @Input() collapsed: boolean = true;
  @Input() icon!: LucideIconData;

  safeHeaderHtml!: SafeHtml;
  safeContentHtml!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) { }

  ngAfterContentInit() {
    this.safeHeaderHtml = this.cleanHtml(this.header?.el?.nativeElement?.innerHTML || '');
    this.safeContentHtml = this.cleanHtml(this.content?.el?.nativeElement?.innerHTML || '');
  }

  cleanHtml(rawHtml: string) {
    return this.sanitizer.bypassSecurityTrustHtml(rawHtml);
  }
}
