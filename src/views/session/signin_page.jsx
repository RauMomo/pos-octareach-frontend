import { Button, FormControl, FormLabel, Text } from '@chakra-ui/react';
import { useFormik } from 'formik';
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../../../src/assets/images/octareach-logo-label.png';
import styles from '../../assets/styles/signin.module.css';
import OutlineButton from '../../components/outline_button';

const SignInPage = () => {
  const navigate = useNavigate();
  const formik = useFormik({
      initialValues: {
        email: '',
        password: ''
      }
    }
  );

  const { values, errors, setFieldValue } = formik;
  
  var handleForm = (event) => {
    const { target } = event;
    setFieldValue(target.name, target.value);
  }
  
  var handleAccountClick = () => {
    navigate('/register');
  }

  var handleAdminClick = () => {
    setFieldValue("email", 'admin@example.com');
    setFieldValue("password", 'admin');
  }

  var handleSalesClick = () => {
    setFieldValue("email", 'sales@example.com');
    setFieldValue("password", 'admin');
    // console.log(formik.getFieldProps);
  }

  var handlePurchasesClick = () => {
    setFieldValue("email", 'purchases@example.com');
    setFieldValue("password", 'admin');
  }

  useEffect(() => {
    console.log(values);
  }, [values]);

    return (
      <div className="block m-0 place-content-start overflow-hidden">
      <main className="relative min-w-full flex flex-col"> 
          <section className="block flex-nowrap w-full h-full text-center justify-center">
            <div className={styles.bg} />
              <form>
                <div className={styles.authContent}>
                  <div className={styles.card}>
                    <div className='flex flex-col flex-1'>
                      <img src={logo} alt="Caption Logo" width={500} height={100} className="w-3/4 h-8 flex bg-center self-center mb-8 overflow-hidden" />
                      <div className="font-normal tracking-wide text-lg float-left text-left">Sign In</div>
                      <div className={styles.formFieldWrapper}>
                          <FormControl isInvalid={formik.errors.email}>
                            <FormLabel className="text-left leading-3 text-sm p-0">Email Address</FormLabel>
                            <input type="email" name="email" className={styles.formInput} placeholder="email" onChange={formik.handleChange} value={values.email}/>
                          </FormControl>
                      </div>
                      <div className={styles.formFieldWrapper}>
                          <FormControl isInvalid={errors.password}>
                            <FormLabel className="text-left leading-3 text-sm">Password</FormLabel>
                            <input type="password" name="password" className={styles.formInput} onChange={formik.handleChange} value={values.password}/>
                          </FormControl>
                      </div>
                    </div>
                    <Button className={styles.primaryBtn}>
                      <Text className={styles.btnTitle}>Sign In</Text>
                    </Button>
                    <Button variant={'ghost'}>
                      <Text className={styles.textClickable}>Forgot Password ? </Text>
                    </Button>
                  </div>
                  <div className={styles.card}>
                    <div className='flex flex-col flex-1 items-center justify-center'>
                      <OutlineButton name='Create an account' color='text-main' onClick={handleAccountClick} />
                      <OutlineButton name='Admin' color='text-alert' onClick={handleAdminClick} />
                      <OutlineButton name='Sales' color='text-secondary' onClick={handleSalesClick} />
                      <OutlineButton name='Purchases' color='text-secondary' onClick={handlePurchasesClick} />
                    </div>
                  </div>
                  </div>
              </form>
          {/* <div className="rounded-sm items-center justify-center text-center absolute w-1/2 h-48 min-h-fit bg-white block top-1/2 left-1/2">
            <div className="flex w-full flex-row shrink-0">
              <div className="text-black text-center text-sm items-center inline-block">
                Login Page
              </div>
            </div>
          </div> */}
          </section>
        </main>
      </div>
    );
}

export default SignInPage;