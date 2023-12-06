import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'security', pathMatch: 'full'}, {
    path: 'process',
    loadChildren: () => import('./modules/process/process.module').then(m => m.ProcessModule)
  },
  {
    path: 'share',
    loadChildren: () => import('./modules/share/share.module').then(m => m.ShareModule)
  }, {
    path: 'security',
    loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule)
  }, ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
