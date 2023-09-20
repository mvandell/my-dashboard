import { useState } from 'react'
import './App.css'
import PersistentDrawerLeft from './components/PersistentDrawer'
import VirtualizedList from './components/TransactionList'
import BarsDataset from './components/BarChart'

function App() {


  return (
    <>
      <h1>Sales Dashboard</h1>
      <PersistentDrawerLeft />{/* Sidebar and Heading */}
      {
      //Transactions
        //Virtualized List - fix text not rendering
      }
      <VirtualizedList />
      {
      //Charts & Graphs - MUI X Charts
        //Bar
        //Line
      }
      <BarsDataset />
    </>
  )
}

export default App
