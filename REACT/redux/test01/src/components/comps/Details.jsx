import { useSelector } from "react-redux";
function Details() {
   let data = useSelector( (storedata) => {
    return storedata;
  })
 

  return (
   <div>
    <h2>Details Component</h2>
    <p style={{color:"green"}}>
      {data.name }
      </p>
    
   </div>
  )
}

export default Details;
