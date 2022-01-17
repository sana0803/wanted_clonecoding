import React, { Component } from 'react';
import '../css/Header.scss'

class TopHeader extends Component {


  render() {
    return (
      <div className='header-wrap'> {/* 1060 설정할 div */}
        <nav>
          {/* 로고 */}
          <div className='nav-first'>
            <div>
              <button>
                {/* <img src="https://static.wanted.co.kr/images/icon-menu.png" alt="hamberger menu" style="width:17px;height:14px;object-fit:contain" /> */}
              </button>
              <a href='#'>원티드</a>
            </div>
          </div>
          <ul className='nav-second'>
            <li>
              <a href='#'>채용</a>
            </li>
            <li>
              <a href='#'>이벤트</a>
            </li>
            <li>
              <a href='#'>직군별 연봉</a>
            </li>
            <li>
              <a href='#'>이력서</a>
            </li>
            <li>
              <a href='#'>커뮤니티
                <em>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11">
                    <g fill="none" fill-rule="evenodd" font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" font-size="9" font-weight="500">
                      <g fill="#36F">
                        <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"><tspan x="0" y="8">New</tspan>
                        </text>
                      </g>
                    </g>
                  </svg>
                </em>
              </a>
            </li>
            <li>
              <a href='#'>프리랜서</a>
            </li>
            <li>
              <a href='#'>AI 합격예측
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11">
                    <g fill="none" fill-rule="evenodd" font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" font-size="9" font-weight="500">
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
            오른쪽 들어갈거
          </aside>
        </nav>
      </div>

    );
  }
}

export default TopHeader;