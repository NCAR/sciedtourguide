import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DataFileService } from '../providers/data-file-service';
import { SharedVars } from '../providers/shared-vars';
import { SharedDataService } from '../providers/shared-data-service';
import { HttpModule} from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ExhibitsListPage } from '../pages/exhibitslist/exhibitslist';
import { PostcardPage } from '../pages/postcard/postcard';
import { VisitPage } from '../pages/visit/visit';
import { MapPage } from '../pages/map/map';
import { MapAccessPage } from '../pages/map/mapaccess';
import { MapIndexPage } from '../pages/map/mapindex';
import { ContentPage } from '../pages/content/content';
import { TranscriptPage } from '../pages/transcript/transcript';
import { TabsPage } from '../pages/tabs/tabs';
import { TitleComponent } from '../components/titlebar/title.component';

import { ElasticHeader}  from '../components/elastic-header/elastic-header';
import { ImageDrawTextDirective } from '../components/image-draw/image-draw';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';
import { IonicStorageModule } from '@ionic/storage';
import { ExhibitsDataProvider } from '../providers/exhibits-data/exhibits-data';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
  declarations: [
    MyApp,
    ExhibitsListPage,
    PostcardPage,
    VisitPage,
    MapPage,
    MapAccessPage,
    MapIndexPage,
    ContentPage,
    TranscriptPage,
    TabsPage,
    TitleComponent,
    ElasticHeader,
    ImageDrawTextDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExhibitsListPage,
    PostcardPage,
    VisitPage,
    MapPage,
    MapAccessPage,
    MapIndexPage,
    ContentPage,
    TranscriptPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleAnalytics,
    SharedVars,
    DataFileService,
    SharedDataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExhibitsDataProvider
  ]
})
export class AppModule {}
