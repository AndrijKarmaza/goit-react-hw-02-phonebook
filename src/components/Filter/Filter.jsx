export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contct by name{' '}
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};
