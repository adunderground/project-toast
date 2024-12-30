import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: '123123',
      message: 'hello',
      variant: 'success',
    },
    {
      id: '321321',
      message: 'eblo',
      variant: 'error',
    },
  ]);

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }

  function dissmissAll(e) {
    if (e.key === 'Escape') {
      setToasts([]);
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', dissmissAll);
    return () => {
      window.removeEventListener('keydown', dissmissAll);
    };
  }, []);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        createToast,
        dismissToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
