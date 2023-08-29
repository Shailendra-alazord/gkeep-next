// @ts-ignore
import {useCallback, useContext, useState} from 'react';
import {DisplayContext} from '@/providers/displayProvider';
import './mainBody.css';
import ModalNote from '@/components/modalNote/modalNote';
import {DEFAULTNOTE} from '@/utils/constants';
import NotesLayout from '@/components/notesLayout/notesLayout';

// @ts-ignore
export default function MainBody({ className, noteListData, query }) {
  // @ts-ignore
  const { layoutMode, searchMode } = useContext(DisplayContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalNote, setModalNote] = useState(DEFAULTNOTE);
  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const toggleModalNote = useCallback((note: any) => {
    setModalNote(note);
  }, []);

  return (
    <div className={className}>
      <NotesLayout
        className={layoutMode === 'GRID' ? 'grid-layout' : 'list-layout'}
        layoutMode={layoutMode}
        noteListData={noteListData}
        toggleModal={toggleModal}
        query={query}
        toggleModalNote={toggleModalNote}
      />
      {modalOpen && (
        <ModalNote
          modalNote={modalNote}
          toggleModalNote={toggleModalNote}
          toggleModal={toggleModal}
          noteListData={noteListData}
        />
      )}
    </div>
  );
}
