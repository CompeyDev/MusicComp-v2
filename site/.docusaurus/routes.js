
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/MusicComp-v2/docs/blog/archive',
    component: ComponentCreator('/MusicComp-v2/docs/blog/archive','d01'),
    exact: true
  },
  {
    path: '/MusicComp-v2/docs/markdown-page',
    component: ComponentCreator('/MusicComp-v2/docs/markdown-page','bd0'),
    exact: true
  },
  {
    path: '/MusicComp-v2/docs/docs',
    component: ComponentCreator('/MusicComp-v2/docs/docs','0e6'),
    routes: [
      {
        path: '/MusicComp-v2/docs/docs/',
        component: ComponentCreator('/MusicComp-v2/docs/docs/','56a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/MusicComp-v2/docs/docs/tutorial-basics/host',
        component: ComponentCreator('/MusicComp-v2/docs/docs/tutorial-basics/host','72d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/MusicComp-v2/docs/',
    component: ComponentCreator('/MusicComp-v2/docs/','340'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
