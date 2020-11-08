import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ListProducts } from '@app/core/models/products.interface';

@Component({
  selector: 'app-slide-carousel',
  templateUrl: './slide-carousel.component.html',
  styleUrls: ['./slide-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('sectionSlide') content: ElementRef;
  @ViewChild('itemSlide') item: ElementRef;

  @Input() isMobile: boolean;
  @Input() products: ListProducts[];

  public arrowLeft = false;
  public arrowRight = false;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {}

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
