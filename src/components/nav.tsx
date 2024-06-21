import { useTranslation } from 'react-i18next'
import { Dropdown, MenuProps } from 'antd'

export interface IlTabs {
  href: string
  text: string
}

export interface IrTabs {
  href: string
  text?: string
  imgSrc?: string
  icon?: string
}

const Nav = (props: { lTabs?: Array<IlTabs>; rTabs?: Array<IrTabs> }) => {
  const { lTabs = [], rTabs = [] } = props

  const { i18n } = useTranslation()

  const items: MenuProps['items'] = [
    {
      key: 'en_US',
      label: (
        <div
          onClick={() => {
            i18n.changeLanguage('en_US')
            localStorage.setItem('locales', 'en_US')
          }}
        >
          Engilsh
        </div>
      ),
    },
    {
      key: 'zh_CN',
      label: (
        <div
          onClick={() => {
            i18n.changeLanguage('zh_CN')
            localStorage.setItem('locales', 'zh_CN')
          }}
        >
          简体中文
        </div>
      ),
    },
    {
      key: 'ko_KR',
      label: (
        <div
          onClick={() => {
            i18n.changeLanguage('ko_KR')
            localStorage.setItem('locales', 'ko_KR')
          }}
        >
          한국인
        </div>
      ),
    },
  ]

  const switchLanguage = () => {
    return false
  }
  return (
    <div className='wrapper_header'>
      <div className='header'>
        <div className='menu_left'>
          <a href='/raids'>
            <div className='raids-button'>RAIDS </div>
          </a>

          {lTabs.map((item) => (
            <>
              {' '}
              <a href={`${item.href}`} className='menu_button w-button'>
                {item.text}
              </a>
            </>
          ))}
        </div>
        <div className='menu_right'>
          {rTabs.map((item) =>
            item.imgSrc ? (
              <a href={item.href} target='_blank' className='buy'>
                {item.text ? item.text : ''}
                <img
                  className='h-[22px]'
                  src={item.imgSrc ? item.imgSrc : ''}
                />
              </a>
            ) : (
              <a
                href={item.href}
                target='_blank'
                className={`socials w-button ${item.icon ? item.icon : ''}`}
              ></a>
            )
          )}
          <Dropdown menu={{ items }} arrow>
            <div
              onClick={switchLanguage}
              className={`socials w-button language`}
            ></div>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
export default Nav
