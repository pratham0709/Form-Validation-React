import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const changeHandler = (e) => {
    setFormData({
      ...formData,
    [e.target.name] : e.target.value
    })
  }

  const [error, setErrors] = useState({
    name:false,
    email:false,
    password:false,
  })
  
  const submitHandler = (event) => {
    event.preventDefault()
    console.log(formData)

    setErrors({
      name:false,
      email:false,
      password:false
    })
    const user_name = formData.name;
    if(user_name.length < 1){ setErrors((prev) => ({
      ...prev,
      name:true,
    }))
  }
  // setErrors({
  //     name:false
  //   })
  const user_email = formData.email;
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user_email)){ setErrors((prev) => ({
      ...prev,
      email:true,
    }))
  }
    // setErrors({
    //   email:false
    // })
    const user_password = formData.password;
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(user_password)){ setErrors((prev) => ({
      ...prev,
      password:true,
    }))
  }
    // setErrors({
    //   password:false
    // })
    console.log(error);
  }
  
  return (
    <form className='flex flex-col mx-auto w-11/12 justify-center items-center mt-4 gap-3 '>
      <input name="name" type="text" placeholder="Enter Your Name" onChange={changeHandler} className='border-[1px] rounded-md m-3 p-3 w-[500px]'/>
      <span style={{color:"red"}}>{error.name && "Please enter valid name"}</span>
      
      <input name="email" type="email" placeholder="Enter Your Email" onChange={changeHandler} className='border-[1px] rounded-md m-3 p-3 w-[500px]' />
      <span style={{color:"red"}}>{error.email && "Please enter valid email"}</span>
      
      <input name="password" type="password" placeholder="Enter Your Password"onChange={changeHandler} className='border-[1px] rounded-md m-3 p-3 w-[500px]' />
      <span style={{color:"red"}}>{error.password && "Please enter valid password"}</span>
      
      <button onClick={submitHandler} className='bg-[#ff00ff] m-3 p-3  rounded-md text-white font-bold w-[200px]'>Submit</button>
    </form>
  )
}



export default Form