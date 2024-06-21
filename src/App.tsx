import { BrowserRouter, Routes } from 'react-router-dom'
import RouteList from './route'
import Nav, { IlTabs, IrTabs } from './components/nav'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()
  const lTabs: Array<IlTabs> = [
    { href: '/#about', text: t('home.about') },
    { href: '/#WHO', text: t('home.story') },
    { href: '/#TOK', text: t('home.slerfnomics') },
    { href: '/raids', text: t('home.raids') },
    { href: '/explorer', text: t('home.explorer') },
  ]

  const rTabs: Array<IrTabs> = [
    {
      href: 'https://www.okx.com/web3/dex-market/detail/501/7BgBvyjrZX1YKz4oh9mjb8ZScatkkwb8DzFx7LoiVkM3',
      text: t('home.buySlerf'),
      imgSrc: '/images/okx.png',
      icon: '',
    },
    { href: 'https://slerf_memes', text: '', icon: 'tg' },
    {
      href: 'https://x.com/slerf_ai_solana',
      text: '',
      imgSrc: '',
      icon: 'twitter',
    },
  ]
  return (
    <>
      <BrowserRouter>
        <Nav lTabs={lTabs} rTabs={rTabs}></Nav>
        <Routes>{RouteList}</Routes>
      </BrowserRouter>
    </>
  )
}

export default App
