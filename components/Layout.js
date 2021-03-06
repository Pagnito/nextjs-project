import Nav from './Nav/Nav';
import Head from 'next/head';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.app}>
      <Head>
        <title>ArkeyType</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div>
        <main>
          {children}
        </main>
        <div className={styles.footer}></div>
      </div>
  
    </div>
  )
}

export default Layout;