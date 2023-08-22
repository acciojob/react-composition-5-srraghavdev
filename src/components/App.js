
import { useState } from 'react';
import React from "react";
import './../styles/App.css';
import Tabs from './Tabs'
const App = () => {
  let tabs1=[{titles:'1',content:'Tab 1'},{titles:'2',content:'Tab 2'},{titles:'3',content:'Tab 3'}]
  let tabs2=[{titles:'A',content:'Tab A'},{titles:'B',content:'Tab B'},{titles:'C',content:'Tab C'}]
  let [tab1,Settab1]= useState('')
  let [tab2,Settab2]= useState('')
  function changetab(data,key){
    console.log(key)
    if(key=='1'){
      Settab1(data)
    }
    else if (key=='2'){
      Settab2(data)
    }
  }
  return (
    <div>
        {<Tabs tabs={tabs1} onclick={changetab} key={1} id={1}/>}
        {tab1 && <div>Content for {tab1}</div>}
        {<Tabs tabs={tabs2} onclick={changetab} key={2} id={2}/>}
        {tab2 && <div>Content for {tab2}</div>}
    </div>
  )
}

export default App