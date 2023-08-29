import './pageHeader.css';
import PageHeaderCenter from '@/components/pageHeaderCenter/pageHeaderCenter';
import PageHeaderLeft from '@/components/pageHeaderLeft/pageHeaderLeft';
import PageHeaderRight from '@/components/pageHeaderRight/pageHeaderRight';
// import pageHeaderCenter from "@/components/globarSearchBar/pageHeaderCenter";

// @ts-ignore
export default function PageHeader({ className }) {
  return (
    <div className={className}>
      <PageHeaderLeft className={'page-header-left'} />
      <PageHeaderCenter className={'page-header-center'} />
      <PageHeaderRight className={'page-header-right'} />
    </div>
  );
}
