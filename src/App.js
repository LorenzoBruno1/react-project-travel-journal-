import './App.css';
import Navbar from './NavBar'
import Article from './Article'
import TravelDatas from './Travel-Datas'

function App() {
  const articles = TravelDatas.map(index => {
    return (
      <Article 
      key={index.location}
      {...index} />
    )
  })
  return (
    <div className="main-c">
      <Navbar />
      <div className="body-c">
        {articles}
      </div>
    </div>
  );
}

export default App;
