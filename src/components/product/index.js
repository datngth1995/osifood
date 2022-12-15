/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action';
const Product = (props) => {
  const { imageMedium, imageLarge, title, price, href, id } = props;
  const dispatch = useDispatch();
  return (
    <div
      className="col-md-2 col-sm-4 col-xs-4 product-loop  "
      data-id="1088089427"
    >
      <div className="product-inner product-resize ">
        <div className="proloop-image ">
          <div className="product--image image-resize">
            <div className="product--image__inner">
              <div className="prod-img">
                <picture>
                  <source
                    media="(max-width: 480px)"
                    data-srcSet={imageMedium}
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  />
                  <source
                    media="(min-width: 481px)"
                    data-srcSet={imageLarge}
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  />
                  <img
                    className="lazyload img-loop "
                    data-src={imageLarge}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  />
                </picture>
              </div>
            </div>
          </div>
          <a
            href={href}
            className="proloop-link  quickview-product "
            data-handle={href}
            title={title}
          ></a>
        </div>
        <div className="proloop-detail">
          <p className="proloop--vendor">
            <a href="/collections/vendors?q=osifood">OsiFood</a>
          </p>
          <h3>
            <a href={href} className=" quickview-product " data-handle={href}>
              {title}
            </a>
          </h3>
          <p className="proloop--price">
            <span className="price">{price}</span>
          </p>
          <div className="proloop--review">
            <div className="haravan-product-reviews-badge" data-id="1040451405">
              {' '}
            </div>
          </div>
          <div className="proloop--action " data-vrid="1088089427">
            <div className="proloop--action__inner">
              <div className="action-item action-addcart">
                <button
                  type="button"
                  className="button btn-proloop-cart add-to-cart  "
                  onClick={() => dispatch(addToCart(id))}
                  title="Thêm vào giỏ"
                >
                  <span className="btnico">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 321.2 321.2"
                      style={{
                        enableBackground: 'new 0 0 321.2 321.2',
                      }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path d="M306.4,313.2l-24-223.6c-0.4-3.6-3.6-6.4-7.2-6.4h-44.4V69.6c0-38.4-31.2-69.6-69.6-69.6c-38.4,0-69.6,31.2-69.6,69.6 v13.6H46c-3.6,0-6.8,2.8-7.2,6.4l-24,223.6c-0.4,2,0.4,4,1.6,5.6c1.2,1.6,3.2,2.4,5.2,2.4h278c2,0,4-0.8,5.2-2.4 C306,317.2,306.8,315.2,306.4,313.2z M223.6,123.6c3.6,0,6.4,2.8,6.4,6.4c0,3.6-2.8,6.4-6.4,6.4c-3.6,0-6.4-2.8-6.4-6.4 C217.2,126.4,220,123.6,223.6,123.6z M106,69.6c0-30.4,24.8-55.2,55.2-55.2c30.4,0,55.2,24.8,55.2,55.2v13.6H106V69.6z M98.8,123.6c3.6,0,6.4,2.8,6.4,6.4c0,3.6-2.8,6.4-6.4,6.4c-3.6,0-6.4-2.8-6.4-6.4C92.4,126.4,95.2,123.6,98.8,123.6z M30,306.4 L52.4,97.2h39.2v13.2c-8,2.8-13.6,10.4-13.6,19.2c0,11.2,9.2,20.4,20.4,20.4c11.2,0,20.4-9.2,20.4-20.4c0-8.8-5.6-16.4-13.6-19.2 V97.2h110.4v13.2c-8,2.8-13.6,10.4-13.6,19.2c0,11.2,9.2,20.4,20.4,20.4c11.2,0,20.4-9.2,20.4-20.4c0-8.8-5.6-16.4-13.6-19.2V97.2 H270l22.4,209.2H30z" />
                        </g>
                      </g>
                    </svg>
                  </span>{' '}
                  <span> Chọn mua </span>
                </button>
              </div>
              <div className="action-item action-boxqty">
                <div className="proloop-boxqty">
                  <button
                    type="button"
                    onClick="HRT.All.minusQtyProdItem('1088089427')"
                    className="btnqty proloop-minus"
                    aria-label="Minus"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect height="1" width="18" y="9" x="1"></rect>
                    </svg>
                  </button>
                  <input
                    type="text"
                    readOnly=""
                    name="quantity-proloop"
                    value="1"
                    min="1"
                    className="proloop-qtyvalue"
                  />
                  <button
                    type="button"
                    onClick="HRT.All.plusQtyProdItem('1088089427')"
                    className="btnqty proloop-plus"
                    aria-label="Plus"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="9" y="1" width="1" height="17"></rect>
                      <rect x="1" y="9" width="17" height="1"></rect>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
