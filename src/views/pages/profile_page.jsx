import cls from 'classnames';
import avatar from '../../assets/images/no_avatar.png';
import styles from '../../assets/styles/dashboard.module.css';
import Breadcumb from '../../components/breadcumb';
import HeaderMenu from '../../components/header_menu';
import SideMenu from '../../components/side_menu';

export default function ProfilePage() {
  return (
      <div className="block m-0 place-content-start bg-white w-full">
        <body className="relative min-w-full">
          <HeaderMenu />
          <main className="z-0 block place-content-stretch">
            <div className={styles.bodyWrapper}>
              <SideMenu />
              <section className={styles.main}>
                <Breadcumb page="Profile" folder="Settings" />
                <div className={cls(styles.userProfile, "card user-profile o-hidden mb-30")}>
                  <img src={avatar} alt="Profile"/>
                  <div class={styles.userInfo}>
                    <img src={avatar} className={cls(styles.profilePicture, "h-20 w-20 mb-2")} alt="Profile"/>
                    <p class="m-0 text-24">Qiko</p>
                </div>
                <div className={styles.cardBody}></div>
                </div>
              </section>
            </div>
          </main>
        </body>
      </div>
  );
}