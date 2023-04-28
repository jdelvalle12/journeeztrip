import { useState } from 'react';
import { Link } from 'react-router-dom';





function Nav() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogout() {
    setIsLoggedIn(false);
  }

  const [showAlert, setShowAlert] = useState(false);
  
  function handleAlert() {
    setShowAlert(true);
  }
  
  
  return (
    <>
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p className="app-title absolute left-20 top-10 flex w-full justify-center text-4xl lg:w-auto  ">
        Journe<span className="text-5xl font-bold text-blue-800" href="/">EZ</span>
      </p>
    </div>
    <div className="menu-items">
      <li>
        <button onClick={handleAlert}>Alerts!</button>
      </li>
      <li>
        <Link href="/" >Home</Link>
      </li>
      <li>
        <Link href="/About" >About</Link>
      </li>
      {isLoggedIn ? (
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
       ) : (
        <>
        <li>  
         <Link href="/Signup" >Signup</Link>
        </li>
        <li>
          <Link href="/Login" >Login</Link>
        </li>
        {showAlert && (
          <div className="alert" role="alert">
            This is an alert!
            <button onClick={() => setShowAlert(false)}>Close</button>
        </div>
        )}
        </>
       )}
</div>
    
<nav>
  <ul className="nav-list flex min-h flex-col items-center justify-between p-24">
    <li className="nav-item mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      <Link href="/Blogs" className="nav-link group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black">
        <h2 style={{ fontFamily: "Arial" }} className="nav-title m-0 max-w-[30ch] text-sm hover:text-white">
          Blogs {'>'}
        </h2>
        <p className="nav-subtitle inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          See what other travelers have to say in their experience.
        </p>
      </Link>
    </li>
 
    <li className="nav-item mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      <Link href="/Explore" className="nav-link group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black">
        <h2 style={{ fontFamily: "Arial" }} className="nav-title m-0 max-w-[30ch] text-sm hover:text-white">
          Explore{'>'}
        </h2>
        <p className="nav-subtitle inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          Explore where to stay, visit, and eat in each region.
        </p>
      </Link>
    </li>

    <li className="nav-item mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      <Link href="/Language-Culture" className="nav-link group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black">
        <h2 style={{ fontFamily: "Arial" }} className="nav-title m-0 max-w-[30ch] text-sm hover:text-white">
          Langauge and Culture{'>'}
        </h2>
        <p className="nav-subtitle inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          Learn about the local language and culture of different destinations, including common phrases, customs, and traditions.
        </p>
      </Link>
    </li>

    <li className="nav-item mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      <Link href="/Shop" className="nav-link group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black">
        <h2 style={{ fontFamily: "Arial" }} className="nav-title m-0 max-w-[30ch] text-sm hover:text-white">
          Shop{'>'}
        </h2>
        <p className="nav-subtitle inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          Get everything you need for your next trip!
        </p>
      </Link>
    </li>
  </ul>
</nav>
  </>
  );
}
export default Nav;


