import { FormControl, Text } from '@chakra-ui/react';
import cls from 'classnames';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/octareach-logo-label.png';
import styles from '../../assets/styles/register.module.css';
import { Dropdown } from '../../components/dropdown';
import { TextFormField } from '../../components/text_form_field';

const RegisterPage = () => { 
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      phone: '',
      email: '',
      password: '',
      role: ''
    },
    initialTouched: {
      email: false,
      firstName: false,
      lastName: false,
      password: false,
      phone: false,
      role: false,
      username: false,
    },
    enableReinitialize: false,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    validate: (values) => {
      var errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.firstName && touched.firstName) {
        errors.firstName = 'First Name is Required'
      }
      if (!values.lastName && touched.lastName) {
        errors.lastName = 'Last Name is Required'
      }
      if (!values.password && touched.password) {
        errors.password = 'Password is Required'
      }
      if (touched.email) {
        if (!values.email) {
          errors.email = 'Email is Required'
        } else if (!regex.test(values.email)) {
          errors.email = 'Invalid Email Format'
        }
      }
      if (!values.phone && touched.phone) {
        errors.phone = 'Phone Number is Required'
      }
      if (!values.username && touched.username) {
        errors.username = 'Username is Required'
      }
      return errors;
    },
    onSubmit: (values, actions) => {
      var errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      var isError = Object.keys(errors).length === 0;
      if (!regex.test(touched.email)) {
        errors.email = 'Invalid Email Format'
      }
      if (!values.firstName) {
        errors.firstName = 'First Name is Required'
      }
      if (!values.lastName) {
        errors.lastName = 'Last Name is Required'
      }
      if (!values.password) {
        errors.password = 'Password is Required'
      }
      if (!values.email) {
        errors.email = 'Email is Required'
      }
      if (!values.phone) {
        errors.phone = 'Phone Number is Required'
      }
      if (values.username) {
        errors.username = 'Username is Required'
      }
      if (isError) {
        navigate('/login');
      }
    },
  }
  );
  
  const { values, errors, touched, handleSubmit, handleBlur, handleChange } = formik;

  const resetAll = async () => {
    touched.username = false;
    touched.email = false;
    touched.firstName = false;
    touched.lastName = false;
    touched.password = false;
    touched.phone = false;
  }
  const onFieldBlur = async (value) => {
    resetAll();

    switch (value) {
      case 'username':
        touched.username = true;
        break;
      case 'email':
        touched.email = true;
        break;
      case 'firstName':
        touched.firstName = true;
        break;
      case 'lastName':
        touched.lastName = true;
        break;
      case 'password':
        touched.password = true;
        break;
      case 'phone':
        touched.phone = true; 
        break;
      default:
        break;
    }
  }

  const onFieldChange = async () => {
    await formik.validateForm();
  }

  const submitForm = () => {
    handleSubmit();
  }

  useEffect(() => {
    console.log(errors);
  }, [errors]);
  
    return (
      <div className="block m-0 place-content-start overflow-hidden">
        <main className="relative min-w-full flex flex-col">
          <section className='flex flex-nowrap flex-1 w-full h-screen text-center justify-center'>
            <div className={styles.bg} />
            <div className={cls(styles.wrapperMainCard, 'rounded-xl')}>
              <div className={cls(styles.card, '')}>
                <div className='flex flex-col flex-1'>
                  <img src={logo} alt="Caption Logo" width={200} height={150} className="w-9/12 h-8 flex bg-center self-center mb-8 overflow-hidden" />
                </div>
              </div>
              <div className={styles.card}>
                <div className='flex flex-col justify-start items-start min-w-full'>
                      <Text fontSize='lg' paddingBottom='16px'>Sign Up</Text>
                  <FormControl isInvalid={errors.firstName && touched.firstName} className='w-full mb-4 text-left' onChange={handleChange} onBlur={() => onFieldBlur('firstName')}>
                        <TextFormField value={values.firstName} checkIfPassword={false} label={'First name'} key={'firstName'} onChange={handleChange} onBlur={handleBlur} name="firstName"/>
                        {(errors.firstName && touched.firstName && (
                          <span className="text-sm text-alert text-left">{errors.firstName}</span>
                        ))}
                      </FormControl>
                      <FormControl isInvalid={errors.lastName && touched.lastName} className='w-full mb-4 text-left' onChange={handleChange} onBlur={handleBlur}>
                        <TextFormField value={values.lastName} checkIfPassword={false} label={'Last name'} key={'lastName'} onChange={handleChange} onBlur={() => onFieldBlur('lastName')} name="lastName"/>
                        {(errors.lastName && touched.lastName && (
                          <span className="text-sm text-alert text-left">{errors.lastName}</span>
                        ))}
                      </FormControl>
                      <FormControl isInvalid={errors.username && touched.username} className='w-full mb-4 text-left' onChange={handleChange} onBlur={handleBlur}>
                        <TextFormField value={values.username} checkIfPassword={false} label={'Username'} onChange={handleChange} onBlur={() => onFieldBlur('username')} name="username"/>
                        {(errors.username && touched.username && (
                          <span className="text-sm text-alert text-left">{errors.username}</span>
                        ))}
                      </FormControl>
                      <FormControl isInvalid={errors.phone && touched.phone} className='w-full mb-4 text-left' onChange={handleChange} onBlur={handleBlur}>
                        <TextFormField value={values.phone} checkIfPassword={false} label={'Phone'} onChange={handleChange} onBlur={() => onFieldBlur('phone')} name="phone"/>
                        {(errors.phone && touched.phone && (
                          <span className="text-sm text-alert text-left">{errors.phone}</span>
                        ))}
                      </FormControl>
                      <FormControl isInvalid={errors.email && touched.email} className='w-full mb-4 text-left' onChange={handleChange} onBlur={handleBlur}>
                        <TextFormField value={values.email} checkIfPassword={false} label={'Email'} onChange={handleChange} onBlur={() => onFieldBlur('email')} name="email"/>
                        {(errors.email && touched.email && (
                          <span className="text-sm text-alert text-left">{errors.email}</span>
                        ))}
                      </FormControl>
                      <FormControl isInvalid={errors.password && touched.password} className='w-full mb-4 text-left' onChange={handleChange} onBlur={handleBlur}>
                        <TextFormField value={values.password} checkIfPassword={true} label={'Password'} onChange={handleChange} onBlur={() => onFieldBlur('password')} name="password"/>
                        {(errors.password && touched.password && (
                          <span className="text-sm text-alert text-left">{errors.password}</span>
                        ))}
                      </FormControl>
                      <Dropdown />
                      <button type='submit' className="bg-main w-full text-center text-white rounded-xl p-2 font-semibold text-sm my-4" onClick={() => submitForm()}>
                        Sign Up
                      </button>
                      <Link to={'/login'} className='text-main text-sm'>Already have an account?</Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      // <div>Register Page</div>
    )
  }
   
export default RegisterPage;