'use client';
// @ts-ignore
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
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

const iconList = [ALERTICON, COLLABORATORICON, PALETTEICON, PHOTOICON, ARCHIVEICON, MOREICON];
// @ts-ignore
export default function NoteMakerFocused({ className, focus, toggleFocus, noteListData }) {
  const { noteList, setNoteList } = noteListData;
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
    toggleFocus();
  }, [note, noteList, setNoteList, toggleFocus]);

  const handleSubmit = useCallback(
    (event: any) => {
      event.preventDefault();
      submitNote();
    },
    [submitNote]
  );

  const handleClick = useCallback((event: any) => {
    event.preventDefault();
  }, []);

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

  useEffect(() => {
    function handleClickOutside(event: any) {
      //@ts-ignore
      if (formRef.current && !formRef.current.contains(event.target)) {
        submitNote();
      }
    }

    document.addEventListener('click', handleClickOutside, true);
    return () => document.removeEventListener('click', handleClickOutside, true);
  }, [submitNote]);

  return (
    <form ref={formRef} className={className} onSubmit={handleSubmit}>
      <div className="flex items-center h-10 p-1  note-maker-title-container">
        <input
          className="grow outline-none placeholder-default note-maker-title"
          placeholder="Title"
          value={note.title}
          onChange={handleTitle}
        />
        <button onClick={handlePin}>
          {note.pinned ? (
            <Image src={UNPINICON.src} alt={UNPINICON.name} width={24} height={24} />
          ) : (
            <Image src={PINICON.src} alt={PINICON.name} width={24} height={24} />
          )}
        </button>
      </div>
      <textarea
        autoFocus
        className="min-h-12 resize-none outline-none px-1 py-3 placeholder-default note-maker-body"
        placeholder="Take a note..."
        value={note.body}
        onChange={handleBody}
      />
      <div className="flex h-10 p-1 bottom-icons">
        <div className="flex items-center gap-5 h-full grow bottom-icon-list">
          {iconList.map((icon: any) => {
            return (
              <button
                key={'icon-' + icon.name}
                onClick={handleClick}
                className="h-full aspect-square hover:rounded-full note-maker-icon"
              >
                <Image src={icon.src} alt={icon.name} width={20} height={20} />
              </button>
            );
          })}
        </div>
        <button className="h-full w-20 hover:rounded-lg note-maker-close" type="submit" onClick={handleSubmit}>
          Close
        </button>
      </div>
    </form>
  );
}
