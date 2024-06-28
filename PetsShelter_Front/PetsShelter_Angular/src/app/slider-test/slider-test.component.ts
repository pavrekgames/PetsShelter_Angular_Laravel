import { Component, Input } from '@angular/core';
import { Slider } from '../models/slider';

@Component({
  selector: 'app-slider-test',
  templateUrl: './slider-test.component.html',
  styleUrl: './slider-test.component.css'
})
export class SliderTestComponent{

  @Input() slides: Slider[];

  currentIndex: number = 0;

  ngOnInit(): void {
    console.log(this.slides[this.currentIndex].image);
  }

  getCurrentSlideImage(): string{
    return `url('${this.slides[this.currentIndex].image}')`;
  }

  nextSlide(){
    this.currentIndex++;

    if(this.currentIndex > this.slides.length - 1){
      this.currentIndex = 0;
    }
  }

  previousSlide(){
    this.currentIndex--;

    if(this.currentIndex < 0){
      this.currentIndex = this.slides.length - 1;
    }
  }

  goToSlide(index: number){
    this.currentIndex = index;
  }

}
