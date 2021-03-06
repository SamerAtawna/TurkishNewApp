import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './language/language.module#LanguagePageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'categ-details', loadChildren: './categ-details/categ-details.module#CategDetailsPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
