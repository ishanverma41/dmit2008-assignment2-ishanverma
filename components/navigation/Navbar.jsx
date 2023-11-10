function Navbar(){
    return(<>
      <nav >
          <div id="logo">
            <h1><a href="/">Reel Rack</a></h1>
          </div>
          <label className="toggle">Explore</label>
          <input type="checkbox" id="drop"/>
          <ul className="menu mt-2">  
             <li><a href="/many-items" className="mt-1">Videos</a></li>       
            <li><a href="https://github.com/ishanverma41/dmit2008-assignment2-ishanverma"><img src="/images/github.png"></img></a></li>
          </ul>
        </nav>
    </>)
}
export  default Navbar