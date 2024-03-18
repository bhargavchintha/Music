import React, { useEffect ,useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

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

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to Search component with the search query as a URL parameter
    history.push(`/Search?query=${searchQuery}`);
    handleCloseMenu();
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = () => {
    // Redirect to the login page
    history.push('/Signup');
    handleCloseMenu();
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
         
         <div className='Music_Disable_Search-1'>
          <div className='Music_Search'>
                <form action="" class="search-bar" onSubmit={handleSearch} >
                      <i id="Searchbar" class="fa fa-search" aria-hidden="true"></i>
                      <input  id="Search_Box-text" type="search" name="search" pattern=".*\S.*" required  autoComplete="off"   value={searchQuery} onChange={handleInputChange} />
                </form>
          </div>
         </div>
        

        <div className='Music_Explore_menu'>
          <div className='Music_Menu_links'>
            
          <div className='Disable_Search-2'>
              <div className='Music_Search'>
                  <form action="" class="search-bar" onSubmit={handleSearch} >
                      <i id="Searchbar" class="fa fa-search" aria-hidden="true"></i>
                      <input id="Search_Box-text" type="search" name="search" pattern=".*\S.*" required  autoComplete="off"   value={searchQuery} onChange={handleInputChange} />
                  </form>
              </div>
            </div>

                <label for="menuTrigger" class="nav_ico" onClick={toggleMenu} >
                    <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </label>
                  <input id="menuTrigger" type="checkbox"  class="nav_I" />
            <div className='Bars_Link_Music' style={{ display: isMenuOpen ? 'block' : 'none' }}>
                    <div className='Button_Dark_Mode'>
                        <button onClick={() => {toggleDarkMode(); handleCloseMenu(); }} id="Pos_Btn" className="BUTNS Button_BTN" title="Change To Dark Mode"></button>
                    </div>
                  <div className='Home_Search'>
                    <div className='Down_Home'>
                    <Link id="Home_Home-Close" className="Home_name" to="/Home" onClick={handleCloseMenu} >
                        <i id="Fa_Home_B" class="fa fa-home" aria-hidden="true"></i> Home</Link>
                    </div>
                    <div className='In_Side_Search'>
                      <div className='File_Upload'>
                          <button className='BTN_Upload' onClick={handleCloseMenu}> <i id="Fa-Upload" class="fa fa-search" aria-hidden="true"></i> &nbsp;Search</button>
                      </div>
                    </div>
                    <div className='File_Upload'>
                      <button className='BTN_Upload' onClick={() => { handleClick(); handleCloseMenu(); }}> <i id="Fa-Upload" class="fa fa-upload" aria-hidden="true"></i>  Music Upload </button>
                    </div>
                    <div className='Search_btn'>
                      <div className='Search_All'>
                          <Link to='/About' className='Btn_Search'> <i id="Info_Cricle" class="fa fa-info-circle" aria-hidden="true"></i> About</Link>
                      </div>
                    </div>
                    <div className='Down_Home'>
                        <Link  className="Home_name" to="/Signup" onClick={handleCloseMenu} >
                        <i id="Fa_Home_B" class="fa fa-sign-in" aria-hidden="true"></i>&nbsp;Sign up</Link>
                    </div>
                    <div className='Down_Home'>
                        <Link  className="Home_name" to="/Login" onClick={handleCloseMenu} >
                        <i id="Fa_Home_B" class="fa fa-user" aria-hidden="true"></i> Login</Link>
                    </div>

                  </div>
            </div>

            <div className='Sign_up-Login'>
                  <div className='Nav_Bar_sign'>
                      <Link className="Sign_Login  SignUp" to="/Signup">Sign up</Link>
                  </div>
                  <div className='Nav_Bar_Log'>
                       <Link className="Sign_Login  Login" to="/Login">Login</Link>
                  </div>

                    <button onClick={toggleDarkMode} className="BUTNS Button_BTN" title="Change To Dark Mode"></button>
              </div>

          </div>
        </div>
        
      </nav>

      {/* <img src='https://i.stack.imgur.com/jDGzD.png'/> */}
    </>
  );
};

export default Navbar;
