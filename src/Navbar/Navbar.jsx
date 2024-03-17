import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const toggleDarkMode = () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const element = document.body;
    element.classList.toggle('dark-side');
    localStorage.setItem('darkMode', !isDarkMode);
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const element = document.body;

    if (isDarkMode) {
      element.classList.add('dark-side');
    }
  }, []);

  const history = useHistory();

  const handleClick = () => {
    // Redirect to the login page
    history.push('/Signup');
  };

  return (
    <>
      <nav className='Music_Explore'>

        <div className='Music_Explore_logo'>
          <div className='Music_Explore_title'>
            <h1 className='Music_tittle'>
              <Link className="Music_Home" to="/Home">Music Explore</Link>
            </h1>
            <div className='Music_theme'>
             {/* Home  Page Button */}
            <div className='Down_Home'>
                <Link  className="Home_name" to="/Home" >
                     <i id="Fa_Home_B" class="fa fa-home" aria-hidden="true"></i> Home</Link>
            </div>
             {/* Home Page Btn Here End */}
           
             {/* Start Upload Files Start Here */}
 
              <div className='File_Upload'>
                   <button className='BTN_Upload' onClick={handleClick} > <i id="Fa-Upload" class="fa fa-upload" aria-hidden="true"></i>  Music Upload </button>
              </div>
              
             {/* Start Upload Files End here */}
             
             
             {/* Search Button */}
              
              <div className='Search_btn'>
                <div className='Search_All'>
                    <Link to='/About' className='Btn_Search'> <i id="Info_Cricle" class="fa fa-info-circle" aria-hidden="true"></i> About</Link>
                </div>
              </div>

             {/* Search Button End */}
             </div>
          </div>
        </div>

        <div className='Music_Search'>
        <form action="" class="search-bar">
            <i id="Searchbar" class="fa fa-search" aria-hidden="true"></i>
            <input type="search" name="search" pattern=".*\S.*" required />
        </form>
        </div>


        <div className='Music_Explore_menu'>
          <div className='Music_Menu_links'>
            <div className='Home_Search'>
            <Link  className="Home_name" to="/Home" ><i class="fa fa-home" aria-hidden="true"></i> Home</Link>
            <Link to='/Search' className='Btn_Search'> <i class="fa fa-search" aria-hidden="true"></i> Search</Link>
            </div>
            <Link className="Sign_Login  SignUp" to="/Signup">Sign up</Link>
            <Link className="Sign_Login  Login" to="/Login">Login</Link>
            <button onClick={toggleDarkMode} className="BUTNS Button_BTN" title="Change To Dark Mode"></button>
          </div>
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;
