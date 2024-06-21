import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <div className='section_about'>
      <img
        src='images/reading.png'
        loading='lazy'
        alt=''
        className='cloud_right'
      />
      <div className='section_block_about_wrapper'>
        <div className='block_about'>
          <div className='h1 blk'>{t('home.slerfStory')}</div>
          <div className='block_paragraph'>
            <p className='para'>{t('home.storyContext.p1')}</p>
            <br />
            <p>{t('home.storyContext.p2')}</p>
            <br />
            <p>{t('home.storyContext.p3')}</p>
            <br />
            <p>{t('home.storyContext.p4')}</p>
            <br />
            <p>{t('home.storyContext.p5')}</p>
            <br />
            <p>{t('home.storyContext.p6')}</p>
            <br />
            <p>{t('home.storyContext.p7')}</p>
            <br />
            <p>{t('home.storyContext.p8')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
