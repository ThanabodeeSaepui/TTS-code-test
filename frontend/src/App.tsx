import { Routes, Route } from "react-router-dom";
import MasterTable from './components/MasterTable'
import Detail from "./components/Detail";
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MasterTable />}/>
      <Route path="/details/:id" element={<Detail />}/>
    </Routes>
    </>
  )
}

export default App
