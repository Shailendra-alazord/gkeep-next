import {useCallback} from 'react';
import Note from '@/components/note/note'; // @ts-ignore
import './notesLayout.css';
import filterNoteList from '@/utils/filterNoteList';
// @ts-ignore
export default function NotesLayout({ className, noteListData, toggleModal, toggleModalNote, layoutMode, query }) {
  const { noteList } = noteListData;
  const filteredList = filterNoteList(noteList, query);
  const noteListPinned = filteredList.filter((note: { pinned: any }) => note.pinned);
  const noteListOthers = filteredList.filter((note: { pinned: any }) => !note.pinned);

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
