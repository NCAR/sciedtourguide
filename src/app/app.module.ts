import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule,IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DataFileService } from '../providers/data-file-service';
import { SharedVars } from '../providers/shared-vars';
import { SharedDataService } from '../providers/shared-data-service';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { IonicStorageModule } from '@ionic/storage';
import { ExhibitsDataProvider } from '../providers/exhibits-data/exhibits-data';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleAnalytics,
    SharedVars,
    DataFileService,
    SharedDataService,
    AndroidPermissions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExhibitsDataProvider
  ]
})
export class AppModule {}
