import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastContext';

function ToastShelf() {
  const { toasts } = React.use(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast
            message={toast.message}
            variant={toast.variant}
            id={toast.id}
          ></Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
