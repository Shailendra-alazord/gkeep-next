import './pageHeaderLeft.css';
import Image from 'next/image';
import {MENUICON} from '@/utils/constants'; // @ts-ignore
// @ts-ignore
export default function PageHeaderLeft({ className, toggleMenu }) {
  return (
    <div className={className}>
      <div className="menu-icon" onClick={toggleMenu}>
        <Image src={MENUICON.src} alt={MENUICON.name} width={24} height={24} />
      </div>
      <div className="title-container">
        <button className="keep-logo">
          <Image src={'/keep_logo.svg'} alt={'Keep Logo'} width={28} height={28} />
        </button>
        <div className="page-title">Keep</div>
      </div>
    </div>
  );
}
