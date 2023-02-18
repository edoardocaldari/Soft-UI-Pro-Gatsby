import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './list-item.module.css'

const ListItem = (props) => {
  return (
    <div className={styles['container']}>
      <h5 className={` ${styles['text']} ${projectStyles['heading-three']} `}>
        {props.new_prop}
      </h5>
      <span>{props.description}</span>
    </div>
  )
}

ListItem.defaultProps = {
  description:
    'Gain access to the demographics, psychographics, and location of unique people who are interested and talk about your brand.',
  new_prop: '1. Listen to Social Conversations',
}

ListItem.propTypes = {
  description: PropTypes.string,
  new_prop: PropTypes.string,
}

export default ListItem
