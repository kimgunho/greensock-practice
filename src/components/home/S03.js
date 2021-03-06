import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import classNames from 'classnames/bind';

import styles from './scss/S03.module.scss';

const cx = classNames.bind(styles);

function S03() {
  const bubleRef = useRef([]);
  const containerRef = useRef();

  useEffect(() => {
    const { clientWidth, clientHeight } = containerRef.current;
    const tl = gsap.timeline();

    tl.to(bubleRef.current, {
      x: `random(${-clientWidth / 2}, ${clientWidth / 2})`,
      y: `random(${-clientHeight / 2}, ${clientHeight / 2})`,
      webkitFilter: 'blur(random(1,10)px)',
      duration: 1,
      ease: 'power4',
    });
    tl.to(bubleRef.current, {
      x: '+=' + `random(-100,100)`,
      y: '+=' + `random(-100,100)`,
      scale: `random(1,2)`,
      opacity: `random(0,1)`,
      backgroundColor: `random(["#ffbf0f", "#000", "#fff"])`,
      webkitFilter: 'blur(random(1,10)px)',
      duration: 1,
      ease: 'none',
      stagger: 0.05,
      //   yoyo: true,
      repeatRefresh: true,
      repeat: -1,
    });
  }, []);

  return (
    <div ref={containerRef} className={cx('container')}>
      <ul className={cx('buble')}>
        {Array.from({ length: 100 }).map((_, index) => (
          <li ref={el => bubleRef.current.push(el)} key={index}></li>
        ))}
      </ul>
    </div>
  );
}

export default S03;
