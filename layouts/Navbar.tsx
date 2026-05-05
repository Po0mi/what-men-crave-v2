import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="funnel-nav">
      <div className="funnel-nav-container">
        {/* LEFT — spacer to keep center truly centered */}
        <div className="funnel-nav-spacer" aria-hidden="true" />

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
          Get Access
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
