import { AiOutlineBarChart, AiOutlineBook } from 'react-icons/ai';
import styles from '../assets/styles/dashboard.module.css';

export default function SideMenu() {
  return (
    <aside className={styles.mainNav}>
      <ul className='justify-normal text-center content-center'>
        <li className={styles.buttonLi}>
          <a href="#" >
            <AiOutlineBarChart size={'2em'} width={'3em'}  className='py-1 mx-auto' color='main'/>
            <p className='text-sm'>Dashboard</p>
          </a>
        </li>
        <li className={styles.buttonLi}>
          <a href="#" >
            <AiOutlineBook size={'2em'} width={'3em'}  className='py-1 m-auto' color='main'/>
            <p className='text-sm'>Products</p>
          </a>
        </li>
        <li className={styles.buttonLi}>
          <a href="#" >
            <AiOutlineBook size={'2em'} width={'3em'}  className='py-1 m-auto' color='main'/>
            <p className='text-sm'>Adjustment</p>
          </a>
        </li>
        <li className={styles.buttonLi}>
          <a href="#" >
            <AiOutlineBook size={'2em'} width={'3em'}  className='py-1 m-auto' color='main'/>
            <p className='text-sm'>Quotations</p>
          </a>
        </li>
        <li className={styles.buttonLi}>
          <a href="#" >
            <AiOutlineBook size={'2em'} width={'3em'}  className='py-1 m-auto' color='main'/>
            <p className='text-sm'>Purchases</p>
          </a>
        </li>
        <li className={styles.buttonLi}>
          <a href="#" >
            <AiOutlineBook size={'2em'} width={'3em'}  className='py-1 m-auto' color='main'/>
            <p className='text-sm'>Sales</p>
          </a>
        </li>
        <li className={styles.buttonLi}>
          <a href="#" >
            <AiOutlineBook size={'2em'} width={'3em'}  className='py-1 m-auto' color='main'/>
            <p className='text-sm'>Sales Return</p>
          </a>
        </li>
        <li className={styles.buttonLi}>
          <a href="#" >
            <AiOutlineBook size={'2em'} width={'3em'}  className='py-1 m-auto' color='main'/>
            <p className='text-sm'>Purchases Return</p>
          </a>
        </li>
        <li className={styles.buttonLi}>
          <a href="#" >
            <AiOutlineBook size={'2em'} width={'3em'}  className='py-1 m-auto' color='main'/>
            <p className='text-sm'>HRM</p>
          </a>
        </li>
        <li className={styles.buttonLi}>
          <a href="#" >
            <AiOutlineBook size={'2em'} width={'3em'}  className='py-1 m-auto' color='main'/>
            <p className='text-sm'>Transfer</p>
          </a>
        </li>
        <li className={styles.buttonLi}>
          <a href="#" >
            <AiOutlineBook size={'2em'} width={'3em'}  className='py-1 m-auto' color='main'/>
            <p className='text-sm'>Expenses</p>
          </a>
        </li>
        <li className={styles.buttonLi}>
          <a href="#" >
            <AiOutlineBook size={'2em'} width={'3em'}  className='py-1 m-auto' color='main'/>
            <p className='text-sm'>People</p>
          </a>
        </li>
        <li className={styles.buttonLi}>
          <a href="#" >
            <AiOutlineBook size={'2em'} width={'3em'}  className='py-1 m-auto' color='main'/>
            <p className='text-sm'>Settings</p>
          </a>
        </li>
        <li className={styles.buttonLi}>
          <a href="#" >
            <AiOutlineBook size={'2em'} width={'3em'}  className='py-1 m-auto' color='main'/>
            <p className='text-sm'>Reports</p>
          </a>
        </li>
      </ul>
    </aside>
  )
}