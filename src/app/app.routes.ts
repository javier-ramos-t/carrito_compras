import { Routes } from '@angular/router';

import { Auth } from './modules/auth/auth';
import { ProductListPage } from './modules/productos/pages/product-list-page/product-list-page';

import { AuthService } from '@core/service/auth'
import { authGuard } from '@core/guards/auth-guard';
import { guestGuard } from '@core/guards/guest-guard';

export const routes: Routes = [
    {
        path:"login",
        loadComponent: () => import ('./modules/auth/auth').then(m=> m.Auth),
        canActivate:[guestGuard]
    },

    { path: 'productos',
        loadComponent: () => import('./modules/productos/pages/product-list-page/product-list-page').then(m => m.ProductListPage),
        canActivate:[authGuard]
    },
];
