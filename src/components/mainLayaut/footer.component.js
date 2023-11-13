import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
<footer class="text-center text-lg-start text-muted" style={{backgroundColor: "#d8d8d8"}}>
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <Link htmlFor="www.facebook.com" className="me-4 link-secondary">
        <i class="fab fa-facebook-f"></i>
      </Link>
      <Link to="" class="me-4 link-secondary">
        <i class="fab fa-twitter"></i>
      </Link>
      <Link to="" class="me-4 link-secondary">
        <i class="fab fa-google"></i>
      </Link>
      <Link to="" class="me-4 link-secondary">
        <i class="fab fa-instagram"></i>
      </Link>
      <Link to="" class="me-4 link-secondary">
        <i class="fab fa-linkedin"></i>
      </Link>
      <Link to="" class="me-4 link-secondary">
        <i class="fab fa-github"></i>
      </Link>
    </div>
  </section>

  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3 text-secondary"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3 text-secondary"></i> Belgrade 11000, Serbia , SR</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            miticgoran.pt@icloud.com
          </p>
          <p><i class="fas fa-phone me-3 text-secondary"></i> +381 640757265</p>
          <p><i class="fas fa-print me-3 text-secondary"></i> +381 640757265</p>
        </div>
      </div>
    </div>
  </section>

  <div class="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.025)"}}>
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>
    </div>
  );
};
export default Footer;
