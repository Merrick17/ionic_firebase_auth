import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AngularFireModule } from "@angular/fire";
import {
  AngularFireDatabaseModule,
  AngularFireDatabase,
} from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
export const firebaseConfig = {
  apiKey: "AIzaSyBQx6nHRHBSaxTbyO5f76XkR1Eh21DTCtU",
  authDomain: "crudionic-12d67.firebaseapp.com",
  databaseURL: "https://crudionic-12d67.firebaseio.com",
  projectId: "crudionic-12d67",
  storageBucket: "crudionic-12d67.appspot.com",
  messagingSenderId: "851233771668",
  appId: "1:851233771668:web:caf77a1642c2cc41472481",
  measurementId: "G-5V25DQZMMH",
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
