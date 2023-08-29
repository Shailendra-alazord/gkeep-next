// @ts-ignore
import Image from 'next/image';
import {useCallback} from 'react';

// @ts-ignore
export default function ActionButton({ icon, handleAction, className }) {
  const handleClick = useCallback(() => {
    handleAction(icon.name);
  }, [handleAction, icon.name]);

  return (
    <button className={className + ' ' + icon.name} onClick={handleClick}>
      <Image src={icon.src} alt={icon.name} width={18} height={18} />
    </button>
  );
}
