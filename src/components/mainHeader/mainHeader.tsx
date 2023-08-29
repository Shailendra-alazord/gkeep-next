'use client';
// @ts-ignore
import {useState} from 'react';
import NoteMaker from '@/components/noteMaker/noteMaker';
import NoteMakerFocused from '@/components/noteMakerFocused/noteMakerFocused'; // @ts-ignore
import './mainHeader.css';
// @ts-ignore
export default function MainHeader({ className, value }) {
  const [focus, setFocus] = useState(false);
  return (
    <div className={className}>
      {focus ? (
        <NoteMakerFocused className="note-maker focused" value={{ focus: focus, setFocus: setFocus, ...value }} />
      ) : (
        <NoteMaker className="note-maker" value={{ focus: focus, setFocus: setFocus, ...value }} />
      )}
    </div>
  );
}
