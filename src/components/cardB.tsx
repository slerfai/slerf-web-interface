import { useTranslation } from 'react-i18next'

const CardB = () => {
  const { t } = useTranslation()
  return (
    <div className='wrapper_tokenomics' id='tokenomics'>
      <img src='/images/hanging.png' className='hanging' />
      <div className='tokenomics'>
        <div className='h1'>{t('home.slerfnomics')}</div>
        <div
          data-w-id='4c6bb17c-4a56-13b4-3585-2eb3e7861ee4'
          className='tokenomics_details'
        >
          <div className='tokenomics_top'>
            <div className='toke_details'>
              <div className='tokenomics_title'>{t('home.totalSupply')}</div>
              <div className='tokenomics_title'>500M</div>
            </div>
            <div className='toke_details'>
              <div className='tokenomics_title'>100% {t('home.lp')}</div>
              <div className='tokenomics_title'>0%  {t('home.presale')}</div>
            </div>
          </div>
          <div className='tokenomics_bottom'>
            <div className='toke_details'>
              <div className='tokenomics_title'>{t('home.lpBurned')}</div>
              <div className='tokenomics_title'>{t('home.atLaunch')}</div>
            </div>
            <div className='toke_details'>
              <div className='tokenomics_title'> {t('home.ownerShip')}</div>
              <div className='tokenomics_title'> {t('home.revoked')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardB
