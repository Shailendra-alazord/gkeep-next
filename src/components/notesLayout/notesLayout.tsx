import {useCallback} from 'react';
import Note from '@/components/note/note'; // @ts-ignore
import './notesLayout.css';
// @ts-ignore
export default function NotesLayout({ className, noteListData, toggleModal, toggleModalNote, layoutMode }) {
  const { noteList } = noteListData;
  const noteListPinned = noteList.filter((note: { pinned: any }) => note.pinned);
  const noteListOthers = noteList.filter((note: { pinned: any }) => !note.pinned);

  const handleClick = useCallback(
    (note: any) => {
      toggleModalNote(note);
    },
    [toggleModalNote]
  );

  return (
    <div className={className}>
      {noteListPinned.length > 0 && (
        <>
          <div>Pinned</div>
          <div className={`${layoutMode === 'GRID' ? 'grid' : 'list'}-notes-container focused`}>
            {noteListPinned.map((note: any) => {
              return (
                <Note
                  key={note.id}
                  note={note}
                  noteListData={noteListData}
                  className={`note-container ${layoutMode === 'GRID' ? 'grid' : 'list'}`}
                  toggleModal={toggleModal}
                  toggleModalNote={handleClick}
                />
              );
            })}
          </div>
        </>
      )}
      {noteListOthers.length > 0 && (
        <>
          <div>Others</div>
          <div className={`${layoutMode === 'GRID' ? 'grid' : 'list'}-notes-container others`}>
            {noteListOthers.map((note: any) => {
              return (
                <Note
                  key={note.id}
                  note={note}
                  noteListData={noteListData}
                  className={`note-container ${layoutMode === 'GRID' ? 'grid' : 'list'}`}
                  toggleModal={toggleModal}
                  toggleModalNote={handleClick}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
