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
import ActionButton from '@/components/actionButton/actionButton'; // @ts-ignore

const bottomIcons = [ALERTICON, COLLABORATORICON, PALETTEICON, PHOTOICON, ARCHIVEICON, DELETEICON];
// @ts-ignore
export default function Note({ note, value, className }) {
  const { noteList, setNoteList } = value;

  function deleteNote() {
    const newNoteList = noteList.filter((noteElem: any) => noteElem.id !== note.id);
    setNoteList(newNoteList);
    localStorage.setItem('noteList', JSON.stringify(newNoteList));
  }

  function togglePin() {
    const newNoteList = noteList.map((noteElem: any) => {
      return note.id === noteElem.id ? { ...note, pinned: !note.pinned } : noteElem;
    });
    setNoteList(newNoteList);
    localStorage.setItem('noteList', JSON.stringify(newNoteList));
  }

  function handleAction(icon: string) {
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
  }

  return (
    <pre className={className}>
      <div className={`note-title ${className === 'note-container list' ? 'list' : 'grid'}`}>
        <div>{note.title ?? 'Title'}</div>
        <button className={'btn-grid'} onClick={() => handleAction('pin')}>
          {note.pinned ? (
            <Image src={UNPINICON.src} alt={UNPINICON.name} width={24} height={24} />
          ) : (
            <Image src={PINICON.src} alt={PINICON.name} width={24} height={24} />
          )}
        </button>
      </div>
      <div className={`note-body ${className === 'note-container list' ? 'list' : 'grid'}`}>{note.body}</div>
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
