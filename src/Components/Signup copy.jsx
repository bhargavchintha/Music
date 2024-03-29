import React, { useState }  from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const Signup = () => {

  const [passwordType, setPasswordType] = useState('password');
  const showPassword = () => {
    setPasswordType(prevType => prevType === 'password' ? 'text' : 'password');
  };


  return (
    <>
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
   
     <div className='Login_From'>
       <div className='Login_From_Create'>
          <form className='Login_Page' id='loginForm' method='post' action='' >
             <h1 className='Name_Sign_e3'>
             Sign up to start  <span className='Music_Name'><br></br> listening</span>
             </h1>
            <div className='Name-User_Field'>
              <div class="input-field">
                <input type="text" required  name='name' /> 
                <label  className='Enter_Email' >Name</label>
             </div>
          </div>
          <div className='Name-User_Field'>
              <div class="input-field">
                <input type="text" required  name='Userid' /> 
                <label  className='Enter_Email' >user Id</label>
             </div>
          </div>
          <div className='Email-User_Field'>
            <div class="input-field">
              <input type="email" required  name='email' /> 
              <label  className='Enter_Email' >Enter email</label>
            </div>
          </div>
          <div className='Cn_Passwords'>
            <div className='Password_Field'>
              <div class="input-field">
                <input  id="Showpassword" type={passwordType} required  name='Password' /> 
                <label  className='Enter_Email' >Password</label>
              </div>
            </div>
            <div className='Confirm_Password_Field'>
              <div class="input-field">
                <input  id="Showpassword" type={passwordType} required  name='confirmpassword' /> 
                <label  className='Enter_Email' >confirm Password</label>
              </div>
            </div>
            <div className='Error_msg'>
              <p className='Msg_error'></p>
            </div>
          </div>
          <div className='Password-Show'>

            <div className='Show_password'>
              <input type="checkbox" id="showPassword" onClick={showPassword} /><label htmlFor="showPassword" className="Show_pass">Show Password</label>
            </div>


          </div>

          <div className='Submit_Button'>
             <input onClick={Signup} type='submit' value={'Submit'}/>
          </div>

          </form>

         <div className='Hr_Line'>
           <div className='Hr_Line_txt'>
              <p className='Hr_Line_Er'>or</p>
           </div>
            <div className='Sign_up-Page'>
             <p className='Link_send'> Already have an account? <Link className='Link_Sign-Up' to='/Login'>Login Here</Link></p>
            </div>
         </div>

       </div>
     </div>


    </div>
  
    
    </>
  )
}

export default Signup