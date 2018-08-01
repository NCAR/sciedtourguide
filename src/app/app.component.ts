import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { SharedVars } from '../providers/shared-vars';
import { TranslateService } from '@ngx-translate/core';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  appVer: any = '1.0.0';

  constructor(private ga: GoogleAnalytics, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private translate: TranslateService, public sharedVars: SharedVars) {
    platform.ready().then(() => {
      statusBar.overlaysWebView(false);
      statusBar.backgroundColorByHexString("#004779");
      // google
      // this.ga.debugMode()
      this.ga.startTrackerWithId("UA-66300420-3").then(() => {
        console.log('Google analytics is ready now');
      })
        .catch(e => console.log('Error starting GoogleAnalytics', e));

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
