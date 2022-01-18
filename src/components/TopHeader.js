import React, { Component } from 'react';
import '../css/Header.scss'
import SearchIcon from '../assets/search.svg'
import BellIcon from '../assets/bell.svg'
import MenuIcon from '../assets/menu.svg'

class TopHeader extends Component {

  render() {
    const hambergerMenu = 'https://static.wanted.co.kr/images/icon-menu.png'
    const w3Svg = 'https://www.w3.org/2000/svg'
  
    return (
      <div className='header-wrap'>
        <nav>
          <div className='nav-first'>
            <div className='top-logo-wrap'>
              <button className='main-hamberger'>
                <img src={ hambergerMenu }
                  alt="hamberger menu"
                  style={{width:'17px', height:'14px', objectFit:'contain'}}
                />
              </button>
              <a href='#' className='main-logo'>
                <i className="icon-logo_new"></i>
              </a>
            </div>
          </div>
          <ul className='nav-second'>
            <li className='sm-home'>
              <a href='#'>홈</a>
            </li>
            <li>
              <a href='#'>채용</a>
            </li>
            <li>
              <a href='#'>이벤트</a>
            </li>
            <li className='sm-visible'>
              <a href='#'>직군별 연봉</a>
            </li>
            <li className='sm-visible'>
              <a href='#'>이력서</a>
            </li>
            <li className='sm-visible'>
              <a href='#'>커뮤니티
                <em>
                  <svg xmlns={ w3Svg } width="18" height="11" viewBox="0 0 18 11">
                    <g fill="none" fillRule="evenodd" fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" fontSize="9" fontWeight="500">
                      <g fill="#36F">
                        <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"><tspan x="0" y="8">New</tspan>
                        </text>
                      </g>
                    </g>
                  </svg>
                </em>
              </a>
            </li>
            <li className='sm-visible'>
              <a href='#'>프리랜서</a>
            </li>
            <li className='sm-visible'>
              <a href='#'>AI 합격예측
                <span>
                  <svg xmlns={ w3Svg } width="18" height="11" viewBox="0 0 18 11">
                    <g fill="none" fillRule="evenodd" fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" fontSize="9" fontWeight="500">
                      <g fill="#36F">
                        <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                          <tspan x="0" y="8">Beta</tspan>
                        </text>
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
          <aside className='nav-third'>
            <ul>
              <li>
                <button type="button" aria-label="search-btn" className="search-btn">
                  <img src={ SearchIcon }></img>
                </button>
              </li>
              <li>            
                <button type="button" aria-label="noti-btn" className="noti-btn">
                  <img src={ BellIcon }></img>               
                </button>
                <span className="new-badge" style={{backgroundColor: 'rgb(51, 102, 255)', width: '13px', height: '13px'}}>
                  <svg width="5" height="5" viewBox="0 0 6 6">
                    <g fill="#fff" fillRule="nonzero">
                      <path d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z" transform="translate(-123 -375) translate(20 365) translate(98 5)">
                      </path>
                    </g>
                  </svg>
                </span>
              </li>
              <li className='profile-box md-visible'>  
                <button className='profile-btn'>
                  <div className='avatar-border'>
                    <div className="avatar-img" style={{backgroundImage:'url(https://k.kakaocdn.net/dn/uHsNf/btqZqHndSz3/XED9NNDnonM1qPQPSTskV1/img_110x110.jpg), url(https://static.wanted.co.kr/images/profile_default.png)'}}>  
                    </div>
                  </div>
                </button>
              </li>
              <li className='left-div md-visible'>
                <a href='#' className='dashboard-btn'>기업 서비스</a>
              </li>
              <li className='aside-visible-menu'>
                <button className="menu-btn" aria-label="menu-btn" type="button" data-gnb-kind="more">
                  <img src={ MenuIcon }></img>
                </button>
              </li>
            </ul>
          </aside>
        </nav>
      </div>

    );
  }
}

export default TopHeader;