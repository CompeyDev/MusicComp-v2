
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/MusicComp-v2/docs/blog',
    component: ComponentCreator('/MusicComp-v2/docs/blog','b85'),
    exact: true
  },
  {
    path: '/MusicComp-v2/docs/blog/archive',
    component: ComponentCreator('/MusicComp-v2/docs/blog/archive','d01'),
    exact: true
  },
  {
    path: '/MusicComp-v2/docs/blog/first-blog-post',
    component: ComponentCreator('/MusicComp-v2/docs/blog/first-blog-post','eb6'),
    exact: true
  },
  {
    path: '/MusicComp-v2/docs/blog/long-blog-post',
    component: ComponentCreator('/MusicComp-v2/docs/blog/long-blog-post','cb6'),
    exact: true
  },
  {
    path: '/MusicComp-v2/docs/blog/mdx-blog-post',
    component: ComponentCreator('/MusicComp-v2/docs/blog/mdx-blog-post','211'),
    exact: true
  },
  {
    path: '/MusicComp-v2/docs/blog/tags',
    component: ComponentCreator('/MusicComp-v2/docs/blog/tags','9ff'),
    exact: true
  },
  {
    path: '/MusicComp-v2/docs/blog/tags/docusaurus',
    component: ComponentCreator('/MusicComp-v2/docs/blog/tags/docusaurus','791'),
    exact: true
  },
  {
    path: '/MusicComp-v2/docs/blog/tags/facebook',
    component: ComponentCreator('/MusicComp-v2/docs/blog/tags/facebook','ff3'),
    exact: true
  },
  {
    path: '/MusicComp-v2/docs/blog/tags/hello',
    component: ComponentCreator('/MusicComp-v2/docs/blog/tags/hello','4fd'),
    exact: true
  },
  {
    path: '/MusicComp-v2/docs/blog/tags/hola',
    component: ComponentCreator('/MusicComp-v2/docs/blog/tags/hola','9fc'),
    exact: true
  },
  {
    path: '/MusicComp-v2/docs/blog/welcome',
    component: ComponentCreator('/MusicComp-v2/docs/blog/welcome','c52'),
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
