import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Dropdown from './Dropdown';
import Card from './Card';

function App() {
  const szobaTipusLista = ["Összes tipus","Egyéni tanulás","Csoportmunka"]

  const szobaAdatLista = [{id: 1, nev:"Csendes sarok",szobatipus: "Egyéni tanulás", emelet: 1, ferohely: 12, foglalthelyek: 7},
                          {id: 2, nev:"Közös ötletező", szobatipus: "Csoportmunka", emelet: 2, ferohely: 20, foglalthelyek: 11},
                          {id: 3, nev:"Digitális műhely", szobatipus: "Csoportmunka", emelet: 3, ferohely: 16, foglalthelyek: 12},
                          ];


  return (
   <>
      <Header/>
      <Dropdown lista={szobaTipusLista}/>
      <Card lista={szobaAdatLista}/>
      <Card lista={szobaAdatLista}/>
      <Card lista={szobaAdatLista}/>

      
   </>
  );
}

export default App;
