import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: "", component: AppComponent },
	
	{ path: "login", loadChildren:
		() => import ('./account/account.module')
			.then( imported => imported.AccountModule)
	},

	{ path: "home", loadChildren: 
		() => import ('./home/home.module')
			.then( imported => imported.HomeModule)  
	}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
