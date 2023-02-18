import React from 'react'

import projectStyles from '../style.module.css'
import styles from './footer.module.css'

const Footer = (props) => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['container']}>
        <div className={styles['container1']}>
          <span className={styles['text']}>SOFT</span>
          <span>Copyright © 2021 Soft by Creative Tim.</span>
        </div>
        <div className={styles['container2']}>
          <div className={styles['container3']}>
            <span className={` ${styles['text02']} ${projectStyles['large']} `}>
              Company
            </span>
            <span className={` ${styles['text03']} ${projectStyles['large']} `}>
              About Us
            </span>
            <span className={` ${styles['text04']} ${projectStyles['large']} `}>
              Careers
            </span>
            <span className={` ${styles['text05']} ${projectStyles['large']} `}>
              Press
            </span>
          </div>
          <div className={styles['container4']}>
            <span className={` ${styles['text06']} ${projectStyles['large']} `}>
              Pages
            </span>
            <span className={` ${styles['text07']} ${projectStyles['large']} `}>
              Login
            </span>
            <span className={` ${styles['text08']} ${projectStyles['large']} `}>
              Register
            </span>
            <span className={` ${styles['text09']} ${projectStyles['large']} `}>
              About
            </span>
          </div>
          <div className={styles['container5']}>
            <span className={` ${styles['text10']} ${projectStyles['large']} `}>
              Products
            </span>
            <span className={` ${styles['text11']} ${projectStyles['large']} `}>
              Free
            </span>
            <span className={` ${styles['text12']} ${projectStyles['large']} `}>
              PRO
            </span>
            <span className={` ${styles['text13']} ${projectStyles['large']} `}>
              Latest
            </span>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/waves-white.svg"
        className={styles['image']}
      />
    </footer>
  )
}

export default Footer
