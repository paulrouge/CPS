import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import styles from './Footer.module.scss';
import ClassNames from 'classnames';
import {
  AiFillMediumCircle,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillFacebook,
  AiFillRedditCircle,
} from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { SiFacebook } from 'react-icons/si';
import iconCPSImg from '../../Assets/Images/iconCPSlogo-light.svg';
import '../../Theme/variables.css';

const socialLinks = [
  {
    name: 'medium',
    link: 'https://medium.com/helloiconworld',
    icon: AiFillMediumCircle,
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/helloiconworld',
    icon: AiFillTwitterCircle,
  },
  {
    name: 'discord',
    link: 'https://discord.gg/4vpFeYams4',
    icon: FaDiscord,
    fontSize: '30px',
  },
  {
    name: 'github',
    link: 'https://github.com/icon-community/CPS',
    icon: AiFillGithub,
  },

  {
    name: 'facebook',
    link: 'https://www.facebook.com/helloicon/',
    icon: SiFacebook,
    fontSize: '30px',
  },

  {
    name: 'reddit',
    link: 'https://www.reddit.com/r/helloicon/',
    icon: AiFillRedditCircle,
    // fontSize: '30px'
  },
];

const resourcesLinks = [
  {
    title: 'Getting Started',
    link: 'https://medium.com/@ibriz.ai/1efe714c9182',
  },

  {
    title: 'ICON Forum',
    link: 'https://forum.icon.community/c/contribution-proposals/45',
  },

  {
    title: 'CPS Yellow Paper',
    link: 'https://docs.google.com/document/d/1yPwgsXx4ow5NVnG1ktMKYp5JvjQvWEfuSkq6Iy-OIXA/',
  },
  { title: 'Github', link: 'https://github.com/icon-community/CPS' },
];

const ecosystemLinks = [
  {
    title: 'Hana Wallet',
    link: 'https://hanawallet.io/',
  },

  {
    title: 'Tracker',
    link: 'https://tracker.icon.foundation/',
  },

  {
    title: 'ICON Foundation',
    link: 'https://www.icon.foundation/',
  },
  { title: 'ICON Community', link: 'https://icon.community/' },
];

const communityLinks = [
  {
    title: 'Twitter',
    link: 'https://twitter.com/helloiconworld',
  },

  {
    title: 'Discord',
    link: 'https://discord.gg/4vpFeYams4',
  },

  {
    title: 'Telegram',
    link: 'https://t.me/hello_iconworld',
  },
  { title: 'Medium', link: 'https://medium.com/helloiconworld' },
];

const Footer = ({ console = false, width = undefined, footerRef }) => {
  const linksStyle = console ? styles.linksConsole : styles.link;
  const firstRowStyle = console ? styles.firstRowConsole : styles.firstRow;
  const footerColumnStyles = console
    ? styles.footerColumnConsole
    : styles.footerColumn;

  const consoleColor = 'var(--console-color)';
  const storedTheme = localStorage.getItem('theme');
  return (
    <Container
      fluid
      // className={ClassNames({ 'bg-info': !console, footer: true })}
      style={{
        color: console ? 'consoleColor' : '#FFFFFF',
        marginTop: console ? '40px' : '0px',
        backgroundColor: console ? 'consoleColor' : 'black',
      }}
      id='footer'
      ref={footerRef}
    >
      <Row className={ClassNames(firstRowStyle)}>
        {/* <Col md="1"> </Col> */}

        <Col
          lg={'3'}
          className={ClassNames(footerColumnStyles, linksStyle)}
          style={{
            paddingRight: 0,
            textAlign: width && width <= 767 ? 'left' : 'left',
          }}
        >
          <p style={{ fontWeight: '700' }}>Ecosystem</p>
          {resourcesLinks.map(link => (
            <div style={{ marginTop: '10px' }}>
              <a
                href={link.link}
                target='_blank'
                style={{
                  color: console ? consoleColor : 'white',
                  fontWeight: '500',
                  fontSize: '14px',
                }}
              >
                <div>{link.title}</div>
              </a>
            </div>
          ))}
        </Col>

        <Col
          lg={'3'}
          className={ClassNames(footerColumnStyles, linksStyle)}
          style={{
            paddingRight: 0,
            textAlign: width && width <= 767 ? 'left' : 'left',
          }}
        >
          <p style={{ fontWeight: '700' }}>Community</p>
          {ecosystemLinks.map(link => (
            <div style={{ marginTop: '10px' }}>
              <a
                href={link.link}
                target='_blank'
                style={{
                  color: console ? consoleColor : 'white',
                  fontWeight: '500',
                  fontSize: '14px',
                }}
              >
                <div>{link.title}</div>
              </a>
            </div>
          ))}
        </Col>
        <Col
          lg={'3'}
          className={ClassNames(footerColumnStyles, linksStyle)}
          style={{
            paddingRight: 0,
            textAlign: width && width <= 767 ? 'left' : 'left',
          }}
        >
          <p style={{ fontWeight: '700' }}>Resources</p>
          {communityLinks.map(link => (
            <div style={{ marginTop: '10px' }}>
              <a
                href={link.link}
                target='_blank'
                style={{
                  color: console ? consoleColor : 'white',
                  fontWeight: '500',
                  fontSize: '14px',
                }}
              >
                <div>{link.title}</div>
              </a>
            </div>
          ))}
        </Col>

        <Col lg='3' xs='12' className={ClassNames(footerColumnStyles)}>
          {/* {console ? (
            <svg
              width='114'
              height='28'
              viewBox='0 0 114 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0)'>
                <path
                  d='M3.76715 8.60669H0.529053V21.9308H3.76715V8.60669Z'
                  fill='#262626'
                />
                <path
                  d='M15.7036 8.25518H20.7195V5.11035H15.7036C10.9417 5.11035 7.08984 8.87587 7.08984 13.531C7.08984 18.1862 10.9417 21.9517 15.7036 21.9517H20.7195V18.7862H15.7036C12.7406 18.7862 10.3279 16.4276 10.3279 13.531C10.3068 10.6138 12.7195 8.25518 15.7036 8.25518Z'
                  fill='#262626'
                />
                <path
                  d='M52.275 5.11035C48.021 5.11035 44.5713 8.48276 44.5713 12.6414V21.931H47.8094V12.6414C47.8094 10.2207 49.82 8.25518 52.2962 8.25518C54.7723 8.25518 56.7829 10.2207 56.7829 12.6414V21.931H60.021V12.6414C59.9999 8.48276 56.529 5.11035 52.275 5.11035Z'
                  fill='#262626'
                />
                <path
                  d='M4.27588 4.6973C4.57218 6.18696 3.26001 7.44903 1.7362 7.18006C0.889636 7.01455 0.212387 6.35248 0.0430749 5.52489C-0.253221 4.03523 1.05895 2.75248 2.58276 3.04213C3.40816 3.18696 4.10657 3.86972 4.27588 4.6973Z'
                  fill='#262626'
                />
                <path
                  d='M40.0421 8.50342L37.7352 10.7586C38.2431 11.5655 38.5183 12.4965 38.5183 13.4896C38.5183 16.3862 36.1267 18.7241 33.1638 18.7241C32.1267 18.7241 31.1743 18.4345 30.3701 17.9586L28.0632 20.2138C29.4812 21.2482 31.259 21.8689 33.1849 21.8689C37.9257 21.8689 41.7564 18.1241 41.7564 13.4896C41.7352 11.6276 41.1003 9.91031 40.0421 8.50342Z'
                  fill='#262626'
                />
                <path
                  d='M27.7881 13.5104C27.7881 10.6139 30.1797 8.27593 33.1426 8.27593C34.1797 8.27593 35.1321 8.56559 35.9363 9.04145L38.2432 6.78628C36.8252 5.75179 35.0474 5.1311 33.1215 5.1311C28.3807 5.1311 24.55 8.87593 24.55 13.5104C24.55 15.3932 25.185 17.1104 26.2432 18.5173L28.5924 16.2414C28.0844 15.4552 27.7881 14.5035 27.7881 13.5104Z'
                  fill='#262626'
                />
                <path
                  d='M43.8306 4.7172C44.1269 6.18616 42.8148 7.46892 41.3121 7.17927C40.4656 7.01375 39.7883 6.35168 39.619 5.52409C39.3439 4.05513 40.6349 2.79306 42.1587 3.06203C43.0052 3.22754 43.6825 3.88961 43.8306 4.7172Z'
                  fill='#262626'
                />
                <path
                  d='M26.6454 21.4759C26.9417 22.9448 25.6295 24.2276 24.1268 23.938C23.2803 23.7724 22.603 23.1104 22.4337 22.2828C22.1374 20.8138 23.4496 19.5311 24.9522 19.8207C25.7988 19.9862 26.4972 20.669 26.6454 21.4759Z'
                  fill='#262626'
                />
              </g>
              <path
                d='M76.614 22.115C75.0347 22.115 73.6087 21.7623 72.336 21.057C71.0787 20.3517 70.082 19.378 69.346 18.136C68.6253 16.894 68.265 15.4987 68.265 13.95C68.265 12.4013 68.6253 11.006 69.346 9.764C70.082 8.522 71.0787 7.54833 72.336 6.843C73.6087 6.13767 75.0347 5.785 76.614 5.785C77.7793 5.785 78.8527 5.97667 79.834 6.36C80.8153 6.728 81.651 7.28 82.341 8.016L81.605 8.775C80.317 7.50233 78.6687 6.866 76.66 6.866C75.3107 6.866 74.084 7.17267 72.98 7.786C71.876 8.39933 71.0097 9.25033 70.381 10.339C69.7523 11.4123 69.438 12.616 69.438 13.95C69.438 15.284 69.7523 16.4953 70.381 17.584C71.0097 18.6573 71.876 19.5007 72.98 20.114C74.084 20.7273 75.3107 21.034 76.66 21.034C78.6533 21.034 80.3017 20.39 81.605 19.102L82.341 19.861C81.651 20.597 80.8077 21.1567 79.811 21.54C78.8297 21.9233 77.764 22.115 76.614 22.115ZM92.0429 5.9C94.0669 5.9 95.6539 6.383 96.8039 7.349C97.9539 8.29967 98.5289 9.626 98.5289 11.328C98.5289 13.0147 97.9539 14.341 96.8039 15.307C95.6539 16.2577 94.0669 16.733 92.0429 16.733H87.4429V22H86.2699V5.9H92.0429ZM92.0429 15.675C93.7602 15.675 95.0712 15.2993 95.9759 14.548C96.8805 13.7967 97.3329 12.7233 97.3329 11.328C97.3329 9.93267 96.8805 8.85933 95.9759 8.108C95.0712 7.34133 93.7602 6.958 92.0429 6.958H87.4429V15.675H92.0429ZM106.943 22.115C105.763 22.115 104.636 21.9157 103.562 21.517C102.504 21.103 101.676 20.574 101.078 19.93L101.607 19.056C102.175 19.654 102.934 20.1447 103.884 20.528C104.85 20.896 105.862 21.08 106.92 21.08C108.454 21.08 109.611 20.7887 110.393 20.206C111.175 19.6233 111.566 18.8643 111.566 17.929C111.566 17.2083 111.359 16.6333 110.945 16.204C110.531 15.7747 110.018 15.445 109.404 15.215C108.791 14.985 107.963 14.7473 106.92 14.502C105.74 14.2107 104.789 13.927 104.068 13.651C103.363 13.375 102.757 12.9533 102.251 12.386C101.761 11.8033 101.515 11.029 101.515 10.063C101.515 9.281 101.722 8.568 102.136 7.924C102.55 7.26467 103.179 6.74333 104.022 6.36C104.881 5.97667 105.947 5.785 107.219 5.785C108.109 5.785 108.983 5.91533 109.841 6.176C110.7 6.43667 111.444 6.78933 112.072 7.234L111.635 8.177C110.991 7.73233 110.278 7.395 109.496 7.165C108.73 6.935 107.971 6.82 107.219 6.82C105.732 6.82 104.605 7.119 103.838 7.717C103.072 8.315 102.688 9.08933 102.688 10.04C102.688 10.7607 102.895 11.3357 103.309 11.765C103.723 12.1943 104.237 12.524 104.85 12.754C105.464 12.984 106.299 13.2293 107.357 13.49C108.538 13.7813 109.481 14.065 110.186 14.341C110.892 14.617 111.49 15.0387 111.98 15.606C112.486 16.158 112.739 16.9093 112.739 17.86C112.739 18.642 112.525 19.355 112.095 19.999C111.681 20.643 111.037 21.1567 110.163 21.54C109.289 21.9233 108.216 22.115 106.943 22.115Z'
                fill='#262626'
              />
              <defs>
                <clipPath id='clip0'>
                  <rect
                    width='60'
                    height='21'
                    fill='white'
                    transform='translate(0 3)'
                  />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              width='114'
              height='28'
              viewBox='0 0 114 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0)'>
                <path
                  d='M3.76721 8.60689H0.529114V21.931H3.76721V8.60689Z'
                  fill='white'
                ></path>
                <path
                  d='M15.7037 8.25518H20.7196V5.11035H15.7037C10.9418 5.11035 7.08997 8.87587 7.08997 13.531C7.08997 18.1862 10.9418 21.9517 15.7037 21.9517H20.7196V18.7862H15.7037C12.7408 18.7862 10.3281 16.4276 10.3281 13.531C10.3069 10.6138 12.7196 8.25518 15.7037 8.25518Z'
                  fill='white'
                ></path>
                <path
                  d='M52.2751 5.11035C48.0212 5.11035 44.5714 8.48276 44.5714 12.6414V21.931H47.8095V12.6414C47.8095 10.2207 49.8201 8.25518 52.2963 8.25518C54.7725 8.25518 56.7831 10.2207 56.7831 12.6414V21.931H60.0212V12.6414C60 8.48276 56.5291 5.11035 52.2751 5.11035Z'
                  fill='white'
                ></path>
                <path
                  d='M4.276 4.69741C4.5723 6.18707 3.26013 7.44914 1.73632 7.18017C0.889758 7.01465 0.212509 6.35258 0.043197 5.525C-0.253099 4.03534 1.05907 2.75258 2.58288 3.04224C3.40828 3.18707 4.10669 3.86982 4.276 4.69741Z'
                  fill='white'
                ></path>
                <path
                  d='M40.0423 8.50345L37.7355 10.7586C38.2434 11.5655 38.5185 12.4966 38.5185 13.4897C38.5185 16.3862 36.127 18.7241 33.164 18.7241C32.127 18.7241 31.1746 18.4345 30.3704 17.9586L28.0635 20.2138C29.4815 21.2483 31.2593 21.869 33.1852 21.869C37.9259 21.869 41.7566 18.1241 41.7566 13.4897C41.7355 11.6276 41.1005 9.91035 40.0423 8.50345Z'
                  fill='white'
                ></path>
                <path
                  d='M27.7884 13.5104C27.7884 10.6138 30.1799 8.27587 33.1429 8.27587C34.1799 8.27587 35.1323 8.56553 35.9365 9.04139L38.2434 6.78621C36.8254 5.75173 35.0476 5.13104 33.1217 5.13104C28.381 5.13104 24.5503 8.87587 24.5503 13.5104C24.5503 15.3931 25.1852 17.1104 26.2434 18.5173L28.5926 16.2414C28.0847 15.4552 27.7884 14.5035 27.7884 13.5104Z'
                  fill='white'
                ></path>
                <path
                  d='M43.8307 4.71724C44.127 6.18621 42.8148 7.46897 41.3122 7.17931C40.4656 7.0138 39.7884 6.35173 39.6191 5.52414C39.3439 4.05517 40.6349 2.79311 42.1587 3.06207C43.0053 3.22759 43.6826 3.88966 43.8307 4.71724Z'
                  fill='white'
                ></path>
                <path
                  d='M26.6455 21.4759C26.9418 22.9448 25.6296 24.2276 24.127 23.9379C23.2804 23.7724 22.6032 23.1104 22.4339 22.2828C22.1376 20.8138 23.4497 19.531 24.9524 19.8207C25.799 19.9862 26.4974 20.669 26.6455 21.4759Z'
                  fill='white'
                ></path>
              </g>
              <path
                d='M76.614 22.115C75.0347 22.115 73.6087 21.7623 72.336 21.057C71.0787 20.3517 70.082 19.378 69.346 18.136C68.6253 16.894 68.265 15.4987 68.265 13.95C68.265 12.4013 68.6253 11.006 69.346 9.764C70.082 8.522 71.0787 7.54833 72.336 6.843C73.6087 6.13767 75.0347 5.785 76.614 5.785C77.7793 5.785 78.8527 5.97667 79.834 6.36C80.8153 6.728 81.651 7.28 82.341 8.016L81.605 8.775C80.317 7.50233 78.6687 6.866 76.66 6.866C75.3107 6.866 74.084 7.17267 72.98 7.786C71.876 8.39933 71.0097 9.25033 70.381 10.339C69.7523 11.4123 69.438 12.616 69.438 13.95C69.438 15.284 69.7523 16.4953 70.381 17.584C71.0097 18.6573 71.876 19.5007 72.98 20.114C74.084 20.7273 75.3107 21.034 76.66 21.034C78.6533 21.034 80.3017 20.39 81.605 19.102L82.341 19.861C81.651 20.597 80.8077 21.1567 79.811 21.54C78.8297 21.9233 77.764 22.115 76.614 22.115ZM92.0429 5.9C94.0669 5.9 95.6539 6.383 96.8039 7.349C97.9539 8.29967 98.5289 9.626 98.5289 11.328C98.5289 13.0147 97.9539 14.341 96.8039 15.307C95.6539 16.2577 94.0669 16.733 92.0429 16.733H87.4429V22H86.2699V5.9H92.0429ZM92.0429 15.675C93.7602 15.675 95.0712 15.2993 95.9759 14.548C96.8805 13.7967 97.3329 12.7233 97.3329 11.328C97.3329 9.93267 96.8805 8.85933 95.9759 8.108C95.0712 7.34133 93.7602 6.958 92.0429 6.958H87.4429V15.675H92.0429ZM106.943 22.115C105.763 22.115 104.636 21.9157 103.562 21.517C102.504 21.103 101.676 20.574 101.078 19.93L101.607 19.056C102.175 19.654 102.934 20.1447 103.884 20.528C104.85 20.896 105.862 21.08 106.92 21.08C108.454 21.08 109.611 20.7887 110.393 20.206C111.175 19.6233 111.566 18.8643 111.566 17.929C111.566 17.2083 111.359 16.6333 110.945 16.204C110.531 15.7747 110.018 15.445 109.404 15.215C108.791 14.985 107.963 14.7473 106.92 14.502C105.74 14.2107 104.789 13.927 104.068 13.651C103.363 13.375 102.757 12.9533 102.251 12.386C101.761 11.8033 101.515 11.029 101.515 10.063C101.515 9.281 101.722 8.568 102.136 7.924C102.55 7.26467 103.179 6.74333 104.022 6.36C104.881 5.97667 105.947 5.785 107.219 5.785C108.109 5.785 108.983 5.91533 109.841 6.176C110.7 6.43667 111.444 6.78933 112.072 7.234L111.635 8.177C110.991 7.73233 110.278 7.395 109.496 7.165C108.73 6.935 107.971 6.82 107.219 6.82C105.732 6.82 104.605 7.119 103.838 7.717C103.072 8.315 102.688 9.08933 102.688 10.04C102.688 10.7607 102.895 11.3357 103.309 11.765C103.723 12.1943 104.237 12.524 104.85 12.754C105.464 12.984 106.299 13.2293 107.357 13.49C108.538 13.7813 109.481 14.065 110.186 14.341C110.892 14.617 111.49 15.0387 111.98 15.606C112.486 16.158 112.739 16.9093 112.739 17.86C112.739 18.642 112.525 19.355 112.095 19.999C111.681 20.643 111.037 21.1567 110.163 21.54C109.289 21.9233 108.216 22.115 106.943 22.115Z'
                fill='white'
              ></path>
              <defs>
                <clipPath id='clip0'>
                  <rect
                    width='60'
                    height='21'
                    fill='white'
                    transform='translate(0 3)'
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          )} */}
          <img src={iconCPSImg} style={{ width: '45%' }} />
          <div
            style={{ marginTop: '20px', fontSize: '14px', fontWeight: '600' }}
          >
            Built by:{' '}
            <a
              href='https://iconosphere.io/'
              style={console ? { color: consoleColor } : { color: 'white' }}
              target='_blank'
            >
              ICONOsphere P-Rep
            </a>
          </div>
          <div
            style={{ marginTop: '5px', fontSize: '14px', fontWeight: '600' }}
          >
            <a
              href='https://tracker.icon.foundation/address/hx231a795d1c719b9edf35c46b9daa4e0b5a1e83aa'
              style={console ? { color: consoleColor } : { color: 'white' }}
              target='_blank'
            >
              Support us with your votes
              {/* <Button
                variant={
                  console
                    ? storedTheme === 'dark'
                      ? 'outline-light'
                      : 'outline-dark'
                    : 'outline-light'
                }
                style={{
                  marginLeft: '0px',
                  paddingTop: '3px',
                  paddingBottom: '3px',
                }}
              >
                {' '}
                Support us with your votes
              </Button>{' '} */}
            </a>
          </div>
          {/* <div style={{ marginTop: '5px' }}>
            <a
              href='mailto:hello@icon.foundation'
              target='_blank'
              style={{ color: console ? consoleColor : 'white' }}
            >
              <Button
                variant={
                  console
                    ? storedTheme === 'dark'
                      ? 'outline-light'
                      : 'outline-dark'
                    : 'outline-light'
                }
                style={{
                  marginLeft: '0px',
                  paddingTop: '3px',
                  paddingBottom: '3px',
                }}
              >
                {' '}
                Contact
              </Button>{' '}
            </a>
          </div> */}

          <div
            style={{ marginTop: '5px', fontSize: '14px', fontWeight: '600' }}
          >
            Copyright © {new Date().getFullYear()}.{' '}
            <u>
              <a
                href='https://icon.foundation/'
                target='_blank'
                style={console ? { color: consoleColor } : { color: 'white' }}
              >
                ICON Foundation
              </a>
            </u>
          </div>
        </Col>

        <Col lg='1'> </Col>

        {console && (
          <Col
            lg='3'
            xs='12'
            className={ClassNames(footerColumnStyles, styles.socialColumn)}
            style={{ paddingLeft: '45px !important' }}
          >
            <div style={{ marginTop: '15px' }}>Find us on:</div>
            <div
              style={{
                display: 'flex',
                marginTop: '15px',
                alignItems: 'center',
                gap: 5,
              }}
            >
              {socialLinks.map(socialLink => (
                <a
                  href={socialLink.link}
                  key={socialLink.name}
                  target='_blank'
                  style={{ zIndex: 1000 }}
                >
                  <socialLink.icon
                    style={{
                      fontSize: socialLink.fontSize
                        ? socialLink.fontSize
                        : '35px',
                      color: console ? consoleColor : 'white',
                    }}
                  />
                </a>
              ))}
            </div>
          </Col>
        )}
        {!console && <Col lg='1'> </Col>}
      </Row>

      <Row style={{ marginBottom: '10px' }}>
        <Col lg='12' className={footerColumnStyles}></Col>
      </Row>
    </Container>
  );
};

export default Footer;
