import React, { useState, useRef, useEffect } from 'react';
import '../css/Slide.scss'

const SlideTest = () => {           
    const TOTAL_SLIDES = 8
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideRef = useRef([])

    // Next 버튼 클릭 시
    const NextSlide = () => {
      console.log('다음버튼 클릭')
      if (currentSlide >= TOTAL_SLIDES) {
        // 더 이상 넘어갈 슬라이드가 없으면
        setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
        // return;  // 클릭이 작동하지 않습니다.
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    };
    // Prev 버튼 클릭 시
    const PrevSlide = () => {
      console.log('이전버튼 클릭')
      if (currentSlide === 0) {
        setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
        // return;  // 클릭이 작동하지 않습니다.
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    };

    useEffect(() => {
      console.log(slideRef)
      console.log(slideRef.current)
      // slideRef.current.style.transition = 'all 0.4s ease-in-out';
      // slideRef.current.style.transform = 'translateX(-1084px)';
      // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
      // console.log(currentSlide)
    }, [currentSlide]);

    return (
      <div className='slide-content'>
        <div className='top-banner'>
          <div className='slick-slider'>
            <div className='slick-list'>
              <div className='slick-track' ref={slideRef}>                
                <div className='slide-item'>
                  <div className='slide-img'>
                    <img
                      src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg"
                      alt="개발자 되고싶은 분들!?"
                    />
                  </div>
                  <div className='slide-info'>
                    <h2>개발자 되고싶은 분들!?</h2>
                    <h3>프론트엔드 무료 교육과정 참여하기</h3>
                    <hr></hr>
                    <a href='#'>
                      <span className='go-btn-label'>바로가기
                        <span className='go-arrow'>
                          <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className='slide-item'>
                  <div className='slide-img'>
                    <img
                      src="https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg"
                      alt="2022년 달라지는 노동법령" className="Image_Image__image__Y2rLN"
                    />
                  </div>
                  <div className='slide-info'>
                    <h2>2022년 달라지는 노동법령</h2>
                    <h3>노무관리 쟁점 한 눈에 파악하기</h3>
                    <hr></hr>
                    <a href='#'>
                      <span className='go-btn-label'>바로가기
                        <span className='go-arrow'>
                          <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className='slide-item'>
                  <div className='slide-img'>
                    <img
                      src="https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg"
                      alt="성과를 내는 마케팅"
                    />
                  </div>
                  <div className='slide-info'>
                    <h2>성과를 내는 마케팅</h2>
                    <h3>실제 사례를 공개합니다!</h3>
                    <hr></hr>
                    <a href='#'>
                      <span className='go-btn-label'>바로가기
                        <span className='go-arrow'>
                          <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className='slide-item'>
                  <div className='slide-img'>
                    <img
                      src="https://static.wanted.co.kr/images/banners/1484/b2853456.jpg"
                      alt="성장하는 개발자가 되려면?" className="Image_Image__image__Y2rLN"
                    />
                  </div>
                  <div className='slide-info'>
                    <h2>성장하는 개발자가 되려면?</h2>
                    <h3>OOO 검색하지 말 것!</h3>
                    <hr></hr>
                    <a href='#'>
                      <span className='go-btn-label'>바로가기
                        <span className='go-arrow'>
                          <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className='slide-item'>
                  <div className='slide-img'>
                    <img
                      src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg"
                      alt="개발자 성장 비결 공개!" className="Image_Image__image__Y2rLN"
                    />
                  </div>
                  <div className='slide-info'>
                    <h2>개발자 성장 비결 공개!</h2>
                    <h3>Velog, 글 쓰는 개발자들의 이야기</h3>
                    <hr></hr>
                    <a href='#'>
                      <span className='go-btn-label'>바로가기
                        <span className='go-arrow'>
                          <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className='slide-item'>
                  <div className='slide-img'>
                    <img
                      src="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg"
                      alt="해, 커리어 EP 02 공개" className="Image_Image__image__Y2rLN"
                    />
                  </div>
                  <div className='slide-info'>
                    <h2>해, 커리어 EP 02 공개</h2>
                    <h3>마지막 관몬 2라운드의 승자는?</h3>
                    <hr></hr>
                    <a href='#'>
                      <span className='go-btn-label'>바로가기
                        <span className='go-arrow'>
                          <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className='slide-item'>
                  <div className='slide-img'>
                    <img
                      src="https://static.wanted.co.kr/images/banners/1488/baa54448.jpg"
                      alt="UX 디자이너의 커리어 설계" className="Image_Image__image__Y2rLN"
                    />
                  </div>
                  <div className='slide-info'>
                    <h2>UX 디자이너의 커리어 설계</h2>
                    <h3>브랜드 가치를 더하는 디자인</h3>
                    <hr></hr>
                    <a href='#'>
                      <span className='go-btn-label'>바로가기
                        <span className='go-arrow'>
                          <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className='slide-item'>
                  <div className='slide-img'>
                    <img
                      src="https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg"
                      alt="포트폴리오를 부탁해!" className="Image_Image__image__Y2rLN"
                    />
                  </div>
                  <div className='slide-info'>
                    <h2>포트폴리오를 부탁해!</h2>
                    <h3>디자이너의 포폴 살펴보기</h3>
                    <hr></hr>
                    <a href='#'>
                      <span className='go-btn-label'>바로가기
                        <span className='go-arrow'>
                          <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className='slide-item'>
                  <div className='slide-img'>
                    <img
                      src="https://static.wanted.co.kr/images/banners/1490/0b775035.jpg"
                      alt="마케팅 주니어를 찾습니다" className="Image_Image__image__Y2rLN"
                    />
                  </div>
                  <div className='slide-info'>
                    <h2>마케팅 주니어를 찾습니다</h2>
                    <h3>기업 과제 풀고 취업까지 한번에!</h3>
                    <hr></hr>
                    <a href='#'>
                      <span className='go-btn-label'>바로가기
                        <span className='go-arrow'>
                          <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>                
              </div>
            </div>
          </div>
          <button
            onClick={NextSlide}
            className='arrow-btn slide-btn--next'
          >
            <span>              
              <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
            </span>
          </button>
          <button            
            onClick={PrevSlide}
            className='arrow-btn slide-btn--prev'
          >
            <span>
              <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
            </span>
          </button>
        </div>
      </div>
    );
  
}

export default SlideTest;