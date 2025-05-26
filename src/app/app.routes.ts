import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./public/landing/landing.component').then(
        (module) => module.LandingComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./public/landing/components/home/home.component').then(
            (module) => module.HomeComponent
          ),
      },
      {
        path: 'cotizacion',
        loadComponent: () =>
          import(
            './public/landing/components/cotizacion/cotizacion.component'
          ).then((module) => module.CotizacionComponent),
      },
      {
        path: 'nosotros',
        loadComponent: () =>
          import(
            './public/landing/components/nosotros/nosotros.component'
          ).then((module) => module.NosotrosComponent),
      },
      {
        path: 'contactanos',
        loadComponent: () =>
          import(
            './public/landing/components/contactanos/contactanos.component'
          ).then((module) => module.ContactanosComponent),
      },
    ],
  },
  {
    path: 'acceso',
    loadComponent: () =>
      import('./public/login/login.component').then((module) => module.LoginComponent),
    children: [
      {
        path: 'inicio',
        loadComponent: () =>
          import('./public/login/components/inicio/inicio.component').then(
            (module) => module.InicioComponent
          ),
      },
      {
        path: 'registro',
        loadComponent: () =>
          import('./public/login/components/registro/registro.component').then(
            (module) => module.RegistroComponent
          ),
      },
      {
        path: 'recuperacion',
        loadComponent: () =>
          import(
            './public/login/components/recuperacion/recuperacion.component'
          ).then((module) => module.RecuperacionComponent),
      },
    ],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./dashboard/admin/admin.component').then((module) => module.AdminComponent),
    children: [
      {
        path: 'bienvenido',
        loadComponent: () =>
          import(
            './dashboard/admin/components/bienvenido/bienvenido.component'
          ).then((module) => module.BienvenidoComponent),
      },
      {
        path: 'listado',
        loadComponent: () =>
          import('./dashboard/admin/components/listado/listado.component').then(
            (module) => module.ListadoComponent
          ),
      },
      {
        path: 'rastreo',
        loadComponent: () =>
          import(
            './dashboard/admin/components/rastreo-individual/rastreo-individual.component'
          ).then((module) => module.RastreoIndividualComponent),
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./dashboard/admin/components/perfil/perfil.component').then(
            (module) => module.PerfilComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
