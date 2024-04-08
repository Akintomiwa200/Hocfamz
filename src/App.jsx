
import './App.css';
import Hoc from './component/Hoc';
import Hover from './pages/Hover';
import Text from './pages/Text';

const HoverWithHoc = Hoc(Hover);
const TextWithHoc = Hoc(Text);

function App() {
  return (
    <div className="App">
      <HoverWithHoc />
      <TextWithHoc />
    </div>
  );
}

export default App;
