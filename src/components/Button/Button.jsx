import s from './Button.module.css';
export const ButtonPagination = ({ pagination }) => {
  return (
    <div className={s.container}>
      <button type="button" className={s.btn} onClick={pagination}>
        Load more
      </button>
    </div>
  );
};
