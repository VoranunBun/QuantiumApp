import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, NgSelectOption, ReactiveFormsModule } from "@angular/forms";
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { FundPerformanceComponent } from './fund-performance/fund-performance.component';
import { InvestorSummaryComponent } from './investor-summary/investor-summary.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { InvestmentTreeStructureComponent } from './investment-tree-structure/investment-tree-structure.component';

const appRoutes: Routes =
[
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'fund-performance', component: LayoutComponent,
    children: [
      { path: '', component: FundPerformanceComponent }
    ]
  },
  {
    path: 'investor-summary', component: LayoutComponent,
    children: [
      { path: '', component: InvestorSummaryComponent }
    ]
  },
  {
    path: 'file-manager', component: LayoutComponent,
    children: [
      { path: '', component: FileManagerComponent }
    ]
  },
  {
    path: 'investment-tree-structure', component: LayoutComponent,
    children: [
      { path: '', component: InvestmentTreeStructureComponent }
    ]
  },
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    HomeComponent,
    FundPerformanceComponent,
    InvestorSummaryComponent,
    FileManagerComponent,
    InvestmentTreeStructureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2GoogleChartsModule,
    TreeGridModule ,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
