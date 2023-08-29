import './note.css';
import Image from 'next/image';
import {
  ALERTICON,
  ARCHIVEICON,
  COLLABORATORICON,
  DELETEICON,
  PALETTEICON,
  PHOTOICON,
  PINICON,
  UNPINICON,
} from '@/utils/constants';
import ActionButton from '@/components/actionButton/actionButton';
import { useCallback } from 'react';

const bottomIcons = [ALERTICON, COLLABORATORICON, PALETTEICON, PHOTOICON, ARCHIVEICON, DELETEICON];
// @ts-ignore
export default function Note({ note, noteListData, className, toggleModal, toggleModalNote }) {
  const { noteList, setNoteList } = noteListData;

  const deleteNote = useCallback(() => {
    const newNoteList = noteList.filter((noteElem: any) => noteElem.id !== note.id);
    setNoteList(newNoteList);
    localStorage.setItem('noteList', JSON.stringify(newNoteList));
  }, [note.id, noteList, setNoteList]);

  const togglePin = useCallback(() => {
    const newNoteList = noteList.map((noteElem: any) => {
      return note.id === noteElem.id ? { ...note, pinned: !note.pinned } : noteElem;
    });
    setNoteList(newNoteList);
    localStorage.setItem('noteList', JSON.stringify(newNoteList));
  }, [note, noteList, setNoteList]);

  const handleAction = useCallback(
    (icon: string) => {
      switch (icon) {
        case 'pin':
          togglePin();
          break;
        case 'delete':
          deleteNote();
          break;
        default:
          alert('associated function to be added soon');
      }
    },
    [deleteNote, togglePin]
  );

  const handleClick = useCallback(() => {
    toggleModal();
    toggleModalNote(note);
  }, [note, toggleModal, toggleModalNote]);

  return (
    <pre className={className}>
      <div className={`note-title ${className === 'note-container list' ? 'list' : 'grid'}`}>
        <div onClick={handleClick}>{note.title ?? 'Title'}</div>
        <button className={'btn-grid'} onClick={() => handleAction('pin')}>
          {note.pinned ? (
            <Image src={UNPINICON.src} alt={UNPINICON.name} width={24} height={24} />
          ) : (
            <Image src={PINICON.src} alt={PINICON.name} width={24} height={24} />
          )}
        </button>
      </div>
      <div className={`note-body ${className === 'note-container list' ? 'list' : 'grid'}`} onClick={handleClick}>
        {note.body}
      </div>
      <div className="note-icon-list">
        {bottomIcons.map((icon: any) => {
          return (
            <ActionButton
              key={'icon-' + icon.name}
              className={'bottom-icons'}
              icon={icon}
              handleAction={handleAction}
            />
          );
        })}
      </div>
    </pre>
  );
}
