import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'Bilibili@铃星羽Channel',
    Img: '../img/1.gif',
    Url: 'https://space.bilibili.com/179843645',
    description: <>一般用来发公告啥的，也有可能发点别的东西</>,
  },
  {
    title: 'Bilibili@绫沫Yokina',
    Img: '../img/2.png',
    Url: 'https://space.bilibili.com/30231981',
    description: <>作者Bilibili账号</>,
  },
  {
    title: 'Twitter@yokinamoe',
    Img: '../img/3.jpg',
    Url: 'https://twitter.com/yokinamoe',
    description: 'Nya~'
  },
]

function Feature({ Url, Img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={Url}>
          <img className={styles.featureImg} src={Img} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
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
  )
}
