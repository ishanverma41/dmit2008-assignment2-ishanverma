import Navbar from "../navigation/Navbar"
function PageHeader ( {title, tagline}){
return (
<>
<header className="text-center pt-16">
        
      <div className="headder-top">    
      <Navbar></Navbar>
     <h1 className="">{title}</h1>
            <p>{tagline }</p>
      </div>


</header>
</>

)
 }
 export default PageHeader