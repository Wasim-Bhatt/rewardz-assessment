import { Component } from '@angular/core';
import { CoreModule } from './modules/core/core.module';
import { HomeModule } from './modules/home/home.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoreModule, HomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
