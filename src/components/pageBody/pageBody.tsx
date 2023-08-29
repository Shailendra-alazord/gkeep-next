// @ts-ignore
import PageBodyLeft from '@/components/pageBodyLeft/pageBodyLeft';
import PageBodyRight from '@/components/pageBodyRight/pageBodyRight';
import './pageBody.css';

// @ts-ignore
export default function PageBody({ className, menuOpen, query }) {
  return (
    <div className={className}>
      <PageBodyLeft className="page-body-left" menuOpen={menuOpen} />
      <PageBodyRight className="page-body-right" query={query} />
    </div>
  );
}
