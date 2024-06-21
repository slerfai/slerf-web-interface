import { useTranslation } from 'react-i18next'

const Raids = () => {
  const { t } = useTranslation()
  return (
    <div className='raid_mainStatic__EEXYW'>
      <div className='raid_raidsMain__D_Wgf'>
        <div className='raid_question__fXtx1'>{t('home.raids')}</div>
        <div className='raid_enterQuestion__ZVL_7'>
          Weeee raiiiddd faaaassssttt{' '}
        </div>
        <div>
          <div>
            <div className='raid_imageParent__e4RaK'>
              <img
                src='https://www.slerf.wtf/gms/7.jpeg'
                alt='meme'
                className='raid_nftImage__ww1R7'
                width='100%'
              />
            </div>
            <div className='raid_box3__m9Ma4 raid_sb13__qLAgY'>
              {t('raids.nextBigMeMe')}
            </div>
            <div className='raid_buttonCont__bAZDe'>
              <div className='raid_enterButton__ixjkm'>
                <div>{t('raids.shuffleMeMe')}</div>
              </div>
              <div className='raid_enterButton__ixjkm'>
                {t('raids.selectTarget')}
              </div>
            </div>
            <div className='raid_buttonCont__bAZDe'>
              <a
                href='https://twitter.com/intent/tweet?via=slerfsol&amp;in_reply_to=1769557613560115216&amp;text=THE NEXT BIG MEME $SLERF https://www.slerf.wtf/raids?memeID=7'
                target='_blank'
                rel='noreferrer'
              >
                <button className='raid_raidButton__MUoYZ'>
                  {t('home.raids')}
                </button>
              </a>
            </div>
            <div className='raid_selectRaids__ZXh9n'></div>
            <div className='raid_sep_bottom__kn_7c' id='WHO'>
              <div className='separator_in'>
                <div className='separator_in2'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Raids
