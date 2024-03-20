import Chai from "./test"



function App() {
  return (
    <>
     <Chai/>
   <h2>This is testing for multi element</h2>
    </>
  
  )
}

export default App

/*
We can craete new jsx and import the newli jsx file in anywhere
, we just need to concentrate few this.
    -The function name should be start with capital letter
    -The React jsx will only return a single elenment , so 
      if any manuplulation done then you need to wrap in 
      single elements either <div> or you can also user <></> (fragment)

      We can use {} as a evulated values

      rebder method and root elements ( the two main pilers)
*/