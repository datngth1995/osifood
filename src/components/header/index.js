const Header = () => {
  return (
    <div className="mainHeader--height">
      <header className="mainHeader  mainHeader_temp03  " id="site-header">
        <div className="mainHeader-middle">
          <div className="container">
            <div className="flex-container-header">
              <div className="header-wrap-iconav header-wrap-action menu-gradient">
                <div className="header-action">
                  <div className="header-action-item header-action_menu">
                    <div className="header-action_text">
                      <a
                        className="header-action__link header-action_clicked"
                        href="javascript:void(0)"
                        id="site-menu-handle"
                        aria-label="Menu"
                        title="Menu"
                      >
                        <span className="box-icon">
                          <span className="hamburger-menu" aria-hidden="true">
                            <span className="bar"></span>
                          </span>
                          <span className="box-icon--close">
                            <svg viewBox="0 0 19 19" role="presentation">
                              <path
                                d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                        <span className="box-text">MENU</span>
                      </a>
                      <span className="box-triangle">
                        <svg viewBox="0 0 20 9" role="presentation">
                          <path
                            d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                            fill="#ffffff"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="header-action_dropdown">
                      <div className="header-dropdown_content">
                        <div
                          className="sitenav-content sitenav-menu menu-mobile"
                          id="siteNav-menu"
                        >
                          <div className="sitenav-content__title">
                            <a
                              href="https://osifood.vn"
                              className="navlogo"
                              aria-label="Trang chủ"
                              title="Trang chủ"
                            >
                              <span className="icon-home">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  // eslint-disable-next-line react/no-unknown-property
                                  //xmlns:xlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 512 512"
                                  style={{
                                    enableBackground: 'new 0 0 512 512',
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    <g>
                                      <path d="M506.555,208.064L263.859,30.367c-4.68-3.426-11.038-3.426-15.716,0L5.445,208.064 c-5.928,4.341-7.216,12.665-2.875,18.593s12.666,7.214,18.593,2.875L256,57.588l234.837,171.943c2.368,1.735,5.12,2.57,7.848,2.57 c4.096,0,8.138-1.885,10.744-5.445C513.771,220.729,512.483,212.405,506.555,208.064z"></path>
                                    </g>
                                  </g>
                                  <g>
                                    <g>
                                      <path d="M442.246,232.543c-7.346,0-13.303,5.956-13.303,13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52 s-66.52,29.842-66.52,66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303,5.956-13.303,13.303v225.053 c0,7.347,5.957,13.303,13.303,13.303h133.029c6.996,0,12.721-5.405,13.251-12.267c0.032-0.311,0.052-0.651,0.052-1.036v-128.89 c0-22.009,17.905-39.914,39.914-39.914s39.914,17.906,39.914,39.914v128.89c0,0.383,0.02,0.717,0.052,1.024 c0.524,6.867,6.251,12.279,13.251,12.279h133.029c7.347,0,13.303-5.956,13.303-13.303V245.847 C455.549,238.499,449.593,232.543,442.246,232.543z"></path>
                                    </g>
                                  </g>
                                </svg>
                              </span>
                            </a>
                            <button className="btnclose">
                              <svg viewBox="0 0 19 19" role="presentation">
                                <path
                                  d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div className="sitenav-content__block">
                            <div className="mobile-menu">
                              <div className="mobile-menu__inner mplus-menu vertical-navigation">
                                <ul className="mobile-menu__linklists">
                                  <li className="navi1">
                                    <a href="/">Đang khuyến mãi</a>
                                  </li>

                                  <li className="navi1 has-subnav nav-level1 104161061 active1 parent-open  ">
                                    <a
                                      className="link-parent"
                                      href="/collections/thuc-pham-tuoi-song"
                                    >
                                      Thực phẩm tươi sống
                                      <svg
                                        className="icon-nav-arrow"
                                        viewBox="0 0 8 12"
                                        role="presentation"
                                      >
                                        <path
                                          strokeWidth="2"
                                          d="M2 2l4 4-4 4"
                                          fill="none"
                                          strokeLinecap="square"
                                        ></path>
                                      </svg>
                                    </a>
                                    <ul className="submenu subnav-child">
                                      <li className="navi2 has-subnav nav-level2   checknav ">
                                        <a
                                          className="link-parent"
                                          href="/collections/thit-ca-hai-san"
                                        >
                                          Thịt - trứng - hải sản
                                          <svg
                                            className="icon-nav-arrow"
                                            viewBox="0 0 8 12"
                                            role="presentation"
                                          >
                                            <path
                                              strokeWidth="2"
                                              d="M2 2l4 4-4 4"
                                              fill="none"
                                              strokeLinecap="square"
                                            ></path>
                                          </svg>
                                        </a>
                                        <ul className="submenu subnav-child">
                                          <li className="navi3 ">
                                            <a href="/collections/thit">Thịt</a>
                                          </li>

                                          <li className="navi3 ">
                                            <a href="/collections/trung">
                                              Trứng
                                            </a>
                                          </li>
                                        </ul>
                                      </li>

                                      <li className="navi2 has-subnav nav-level2   checknav ">
                                        <a
                                          className="link-parent"
                                          href="/collections/rau-cu-qua"
                                        >
                                          Rau - củ - quả
                                          <svg
                                            className="icon-nav-arrow"
                                            viewBox="0 0 8 12"
                                            role="presentation"
                                          >
                                            <path
                                              strokeWidth="2"
                                              d="M2 2l4 4-4 4"
                                              fill="none"
                                              strokeLinecap="square"
                                            ></path>
                                          </svg>
                                        </a>
                                        <ul className="submenu subnav-child">
                                          <li className="navi3  active3 ">
                                            <a href="/">Rau</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Củ</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Quả</a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li className="navi2 ">
                                        <a href="/collections/trai-cay">
                                          Trái cây
                                        </a>
                                      </li>
                                      <li className="navi2 ">
                                        <a href="/collections/thuc-pham-che-bien">
                                          Thực phẩm chế biến
                                        </a>
                                      </li>
                                    </ul>
                                  </li>

                                  <li className="navi1 has-subnav nav-level1 104161062 active1 parent-open  ">
                                    <a
                                      className="link-parent"
                                      href="/collections/sua-uong-cac-loai"
                                    >
                                      Thực phẩm công nghệ
                                      <svg
                                        className="icon-nav-arrow"
                                        viewBox="0 0 8 12"
                                        role="presentation"
                                      >
                                        <path
                                          strokeWidth="2"
                                          d="M2 2l4 4-4 4"
                                          fill="none"
                                          strokeLinecap="square"
                                        ></path>
                                      </svg>
                                    </a>
                                    <ul className="submenu subnav-child">
                                      <li className="navi2 has-subnav nav-level2  active2   checknav ">
                                        <a className="link-parent" href="/">
                                          Nước giải khát
                                          <svg
                                            className="icon-nav-arrow"
                                            viewBox="0 0 8 12"
                                            role="presentation"
                                          >
                                            <path
                                              strokeWidth="2"
                                              d="M2 2l4 4-4 4"
                                              fill="none"
                                              strokeLinecap="square"
                                            ></path>
                                          </svg>
                                        </a>
                                        <ul className="submenu subnav-child">
                                          <li className="navi3  active3 ">
                                            <a href="/">Trà - Cafe</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Bột giải khát</a>
                                          </li>

                                          <li className="navi3 ">
                                            <a href="/collections/bia-nuoc-giai-khat">
                                              Bia - Nước Giải Khát
                                            </a>
                                          </li>
                                        </ul>
                                      </li>

                                      <li className="navi2 has-subnav nav-level2   checknav ">
                                        <a
                                          className="link-parent"
                                          href="/collections/sua-san-pham-tu-sua"
                                        >
                                          Sữa - sản phẩm từ sữa
                                          <svg
                                            className="icon-nav-arrow"
                                            viewBox="0 0 8 12"
                                            role="presentation"
                                          >
                                            <path
                                              strokeWidth="2"
                                              d="M2 2l4 4-4 4"
                                              fill="none"
                                              strokeLinecap="square"
                                            ></path>
                                          </svg>
                                        </a>
                                        <ul className="submenu subnav-child">
                                          <li className="navi3 ">
                                            <a href="/collections/sua-dac">
                                              Sữa đặc
                                            </a>
                                          </li>

                                          <li className="navi3 ">
                                            <a href="/collections/sua-uong-cac-loai">
                                              Sữa nước
                                            </a>
                                          </li>

                                          <li className="navi3 ">
                                            <a href="/collections/sua-bot-ngu-coc">
                                              Sữa bột - Ngũ cốc
                                            </a>
                                          </li>

                                          <li className="navi3 ">
                                            <a href="/collections/cac-san-pham-tu-sua-khac">
                                              Sản phẩm từ sữa khác
                                            </a>
                                          </li>
                                        </ul>
                                      </li>

                                      <li className="navi2 has-subnav nav-level2  active2   checknav ">
                                        <a className="link-parent" href="/">
                                          Thực phẩm
                                          <svg
                                            className="icon-nav-arrow"
                                            viewBox="0 0 8 12"
                                            role="presentation"
                                          >
                                            <path
                                              strokeWidth="2"
                                              d="M2 2l4 4-4 4"
                                              fill="none"
                                              strokeLinecap="square"
                                            ></path>
                                          </svg>
                                        </a>
                                        <ul className="submenu subnav-child">
                                          <li className="navi3 ">
                                            <a href="/collections/san-pham-dong-mat">
                                              Sản phẩm Đông - Mát
                                            </a>
                                          </li>

                                          <li className="navi3 ">
                                            <a href="/collections/do-hop-dong-goi">
                                              Đồ hộp đóng gói
                                            </a>
                                          </li>

                                          <li className="navi3 ">
                                            <a href="/collections/banh-banh-an-sang">
                                              Bánh - Bánh ăn sáng
                                            </a>
                                          </li>
                                        </ul>
                                      </li>

                                      <li className="navi2 has-subnav nav-level2   checknav ">
                                        <a
                                          className="link-parent"
                                          href="/collections/gia-vi"
                                        >
                                          Gia vị
                                          <svg
                                            className="icon-nav-arrow"
                                            viewBox="0 0 8 12"
                                            role="presentation"
                                          >
                                            <path
                                              strokeWidth="2"
                                              d="M2 2l4 4-4 4"
                                              fill="none"
                                              strokeLinecap="square"
                                            ></path>
                                          </svg>
                                        </a>
                                        <ul className="submenu subnav-child">
                                          <li className="navi3 ">
                                            <a href="/collections/nuoc-mam">
                                              Nước mắm
                                            </a>
                                          </li>

                                          <li className="navi3 ">
                                            <a href="/collections/nuoc-tuong">
                                              Nước tương
                                            </a>
                                          </li>

                                          <li className="navi3 ">
                                            <a href="/collections/dau-an">
                                              Dầu ăn
                                            </a>
                                          </li>

                                          <li className="navi3 ">
                                            <a href="/collections/gia-vi-che-ben">
                                              Gia vị chế biến
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li className="navi2 ">
                                        <a href="/collections/banh-keo-mut">
                                          Bánh - Kẹo - Mứt
                                        </a>
                                      </li>
                                      <li className="navi2 ">
                                        <a href="/collections/luong-thuc-1">
                                          Lương Thực 1
                                        </a>
                                      </li>
                                    </ul>
                                  </li>

                                  <li className="navi1 has-subnav nav-level1 104161129 active1 parent-open  ">
                                    <a className="link-parent" href="/">
                                      Hóa phẩm
                                      <svg
                                        className="icon-nav-arrow"
                                        viewBox="0 0 8 12"
                                        role="presentation"
                                      >
                                        <path
                                          strokeWidth="2"
                                          d="M2 2l4 4-4 4"
                                          fill="none"
                                          strokeLinecap="square"
                                        ></path>
                                      </svg>
                                    </a>
                                    <ul className="submenu subnav-child">
                                      <li className="navi2 has-subnav nav-level2  active2   checknav ">
                                        <a className="link-parent" href="/">
                                          Chăm sóc tóc
                                          <svg
                                            className="icon-nav-arrow"
                                            viewBox="0 0 8 12"
                                            role="presentation"
                                          >
                                            <path
                                              strokeWidth="2"
                                              d="M2 2l4 4-4 4"
                                              fill="none"
                                              strokeLinecap="square"
                                            ></path>
                                          </svg>
                                        </a>
                                        <ul className="submenu subnav-child">
                                          <li className="navi3  active3 ">
                                            <a href="/">Dầu gội</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Dầu xả</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">
                                              Dưỡng tóc - Gel/Wax tóc
                                            </a>
                                          </li>
                                        </ul>
                                      </li>

                                      <li className="navi2 has-subnav nav-level2  active2   checknav ">
                                        <a className="link-parent" href="/">
                                          Chăm sóc răng miệng
                                          <svg
                                            className="icon-nav-arrow"
                                            viewBox="0 0 8 12"
                                            role="presentation"
                                          >
                                            <path
                                              strokeWidth="2"
                                              d="M2 2l4 4-4 4"
                                              fill="none"
                                              strokeLinecap="square"
                                            ></path>
                                          </svg>
                                        </a>
                                        <ul className="submenu subnav-child">
                                          <li className="navi3  active3 ">
                                            <a href="/">Kem đánh răng</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Bàn chải đánh răng</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Nước súc miệng</a>
                                          </li>
                                        </ul>
                                      </li>

                                      <li className="navi2 has-subnav nav-level2  active2   checknav ">
                                        <a className="link-parent" href="/">
                                          Chăm sóc cơ thể
                                          <svg
                                            className="icon-nav-arrow"
                                            viewBox="0 0 8 12"
                                            role="presentation"
                                          >
                                            <path
                                              strokeWidth="2"
                                              d="M2 2l4 4-4 4"
                                              fill="none"
                                              strokeLinecap="square"
                                            ></path>
                                          </svg>
                                        </a>
                                        <ul className="submenu subnav-child">
                                          <li className="navi3  active3 ">
                                            <a href="/">Sữa tắm - Xà bông</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">
                                              Sữa rửa mặt - Dưỡng da
                                            </a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Khử mùi - Khử khuẩn</a>
                                          </li>
                                        </ul>
                                      </li>

                                      <li className="navi2 has-subnav nav-level2  active2   checknav ">
                                        <a className="link-parent" href="/">
                                          Chăm sóc nhà cửa
                                          <svg
                                            className="icon-nav-arrow"
                                            viewBox="0 0 8 12"
                                            role="presentation"
                                          >
                                            <path
                                              strokeWidth="2"
                                              d="M2 2l4 4-4 4"
                                              fill="none"
                                              strokeLinecap="square"
                                            ></path>
                                          </svg>
                                        </a>
                                        <ul className="submenu subnav-child">
                                          <li className="navi3  active3 ">
                                            <a href="/">Nước lau sàn</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Tẩy rửa</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Nước rửa chén</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Xịt phòng</a>
                                          </li>
                                        </ul>
                                      </li>

                                      <li className="navi2 has-subnav nav-level2  active2   checknav ">
                                        <a className="link-parent" href="/">
                                          Giấy
                                          <svg
                                            className="icon-nav-arrow"
                                            viewBox="0 0 8 12"
                                            role="presentation"
                                          >
                                            <path
                                              strokeWidth="2"
                                              d="M2 2l4 4-4 4"
                                              fill="none"
                                              strokeLinecap="square"
                                            ></path>
                                          </svg>
                                        </a>
                                        <ul className="submenu subnav-child">
                                          <li className="navi3  active3 ">
                                            <a href="/">Giấy các loại</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Băng vệ sinh</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Tã giấy</a>
                                          </li>
                                        </ul>
                                      </li>

                                      <li className="navi2 has-subnav nav-level2  active2   checknav ">
                                        <a className="link-parent" href="/">
                                          Giặt xả
                                          <svg
                                            className="icon-nav-arrow"
                                            viewBox="0 0 8 12"
                                            role="presentation"
                                          >
                                            <path
                                              strokeWidth="2"
                                              d="M2 2l4 4-4 4"
                                              fill="none"
                                              strokeLinecap="square"
                                            ></path>
                                          </svg>
                                        </a>
                                        <ul className="submenu subnav-child">
                                          <li className="navi3  active3 ">
                                            <a href="/">Bột giặt</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Nước xả</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Nước tẩy</a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>

                                  <li className="navi1 has-subnav nav-level1 104161136 active1 parent-open  ">
                                    <a className="link-parent" href="/">
                                      Đồ dùng
                                      <svg
                                        className="icon-nav-arrow"
                                        viewBox="0 0 8 12"
                                        role="presentation"
                                      >
                                        <path
                                          strokeWidth="2"
                                          d="M2 2l4 4-4 4"
                                          fill="none"
                                          strokeLinecap="square"
                                        ></path>
                                      </svg>
                                    </a>
                                    <ul className="submenu subnav-child">
                                      <li className="navi2 has-subnav nav-level2  active2   checknav ">
                                        <a className="link-parent" href="/">
                                          Đồ dùng nhà bếp
                                          <svg
                                            className="icon-nav-arrow"
                                            viewBox="0 0 8 12"
                                            role="presentation"
                                          >
                                            <path
                                              strokeWidth="2"
                                              d="M2 2l4 4-4 4"
                                              fill="none"
                                              strokeLinecap="square"
                                            ></path>
                                          </svg>
                                        </a>
                                        <ul className="submenu subnav-child">
                                          <li className="navi3  active3 ">
                                            <a href="/">Dụng cụ ăn uống</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Dụng cụ khác</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Hộp các loại</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Bảo quản thực phẩm</a>
                                          </li>
                                        </ul>
                                      </li>

                                      <li className="navi2 has-subnav nav-level2  active2   checknav ">
                                        <a className="link-parent" href="/">
                                          Đồ dùng cá nhân
                                          <svg
                                            className="icon-nav-arrow"
                                            viewBox="0 0 8 12"
                                            role="presentation"
                                          >
                                            <path
                                              strokeWidth="2"
                                              d="M2 2l4 4-4 4"
                                              fill="none"
                                              strokeLinecap="square"
                                            ></path>
                                          </svg>
                                        </a>
                                        <ul className="submenu subnav-child">
                                          <li className="navi3  active3 ">
                                            <a href="/">
                                              Đồ dùng cá nhân các loại
                                            </a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Vệ sinh cá nhân</a>
                                          </li>
                                        </ul>
                                      </li>

                                      <li className="navi2 has-subnav nav-level2  active2   checknav ">
                                        <a className="link-parent" href="/">
                                          Đồ dùng khác
                                          <svg
                                            className="icon-nav-arrow"
                                            viewBox="0 0 8 12"
                                            role="presentation"
                                          >
                                            <path
                                              strokeWidth="2"
                                              d="M2 2l4 4-4 4"
                                              fill="none"
                                              strokeLinecap="square"
                                            ></path>
                                          </svg>
                                        </a>
                                        <ul className="submenu subnav-child">
                                          <li className="navi3  active3 ">
                                            <a href="/">Vệ sinh nhà</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Đồ dùng giặt giũ</a>
                                          </li>

                                          <li className="navi3  active3 ">
                                            <a href="/">Văn phòng phẩm</a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>

                                  <li className="navi1 has-subnav nav-level1 104161140 active1 parent-open  ">
                                    <a className="link-parent" href="/">
                                      May mặc
                                      <svg
                                        className="icon-nav-arrow"
                                        viewBox="0 0 8 12"
                                        role="presentation"
                                      >
                                        <path
                                          strokeWidth="2"
                                          d="M2 2l4 4-4 4"
                                          fill="none"
                                          strokeLinecap="square"
                                        ></path>
                                      </svg>
                                    </a>
                                    <ul className="submenu subnav-child">
                                      <li className="navi2  active2 ">
                                        <a href="/">Khăn</a>
                                      </li>
                                      <li className="navi2  active2 ">
                                        <a href="/">Khẩu trang</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                                <div className="mobile-menu__help">
                                  <p className="help-title">Bạn cần hỗ trợ</p>
                                  <div className="help-item">
                                    <a
                                      className="help-item--link"
                                      href="tel:0919439489"
                                      rel="nofollow"
                                    >
                                      <svg
                                        viewBox="0 0 24 24"
                                        role="presentation"
                                      >
                                        <g
                                          strokeWidth="2"
                                          fill="none"
                                          fillRule="evenodd"
                                          strokeLinecap="square"
                                        >
                                          <path
                                            d="M17 15l-3 3-8-8 3-3-5-5-3 3c0 9.941 8.059 18 18 18l3-3-5-5z"
                                            stroke="#252a2b"
                                          ></path>
                                          <path
                                            d="M14 1c4.971 0 9 4.029 9 9m-9-5c2.761 0 5 2.239 5 5"
                                            stroke="#008848"
                                          ></path>
                                        </g>
                                      </svg>
                                      0919.439.489
                                    </a>
                                  </div>
                                  <div className="help-item">
                                    <a
                                      className="help-item--link"
                                      href="mailto:osifoodos99@gmail.com"
                                      rel="nofollow"
                                    >
                                      <svg
                                        viewBox="0 0 22 22"
                                        role="presentation"
                                      >
                                        <g fill="none" fillRule="evenodd">
                                          <path
                                            stroke="#252a2b"
                                            d="M.916667 10.08333367l3.66666667-2.65833334v4.65849997zm20.1666667 0L17.416667 7.42500033v4.65849997z"
                                          ></path>
                                          <path
                                            stroke="#252a2b"
                                            strokeWidth="2"
                                            d="M4.58333367 7.42500033L.916667 10.08333367V21.0833337h20.1666667V10.08333367L17.416667 7.42500033"
                                          ></path>
                                          <path
                                            stroke="#252a2b"
                                            strokeWidth="2"
                                            d="M4.58333367 12.1000003V.916667H17.416667v11.1833333m-16.5-2.01666663L21.0833337 21.0833337m0-11.00000003L11.0000003 15.5833337"
                                          ></path>
                                          <path
                                            d="M8.25000033 5.50000033h5.49999997M8.25000033 9.166667h5.49999997"
                                            stroke="#008848"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                          ></path>
                                        </g>
                                      </svg>
                                      osifoodos99@gmail.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-wrap-logo logo-gradient">
                <div
                  className="wrap-logo"
                  itemScope=""
                  itemType="http://schema.org/Organization"
                >
                  <a href="https://osifood.vn" itemProp="url">
                    <img
                      itemProp="logo"
                      src="//theme.hstatic.net/200000459373/1000812576/14/logo.png?v=286"
                      alt="OsiFood"
                      className="img-responsive logoimg "
                    />
                  </a>
                  <h1 style={{ display: 'none' }}>
                    <a href="https://osifood.vn" itemProp="url">
                      OsiFood
                    </a>
                  </h1>
                </div>
              </div>
              <div className="header-wrap-search search-gradient">
                <div className="header-search">
                  <div className="search-box wpo-wrapper-search">
                    <form
                      action="/search"
                      className="searchform-product searchform-categoris ultimate-search"
                    >
                      <div className="wpo-search-inner">
                        <input type="hidden" name="type" value="product" />
                        <input
                          required
                          id="inputSearchAuto-3"
                          className="input-search"
                          name="q"
                          maxLength="40"
                          autoComplete="off"
                          type="text"
                          size="20"
                          placeholder="Tìm kiếm sản phẩm..."
                        />
                      </div>
                      <button type="submit" className="btn-search btn">
                        <svg
                          className="svg search"
                          height="30px"
                          width="30px"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
                        </svg>
                      </button>
                    </form>
                    <div
                      id="ajaxSearchResults-3"
                      className="smart-search-wrapper ajaxSearchResults"
                      style={{ display: 'none' }}
                    >
                      <div className="resultsContent"></div>
                      <div className="search-suggest">
                        <p>Gợi ý cho bạn:</p>
                        <ul></ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-wrap-action action-gradient">
                <div className="header-action">
                  <div className="header-action-item header-action_locale locationContainer">
                    <div className="header-action_text ">
                      <a
                        className="header-action__link header-action_clicked"
                        href="javascript:void(0);"
                        id="site-locale-handle"
                        aria-label="Khu vực mua hàng"
                        title="Khu vực mua hàng"
                      >
                        <span className="box-text ">
                          <span className="txtnw">
                            Giao hoặc đến lấy tại{' '}
                            <i
                              className="fa fa-angle-down"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="txtbl shiptoHere">
                            <span className="txt-overflow ">
                              <span style={{ opacity: 0 }}>
                                288 Phan Văn Trị, Phường 11, Quận Bình Thạnh
                              </span>
                            </span>
                          </span>
                        </span>
                      </a>
                      <span className="box-triangle">
                        <svg viewBox="0 0 20 9" role="presentation">
                          <path
                            d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                            fill="#ffffff"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="header-action_dropdown">
                      <div className="header-dropdown_content">
                        <div className="sitenav-content sitenav-locate">
                          <button className="btnclose">
                            <svg viewBox="0 0 19 19" role="presentation">
                              <path
                                d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                          <div className="sitenav-content__title">
                            <p className="txt-title">Khu vực mua hàng</p>
                          </div>
                          <div className="sitenav-content__block sitenav-boxscroll">
                            <div className="boxaddress chooseLocation">
                              Giao hoặc đến lấy tại:
                              <span
                                data-id="1233389"
                                data-province="Hồ Chí Minh"
                              >
                                288 Phan Văn Trị, Phường 11, Quận Bình Thạnh
                              </span>
                            </div>
                            <div className="boxprovince">
                              <div className="textprov">
                                Chọn cửa hàng gần bạn nhất để tối ưu chi phí
                                giao hàng. Hoặc đến lấy hàng
                              </div>
                              <ul className="listprov">
                                <li
                                  data-id="1233389"
                                  data-district="Quận Bình Thạnh"
                                  data-province="Hồ Chí Minh"
                                >
                                  <span className="icmap">
                                    <svg
                                      fill="#008848"
                                      xmlns="http://www.w3.org/2000/svg"
                                      //xmlns:xlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 512 512"
                                      style={{
                                        enableBackground: 'new 0 0 512 512',
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <g>
                                          <path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257 c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22 C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34 C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180 C406.1,207.121,398.689,233.688,384.866,256.818z" />
                                        </g>
                                      </g>
                                      <g>
                                        <g>
                                          <path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2 C316.1,212.683,289.784,240.2,256,240.2z" />
                                        </g>
                                      </g>
                                    </svg>
                                  </span>
                                  <span className="address-name">
                                    OsiFood Bình Hòa
                                  </span>
                                  <span style={{ display: 'none' }}> -</span>
                                  288 Phan Văn Trị, Phường 11, Quận Bình Thạnh
                                </li>
                                <li
                                  data-id="1239543"
                                  data-district="Quận 4"
                                  data-province="Hồ Chí Minh"
                                >
                                  <span className="icmap">
                                    <svg
                                      fill="#008848"
                                      xmlns="http://www.w3.org/2000/svg"
                                      //xmlns:xlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 512 512"
                                      style={{
                                        enableBackground: 'new 0 0 512 512',
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <g>
                                          <path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257 c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22 C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34 C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180 C406.1,207.121,398.689,233.688,384.866,256.818z" />
                                        </g>
                                      </g>
                                      <g>
                                        <g>
                                          <path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2 C316.1,212.683,289.784,240.2,256,240.2z" />
                                        </g>
                                      </g>
                                    </svg>
                                  </span>
                                  <span className="address-name">
                                    OsiFood Nguyễn Khoái
                                  </span>
                                  <span style={{ display: 'none' }}>-</span>
                                  84 - 86 Nguyễn Khoái, Phường 02, Quận 4
                                </li>
                                <li
                                  data-id="1239545"
                                  data-district="Thành phố Thủ Đức"
                                  data-province="Hồ Chí Minh"
                                >
                                  <span className="icmap">
                                    <svg
                                      fill="#008848"
                                      xmlns="http://www.w3.org/2000/svg"
                                      //xmlns:xlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 512 512"
                                      style={{
                                        enableBackground: 'new 0 0 512 512',
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <g>
                                          <path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257 c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22 C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34 C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180 C406.1,207.121,398.689,233.688,384.866,256.818z" />
                                        </g>
                                      </g>
                                      <g>
                                        <g>
                                          <path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2 C316.1,212.683,289.784,240.2,256,240.2z" />
                                        </g>
                                      </g>
                                    </svg>
                                  </span>
                                  <span className="address-name">
                                    OsiFood Sky9
                                  </span>
                                  <span style={{ display: 'none' }}> -</span>
                                  S010-011 block CT1, chung cư Sky 09, đường số
                                  1, Khu phố 2, Phường Phú Hữu, Thành phố Thủ
                                  Đức
                                </li>
                                <li
                                  data-id="1291979"
                                  data-district="Quận 11"
                                  data-province="Hồ Chí Minh"
                                >
                                  <span className="icmap">
                                    <svg
                                      fill="#008848"
                                      xmlns="http://www.w3.org/2000/svg"
                                      //xmlns:xlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 512 512"
                                      style={{
                                        enableBackground: 'new 0 0 512 512',
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <g>
                                          <path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257 c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22 C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34 C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180 C406.1,207.121,398.689,233.688,384.866,256.818z" />
                                        </g>
                                      </g>
                                      <g>
                                        <g>
                                          <path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2 C316.1,212.683,289.784,240.2,256,240.2z" />
                                        </g>
                                      </g>
                                    </svg>
                                  </span>
                                  <span className="address-name">
                                    OsiFood Ba Tháng Hai
                                  </span>
                                  <span style={{ display: 'none' }}>-</span>
                                  1380-1382-1384 Đường 3/2 Phường 02 Quận 11,
                                  Phường 02, Quận 11
                                </li>
                                <li
                                  data-id="1298831"
                                  data-district="Quận Bình Thạnh"
                                  data-province="Hồ Chí Minh"
                                >
                                  <span className="icmap">
                                    <svg
                                      fill="#008848"
                                      xmlns="http://www.w3.org/2000/svg"
                                      //xmlns:xlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 512 512"
                                      style={{
                                        enableBackground: 'new 0 0 512 512',
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <g>
                                          <path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257 c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22 C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34 C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180 C406.1,207.121,398.689,233.688,384.866,256.818z" />
                                        </g>
                                      </g>
                                      <g>
                                        <g>
                                          <path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2 C316.1,212.683,289.784,240.2,256,240.2z" />
                                        </g>
                                      </g>
                                    </svg>
                                  </span>
                                  <span className="address-name">
                                    OsiFood 828A XVNT
                                  </span>
                                  <span style={{ display: 'none' }}>-</span>
                                  828A Xô Viết Nghệ Tĩnh Phường 25 Quận Bình
                                  Thạnh, Phường 25, Quận Bình Thạnh
                                </li>
                                <li
                                  data-id="1307551"
                                  data-district="Thành phố Thủ Đức"
                                  data-province="Hồ Chí Minh"
                                >
                                  <span className="icmap">
                                    <svg
                                      fill="#008848"
                                      xmlns="http://www.w3.org/2000/svg"
                                      //xmlns:xlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 512 512"
                                      style={{
                                        enableBackground: 'new 0 0 512 512',
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <g>
                                          <path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257 c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22 C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34 C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180 C406.1,207.121,398.689,233.688,384.866,256.818z" />
                                        </g>
                                      </g>
                                      <g>
                                        <g>
                                          <path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2 C316.1,212.683,289.784,240.2,256,240.2z" />
                                        </g>
                                      </g>
                                    </svg>
                                  </span>
                                  <span className="address-name">
                                    OsiFood Phước Long
                                  </span>
                                  <span style={{ display: 'none' }}>-</span>
                                  114 Tây Hòa, Phường Phước Long A ,TP Thủ Đức,
                                  Phường Phước Long A, Thành phố Thủ Đức
                                </li>
                                <li
                                  data-id="1334113"
                                  data-district="Thành phố Thủ Đức"
                                  data-province="Hồ Chí Minh"
                                >
                                  <span className="icmap">
                                    <svg
                                      fill="#008848"
                                      xmlns="http://www.w3.org/2000/svg"
                                      //xmlns:xlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 512 512"
                                      style={{
                                        enableBackground: 'new 0 0 512 512',
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <g>
                                          <path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257 c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22 C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34 C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180 C406.1,207.121,398.689,233.688,384.866,256.818z" />
                                        </g>
                                      </g>
                                      <g>
                                        <g>
                                          <path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2 C316.1,212.683,289.784,240.2,256,240.2z" />
                                        </g>
                                      </g>
                                    </svg>
                                  </span>
                                  <span className="address-name">
                                    OsiFood Opal Riverside
                                  </span>
                                  <span style={{ display: 'none' }}>-</span>
                                  SH10 Chung cư Opal Riverside Đường số 10
                                  Phường Hiệp Bình Chánh TP Thủ Đức, Phường Hiệp
                                  Bình Chánh, Thành phố Thủ Đức
                                </li>
                                <li
                                  data-id="1382867"
                                  data-district="Thành phố Thủ Đức"
                                  data-province="Hồ Chí Minh"
                                >
                                  <span className="icmap">
                                    <svg
                                      fill="#008848"
                                      xmlns="http://www.w3.org/2000/svg"
                                      //xmlns:xlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 512 512"
                                      style={{
                                        enableBackground: 'new 0 0 512 512',
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <g>
                                          <path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257 c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22 C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34 C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180 C406.1,207.121,398.689,233.688,384.866,256.818z" />
                                        </g>
                                      </g>
                                      <g>
                                        <g>
                                          <path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2 C316.1,212.683,289.784,240.2,256,240.2z" />
                                        </g>
                                      </g>
                                    </svg>
                                  </span>
                                  <span className="address-name">
                                    OsiFood Nguyễn Xiển
                                  </span>
                                  <span style={{ display: 'none' }}>-</span>
                                  458-458A Nguyễn Xiển, Phường Long Thạnh Mỹ,
                                  Thành phố Thủ Đức
                                </li>
                                <li
                                  data-id="1416343"
                                  data-district="Thành phố Thủ Đức"
                                  data-province="Hồ Chí Minh"
                                >
                                  <span className="icmap">
                                    <svg
                                      fill="#008848"
                                      xmlns="http://www.w3.org/2000/svg"
                                      //xmlns:xlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 512 512"
                                      style={{
                                        enableBackground: 'new 0 0 512 512',
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <g>
                                          <path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257 c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22 C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34 C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180 C406.1,207.121,398.689,233.688,384.866,256.818z" />
                                        </g>
                                      </g>
                                      <g>
                                        <g>
                                          <path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2 C316.1,212.683,289.784,240.2,256,240.2z" />
                                        </g>
                                      </g>
                                    </svg>
                                  </span>
                                  <span className="address-name">
                                    OsiFood Nguyễn Xiển
                                  </span>
                                  <span style={{ display: 'none' }}>-</span>
                                  458-458A Nguyễn Xiển, Phường Long Trường,
                                  Thành phố Thủ Đức
                                </li>
                                <li
                                  data-id="1416351"
                                  data-district="Thành phố Thủ Đức"
                                  data-province="Hồ Chí Minh"
                                >
                                  <span className="icmap">
                                    <svg
                                      fill="#008848"
                                      xmlns="http://www.w3.org/2000/svg"
                                      //xmlns:xlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 512 512"
                                      style={{
                                        enableBackground: 'new 0 0 512 512',
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <g>
                                          <path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257 c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22 C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34 C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180 C406.1,207.121,398.689,233.688,384.866,256.818z" />
                                        </g>
                                      </g>
                                      <g>
                                        <g>
                                          <path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2 C316.1,212.683,289.784,240.2,256,240.2z" />
                                        </g>
                                      </g>
                                    </svg>
                                  </span>
                                  <span className="address-name">
                                    OsiFood Phước Hiệp
                                  </span>
                                  <span style={{ display: 'none' }}>-</span>
                                  312 Lã Xuân Oai Khu phố Phước Hiệp, Phường
                                  Long Trường, Thành phố Thủ Đức
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-action-item header-action_search">
                    <div className="header-action_text">
                      <a
                        className="header-action__link "
                        href="javascript:void(0)"
                        id="site-search-handle"
                        aria-label="Tìm kiếm"
                        title="Tìm kiếm"
                      >
                        <span className="box-icon">
                          <svg
                            className="svg-ico-search"
                            xmlns="http://www.w3.org/2000/svg"
                            //xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 451 451"
                            style={{ enableBackground: 'new 0 0 451 451' }}
                            xmlSpace="preserve"
                          >
                            <g>
                              <path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"></path>
                            </g>
                          </svg>
                          <span className="box-icon--close">
                            <svg viewBox="0 0 19 19" role="presentation">
                              <path
                                d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="header-action-item header-action_account">
                    <div className="header-action_text">
                      <a
                        className="header-action__link   header-action_clicked "
                        href="javascript:void(0);"
                        id="site-account-handle"
                        aria-label="Tài khoản"
                        title="Tài khoản"
                      >
                        <span className="box-icon">
                          <svg
                            className="svg-ico-account"
                            viewBox="0 0 1024 1024"
                          >
                            <path
                              className="path1"
                              d="M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z"
                            ></path>
                            <path
                              className="path2"
                              d="M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z"
                            ></path>
                          </svg>
                          <span className="box-icon--close">
                            <svg viewBox="0 0 19 19" role="presentation">
                              <path
                                d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                        <span className="box-text">
                          <span className="txtbl">
                            Tài khoản
                            <br />
                          </span>
                        </span>
                      </a>
                      <span className="box-triangle">
                        <svg viewBox="0 0 20 9" role="presentation">
                          <path
                            d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                            fill="#ffffff"
                          ></path>
                        </svg>
                      </span>
                    </div>

                    <div className="header-action_dropdown ">
                      <div className="header-dropdown_content">
                        <div
                          className="sitenav-content site_account sitenav-account "
                          id="siteNav-account"
                        >
                          <button className="btnclose">
                            <svg viewBox="0 0 19 19" role="presentation">
                              <path
                                d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                          <div className="site_account_panel_list">
                            <div
                              id="header-login-panel"
                              className="site_account_panel site_account_default is-selected"
                            >
                              <div className="site_account_header">
                                <p className="txt-title ">
                                  Đăng nhập tài khoản
                                </p>
                                <p className="txt-small">
                                  Nhập email và mật khẩu của bạn:
                                </p>
                              </div>
                              <div className="site_account_inner">
                                <form
                                  acceptCharset="UTF-8"
                                  action="/account/login"
                                  id="customer_login"
                                  method="post"
                                >
                                  <input
                                    name="form_type"
                                    type="hidden"
                                    value="customer_login"
                                  />
                                  <input name="utf8" type="hidden" value="✓" />

                                  <div className="form__input-wrapper form__input-wrapper--labelled">
                                    <input
                                      type="email"
                                      id="login-customer[email]"
                                      className="form__field form__field--text"
                                      name="customer[email]"
                                      required="required"
                                    />
                                    <label
                                      htmlFor="login-customer[email]"
                                      className="form__floating-label"
                                    >
                                      Email
                                    </label>
                                  </div>
                                  <div className="form__input-wrapper form__input-wrapper--labelled">
                                    <input
                                      type="password"
                                      id="login-customer[password]"
                                      className="form__field form__field--text"
                                      name="customer[password]"
                                      required="required"
                                      autoComplete="current-password"
                                    />
                                    <label
                                      htmlFor="login-customer[password]"
                                      className="form__floating-label"
                                    >
                                      Mật khẩu
                                    </label>

                                    <div className="sitebox-recaptcha">
                                      This site is protected by reCAPTCHA and
                                      the Google
                                      <a
                                        href="https://policies.google.com/privacy"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        Privacy Policy
                                      </a>
                                      and{' '}
                                      <a
                                        href="https://policies.google.com/terms"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        Terms of Service
                                      </a>{' '}
                                      apply.
                                    </div>
                                  </div>
                                  <button
                                    type="submit"
                                    className="form__submit button dark"
                                    id="form_submit-login"
                                  >
                                    Đăng nhập
                                  </button>

                                  <input
                                    id="03ae0008699e4f0faafbff2c71355944"
                                    name="g-recaptcha-response"
                                    type="hidden"
                                  />
                                </form>

                                <div className="site_account_secondary-action">
                                  <p>
                                    Khách hàng mới?
                                    <a
                                      className="link"
                                      href="/account/register"
                                    >
                                      Tạo tài khoản
                                    </a>
                                  </p>
                                  <p>
                                    Quên mật khẩu?
                                    <button
                                      aria-controls="header-recover-panel"
                                      className="js-link link"
                                    >
                                      Khôi phục mật khẩu
                                    </button>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              id="header-recover-panel"
                              className="site_account_panel site_account_sliding"
                            >
                              <div className="site_account_header">
                                <p className="txt-title ">Khôi phục mật khẩu</p>
                                <p className="txt-small">Nhập email của bạn:</p>
                              </div>
                              <div className="site_account_inner">
                                <form
                                  acceptCharset="UTF-8"
                                  action="/account/recover"
                                  method="post"
                                >
                                  <input
                                    name="form_type"
                                    type="hidden"
                                    value="recover_customer_password"
                                  />
                                  <input name="utf8" type="hidden" value="✓" />

                                  <div className="form__input-wrapper form__input-wrapper--labelled">
                                    <input
                                      type="email"
                                      id="recover-customer[recover_email]"
                                      className="form__field form__field--text"
                                      name="email"
                                      required="required"
                                    />
                                    <label
                                      htmlFor="recover-customer[recover_email]"
                                      className="form__floating-label"
                                    >
                                      Email
                                    </label>
                                    <div className="sitebox-recaptcha">
                                      This site is protected by reCAPTCHA and
                                      the Google
                                      <a
                                        href="https://policies.google.com/privacy"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        Privacy Policy
                                      </a>
                                      and{' '}
                                      <a
                                        href="https://policies.google.com/terms"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        Terms of Service
                                      </a>{' '}
                                      apply.
                                    </div>
                                  </div>
                                  <button
                                    type="submit"
                                    className="form__submit button dark"
                                    id="form_submit-recover"
                                  >
                                    Khôi phục
                                  </button>

                                  <input
                                    id="1e3fe4494a714ec5af378e003734bcc3"
                                    name="g-recaptcha-response"
                                    type="hidden"
                                  />
                                </form>
                                <div className="site_account_secondary-action">
                                  <p>
                                    Bạn đã nhớ mật khẩu?
                                    <button
                                      aria-controls="header-login-panel"
                                      className="js-link link"
                                    >
                                      Trở về đăng nhập
                                    </button>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-action-item header-action_cart">
                    <div className="header-action_text">
                      <a
                        className="header-action__link  header-action_clicked "
                        href="javascript:void(0);"
                        id="site-cart-handle"
                        aria-label="Giỏ hàng"
                        title="Giỏ hàng"
                      >
                        <span className="box-icon">
                          <svg
                            className="svg-ico-cart"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -13 456.75885 456"
                            width="456pt"
                          >
                            <path d="m150.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"></path>
                            <path d="m446.855469 94.035156h-353.101563l-7.199218-40.300781c-4.4375-24.808594-23.882813-44.214844-48.699219-48.601563l-26.101563-4.597656c-5.441406-.96875-10.632812 2.660156-11.601562 8.097656-.964844 5.441407 2.660156 10.632813 8.101562 11.601563l26.199219 4.597656c16.53125 2.929688 29.472656 15.871094 32.402344 32.402344l35.398437 199.699219c4.179688 23.894531 24.941406 41.324218 49.199219 41.300781h210c22.0625.066406 41.546875-14.375 47.902344-35.5l47-155.800781c.871093-3.039063.320312-6.3125-1.5-8.898438-1.902344-2.503906-4.859375-3.980468-8-4zm-56.601563 162.796875c-3.773437 12.6875-15.464844 21.367188-28.699218 21.300781h-210c-14.566407.039063-27.035157-10.441406-29.5-24.800781l-24.699219-139.398437h336.097656zm0 0"></path>
                            <path d="m360.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"></path>
                          </svg>
                          <span className="box-icon--close">
                            <svg viewBox="0 0 19 19" role="presentation">
                              <path
                                d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          <span className="count-holder">
                            <span className="count">0</span>
                          </span>
                        </span>
                        <span className="box-text">
                          <span className="txtbl">Giỏ hàng</span>
                        </span>
                      </a>
                      <span className="box-triangle">
                        <svg viewBox="0 0 20 9" role="presentation">
                          <path
                            d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                            fill="#ffffff"
                          ></path>
                        </svg>
                      </span>
                    </div>

                    <div className="header-action_dropdown">
                      <div className="header-dropdown_content">
                        <div className="sitenav-content sitenav-cart ">
                          <div className="sitenav-content__title">
                            <p className="txt-title">Giỏ hàng</p>
                          </div>

                          <div className="sitenav-content__block cart-view">
                            <div className="cart-view-scroll sitenav-boxscroll">
                              <div className="table-clone-cart">
                                <div className="mini-cart__item hidden">
                                  <div className="mini-cart__left">
                                    <a className="mnc-link" href="" title="">
                                      <img src="" alt="" />
                                    </a>
                                  </div>
                                  <div className="mini-cart__right">
                                    <p className="mini-cart__title">
                                      <a
                                        className="mnc-title mnc-link"
                                        href=""
                                        title=""
                                      ></a>
                                      <span className="mnc-variant"> </span>
                                    </p>
                                    <div className="mini-cart__quantity">
                                      <div className="quantity-selector">
                                        <button className="qty-btn mnc-minus">
                                          <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <rect
                                              height="1"
                                              width="18"
                                              y="9"
                                              x="1"
                                            ></rect>
                                          </svg>
                                        </button>
                                        <input
                                          className="qty-value mnc-value"
                                          type="text"
                                          readOnly=""
                                          name="mnc-quantity"
                                          value=""
                                        />
                                        <button className="qty-btn mnc-plus">
                                          <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <rect
                                              x="9"
                                              y="1"
                                              width="1"
                                              height="17"
                                            ></rect>
                                            <rect
                                              x="1"
                                              y="9"
                                              width="17"
                                              height="1"
                                            ></rect>
                                          </svg>
                                        </button>
                                      </div>
                                      <div className="mini-cart__price">
                                        <span className="mnc-price">0₫</span>{' '}
                                      </div>
                                    </div>
                                    <div className="mini-cart__remove"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="cart-view-render">
                                <div className="mini-cart__empty">
                                  <div>
                                    <div className="svgico-mini-cart">
                                      <svg
                                        width="81"
                                        height="70"
                                        viewBox="0 0 81 70"
                                      >
                                        <g
                                          transform="translate(0 2)"
                                          strokeWidth="4"
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <circle
                                            strokeLinecap="square"
                                            cx="34"
                                            cy="60"
                                            r="6"
                                          ></circle>
                                          <circle
                                            strokeLinecap="square"
                                            cx="67"
                                            cy="60"
                                            r="6"
                                          ></circle>
                                          <path d="M22.9360352 15h54.8070373l-4.3391876 30H30.3387146L19.6676025 0H.99560547"></path>
                                        </g>
                                      </svg>
                                    </div>
                                    Hiện chưa có sản phẩm
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="cart-view-line"></div>
                            <div className="cart-view-total">
                              <div className="mini-cart">
                                <div className="mini-cart__total">
                                  <div className="mnc-total mnc-total-text">
                                    TỔNG TIỀN:
                                  </div>
                                  <div
                                    className="mnc-total mnc-total-price"
                                    id="total-view-cart"
                                  >
                                    0₫
                                  </div>
                                </div>

                                <div className="mini-cart__button">
                                  <div className="mnc-cta">
                                    <a
                                      href="/cart"
                                      className="linktocart button btnred"
                                    >
                                      Xem giỏ hàng
                                    </a>
                                  </div>
                                  <div className="mnc-cta">
                                    <a
                                      href="/cart"
                                      className="linktocheckout button btnred"
                                    >
                                      Thanh toán
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-index-groupmenu">
          <div className="container">
            <div className="flexbox-categories">
              <a
                className="cate-home"
                href="https://osifood.vn"
                aria-label="OsiFood"
                title="OsiFood"
              >
                <span className="box-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    //xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: 'new 0 0 512 512' }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path d="M506.555,208.064L263.859,30.367c-4.68-3.426-11.038-3.426-15.716,0L5.445,208.064 c-5.928,4.341-7.216,12.665-2.875,18.593s12.666,7.214,18.593,2.875L256,57.588l234.837,171.943c2.368,1.735,5.12,2.57,7.848,2.57 c4.096,0,8.138-1.885,10.744-5.445C513.771,220.729,512.483,212.405,506.555,208.064z"></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M442.246,232.543c-7.346,0-13.303,5.956-13.303,13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52 s-66.52,29.842-66.52,66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303,5.956-13.303,13.303v225.053 c0,7.347,5.957,13.303,13.303,13.303h133.029c6.996,0,12.721-5.405,13.251-12.267c0.032-0.311,0.052-0.651,0.052-1.036v-128.89 c0-22.009,17.905-39.914,39.914-39.914s39.914,17.906,39.914,39.914v128.89c0,0.383,0.02,0.717,0.052,1.024 c0.524,6.867,6.251,12.279,13.251,12.279h133.029c7.347,0,13.303-5.956,13.303-13.303V245.847 C455.549,238.499,449.593,232.543,442.246,232.543z"></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
              <ul className="menulist-cate">
                <li className="cate-item  active ">
                  <a href="/" title="Trang chủ">
                    {' '}
                    Trang chủ{' '}
                  </a>
                </li>
                <li className="cate-item ">
                  <a href="/pages/gioi-thieu" title="Giới thiệu">
                    {' '}
                    Giới thiệu{' '}
                  </a>
                </li>
                <li className="cate-item ">
                  <a href="/collections/all" title="Sản phẩm">
                    {' '}
                    Sản phẩm{' '}
                  </a>
                </li>
                <li className="cate-item ">
                  <a href="/blogs/tat-ca-bai-viet" title="Bài viết">
                    {' '}
                    Bài viết{' '}
                  </a>
                </li>
                <li className="cate-item ">
                  <a href="/pages/lien-he" title="Liên hệ">
                    {' '}
                    Liên hệ{' '}
                  </a>
                </li>
                <li className="cate-item ">
                  <a href="/pages/osifood-tuyen-dung" title="Tuyển dụng">
                    {' '}
                    Tuyển dụng{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
