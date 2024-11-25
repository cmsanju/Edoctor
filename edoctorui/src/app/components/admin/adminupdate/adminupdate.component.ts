import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-adminupdate',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './adminupdate.component.html',
  styleUrl: './adminupdate.component.css'
})
export class AdminupdateComponent {

}
