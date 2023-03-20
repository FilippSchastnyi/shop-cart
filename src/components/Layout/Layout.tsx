import { Outlet } from 'react-router-dom'
import LayoutCss from './Layout.module.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const Layout = (): JSX.Element => {
  return (
    <div className={LayoutCss.layout}>
      <Header />
      <main className={LayoutCss.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
