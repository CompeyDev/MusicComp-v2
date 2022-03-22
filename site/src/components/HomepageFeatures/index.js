import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Spotify, Sound Cloud, YouTube Support',
    description: (
      <>
        Use MusicComp with your favourite platforms without any lag!
      </>
    ),
  },
  {
    title: 'Web Dashboard',
    description: (
      <>
        Control your song looping song or queue, You can even change
        server prefix and server DJ role. 
      </>
    ),
  },
  {
    title: 'Custom Branding & More',
    description: (
      <>
        Self Host the bot to use a custom name and custom commands without
        full control over the source code of the bot.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
