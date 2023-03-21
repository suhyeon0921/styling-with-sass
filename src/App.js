import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className='App'>
      {/* 버튼 사이즈 */}
      <div className='buttons'>
        <Button size='large'>BUTTON</Button>
        <Button>BUTTON</Button>
        <Button className='small'>BUTTON</Button>
      </div>
      {/* 버튼 색상 */}
      <div className='buttons'>
        <Button size='large' color='gray'>
          BUTTON
        </Button>
        <Button color='gray'>BUTTON</Button>
        <Button className='small' color='gray'>
          BUTTON
        </Button>
      </div>
      <div className='buttons'>
        <Button size='large' color='pink'>
          BUTTON
        </Button>
        <Button color='pink'>BUTTON</Button>
        <Button className='small' color='pink'>
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
