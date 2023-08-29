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
    <div className="modal-note-container">
      <form ref={modalRef} className="modal-note">
        <div className="modal-title">
          <input placeholder="Title" value={modalNote.title} onChange={handleTitle} />
          <button onClick={handlePin}>
            {modalNote.pinned ? (
              <Image src={UNPINICON.src} alt={UNPINICON.name} width={24} height={24} />
            ) : (
              <Image src={PINICON.src} alt={PINICON.name} width={24} height={24} />
            )}
          </button>
        </div>
        <textarea placeholder="Take a note..." value={modalNote.body} onChange={handleBody} />
        <div className="modal-bottom-icons">
          {iconList.map((icon: any) => (
            <button key={`modal-icon-${icon.name}`} className={`modal-icon ${icon.name}`} onClick={handleClick}>
              <Image src={icon.src} alt={icon.name} width={24} height={24} />
            </button>
          ))}
          <button onClick={handleClose} className="modal-close">
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
