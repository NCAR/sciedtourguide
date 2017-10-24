import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DataFileService } from '../providers/data-file-service';
import { SharedVars } from '../providers/shared-vars';
import { SharedDataService } from '../providers/shared-data-service';
import { TranslateModule,TranslateStaticLoader,TranslateLoader } from 'ng2-translate/ng2-translate';

import { ExhibitsListPage } from '../pages/exhibitslist/exhibitslist';
import { PostcardPage } from '../pages/postcard/postcard';
import { VisitPage } from '../pages/visit/visit';
import { HomePage } from '../pages/home/home';
import { ContentPage } from '../pages/content/content';
import { TranscriptPage } from '../pages/transcript/transcript';
import { TabsPage } from '../pages/tabs/tabs';
import { TitleComponent } from '../components/titlebar/title.component';

import { ElasticHeader}  from '../components/elastic-header/elastic-header';
import { ImageDrawTextDirective } from '../components/image-draw/image-draw'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';

import { IonicStorageModule } from '@ionic/storage';
import { Http } from '@angular/http';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
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
    HomePage,
    ContentPage,
    TranscriptPage,
    TabsPage,
    TitleComponent,
    ElasticHeader,
    ImageDrawTextDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    IonicStorageModule.forRoot(),
    IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExhibitsListPage,
    PostcardPage,
    VisitPage,
    HomePage,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
