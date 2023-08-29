// @ts-ignore
import PageBodyLeft from '@/components/pageBodyLeft/pageBodyLeft';
import PageBodyRight from '@/components/pageBodyRight/pageBodyRight';
import './pageBody.css';

// @ts-ignore
export default function PageBody({ className }) {
  return (
    <div className={className}>
      <PageBodyLeft className="page-body-left" />
      <PageBodyRight className="page-body-right" />
    </div>
  );
}
