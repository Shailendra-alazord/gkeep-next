'use client';
// @ts-ignore
import MainHeader from '@/components/mainHeader/mainHeader';
import MainBody from '@/components/mainBody/mainBody';
import './pageBodyRight.css';
import {useContext, useMemo, useState} from 'react';
import {DisplayContext} from '@/providers/displayProvider'; // @ts-ignore

// @ts-ignore
export default function PageBodyRight({ className, query }) {
  // @ts-ignore
  const [noteList, setNoteList] = useState(() => JSON.parse(localStorage.getItem('noteList')) ?? []);
  // @ts-ignore
  const { searchMode } = useContext(DisplayContext);
  const noteListData = useMemo(
    () => ({
      noteList,
      setNoteList,
    }),
    [noteList]
  );

  return (
    <div className={className}>
      {!searchMode && <MainHeader className="main-header" noteListData={noteListData} />}
      <MainBody className="main-body" noteListData={noteListData} query={query} />
    </div>
  );
}
