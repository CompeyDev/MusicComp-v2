
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/MusicComp-v2/docs/markdown-page',
    component: ComponentCreator('/MusicComp-v2/docs/markdown-page','785'),
    exact: true
  },
  {
    path: '/MusicComp-v2/docs/docs',
    component: ComponentCreator('/MusicComp-v2/docs/docs','506'),
    routes: [
      {
        path: '/MusicComp-v2/docs/docs/',
        component: ComponentCreator('/MusicComp-v2/docs/docs/','56a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/MusicComp-v2/docs/docs/tutorial-basics/host',
        component: ComponentCreator('/MusicComp-v2/docs/docs/tutorial-basics/host','72d'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/MusicComp-v2/docs/',
    component: ComponentCreator('/MusicComp-v2/docs/','994'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
