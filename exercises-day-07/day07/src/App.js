import './App.css';
import Header from './components/Header.js';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const data ={
    welcome: 'Welcome to 30 Days of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asebeneh',
      lastname:  'Yetayeh',
    },
    date: 'Oct 7, 2020'
  }
  const techs = ['HTML','CSS','JavaScript'];
  return (
    <>
    <Header data={data}/>
    <Main techs={techs}/>
    <Footer date={new Date()}/>
    </>
    
 );
}

export default App;
