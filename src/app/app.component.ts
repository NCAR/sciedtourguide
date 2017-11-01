import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { SharedVars } from '../providers/shared-vars';
import { DataFileService } from '../providers/data-file-service';
import { TranslateService } from '@ngx-translate/core';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  appVer:any = '1.0.1';

  constructor(public ga: GoogleAnalytics, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private translate: TranslateService,  public sharedVars:SharedVars, private dataFileService:DataFileService) {
    platform.ready().then(() => {
    // google
   // this.ga.debugMode()
    this.ga.startTrackerWithId("UA-66300420-3");
    this.ga.setAllowIDFACollection(false);
    this.ga.setAppVersion(this.appVer);

    this.ga.enableUncaughtExceptionReporting(true)
    .then((_success) => {
      console.log(_success)
    }).catch((_error) => {
      console.log(_error)
    })

      this.translate.setDefaultLang('en');

      let browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/en/) ? browserLang : 'en');

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
