import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { DragulaModule, DragulaService } from 'ng2-dragula';


import { HomeView } from './views/home/home.view';
import { HeaderView } from './views/header/header.view';
import { NoteComponent } from './components/note/note.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { ClockComponent } from './components/clock/clock.component';
import { NoteService } from './services/note/note.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';

@NgModule({
  declarations: [
     /* Views */
    HomeView,
    HeaderView,

    /* Components */
    NoteComponent,
    NoteListComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule, FormsModule, AlertModule.forRoot(), DragulaModule
  ],
  providers: [
    /* Services */
    NoteService,
    LocalStorageService
  ],
  bootstrap: [HomeView]
})
export class AppModule { }
