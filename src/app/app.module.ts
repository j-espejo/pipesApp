import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';

//Modulos personalizados
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar el locale de la app
import localCl from '@angular/common/locales/es-CL';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

//registramos español
registerLocaleData(localCl);
registerLocaleData(localFr);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, SharedModule, VentasModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CL' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
