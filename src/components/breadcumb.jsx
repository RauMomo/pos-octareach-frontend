import cls from 'classnames';
import styles from '../components/styles/breadcumb.module.css';

export default function Breadcumb({ page, folder }) {
  return (
      <div>
           <div className={styles.breadcrumb}>
                        <ul className="text-xs inline list-none">
                          <div className='h-10 flex items-center py-5'>
                            <h1 className='text-3xl mr-2 font-semibold'>{page}</h1>
                            <li className='inline list-none'>
                              <span className='cursor-pointer'> {folder} </span>
                            </li> 
                            <li className='inline list-none justify-end'>
                              <span className='cursor-pointer'> &nbsp;|&nbsp; </span>
                            </li>
                            <li className='inline list-none'> <span>{page}</span> </li>
                          </div>
                      </ul>
            </div>
        <div className={cls(styles.borderTop, styles.separatorBreadcrumb)} /> 
      </div>
  )
}