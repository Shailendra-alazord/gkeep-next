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
export default function Note({ note, noteListData, className, toggleModalNote, layoutMode }) {
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
    toggleModalNote(note);
  }, [note, toggleModalNote]);

  return (
    <pre className={className}>
      <div className={`flex h-6 note-title`}>
        <div onClick={handleClick} className="flex grow items-center font-medium note-title-label">
          {note.title ?? 'Title'}
        </div>
        <button className={'hover:rounded-full btn-grid'} onClick={() => handleAction('pin')}>
          {note.pinned ? (
            <Image src={UNPINICON.src} alt={UNPINICON.name} width={24} height={24} />
          ) : (
            <Image src={PINICON.src} alt={PINICON.name} width={24} height={24} />
          )}
        </button>
      </div>
      <div className={`flex grow py-2 note-body`} onClick={handleClick}>
        {note.body}
      </div>
      <div
        className={`flex h-8 items-center ${
          layoutMode === 'GRID' ? 'justify-between' : 'justify-start gap-5'
        } note-icon-list`}
      >
        {bottomIcons.map((icon: any) => {
          return (
            <ActionButton
              key={'icon-' + icon.name}
              className={'hover:rounded-full bottom-icons'}
              icon={icon}
              handleAction={handleAction}
            />
          );
        })}
      </div>
    </pre>
  );
}
