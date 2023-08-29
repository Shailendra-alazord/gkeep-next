'use client';
// @ts-ignore
import {useCallback, useState} from 'react';
import NoteMaker from '@/components/noteMaker/noteMaker';
import NoteMakerFocused from '@/components/noteMakerFocused/noteMakerFocused'; // @ts-ignore
import './mainHeader.css';
// @ts-ignore
export default function MainHeader({ className, noteListData }) {
  const [focus, setFocus] = useState(false);
  const toggleFocus = useCallback(() => {
    setFocus(prevState => !prevState);
  }, []);

  return (
    <div className={className}>
      {focus ? (
        <NoteMakerFocused
          className="note-maker focused"
          focus={focus}
          toggleFocus={toggleFocus}
          noteListData={noteListData}
        />
      ) : (
        <NoteMaker className="note-maker" toggleFocus={toggleFocus} />
      )}
    </div>
  );
}
