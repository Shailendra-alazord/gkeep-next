// @ts-ignore
import {useCallback, useContext, useState} from 'react';
import {DisplayContext} from '@/providers/displayProvider';
import './mainBody.css';
import ModalNote from '@/components/modalNote/modalNote';
import NotesLayout from '@/components/notesLayout/notesLayout';
import useNote from '@/utils/useNote';

// @ts-ignore
export default function MainBody({ className, noteListData, query }) {
  // @ts-ignore
  const { layoutMode } = useContext(DisplayContext);
  const [modalOpen, setModalOpen] = useState(false);
  const { note: modalNote, noteDispatch: modalNoteDispatch } = useNote();
  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  return (
    <div className={className}>
      <NotesLayout
        className={
          layoutMode === 'GRID'
            ? 'flex flex-col h-full px-5 py-10 grid-layout'
            : 'h-full px-5 py-10 mx-auto list-layout'
        }
        layoutMode={layoutMode}
        noteListData={noteListData}
        toggleModal={toggleModal}
        query={query}
        modalNoteDispatch={modalNoteDispatch}
      />
      {modalOpen && (
        <ModalNote
          modalNote={modalNote}
          toggleModal={toggleModal}
          modalNoteDispatch={modalNoteDispatch}
          noteListData={noteListData}
        />
      )}
    </div>
  );
}
