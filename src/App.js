import './css/style.css';
import BntTopo from './components/bnt_topo';
import MenuMobile from './components/menu_mobile';
import BannerPage from './components/banner_page';
import QuemSou from './components/quem_sou';
import Projetos from './components/projetos';
import Contato from './components/contato';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <BntTopo/>
      <MenuMobile/>

      <main className='page'>
        <BannerPage/>
        <QuemSou/>
        <Projetos/>
        <Contato/>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
