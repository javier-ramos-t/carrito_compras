import { Routes } from '@angular/router';

import { Auth } from './modules/auth/auth';
import { ProductListPage } from './modules/productos/pages/product-list-page/product-list-page';

import { AuthService } from '@core/service/auth'
import { authGuard } from '@core/guards/auth-guard';
import { guestGuard } from '@core/guards/guest-guard';

export const routes: Routes = [
    { path: '',
        loadComponent: () => import('./modules/inicio/inicio').then(m => m.Inicio),
    },
    {
        path:"login",
        loadComponent: () => import ('./modules/auth/auth').then(m=> m.Auth),
        canActivate:[guestGuard]
    },

    { path: 'productos',
        loadComponent: () => import('./modules/productos/pages/product-list-page/product-list-page').then(m => m.ProductListPage),
        canActivate:[authGuard]
    },

    { path: 'tienda',
        loadComponent: () => import('./modules/tienda/tienda').then(m => m.Tienda),
    },

    { path: 'carrito',
        loadComponent: () => import('./modules/carrito/carrito').then(m => m.Carrito),
    },

    { path: 'mis-pedidos',
        loadComponent: () => import('./modules/pedidos/pedidos').then(m => m.Pedidos),
    },

    { path: 'admin-pedidos',
        loadComponent: () => import('./modules/pedidos/admin-pedidos/admin-pedidos').then(m => m.AdminPedidos),
        canActivate:[authGuard]
    },

    { path: 'registro',
        loadComponent: () => import('./modules/auth/registro/registro').then(m => m.Registro),
        canActivate:[guestGuard]
    },

    { path: 'recuperar-pass',
        loadComponent: () => import('./modules/auth/recuperar-pass/recuperar-pass').then(m => m.RecuperarPass),
        canActivate:[guestGuard]
    },
];
