// @ts-ignore
import Image from 'next/image';
import {BRUSHICON, CHECKBOXICON, PHOTOICON} from '@/utils/constants'; // @ts-ignore
import './noteMaker.css'; // @ts-ignore

// @ts-ignore
export default function NoteMaker({ className, toggleFocus }) {
  return (
    <div className={className} onClick={toggleFocus}>
      <input className="note-maker-title" placeholder="Take a note..." />
      <button>
        <Image src={CHECKBOXICON.src} alt={CHECKBOXICON.name} width={24} height={24} />
      </button>
      <button>
        <Image src={BRUSHICON.src} alt={BRUSHICON.name} width={24} height={24} />
      </button>
      <button>
        <Image src={PHOTOICON.src} alt={PHOTOICON.name} width={24} height={24} />
      </button>
    </div>
  );
}
