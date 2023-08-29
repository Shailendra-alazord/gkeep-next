'use client';
// @ts-ignore
import MainHeader from '@/components/mainHeader/mainHeader';
import MainBody from '@/components/mainBody/mainBody';
import './pageBodyRight.css';
import {useMemo, useState} from 'react'; // @ts-ignore

// @ts-ignore
export default function PageBodyRight({ className }) {
  // @ts-ignore
  const [noteList, setNoteList] = useState(JSON.parse(localStorage.getItem('noteList')) ?? []);
  const value = useMemo(
    () => ({
      noteList,
      setNoteList,
    }),
    [noteList]
  );
  return (
    <div className={className}>
      <MainHeader className="main-header" value={value} />
      <MainBody className="main-body" value={{ noteList: noteList, setNoteList: setNoteList }} />
    </div>
  );
}
