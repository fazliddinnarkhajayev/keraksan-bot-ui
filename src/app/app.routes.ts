import { Route } from "@angular/router";
import { MainComponent } from "./shared/components/main/main.component";
import { AuthComponent } from "./pages/auth/auth.component";
import { NoAuthGuard } from "./shared/guards/noAuth.guard";
import { AuthGuard } from "./shared/guards/auth.guard";

export const appRoutes: Route[] = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.routes').then(m => m.default), canActivate: [AuthGuard] },
      { path: 'admins', loadChildren: () => import('./pages/admins/admins.routes').then(m => m.default), canActivate: [AuthGuard] },
      { path: 'bot-users', loadChildren: () => import('./pages/bot-users/bot-users.routes').then(m => m.default), canActivate: [AuthGuard] },
      // References
      { path: 'references/areas', loadChildren: () => import('./pages/references/areas/areas.routes').then(m => m.default), canActivate: [AuthGuard] },
      { path: 'references/profession', loadChildren: () => import('./pages/references/profession/profession.routes').then(m => m.default), canActivate: [AuthGuard] },
      { path: 'promo-codes', loadChildren: () => import('./pages/promo-codes/promo-code.routes').then(m => m.default), canActivate: [AuthGuard] },
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [NoAuthGuard],
    children: [
      { path: 'sign-in', loadChildren: () => import('./pages/auth/components/sign-in/sign-in.routes').then(m => m.default) },
      { path: 'sign-up', loadChildren: () => import('./pages/auth/components/sign-up/sign-up.routes').then(m => m.default) },
    ]
  }
]