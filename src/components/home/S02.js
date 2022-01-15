import { useRef } from 'react';
import { gsap } from 'gsap';
import classNames from 'classnames/bind';

import styles from './scss/S02.module.scss';

const cx = classNames.bind(styles);

function S02() {
  const containerRef = useRef();
  const titleRef = useRef([]);

  const onMouseMove = event => {
    gsap.to(titleRef.current, {
      x: event.clientX,
      y: event.clientY,
      duration: 1,
      stagger: 0.01,
    });
  };

  return (
    <div ref={containerRef} className={cx('container')} onMouseMove={onMouseMove}>
      {Array.from({ length: 10 }).map((_, index) => (
        <h2
          key={index}
          ref={el => titleRef.current.push(el)}
          className={cx(['title', { lastTitle: index === 0 }])}
        >
          Advanced <span>Moving</span>
        </h2>
      ))}
    </div>
  );
}

export default S02;
