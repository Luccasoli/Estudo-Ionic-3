import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { ConfigProvider } from '../providers/config/config';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	rootPage:any = TabsPage; 

	constructor(
		configProvider: ConfigProvider,
		platform: Platform,
		statusBar: StatusBar,
		splashScreen: SplashScreen) {
		platform.ready().then(() => {
			
			console.log(configProvider.getConfigData());
			
			if(configProvider.getConfigData() == null) {
				this.rootPage = IntroPage;
				configProvider.setConfigData(true);
			}
			
			statusBar.styleDefault();
			splashScreen.hide();
		});
	}
}
