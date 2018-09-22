import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'environments/environment';
// import { ROUTES } from './routes/app.routes';

// App is our top level component
import { AppComponent } from './app.component';
import { DataService } from './services/Data.service';

//StyleSheets


import '../styles/styles.scss';


//DevMoudles
import { Home } from './Pages/Home.page/Home';
import {CustomerPage} from './Pages/Customer/customer.page';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


import { AgmCoreModule } from '@agm/core';
// import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    CustomerPage
   ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // RouterModule.forRoot(ROUTES, {
    //   useHash: Boolean(history.pushState) === false,
    //   preloadingStrategy: PreloadAllModules
    // }), 
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBT6enmM9nWXUuKO5orG-ElZyxZnjSzhUw'
    }),

    
    // AIzaSyBT6enmM9nWXUuKO5orG-ElZyxZnjSzhUw
    // AgmJsMarkerClustererModule,

    /**
     * This section will import the `DevModuleModule` only in certain build types.
     * When the module is not imported it will get tree shaked.
     * This is a simple example, a big app should probably implement some logic
     */
    ...environment.showDevModule ? [] : [],
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    environment.ENV_PROVIDERS,
    DataService
    ]
})
export class AppModule {}


