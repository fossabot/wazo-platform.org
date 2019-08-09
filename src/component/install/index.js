import React from 'react';
import ReactMarkdown from 'react-markdown';
import Helmet from 'react-helmet';

import Layout from '../documentation/Layout';

export default ({ pageContext: { installDoc }}) => (
        <Layout breadcrumbs={[
            {link: '../', label: 'Home', active: false},
            {link: '#', label: 'Install', active: true}
        ]} className="body-green">
    <Helmet>
      <title>Getting Started</title>
    </Helmet>

    <div className="doc-wrapper">
      <section id="install" className="about section">
        <div className="container">
          <ReactMarkdown source={installDoc} />
        </div>
      </section>
    </div>
  </Layout>
);