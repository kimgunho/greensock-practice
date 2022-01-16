import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './scss/S05.module.scss';

const cx = classNames.bind(styles);

function S05() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    gsap.to(titleRef.current, {
      duration: 1,
      opacity: 1,
      scale: 10,
      scrollTrigger: {
        trigger: containerRef.current,
        start: '10px top',
        endTrigger: containerRef.current,
        end: 'bottom bottom',
        scrub: true,
        markers: true,
        pin: titleRef.current,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className={cx('container')}>
      <div className={cx('section')}>
        <h1 ref={titleRef}>oplet misu</h1>
      </div>
    </div>
  );
}

export default S05;
