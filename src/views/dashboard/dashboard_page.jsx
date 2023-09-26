import cls from 'classnames';
import { useState } from 'react';
import { LiaCartPlusSolid } from 'react-icons/lia';
import { TfiBackRight } from 'react-icons/tfi';
import { TiShoppingCart } from 'react-icons/ti';
import logo from '../../assets/images/octareach-logo-label.png';
import styles from '../../assets/styles/dashboard.module.css';
import { BarChart } from '../../components/charts/bar_chart';
import { LineChart } from '../../components/charts/line_chart';
import { PieChart } from '../../components/charts/pie_chart';
import HeaderMenu from '../../components/header_menu';
import SideMenu from '../../components/side_menu';

function DashboardPage() {
  const [isProfileMenu, setIsProfileMenu] = useState(false);
  const handlePosButton = () => {
    console.log('POS');
  }

  const handleProfileDropdownClick = () => {
    setIsProfileMenu(!isProfileMenu)
    console.log(isProfileMenu);
  }

  return (
    <div className="block m-0 place-content-start bg-white w-full">
      <body className="relative min-w-full">
        <HeaderMenu />
        <main className='z-0 block place-content-stretch'>
          <div className={styles.bodyWrapper}>
            <SideMenu />
            {/* <div className='sticky h-full w-12 bg-slate-500'>
              Create Product
            </div> */}
            <section className={styles.main}>
              <div className='flex flex-col w-full min-w-full min-h-full m-auto place-content-start'>
                <p>Filter by Warehouse</p>
                <div className={styles.cardsRowWrapper}>
                  <div className={styles.cardsWrapper}>
                  <div className={styles.cardContentWrapper}>
                    <div className='flex flex-col flex-0 justify-center items-stretch mx-auto'>
                        <TiShoppingCart size={'4em'} className='fill-mainlight'/>
                    </div>
                    <div className='flex flex-col justify-center mx-auto text-left'>
                      <p className='text-sm text-black w-1/2 font-normal'>Sales</p>
                      <div className='text-2xl text-main w-1/2'>$1,780.00</div>
                    </div>
                  </div>
                </div>
                <div className={styles.cardsWrapper}>
                  <div className={styles.cardContentWrapper}>
                    <div className='flex flex-col flex-0 justify-center items-stretch mx-auto'>
                      <LiaCartPlusSolid size={'4em'} className='fill-mainlight'/>
                    </div>
                    <div className='flex flex-col flex-0 justify-center mx-auto text-left'>
                      <p className='text-sm text-black w-1/2'>Purchases</p>
                      <div className='text-2xl text-main w-1/2'>$1,160.00</div>
                    </div>
                  </div>
                </div>
                <div className={styles.cardsWrapper}>
                  <div className={styles.cardContentWrapper}>
                    <div className='flex flex-col flex-0 justify-center items-stretch mx-auto'>
                      <TfiBackRight size={'4em'} className='fill-mainlight'/>
                    </div>
                    <div className='flex flex-col flex-0 justify-center mx-auto items-start break-keep'>
                      <p className='text-sm text-black text-left'>Sales Return</p>
                      <div className='text-2xl text-main text-left whitespace-normal'>$ 0.00</div>
                    </div>
                  </div>
                </div>
                <div className={styles.cardsWrapper}>
                  <div className={styles.cardContentWrapper}>
                    <div className='flex flex-col flex-0 justify-center items-stretch mx-auto text-left break-normal'>
                      <TfiBackRight size={'4em'} className={styles.flippedIcon}/>
                    </div>
                    <div className='flex flex-col flex-0 justify-center mx-auto items-start break-keep'>
                      <p className='text-sm text-black text-left'>Purchases Return</p>
                      <div className='text-2xl text-main text-left'>$ 0.00</div>
                    </div>
                  </div>
                </div>
                </div>
                <div className='grid grid-flow-col-dense grid-cols-12 min-w-full relative m-auto gap-4 text-left'>
                  <div className={styles.weekSalPurWrapper}>
                    <div className={styles.weekSalPurContentWrapper}>
                      <div className='flex flex-col flex-auto min-w-full'>
                        <p className='font-normal text-lg'>This Week Sales & Purchases</p>
                        <BarChart />
                      </div>
                    </div>
                  </div>
                  <div className={styles.topSellProductWrapper}>
                    <div className={styles.weekSalPurContentWrapper}>
                      <div className='flex flex-col flex-auto min-w-full'>
                        <p className='font-normal w-full text-lg'>Top Selling Products (2023)</p>
                        <PieChart id="echarts-pie-container"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='grid grid-flow-col-dense grid-cols-12 min-w-full relative m-auto gap-4 text-left mt-4'>
                  <div className={cls(styles.weekSalPurWrapper, styles.stockAlertWrapper)}>
                    <div className={styles.weekSalPurContentWrapper}>
                      <div className='flex flex-col flex-auto min-w-full'>
                        <p className='font-normal pb-2 ml-2 text-lg'>Stock Alert</p>
                        <hr className='h-1 border-borderColor' />
                        <table className='table-fixed ml-2'>
                            <thead>
                              <tr>
                                <th>Code</th>
                                <th>Product</th>
                                <th>Warehouse</th>
                                <th>Quantity</th>
                                <th>Alert Quantity</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>70171027</td>
                                <td>Banana</td>
                                <td>Warehouse 2</td>
                                <td>10</td>
                                <td>
                                  <span className={styles.redBox}>10</span>
                                </td>
                              </tr>
                              <tr>
                                <td>80256894</td>
                                <td>Orange</td>
                                <td>Warehouse 1</td>
                                <td>47</td>
                                <td>
                                  <span className={styles.redBox}>50</span>
                                </td>
                              </tr>
                              <tr>
                                <td>80256894</td>
                                <td>Orange</td>
                                <td>Warehouse 1</td>
                                <td>47</td>
                                <td>
                                  <span className={styles.redBox}>50</span>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className={styles.topSellProductWrapper}>
                    <div className={styles.weekSalPurContentWrapper}>
                      <div className='flex flex-col flex-auto min-w-full'>
                        <p className='font-normal pb-2 ml-2 text-lg'>Top Selling Products (September)</p>
                        <hr className='h-1 border-borderColor' />
                        <table className='table-fixed ml-2'>
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th>Total Sales</th>
                                <th>Total Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Macbook Pro</td>
                                <td>4</td>
                                <td>$ 6000.00</td>
                              </tr>
                              <tr>
                                <td>Sunglasses</td>
                                <td>4</td>
                                <td>$ 1360.00</td>
                              </tr>
                              <tr>
                                <td>Earphones</td>
                                <td>3</td>
                                <td>$ 956.00</td>
                              </tr>
                              <tr>
                                <td>Banana</td>
                                <td>2</td>
                                <td>$ 546.00</td>
                              </tr>
                              <tr>
                                <td>Strawberry</td>
                                <td>2</td>
                                <td>$ 480.00</td>
                              </tr>
                            </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='grid grid-flow-col-dense grid-cols-12 min-w-full relative m-auto gap-4 text-left mt-4'>
                  <div className={cls(styles.weekSalPurWrapper, styles.stockAlertWrapper)}>
                    <div className={styles.weekSalPurContentWrapper}>
                      <div className='flex flex-col flex-auto min-w-full'>
                        <p className='font-normal pb-2 ml-2 text-lg'>Payment Sent & Received</p>
                        <LineChart />
                      </div>
                    </div>
                  </div>
                  <div className={styles.topSellProductWrapper}>
                    <div className={styles.weekSalPurContentWrapper}>
                      <div className='flex flex-col flex-auto min-w-full'>
                        <p className='font-normal pb-2 ml-2 text-lg'>Top 5 Customers (September)</p>
                        <PieChart id="echarts-pie-container-2"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='grid grid-flow-col-dense grid-cols-12 min-w-full relative m-auto gap-4 text-left mt-4'>
                  <div className={styles.recentSalesWrapper}>
                    <div className='box-border flex bg-cover py-4'>
                      <div className='flex flex-col flex-auto min-w-full'>
                        <p className='font-normal pb-2 text-lg ml-4'>Recent Sales</p>
                        <hr className='h-1 border-borderColor'/>
                        <table className='table-fixed ml-2'>
                            <thead>
                              <tr>
                                <th>Reference</th>
                                <th>Customer</th>
                                <th>Warehouse</th>
                                <th>Status</th>
                                <th>Grand Total</th>
                                <th>Paid</th>
                                <th>Due</th>
                                <th>Payment Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>SL_1117</td>
                                <td>Thomas Martin</td>
                                <td>Warehouse 1</td>
                                <td>
                                  <span className='inline-block'>
                                    <div className='border-2 px-[3px] rounded-lg border-chipPendingColor text-chipPendingColor font-bold text-sm'>Pending</div>
                                  </span>
                                </td>
                                <td>1736.00</td>
                                <td>1736.00</td>
                                <td>0.00</td>
                                <td>
                                  <span className='inline-block'>
                                    <div className='border-2 px-[3px] rounded-lg border-chipSuccessColor text-chipSuccessColor font-bold text-sm'>Paid</div>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>SL_1116</td>
                                <td>Walk-in Customer</td>
                                <td>Warehouse 2</td>
                                <td>
                                  <span className='inline-block'>
                                    <div className='border-2 px-[3px] rounded-lg border-chipPendingColor text-chipPendingColor font-bold text-sm'>Pending</div>
                                  </span>
                                </td>
                                <td>1650.00</td>
                                <td>1000.00</td>
                                <td>650.00</td>
                                <td>
                                  <span className='inline-block'>
                                    <div className='border-2 px-[3px] rounded-lg border-main text-main font-bold text-sm'>Partial</div>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>SL_1115</td>
                                <td>Fred C. Rasmussen</td>
                                <td>Warehouse 2</td>
                                <td>
                                  <span className='inline-block'>
                                    <div className='border-2 px-[3px] rounded-lg border-chipSuccessColor text-chipSuccessColor font-bold text-sm'>Completed</div>
                                  </span>
                                </td>
                                <td>1874.80</td>
                                <td>0.00</td>
                                <td>1874.80</td>
                                <td>
                                  <span className='inline-block'>
                                    <div className='border-2 px-[3px] rounded-lg border-chipOrderedColor text-chipOrderedColor font-bold text-sm'>Unpaid</div>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>SL_1114</td>
                                <td>Phyliss J. Polite</td>
                                <td>Warehouse 2</td>
                                <td>
                                  <span className='inline-block'>
                                    <div className='border-2 px-[3px] rounded-lg border-chipOrderedColor text-chipOrderedColor font-bold text-sm'>Ordered</div>
                                  </span>
                                </td>
                                <td>1792.80</td>
                                <td>1792.80</td>
                                <td>0</td>
                                <td>
                                  <span className='inline-block'>
                                    <div className='border-2 px-[3px] rounded-lg border-chipSuccessColor text-chipSuccessColor font-bold text-sm'>Paid</div>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>SL_1113</td>
                                <td>Thomas M. Martin</td>
                                <td>Warehouse 1</td>
                                <td>
                                  <span className='inline-block'>
                                    <div className='border-2 px-[3px] rounded-lg border-chipSuccessColor text-chipSuccessColor font-bold text-sm'>Completed</div>
                                  </span>
                                </td>
                                <td>2648.00</td>
                                <td>0</td>
                                <td>2648.00</td>
                                <td>
                                  <span className='inline-block'>
                                    <div className='border-2 px-[3px] rounded-lg border-chipOrderedColor text-chipOrderedColor font-bold text-sm'>Unpaid</div>
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className='inline-block bg-gray-200 h-40 w-[87%] my-4 p-4 text-sm font-bold rounded-md absolute'>
                <p className='pb-4'>Octareach - Ultimate Inventory With POS</p>
                <hr className='border-borderColor' />
                <div className={styles.footerContent}>
                  <img src={logo} alt="Caption Logo" width={130} height={70} className="py-10 self-center mb-8 inline-block align-middle" />
                  <div className={styles.footerChildContent}>
                    <p className='font-normal leading-6'>© 2023 Developed by Octareach</p>
                    <p className='font-normal leading-4'>All rights reserved - v4.0.6</p>
                  </div>
                </div>
              </footer>
            </section>
            </div>
          </main>
      </body>
    </div>
  );
}
export default DashboardPage;