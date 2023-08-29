// @ts-ignore
import Note from '@/components/note/note';
import './listLayout.css';

// @ts-ignore
export default function ListLayout({ className, value }) {
  const { noteList } = value;
  const noteListPinned = noteList.filter((note: { pinned: any }) => note.pinned);
  const noteListOthers = noteList.filter((note: { pinned: any }) => !note.pinned);
  return (
    <div className={className}>
      {noteListPinned.length > 0 && (
        <div className="list-notes-container focused">
          <div>Pinned</div>
          {noteListPinned.map((note: any) => {
            return <Note key={note.id} note={note} value={value} className="note-container list" />;
          })}
        </div>
      )}
      {noteListOthers.length > 0 && (
        <div className="list-notes-container others">
          <div>Others</div>
          {noteListOthers.map((note: any) => {
            return <Note key={note.id} note={note} value={value} className="note-container list" />;
          })}
        </div>
      )}
    </div>
  );
}
