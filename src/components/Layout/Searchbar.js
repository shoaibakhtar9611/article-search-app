import React from 'react';


const Searchbar = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
  }
  return (

    <div className="navbar-fixed">
      <nav className="grey">
        < div className="nav-wrapper  nav-fixed " >
          <a href="#!" className="brand-logo">The Newyork Times</a>
          <form className="right white" style={{ display: "flex" }}>


            <input type="text"
              name={props.name}
              value={props.value}
              placeholder="Search..."
              onChange={props.change}
              required />
            <button type="submit" onClick={handleClick} className="btn black" style={{ marginTop: "1.5%" }}>Search</button>

          </form>
        </div >
      </nav >

    </div>

  )
}

export default Searchbar