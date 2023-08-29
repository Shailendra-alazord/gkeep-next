'use client';
// @ts-ignore
import {LEFTPANEICONS} from '@/utils/constants';
import Image from 'next/image';
import './pageBodyLeft.css';
import {useCallback} from 'react'; // @ts-ignore

// @ts-ignore
export default function PageBodyLeft({ className }) {
  const handleClick = useCallback(() => {
    alert('functionality will be added soon');
  }, []);
  return (
    <div className={className}>
      <div className="left-pane-icons-container">
        {LEFTPANEICONS.map((icon: any) => {
          return (
            <div
              key={'left-pane-icon' + icon.name}
              className="left-pane-icon-container flex pl-3"
              style={{ backgroundColor: `${icon.name === 'notes' && '#feefc3'}` }}
              onClick={handleClick}
            >
              <div className={'left-pane-icon ' + icon.name}>
                <Image src={icon.src} alt={icon.name} width={24} height={24} />
              </div>
              <div className={'left-pane-icon-label'}>{icon.label}</div>
            </div>
          );
        })}
      </div>
      <div className="dummy div"></div>
    </div>
  );
}
