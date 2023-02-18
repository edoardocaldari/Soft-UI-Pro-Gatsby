import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './feature-card.module.css'

const FeatureCard = (props) => {
  return (
    <div className={styles['container']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <h5 className={` ${styles['text']} ${projectStyles['heading-three']} `}>
        {props.new_prop}
      </h5>
      <span className={styles['text1']}>{props.text}</span>
    </div>
  )
}

FeatureCard.defaultProps = {
  image_src: '/playground_assets/rocket1.svg',
  image_alt: 'image',
  text: 'Get the latest design ideas and turn it into reality.',
  new_prop: 'Design',
}

FeatureCard.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  new_prop: PropTypes.string,
}

export default FeatureCard
