import { Component, OnInit } from '@angular/core';
import * as M from '../../app.models';
import { NoteService } from '../../services/note/note.service';
import { dragula, DragulaService } from 'ng2-dragula/ng2-dragula';


@Component({
    selector: 'note-list',
    templateUrl: './note-list.html'
})
export class NoteListComponent implements OnInit {
    currentNote: M.Note;
    notes: M.Note[];

    constructor(private noteService: NoteService, private dragulaService: DragulaService) {

    }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.getNotes();
        if (!this.notes) {
            this.notes = [];
        }
    }

    getNotes(): void {
        this.notes = this.noteService.getNotesFromLocalStorage();
    }

    addNewNote() {
        this.currentNote = this.noteService.initDefaultNote();
        this.noteService.addNewNote(this.currentNote, this.notes);
    }

    clearLS() {
        this.notes = [];
        this.noteService.clearLS();
    }

    notesChange(notes: M.Note[]) {
        this.noteService.saveNotesToLocalStorage(notes);
    }
}
