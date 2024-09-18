import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,  // This property is correct if you're using standalone components
  imports: [],       // Leave empty if no imports are required
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']  // Corrected property name
})
export class FooterComponent {

}
