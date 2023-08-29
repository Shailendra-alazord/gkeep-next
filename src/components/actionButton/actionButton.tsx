// @ts-ignore
import Image from 'next/image';

// @ts-ignore
export default function ActionButton({ icon, handleAction, className }) {
  function handleClick() {
    console.log('handle action called', icon.name);
    handleAction(icon.name);
  }

  return (
    <button className={className + ' ' + icon.name} onClick={handleClick}>
      <Image src={icon.src} alt={icon.name} width={18} height={18} />
    </button>
  );
}
