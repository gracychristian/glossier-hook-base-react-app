import React from 'react'
import { Form, Formik } from 'formik';
import * as Yup from "yup";
import TextField from './common/textField';
import SingUpImage from '../assests/images/sign-up.jpg';
import { registerUser } from '../services/authService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const addNewUser = (value) => {
    registerUser(value)
      .then((res) => {
        if (res.status === 200) {
          toast.success('User regestered successfully!!')
          navigate('/login')
        }
      })
      .catch(err => {
        console.log('err', err)
        toast.error(err.response.data.message)
      })
  }

  const validate = Yup.object({
    userName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phone: Yup.string()
      .matches(/^\d+$/, 'Invalid phone number')
      .min(10, 'Phone number must be at least 10 digits')
      .max(10, 'Phone number can be at most 10 digits')
      .required('Phone number is required'),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters")
      .required("Password is required"),
  });
  return (
    <div className='relative h-full'>
      <img src={SingUpImage} alt="sign-up" className="h-full w-full" />
      <Formik
        initialValues={{
          userName: "",
          email: "",
          phone: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          addNewUser(values)
          console.log(values);
        }}
      >
        {(formik) => (
          <div className="signup flex flex-col items-center justify-center absolute">

            <Form className="p-8 rounded-lg" style={{ boxShadow: '0px 4px 20px 0px #888888' }}>
              <h1 className="text-2xl mb-4 text-center">Sign Up</h1>
              <TextField label="User Name" placeholder="User Name" name="userName" type="text" />
              <TextField label="Email" placeholder="Email" name="email" type="email" />
              <TextField label="Phone no." placeholder="Phone number" name="phone" type="text" />
              <TextField label="Password" placeholder="Password" name="password" type="password" />
              <div className='text-center mt-10'>
                <button className="bg-rose-500 border border-rose-900 font-bold hover:bg-rose-600 px-6 py-2 rounded-full text-white w-36" type="submit">
                  Register
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default SignUp;
