
import Hoc from '../component/Hoc'

const Hover = ({ count, onTextChanged }) => {
  return (
    <button onMouseOver={onTextChanged}>
      Hover: {count}
    </button>
  );
};

export default Hover;
