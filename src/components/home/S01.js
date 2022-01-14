import classNames from 'classnames/bind';

import styles from './scss/S01.module.scss';

const cx = classNames.bind(styles);

import S01_bg from '../../assets/images/home/background.jpg';
import model_img from '../../assets/images/home/model.png';

function S01() {
  return (
    <div className={cx('container')}>
      <div className={cx('info')}>
        <img className={cx('model')} src={model_img} alt="" />
        <h2 className={cx('title')}>see &amp; me</h2>
      </div>
      <img className={cx('background')} src={S01_bg} alt="" />
    </div>
  );
}

export default S01;
