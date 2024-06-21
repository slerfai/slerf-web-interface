import { useTranslation } from 'react-i18next';
// No longer importing static files directly, using absolute paths in JSX instead
import { useRef } from 'react';

const icons: Array<{ icon: string; text: string }> = [
  {
    icon: '/images/t.svg', // Use absolute path
    text: 'Telegram',
  },
  {
    icon: '/images/x.svg', // Use absolute path
    text: 'X/Twitter',
  },
  {
    icon: '/images/t.svg', // Use absolute path
    text: 'Telegram',
  },
  {
    icon: '/images/x.svg', // Use absolute path
    text: 'X/Twitter',
  },
  {
    icon: '/images/t.svg', // Use absolute path
    text: 'Telegram',
  },
  {
    icon: '/images/x.svg', // Use absolute path
    text: 'X/Twitter',
  },
];

const Wapper = () => {
  const { t } = useTranslation();
  const addressDom = useRef<HTMLDivElement>(null);

  const copyAddress = () => {
    const text = addressDom.current?.innerText || '';
    navigator.clipboard.writeText(text).then(() => {
      alert('Address copied to clipboard'); // Add feedback to confirm the copy action
    });
  };

  return (
    <div className="wrapper">
      <div className="section_hero">
        <div className="block_chara">
          <img src="/images/slerf.png" loading="lazy" alt="Slerf Character" className="booby" />
        </div>
        <div className="block_logo">
          <div className="main-text">
            <img src="/images/coin.png" className="coin" alt="Slerf Coin" />
            SLERF
          </div>
          <div className="pre-sale">
            {t('home.refundAddress')} ({t('home.custodian')}{' '}
            <a
              href="https://github.com/slerfai/slerf-web-interface"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'underline' }}
            >
              Github
            </a>
            ):
          </div>
          <div
            className="block_ca"
            data-tooltip-id="tt"
            id="tt"
            onClick={copyAddress}
          >
            <div className="ca" ref={addressDom}>
              CA: 7BgBvyjrZX1YKz4oh9mjb8ZScatkkwb8DzFx7LoiVkM3
            </div>
          </div>
          <div
            className="block_about wrapper_about"
            style={{ maxHeight: '350px', marginTop: '20px' }}
          >
            <div className="h2 blk">SLERF CTO</div>
            <div className="block_paragraph">
              <p className="para">{t('home.storyContext.p1')}</p>
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
          <div className="wrapper_link">
            {icons.map((item, index) => (
              <div key={index}>
                <img src={item.icon} alt={item.text} />
                <div>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wapper;
