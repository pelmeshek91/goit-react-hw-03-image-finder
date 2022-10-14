export const ButtonPagination = ({ page, pagination }) => {
  return (
    <>
      <button type="button" onClick={pagination}>
        Load more
      </button>
    </>
  );
};
