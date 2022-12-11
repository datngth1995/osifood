import Product from '../../components/product';
const Products = [
  {
    imageMedium:
      '//product.hstatic.net/200000459373/product/tai_xuong__9__e20bf99465594802829fb0178e95d85d_medium.jpg',
    imageLarge:
      '//product.hstatic.net/200000459373/product/tai_xuong__9__e20bf99465594802829fb0178e95d85d_large.jpg',
    title: 'Cá hú tươi 500g',
    price: '32,800đ',
    href: '/products/ca-hu-tuoi-song-bv-500g',
  },
  {
    imageMedium:
      '//product.hstatic.net/200000459373/product/untitled_design__5__f8e03b03d3e84f33858dd2058851d090_medium.jpg',
    imageLarge:
      '//product.hstatic.net/200000459373/product/untitled_design__5__f8e03b03d3e84f33858dd2058851d090_large.jpg',
    title: 'Canh bí đao thịt xay 300g',
    price: '30,000đ',
    href: '/products/canh-bi-thittxay-300g-300-canh',
  },
  {
    imageMedium:
      '//product.hstatic.net/200000459373/product/untitled_design__4__a60e0a1d092d45ec8536d6f1d7e36973_medium.jpg',
    imageLarge:
      '//product.hstatic.net/200000459373/product/untitled_design__4__a60e0a1d092d45ec8536d6f1d7e36973_large.jpg',
    title: 'Canh bí đỏ tròn thịt xay 300g',
    price: '29,000₫',
    href: '/products/canh-bi-do-tron-do-tron-thit',
  },
  {
    imageMedium:
      '//product.hstatic.net/200000459373/product/untitled_design__3__96ad1587d67b4504b64caef1f4fd7750_medium.jpg',
    imageLarge:
      '//product.hstatic.net/200000459373/product/untitled_design__3__96ad1587d67b4504b64caef1f4fd7750_large.jpg',
    title: 'Canh bí đỏ tròn vỉ 300g',
    price: '16,000₫',
    href: '/products/canh-bi-tron-tron-300g-300-canh',
  },
  {
    imageMedium:
      '//product.hstatic.net/200000459373/product/untitled_design__14__e585692a9ac945c1b0b8e17baa4a99d1_medium.jpg',
    imageLarge:
      '//product.hstatic.net/200000459373/product/untitled_design__14__e585692a9ac945c1b0b8e17baa4a99d1_large.jpg',
    title: 'Cánh gà 500g- Sanha',
    price: '41,500đ',
    href: '/products/canh-ga-sanha',
  },
];
const Home = () => {
  return (
    <main className="wrapperMain_content ">
      <div className="section-index-slider" id="home-slider">
        <div className="container container-md-pd0">
          <div className="slider-owl owl-carousel">
            <div className="slider-item">
              <div className="slide--image">
                <a href="/collections/rau-cu-qua" title="ALt banner 1">
                  <picture>
                    <source
                      media="(max-width: 767px)"
                      srcSet="//theme.hstatic.net/200000459373/1000812576/14/slide_1_mb.jpg?v=286"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="//theme.hstatic.net/200000459373/1000812576/14/slide_1_img.jpg?v=286"
                    />
                    <img
                      src="//theme.hstatic.net/200000459373/1000812576/14/slide_1_img.jpg?v=286"
                      alt="ALt banner 1"
                    />
                  </picture>
                </a>
              </div>
            </div>
            <div className="slider-item">
              <div className="slide--image">
                <a
                  href="/collections/thit-ca-hai-san"
                  title="Banner Thịt c&#225; trứng sữa"
                >
                  <picture>
                    <source
                      className="owl-lazy"
                      media="(max-width: 767px)"
                      data-srcSet="//theme.hstatic.net/200000459373/1000812576/14/slide_2_mb.jpg?v=286"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    />
                    <source
                      className="owl-lazy"
                      media="(min-width: 768px)"
                      data-srcSet="//theme.hstatic.net/200000459373/1000812576/14/slide_2_img.jpg?v=286"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    />
                    <img
                      className="owl-lazy"
                      data-src="//theme.hstatic.net/200000459373/1000812576/14/slide_2_img.jpg?v=286"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      alt="Banner Thịt c&#225; trứng sữa"
                    />
                  </picture>
                </a>
              </div>
            </div>
            <div className="slider-item">
              <div className="slide--image">
                <a href="/pages/lien-he" title="Danh s&#225;ch cửa h&#224;ng">
                  <picture>
                    <source
                      className="owl-lazy"
                      media="(max-width: 767px)"
                      data-srcSet="//theme.hstatic.net/200000459373/1000812576/14/slide_4_mb.jpg?v=286"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    />
                    <source
                      className="owl-lazy"
                      media="(min-width: 768px)"
                      data-srcSet="//theme.hstatic.net/200000459373/1000812576/14/slide_4_img.jpg?v=286"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    />
                    <img
                      className="owl-lazy"
                      data-src="//theme.hstatic.net/200000459373/1000812576/14/slide_4_img.jpg?v=286"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      alt="Danh s&#225;ch cửa h&#224;ng"
                    />
                  </picture>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="section-index-collection "
        data-feature="home-collection-1"
      >
        <div className="container">
          <div className="section-heading text-center">
            <h2 className="hTitle">
              <a href="/collections/hot-products">Sản phẩm nổi bật</a>
            </h2>
          </div>
          <div className="section-content ">
            <div className="wraplist-products">
              <div className="listProduct-row listProduct-resize-1">
                {Products.map((product, key) => (
                  <Product
                    key={key}
                    imageMedium={product.imageMedium}
                    imageLarge={product.imageLarge}
                    title={product.title}
                    price={product.price}
                    href={product.href}
                  />
                ))}
              </div>
            </div>
            <div className="wraplist-button text-center visible-desk  visible-mobile">
              <a
                href="/collections/hot-products"
                className="button dark btn-collection"
              >
                Xem thêm sản phẩm
                <b> Sản phẩm nổi bật </b>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
