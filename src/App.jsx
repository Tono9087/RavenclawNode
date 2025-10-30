import { useState } from 'react'
import './App.css'
import DebugJolotes from './assets/Images/DebugJolotes.jpg'
import Correcaminos from './assets/Images/Correcaminos.jpg'
import Centinelas from './assets/Images/Centinelas.jpg'


const rootContainer = {
  backgroundColor: '#0E1A40',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  minWidth: '300px',
  color : 'white',  
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  fontFamily: 'Arial, sans-serif',
}

const navBarStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  margin: '16px',
  backgroundColor: 'transparent',
  listStyleType: 'none',
  borderRadius: '8px',
}

const ItemNavBarStyle = {
  padding: '8px',
    marginRight: '16px',
    borderRadius: '8px',
    backgroundColor: '#B76E00',
    border: '2px solid #7E7E7E',
    boxShadow: '0 0 5px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    transition: 'all 0.3s',
    margin: '5px',
    color : '#F8F5E3',
    justifyContent: 'center',
    alignItems: 'center',
}


const MainHeader = () => {
  return(
    <header>
      <h1>RavenClaw</h1>
    </header>
  );
}

const NavBar = (props) =>{
  return(
    <nav>
      <ul style={navBarStyle}>
        {props.dataTribus.map((tribu) => (
          <li key={tribu.id} 
              onClick={() => props.fncClick(tribu)} 
              style={ItemNavBarStyle}>
              <img 
              src={tribu.imageAsset} 
              alt={tribu.title} 
              style={{ width: "30px", height: "30px", marginRight: "8px", verticalAlign: "middle", borderRadius: "5px" }} 
            />
            {tribu.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

const MainContent = (props) => {
  return(
    <main>
      <section>
        <h2>{props.data ? props.data.name : "Selecciona una tribu"}</h2>
      </section>
    </main>
  );
}

const AsideContent = (props) => {
  if (!props.data) return null;

  return(
    <aside>
      <img
        src={props.data.imageAsset}
        alt={props.data.name}
        style={{ width: '150px', height: '150px', borderRadius: '8px', margin: '16px' }}
      />
    </aside>
  );
}

const FooterContent = () => {
  return(
    <footer>
      <p>Copyright 2025</p>
    </footer>
  );
}

function App() {
  const [Tribu , setTribu] = useState();
  
  const HandleCLick = (Data) => {
    setTribu(Data);
    console.log(Data);
  }
  const Tribus =[
    { id:1,
      name: 'DebugJolotes',
      imageAsset: DebugJolotes,
    },
    { id:2,
      name: 'Correcaminos',
      imageAsset: Correcaminos,
    },
    { id:3,
      name: 'Centinelas',
      imageAsset: Centinelas,
    },  
  ];

  return (
    <div style={rootContainer}>
      <MainHeader />
      <NavBar 
        dataTribus={Tribus}
        fncClick={HandleCLick}   />
      <div>
        <AsideContent  data={Tribu} />
        <MainContent data={Tribu} />
      </div>
      <div>
        <FooterContent />
      </div>
    </div>
  )
}

export default App