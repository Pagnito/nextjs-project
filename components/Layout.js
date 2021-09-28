import Nav from './Nav/Nav';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
     <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        < meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div>
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout;