import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import styles from './scss/S01.module.scss';

const cx = classNames.bind(styles);

import S01_bg from '../../assets/images/home/background.jpg';
import model_img from '../../assets/images/home/model.png';

function S01() {
  const container = useRef();
  const model = useRef();
  const bg = useRef();
  const title = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ repeat: Infinity, repeatDelay: 0.1 });
    tl.to(model.current, { x: 100, duration: 1 });
    tl.to(model.current, { y: 50, duration: 1 });
    tl.to(model.current, { opacity: 0, duration: 1 });
  }, []);

  return (
    <div ref={container} className={cx('container')}>
      <div className={cx('info')}>
        <img ref={model} className={cx('model')} src={model_img} alt="" />
        <h2 ref={title} className={cx('title')}>
          see &amp; me
        </h2>
      </div>
      <img ref={bg} className={cx('background')} src={S01_bg} alt="" />
    </div>
  );
}

export default S01;
