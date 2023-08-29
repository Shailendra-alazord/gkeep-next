// @ts-ignore
import {useContext} from 'react';
import {DisplayContext} from '@/providers/displayProvider';
import GridLayout from '@/components/gridLayout/gridLayout';
import ListLayout from '@/components/listLayout/listLayout';
import './mainBody.css';

// @ts-ignore
export default function MainBody({ className, value }) {
  // @ts-ignore
  const { layoutMode } = useContext(DisplayContext);
  return (
    <div className={className}>
      {layoutMode === 'GRID' ? (
        <GridLayout className="grid-layout" value={value} />
      ) : (
        <ListLayout className="list-layout" value={value} />
      )}
    </div>
  );
}
