import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './scss/S01.module.scss';

const cx = classNames.bind(styles);

function S01() {
  gsap.registerPlugin(ScrollTrigger);
  const titleRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: '10px top',
        end: 'center center',
        scrub: true,
        markers: true,
      },
    });

    tl.from(titleRef.current, {
      autoAlpha: 0,
      y: `-1000px`,
      duration: 1,
    });
    tl.to(titleRef.current, { scale: 1.5, duration: 2 }, 1);
    tl.to(containerRef.current, { backgroundColor: '#000', duration: 2 }, 1);
    tl.to(titleRef.current, { color: '#fff', duration: 2 }, 1);
  }, []);

  return (
    <div ref={containerRef} className={cx('container')}>
      <div className={cx('info')}>
        <h2 ref={titleRef} className={cx('title')}>
          ON SEEROELP
        </h2>
      </div>
    </div>
  );
}

export default S01;
