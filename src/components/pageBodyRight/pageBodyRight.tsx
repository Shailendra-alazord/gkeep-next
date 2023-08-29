'use client';
// @ts-ignore
import MainHeader from '@/components/mainHeader/mainHeader';
import MainBody from '@/components/mainBody/mainBody';
import './pageBodyRight.css';
import {useMemo, useState} from 'react'; // @ts-ignore

// @ts-ignore
export default function PageBodyRight({ className }) {
  // @ts-ignore
  const [noteList, setNoteList] = useState(() => JSON.parse(localStorage.getItem('noteList')) ?? []);
  const noteListData = useMemo(
    () => ({
      noteList,
      setNoteList,
    }),
    [noteList]
  );

  return (
    <div className={className}>
      <MainHeader className="main-header" noteListData={noteListData} />
      <MainBody className="main-body" noteListData={noteListData} />
    </div>
  );
}
