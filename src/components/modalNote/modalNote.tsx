'use client';
//@ts-ignore
import ActionButton from '@/components/actionButton/actionButton';
import Image from 'next/image';
import {
  ALERTICON,
  ARCHIVEICON,
  COLLABORATORICON,
  MOREICON,
  PALETTEICON,
  PHOTOICON,
  PINICON,
  UNPINICON,
} from '@/utils/constants';
import './modalNote.css';
import { useCallback, useEffect, useRef } from 'react';

const iconList = [ALERTICON, COLLABORATORICON, PALETTEICON, PHOTOICON, ARCHIVEICON, MOREICON];
//@ts-ignore
export default function ModalNote({ modalNote, noteListData, toggleModal, toggleModalNote }) {
  const { noteList, setNoteList } = noteListData;
  const modalRef = useRef(null);

  const handleClick = useCallback((event: any) => {
    event.preventDefault();
  }, []);

  const handlePin = useCallback(
    (event: any) => {
      event.preventDefault();
      toggleModalNote({ ...modalNote, pinned: !modalNote.pinned });
    },
    [modalNote, toggleModalNote]
  );

  const handleClose = useCallback(
    (event: any) => {
      event.preventDefault();
      toggleModal();
      const newNoteList = noteList.map((note: any) => (note.id === modalNote.id ? modalNote : note));
      setNoteList(newNoteList);
      localStorage.setItem('noteList', JSON.stringify(newNoteList));
    },
    [modalNote, noteList, setNoteList, toggleModal]
  );

  const handleTitle = useCallback(
    (event: any) => {
      toggleModalNote({ ...modalNote, title: event.target.value });
    },
    [modalNote, toggleModalNote]
  );

  const handleBody = useCallback(
    (event: any) => {
      toggleModalNote({ ...modalNote, body: event.target.value });
    },
    [modalNote, toggleModalNote]
  );

  useEffect(() => {
    function handleClickOutside(event: any) {
      //@ts-ignore
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose(event);
      }
    }

    document.addEventListener('click', handleClickOutside, true);
    return () => document.removeEventListener('click', handleClickOutside, true);
  }, [handleClose]);

  return (
    <div className="absolute inset-0 h-full w-full bg-modal-backdrop modal-note-container">
      <form
        ref={modalRef}
        className="absolute inset-0 m-auto w-150 h-fit min-h-100 bg-white flex flex-col px-4 pt-4 pb-3 rounded-lg modal-note"
      >
        <div className="flex h-10 text-1.5xl modal-title">
          <input
            className="grow outline-none px-2 modal-input"
            placeholder="Title"
            value={modalNote.title}
            onChange={handleTitle}
          />
          <button
            className="h-full aspect-square hover:rounded-full hover:bg-hover-color modal-pin"
            onClick={handlePin}
          >
            {modalNote.pinned ? (
              <Image src={UNPINICON.src} alt={UNPINICON.name} width={24} height={24} />
            ) : (
              <Image src={PINICON.src} alt={PINICON.name} width={24} height={24} />
            )}
          </button>
        </div>
        <textarea
          className="grow outline-none resize-none py-5 px-2 modal-body"
          placeholder="Take a note..."
          value={modalNote.body}
          onChange={handleBody}
        />
        <div className="flex h-10 gap-4 items-center modal-bottom-icons">
          {iconList.map((icon: any) => (
            <button
              key={`modal-icon-${icon.name}`}
              className={`h-full aspect-square hover:bg-hover-color hover:rounded-full modal-icon ${icon.name}`}
              onClick={handleClick}
            >
              <Image src={icon.src} alt={icon.name} width={24} height={24} />
            </button>
          ))}
          <button
            onClick={handleClose}
            className="ml-auto h-full w-20 hover:bg-hover-color hover:rounded-lg modal-close"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
