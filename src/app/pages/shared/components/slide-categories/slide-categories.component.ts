import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ListCategories } from '@app/core/models/categories.interface';

@Component({
  selector: 'app-slide-categories',
  templateUrl: './slide-categories.component.html',
  styleUrls: ['./slide-categories.component.scss'],
})
export class SlideCategoriesComponent implements OnInit, AfterViewInit {
  @ViewChild('sectionSlide') content: ElementRef;
  @ViewChild('itemSlide') item: ElementRef;

  @Input() listCategories: ListCategories[];
  @Input() isMobile: boolean;

  public arrowLeft = false;
  public arrowRight = false;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log(this.listCategories);
  }

  ngAfterViewInit(): void {
    this.detectChanges();
  }

  showLeft(): void {
    this.arrowLeft = this.content?.nativeElement.scrollLeft > 0;
  }

  showRight(): void {
    this.arrowRight =
      this.content?.nativeElement.scrollLeft +
        this.content?.nativeElement.clientWidth <
      this.content?.nativeElement.scrollWidth;
  }

  private detectChanges(): void {
    this.showLeft();
    this.showRight();
    this.changeDetector.detectChanges();
  }

  previous(): void {
    this.scrollTo(
      this.content.nativeElement.scrollLeft -
        this.item.nativeElement.offsetWidth,
      0.2
    );
  }

  next(): void {
    this.scrollTo(
      this.content.nativeElement.scrollLeft +
        this.item.nativeElement.offsetWidth,
      0.2
    );
  }

  private scrollTo(position: number, duration: number): void {
    import('gsap').then((gsap) => {
      gsap.TweenMax.to(this.content.nativeElement, duration, {
        scrollTo: { x: position },
        ease: gsap.Linear.easeNone,
        onComplete: () => this.detectChanges(),
      });
    });
  }
}
