import { Injectable } from '@angular/core';
import * as M from '../../app.models';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Injectable()
export class NoteService {
    currentNote: M.Note;
    constructor(private localStorageService: LocalStorageService) { }

    initDefaultNote(): M.Note {
        this.currentNote = {
            text: ''
        };
        return this.currentNote;
    }

    addNewNote(newNote: M.Note, notes: M.Note[]) {
        notes.push(newNote);
        this.saveNotesToLocalStorage(notes);
    }

    saveExistNote(existNote: M.Note, notes: M.Note[]) {
        const index = this.findIndexOfExistNote(existNote, notes);
        notes[index] = existNote;
        this.saveNotesToLocalStorage(notes);
    }

    findIndexOfExistNote(existNote: M.Note, notes: M.Note[]): number {
        const index = notes.indexOf(existNote);
        return index;
    }

    saveNotesToLocalStorage(notes): void {
        this.localStorageService.add('notes', notes);
    }

    getNotesFromLocalStorage(): M.Note[] {
        return this.localStorageService.get('notes');
    }

    deleteNoteFromLocalStorage(): void {
        this.localStorageService.delete('notes');
    }

    deleteNote(existNote: M.Note, notes: M.Note[]) {
        const index = this.findIndexOfExistNote(existNote, notes);
        if (index > -1) {
            notes.splice(index, 1);
        } if (notes.length > 0) {
            this.saveNotesToLocalStorage(notes);
        } else {
            this.clearLS();
        }
    }

    clearLS() {
        localStorage.clear();
    }
}
