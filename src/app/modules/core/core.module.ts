import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const elements = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: elements,
  imports: [CommonModule],
  exports: elements,
})
export class CoreModule {}
