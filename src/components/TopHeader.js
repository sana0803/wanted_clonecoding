import React, { Component } from 'react';
import '../css/Header.css'

class TopHeader extends Component {


  render() {
    return (
      <div className='header-wrap'> {/* 1060 설정할 div */}
        <nav>
          {/* 로고 */}
          <div>
            <div>
              <button>
                {/* <img src="https://static.wanted.co.kr/images/icon-menu.png" alt="hamberger menu" style="width:17px;height:14px;object-fit:contain" /> */}
              </button>
              <a href='' />
            </div>
          </div>
          <ul>
            gnb
          </ul>
          <aside>

          </aside>
        </nav>
      </div>

    );
  }
}

export default TopHeader;