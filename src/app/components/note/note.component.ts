import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as M from '../../app.models';
import { NoteService } from '../../services/note/note.service';
import { DragulaService } from 'ng2-dragula/components/dragula.provider';


@Component({
  selector: 'note',
  templateUrl: './note.html'
})
export class NoteComponent implements OnInit {
  @Input() existNote: M.Note;
  @Input() notes: M.Note[];
  @Output() notesChange: EventEmitter<M.Note[]> = new EventEmitter();

  constructor(private noteService: NoteService, private dragulaService: DragulaService) {
  }

  ngOnInit() {
    this.dragAndDrop();
  }

  addNewNote() {
    const currentNote = this.noteService.initDefaultNote();
    this.noteService.addNewNote(currentNote, this.notes);
  }

  deleteNote(currentNote: M.Note) {
    this.noteService.deleteNote(currentNote, this.notes);
  }

  editNote(currentNote: M.Note): void {
    this.noteService.saveExistNote(currentNote, this.notes);
  }

  dragAndDrop() {
    this.dragulaService.drop.subscribe((value) => {
      this.notesChange.emit(this.notes);
    });
  }
}
