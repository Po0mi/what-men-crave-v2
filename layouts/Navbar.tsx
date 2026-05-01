import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="funnel-nav">
      <div className="funnel-nav-container">
        {/* LEFT — message */}
        <span className="funnel-nav-message">
          Introductory pricing - limited time only
        </span>

        {/* CENTER — price anchor */}
        <div className="funnel-nav-price-anchor">
          <span className="funnel-nav-price-line">
            INTRODUCTORY PRICING - $37
          </span>
          <span className="funnel-nav-price-sub">
            Reg.&nbsp;$97&nbsp;&middot;&nbsp;One-time
            payment&nbsp;&middot;&nbsp;Instant access
          </span>
        </div>

        {/* RIGHT — CTA */}
        <a
          href="https://matshaffer.samcart.com/products/what-a-man-craves"
          target="_blank"
          rel="noopener noreferrer"
          className="funnel-nav-cta"
        >
          Get Access - $37
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
