import { useTranslation } from 'react-i18next'

const CardA = () => {
  const { t } = useTranslation()
  return (
    <div className='wrapper_tokenomics' id='tokenomics'>
      <img src='/images/salute.png' className='salute' />
      <div className='tokenomics'>
        <div className='contribs_details'>
          <div className='h1 mb-6'>{t('home.contributors')}</div>
          <div className='contribs_flex'>
            <div className='contrib'>
              <img className='contribimg' src='/images/lbank.jpeg' />
              <h3>LBank</h3>
            </div>
            <div className='contrib'>
              <img className='contribimg' src='/images/htx.jpg' />
              <h3>HTX</h3>
            </div>
            <div className='contrib'>
              <img className='contribimg' src='/images/Hawksight.jpeg' />
              <h3>Hawksight</h3>
            </div>
            <div className='contrib'>
              <img className='contribimg' src='/images/BingX.jpeg' />
              <h3>BingX</h3>
            </div>
            <div className='contrib'>
              <img className='contribimg' src='/images/Jupiter.jpeg' />
              <h3>Jupiter</h3>
            </div>
            <div className='contrib'>
              <img className='contribimg' src='/images/KuCoin.jpeg' />
              <h3>KuCoin</h3>
            </div>
            <div className='contrib'>
              <img className='contribimg' src='/images/OneDex.jpeg' />
              <h3>OneDex</h3>
            </div>
            <div className='contrib'>
              <img className='contribimg' src='/images/BitGet.png' />
              <h3>BitGet</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardA
