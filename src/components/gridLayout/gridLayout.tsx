import './gridLayout.css';
import Note from '@/components/note/note';
// @ts-ignore
export default function GridLayout({ className, value }) {
  const { noteList } = value;
  const noteListPinned = noteList.filter((note: { pinned: any }) => note.pinned);
  const noteListOthers = noteList.filter((note: { pinned: any }) => !note.pinned);
  return (
    <div className={className}>
      {noteListPinned.length > 0 && (
        <>
          <div>Pinned</div>
          <div className="grid-notes-container focused">
            {noteListPinned.map((note: any) => {
              return <Note key={note.id} note={note} value={value} className="note-container grid" />;
            })}
          </div>
        </>
      )}
      {noteListOthers.length > 0 && (
        <>
          <div>Others</div>
          <div className="grid-notes-container others">
            {noteListOthers.map((note: any) => {
              return <Note key={note.id} note={note} value={value} className="note-container grid" />;
            })}
          </div>
        </>
      )}
    </div>
  );
}
