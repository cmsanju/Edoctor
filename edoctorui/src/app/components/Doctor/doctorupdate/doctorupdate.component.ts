import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-doctorupdate',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './doctorupdate.component.html',
  styleUrl: './doctorupdate.component.css'
})
export class DoctorupdateComponent {

}
