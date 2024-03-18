import React, { useEffect ,useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
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
            <form action="" class="search-bar">
                <i id="Searchbar" class="fa fa-search" aria-hidden="true"></i>
                <input type="search" name="search" pattern=".*\S.*" required autoComplete="off" />
            </form>
          </div>
         </div>
        

        <div className='Music_Explore_menu'>
          <div className='Music_Menu_links'>
            
          <div className='Disable_Search-2'>
              <div className='Music_Search'>
                  <form action="" class="search-bar">
                      <i id="Searchbar" class="fa fa-search" aria-hidden="true"></i>
                      <input type="search" name="search" pattern=".*\S.*" required  autoComplete="off" />
                  </form>
              </div>
            </div>

                <label for="menuTrigger" class="nav_ico" onClick={toggleMenu} >
                    <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </label>
                  <input id="menuTrigger" type="checkbox"  class="nav_I" />
            <div className='Bars_Link_Music'>
              <div className='Button_Dark_Mode'>
                  <button onClick={toggleDarkMode} id="Pos_Btn" className="BUTNS Button_BTN" title="Change To Dark Mode"></button>
              </div>
              <div className='Home_Search'>
                <div className='Down_Home'>
                     <Link  className="Home_name" to="/Home" >
                     <i id="Fa_Home_B" class="fa fa-home" aria-hidden="true"></i> Home</Link>
                </div>
                <div className='In_Side_Search'>
                  <div className='Down_Home'>
                      <Link  className="Home_name" to="/Search" >
                      <i id="Fa_Home_B" class="fa fa-search" aria-hidden="true"></i> Search</Link>
                  </div>
                </div>
                <div className='File_Upload'>
                   <button className='BTN_Upload' onClick={handleClick} > <i id="Fa-Upload" class="fa fa-upload" aria-hidden="true"></i>  Music Upload </button>
                </div>
                <div className='Search_btn'>
                  <div className='Search_All'>
                      <Link to='/About' className='Btn_Search'> <i id="Info_Cricle" class="fa fa-info-circle" aria-hidden="true"></i> About</Link>
                  </div>
                </div>
                <div className='Down_Home'>
                     <Link  className="Home_name" to="/Signup" >
                     <i id="Fa_Home_B" class="fa fa-sign-in" aria-hidden="true"></i>&nbsp;Sign up</Link>
                </div>
                <div className='Down_Home'>
                     <Link  className="Home_name" to="/Login" >
                     <i id="Fa_Home_B" class="fa fa-user" aria-hidden="true"></i> Login</Link>
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
        </div>
        
      </nav>

      {/* <img src='https://i.stack.imgur.com/jDGzD.png'/> */}
    </>
  );
}

export default Navbar;
