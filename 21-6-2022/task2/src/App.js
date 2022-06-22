import Nav from './components/Nav';
import Card from './components/Card';


function App() {
  return (
    <div>
      <Nav />

      <div class="container mt-5">
        <div class="row">
          <Card name='ali' />
          <Card name='ola' />
          <Card name='omr' />
          <Card name='ahmad' />
        </div>
      </div>

    </div>
  )
}

export default App;