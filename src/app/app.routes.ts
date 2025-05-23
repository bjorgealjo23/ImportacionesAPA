import { Routes } from '@angular/router';
import { LandingComponent } from './public/landing/landing.component';
import { HomeComponent, CotizacionComponent, NosotrosComponent, ContactanosComponent } from './public/landing/components'
import { InicioComponent, RecuperacionComponent, RegistroComponent } from './public/login/components';
import { LoginComponent } from './public/login/login.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { BienvenidoComponent, ListadoComponent, PerfilComponent, RastreoIndividualComponent } from './dashboard/admin/components';

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
    {
        path: 'acceso', component: LoginComponent,
        children: [
            { path: 'inicio', component: InicioComponent },
            { path: 'registro', component: RegistroComponent },
            { path: 'recuperacion', component: RecuperacionComponent },
        ]
    },
     {
        path: 'admin', component: AdminComponent,
        children: [
            { path: 'bienvenido', component: BienvenidoComponent },
            { path: 'listado', component: ListadoComponent },
            { path: 'rastreo', component: RastreoIndividualComponent },
            { path: 'perfil', component: PerfilComponent },
        ]
    }
];
