import { Routes } from '@angular/router';
import { LandingComponent } from './public/landing/landing.component';
import { HomeComponent, CotizacionComponent, NosotrosComponent, ContactanosComponent } from './public/landing/components'

export const routes: Routes = [
    {
        path: '', component: LandingComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'cotizacion', component: CotizacionComponent },
            { path: 'nosotros', component: NosotrosComponent },
            { path: 'contactanos', component: ContactanosComponent },
        ]
    },
];
    