import classNames from 'classnames/bind';

import styles from './NotFound.module.scss';

const cx = classNames.bind(styles);

function NotFound() {
  return <div className={cx('notFound')}></div>;
}

export default NotFound;
