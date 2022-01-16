import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './scss/S04.module.scss';
const cx = classNames.bind(styles);

function S04() {
  gsap.registerPlugin(ScrollTrigger);
  const panelRef = useRef([]);
  const containerRef = useRef();
  useEffect(() => {
    const panels = gsap.utils.toArray(panelRef.current);

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      scrollTrigger: {
        ease: 10,
        trigger: containerRef.current,
        markers: true,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
      },
    });
  }, []);

  return (
    <>
      <div ref={containerRef} className={cx('container')}>
        <div
          style={{ backgroundColor: `blue` }}
          ref={el => panelRef.current.push(el)}
          className={cx('panel')}
        >
          <h2>first</h2>
        </div>
        <div
          style={{ backgroundColor: `green` }}
          ref={el => panelRef.current.push(el)}
          className={cx('panel')}
        >
          <h2>second</h2>
        </div>
        <div
          style={{ backgroundColor: `yellow` }}
          ref={el => panelRef.current.push(el)}
          className={cx('panel')}
        >
          <h2>third</h2>
        </div>
        <div
          style={{ backgroundColor: `purple` }}
          ref={el => panelRef.current.push(el)}
          className={cx('panel')}
        >
          <h2>fore</h2>
        </div>
      </div>
    </>
  );
}

export default S04;
