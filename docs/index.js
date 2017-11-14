/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen, pageLoader } from 'catalog';

import 'purecss/build/pure.css';
import './main.css';
import '../style.css';

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = {};
const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('../README.md'))
  },
  {
    path: '/setup',
    title: 'Setup',
    content: pageLoader(() => import('../pages/setup'))
  },
  {
    path: '/components',
    title: 'Components',
    pages: [
      {
        path: '/components/usage',
        title: 'Usage',
        content: pageLoader(() => import('../pages/components/usage'))
      },
      {
        path: '/components/alerts',
        title: 'Alerts',
        content: pageLoader(() => import('../pages/components/alerts'))
      },
      {
        path: '/components/badges',
        title: 'Badges',
        content: pageLoader(() => import('../pages/components/badges'))
      }
    ]
  }
];

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <GithubCorner
      href="https://github.com/klummy/shards-react"
      bannerColor="#fff"
      octoColor="#000"
      width={80}
      height={80}
      direction="right"
    />
    <Catalog
      imports={documentationImports}
      pages={pages}
      specimens={{
        javascript: props => <CodeSpecimen {...props} lang="javascript" />,
        js: props => <CodeSpecimen {...props} lang="javascript" />,
        jsx: props => <ReactSpecimen {...props} />
      }}
      title="Components"
    />
  </div>,
  document.getElementById('catalog')
);
