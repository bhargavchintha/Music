import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordType: 'password'
    };
  }

  showPassword = () => {
    this.setState(prevState => ({
      passwordType: prevState.passwordType === 'password' ? 'text' : 'password'
    }));
  };

  render() {
    const { passwordType } = this.state;
    return (
      <>
        <div className='Login_Page_Full'>
          <title>Sign Up Page</title>
          <div className='Login_page'>

            <div className='Dark_Btn_Logo'>
              <div className='Logo_Music'>
                {/* <Link className="Music_Name-Ex" to="/Home">Music Explore</Link> */}
              </div>
              <div className='Dark_Btn_Switch'>
                <Link className="Music_Name-Ex" to="/Home">Music Explore</Link>
              </div>
            </div>

            <div className='Login_From_Sign'>
              <div className='Login_From_Create'>
                <form className='Login_Page' id='loginForm' method='post' action=''>
                  <h1 className='Name_Sign_e3'>
                    Sign up to start <span className='Music_Name'><br></br> listening</span>
                  </h1>
                  <div className='Name-User_Field'>
                    <div className="input-field">
                      <input type="text" required name='name' />
                      <label className='Enter_Email' >Name</label>
                    </div>
                  </div>
                  <div className='Name-User_Field'>
                    <div className="input-field">
                      <input type="text" required name='Userid' />
                      <label className='Enter_Email' >user Id</label>
                    </div>
                  </div>
                  <div className='Email-User_Field'>
                    <div className="input-field">
                      <input type="email" required name='email' />
                      <label className='Enter_Email' >Enter email</label>
                    </div>
                  </div>
                  <div className='Cn_Passwords'>
                    <div className='Password_Field'>
                      <div className="input-field">
                        <input id="Showpassword" type={passwordType} required name='Password' />
                        <label className='Enter_Email' >Password</label>
                      </div>
                    </div>
                    <div className='Confirm_Password_Field'>
                      <div className="input-field">
                        <input id="Showpassword" type={passwordType} required name='confirmpassword' />
                        <label className='Enter_Email' >confirm Password</label>
                      </div>
                    </div>
                    <div className='Error_msg'>
                      <p className='Msg_error'></p>
                    </div>
                  </div>
                  <div className='Password-Show'>

                    <div className='Show_password'>
                      <input type="checkbox" id="showPassword" onClick={this.showPassword} /><label  className="Show_pass">Show Password</label>
                    </div>


                  </div>

                  <div className='Submit_Button_Sign'>
                    <input type='submit' value={'Submit'} />
                  </div>

                </form>

                <div className='Hr_Line'>
                  <div className='Hr_Line_txt'>
                    <p className='Hr_Line_Er'>or</p>
                  </div>
                  <div className='Sign_up-Page'>
                    <p className='Link_send'> Already have an account? <Link className='Link_Sign-Up' to='/Login'>Login</Link></p>
                  </div>
                </div>

              </div>
            </div>


          </div>
        </div>

      </>
    )
  }
}

export default Signup;
