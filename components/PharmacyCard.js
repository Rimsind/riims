import Image from "next/image";
const PharmacyCard = () => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
        <div className="card shop-list border-0">
          <div className="shop-image position-relative overflow-hidden rounded shadow">
            <a href="pharmacy-product-detail.html">
              <Image
                height="500"
                width="500"
                src="/images/pharmacy/shop/01.jpg"
                className="img-fluid"
                alt=""
              />
            </a>
            <ul className="list-unstyled shop-icons">
              <li>
                <a href="#" className="btn btn-icon btn-pills btn-soft-danger">
                  <i data-feather="heart" className="icons"></i>
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
                  <i data-feather="eye" className="icons"></i>
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="btn btn-icon btn-pills btn-soft-warning">
                  <i data-feather="shopping-cart" className="icons"></i>
                </a>
              </li>
            </ul>

            <div className="qty-icons">
              <button
                onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                className="btn btn-pills btn-icon btn-primary minus"
              >
                -
              </button>
              <input
                min="0"
                name="quantity"
                type="number"
                className="btn btn-pills btn-icon btn-primary qty-btn quantity"
              />
              <button
                onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                className="btn btn-pills btn-icon btn-primary plus"
              >
                +
              </button>
            </div>
          </div>
          <div className="card-body content pt-4 p-2">
            <a
              href="pharmacy-product-detail.html"
              className="text-dark product-name h6"
            >
              Stethoscope
            </a>
            <div className="d-flex justify-content-between mt-1">
              <h6 className="text-muted small font-italic mb-0 mt-1">$16.00</h6>
              <ul className="list-unstyled text-warning mb-0">
                <li className="list-inline-item">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="mdi mdi-star"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PharmacyCard;
