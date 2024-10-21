// src/main.ts
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    BrowserAnimationsModule, // Nếu bạn sử dụng Angular Material
    // ... thêm các providers toàn cục khác nếu cần
  ]
})
.catch(err => console.error(err));
