import { Component } from '@angular/core';
import { Slider } from '../models/slider';

@Component({
  selector: 'app-bootstrap-test',
  templateUrl: './bootstrap-test.component.html',
  styleUrl: './bootstrap-test.component.css'
})
export class BootstrapTestComponent {
  slideImages: Slider[] = [
    {image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1434910/ss_fb3bb6e2e86d262435d8b4adc017a7e8d65d8b4e.600x338.jpg?t=1665747203', title: '1'},
    {image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1434910/ss_78032b213df5d33e96b4336e20505874376f2624.600x338.jpg?t=1665747203', title: '2'},
    {image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1434910/ss_4562ced05b815dc41138bd65d2233374506648d1.600x338.jpg?t=1665747203', title: '3'},
    {image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1434910/ss_3a4c064008a7889f0b44e830ac9eecfcc67c2c0d.600x338.jpg?t=1665747203', title: '4'},
    {image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1434910/ss_43824fe1b97a490364c7dc3d7c7cd325d9254953.600x338.jpg?t=1665747203', title: '5'},
  ]
}
