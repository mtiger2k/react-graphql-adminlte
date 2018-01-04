import React from 'react';
import PageWrapper from '../lib/page/PageWrapper';
import PageHeader from '../lib/page/PageHeader';
import Breadcrumb from '../lib/page/Breadcrumb';
import PageContent from '../lib/page/PageContent';
import Box from '../lib/widgets/Box';

import SingleUploader from '../components/single-uploader'
import MultipleUploader from '../components/multiple-uploader'

export default function HomePage() {
  return (
    <PageWrapper>
      <PageHeader
        title="首页"
        description="欢迎登录银保车贷系统"
      >
        <Breadcrumb
          items={[
            { key: 1, icon: 'fa fa-home', title: '首页', url: '/' }
          ]}
        />
      </PageHeader>
      <PageContent>
        <Box
          title="您好"
          status="primary"
          expandable
          removable
        >
          <SingleUploader />
          <MultipleUploader />
          
        </Box>
      </PageContent>
    </PageWrapper>
  );
}
