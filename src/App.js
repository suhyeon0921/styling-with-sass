import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className='App'>
      {/* 버튼 사이즈 */}
      <div className='buttons'>
        <Button size='large' onClick={() => alert('클릭되었습니다!')}>
          BUTTON
        </Button>
        <Button>BUTTON</Button>
        <Button size='small'>BUTTON</Button>
      </div>
      {/* 버튼 색상 */}
      <div className='buttons'>
        <Button size='large' color='gray'>
          BUTTON
        </Button>
        <Button color='gray'>BUTTON</Button>
        <Button size='small' color='gray'>
          BUTTON
        </Button>
      </div>
      <div className='buttons'>
        <Button size='large' color='pink'>
          BUTTON
        </Button>
        <Button color='pink'>BUTTON</Button>
        <Button size='small' color='pink'>
          BUTTON
        </Button>
      </div>
      {/* outline */}
      <div className='buttons'>
        <Button size='large' color='blue' outline>
          BUTTON
        </Button>
        <Button color='gray' outline>
          BUTTON
        </Button>
        <Button size='small' color='pink' outline>
          BUTTON
        </Button>
      </div>
      {/* fullwidth */}
      <div className='buttons'>
        <Button size='large' fullwidth>
          BUTTON
        </Button>
        <Button size='large' color='gray' fullwidth>
          BUTTON
        </Button>
        <Button size='large' color='pink' fullwidth>
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
