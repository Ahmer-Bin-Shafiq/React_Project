import React from 'react'
import Card from './Components/Card'

const App = () => {
 var arr=[{name:'Ahmer',age:21,img:'https://images.unsplash.com/photo-1668293750324-bd77c1f08ca9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600'},
    {name:'Usman',age:20, img:'https://images.unsplash.com/photo-1586461715699-1e192dcd04c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600'},
  {name:'Zubair',age:90,img:'https://images.unsplash.com/photo-1605440190093-b67e90c96235?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600'}
  ]
 
  return (
    <div className='Parent'>
      {arr.map(function(elem,idx)
      {
     return   <Card key={idx} name={elem.name} age={elem.age} img={elem.img}/>
      })}
     
    </div>
  )
}

export default App
