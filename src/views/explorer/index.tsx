import { useTranslation } from 'react-i18next'

const Explorer = () => {
  const { t } = useTranslation()
  return (
    <main className='mainStatic'>
      <div className='traitsMain'>
        <div className='nftsContainer'>
          <div className='nfts'>
            {Array.from({ length: 100 }, (_, i) => (
              <div className='nft' key={i}>
                <img
                  className='nftImage'
                  src={`https://slerf.s3.amazonaws.com/images/${i}.png`}
                />
                <div className='nftTitle'>SLERF #{i}</div>
                <div className='nftName'>SLERF #{i}</div>
              </div>
            ))}
          </div>
          <div className='p-5 cursor-pointer'>{t('explorer.loadMore')}</div>
        </div>
      </div>
    </main>
  )
}

export default Explorer
