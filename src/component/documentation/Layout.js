import React from 'react';
import Helmet from 'react-helmet';

import '../../styles/elegant-font.css';
import '../../styles/pretty-docs.scss';
import '../../styles/documentation-styles.scss';
import Search from './search';

const HomeHeader = () => (
  <header className="header text-center">
    <div className="container">
      <div className="branding">
        <h1 className="logo">
          <span aria-hidden="true" className="icon_documents_alt icon" />
          <span className="text-highlight">Wazo</span>
          <span className="text-bold">Docs</span>
        </h1>
      </div>
      <div className="tagline">
        <p>Developers Wazo documentation</p>
        <p>
          Created with <i className="fas fa-heart" /> for developers
        </p>
      </div>

      <Search />
    </div>
  </header>
);

const PageHeader = () => (
  <header id="header" className="header">
    <div className="container">
      <div className="branding">
        <h1 className="logo">
          <a href="/">
            <span aria-hidden="true" className="icon_documents_alt icon" />
            <span className="text-highlight">Wazo</span>
            <span className="text-bold">Documentation</span>
          </a>
        </h1>
      </div>

      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        <li className="breadcrumb-item active">Quick Start</li>
      </ol>

      <div className="top-search-box">
        <Search />
      </div>
    </div>
  </header>
);

export default ({ children, className, isHome }) => (
  <div className={`page-wrapper ${className}`}>
    <Helmet bodyAttributes={{ class: 'documentation' }}>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
        rel="stylesheet"
        type="text/css"
      />
      <script src="https://code.jquery.com/jquery-3.3.1.min.js" />
    </Helmet>

    {isHome ? <HomeHeader /> : <PageHeader />}

    {children}

    <footer className="footer text-center">
      <div className="container">
        <small className="copyright">
          Designed with <i className="fas fa-heart" /> by{' '}
          <a href="https://themes.3rdwavemedia.com/" target="_blank" rel="noopener noreferrer">
            Xiaoying Riley
          </a>{' '}
          for developers
        </small>
      </div>
    </footer>
  </div>
);