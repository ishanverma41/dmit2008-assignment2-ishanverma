import Navbar from "../navigation/Navbar"
function PageHeader ( {title, tagline}){
return (
<>

      {/* <Navbar></Navbar> */}
      <header className="card text-center p-4" style={{marginTop:"80px"}}>
      <h1 className="">{title}</h1>
        <p>{tagline }</p>
      </header>
     
  


</>

)
 }
 export default PageHeader