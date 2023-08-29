// @ts-ignore
import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import {
  ALERTICON,
  ARCHIVEICON,
  COLLABORATORICON,
  DEFAULTNOTE,
  MOREICON,
  PALETTEICON,
  PHOTOICON,
  PINICON,
  UNPINICON,
} from '@/utils/constants'; // @ts-ignore
import './noteMakerFocused.css';

const ICONLIST = [ALERTICON, COLLABORATORICON, PALETTEICON, PHOTOICON, ARCHIVEICON, MOREICON];
// @ts-ignore
export default function NoteMakerFocused({ className, value }) {
  const { focus, setFocus, noteList, setNoteList } = value;
  const [note, setNote] = useState(DEFAULTNOTE);
  const formRef = useRef(null);

  const submitNote = useCallback(() => {
    if (note.title || note.body) {
      const newNote = { ...note, id: Date.now().toString() };
      const newNoteList = [newNote, ...noteList];
      setNote(newNote);
      setNoteList(newNoteList);
      localStorage.setItem('noteList', JSON.stringify(newNoteList));
      console.log(newNoteList);
    }
    setFocus(!focus);
  }, [focus, note, noteList, setFocus, setNoteList]);

  function handleSubmit(event: any) {
    event.preventDefault();
    submitNote();
  }

  function handleClick(event: any) {
    event.preventDefault();
  }

  function handleTitle(event: any) {
    setNote(prevState => ({ ...prevState, title: event.target.value }));
  }

  function handleBody(event: any) {
    setNote({ ...note, body: event.target.value });
  }

  function handlePin(event: any) {
    event.preventDefault();
    setNote({ ...note, pinned: !note.pinned });
  }

  return (
    <form ref={formRef} className={className} onSubmit={handleSubmit} onBlur={submitNote}>
      <div className="note-maker-title-container">
        <input className="note-maker-title" placeholder="Title" value={note.title} onChange={handleTitle} />
        <button onClick={handleClick}>
          {note.pinned ? (
            <Image src={UNPINICON.src} alt={UNPINICON.name} width={24} height={24} onClick={handlePin} />
          ) : (
            <Image src={PINICON.src} alt={PINICON.name} width={24} height={24} onClick={handlePin} />
          )}
        </button>
      </div>
      <textarea
        autoFocus
        className="note-maker-body"
        placeholder="Take a note..."
        value={note.body}
        onChange={handleBody}
      />
      <div className="bottom-icons">
        <div className="bottom-icon-list">
          {ICONLIST.map((icon: any) => {
            return (
              <button key={'icon-' + icon.name} onClick={handleClick}>
                <Image src={icon.src} alt={icon.name} width={20} height={20} />
              </button>
            );
          })}
        </div>
        <button id="note-maker-close" type="submit">
          Close
        </button>
      </div>
    </form>
  );
}
