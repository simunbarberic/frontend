import "../styles/footer.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export default function footer() {
  return (
    <div className="footer-contents">
      <div className="footerItem">
        OUR OFFICE
        <h2 className="text-style">Croatia</h2>
        <p className="text-about">
          <a
            href="https://maps.app.goo.gl/Nd6sKyPswJfw3b1S7"
            className="text-about"
          >
            Petračićeva 6 <br /> 10000 Zagreb <br />
          </a>
          +385 95 3587 050
        </p>
      </div>
      <div className="footerItem">
        CONTACT
        <div className="text-about">
          <div className="pageSocials">
            <a
              className="socialsLink"
              target="_blank"
              href="https://www.facebook.com/speck.agency"
              title="facebook"
            >
              <img src="/icons8-facebook.svg" alt="Facebook ikonica"></img>
            </a>
            <a
              className="socialsLink"
              target="_blank"
              href="https://www.instagram.com/speck.agency/"
              title="instagram"
            >
              <img src="/icons8-instagram.svg" alt="Instagram ikonica"></img>
            </a>
            <a
              className="socialsLink"
              target="_blank"
              href="https://www.tiktok.com/@speck_agency"
              title="tik-tok"
            >
              <img src="/icons8-tik-tok-24.png" alt="Tik-tok ikonica"></img>
            </a>
            <a
              className="socialsLink"
              target="_blank"
              href="https://www.linkedin.com/company/speck-agency/"
              title="linked-in"
            >
              <img src="/icons8-linkedin.svg" alt="Facebook ikonica"></img>
            </a>
            <a
              className="socialsLink"
              target="_blank"
              href="https://clutch.co/profile/speck#highlights"
              title="clutch"
            >
              <img src="/clutchco.svg" alt="clutch ikonica"></img>
            </a>
            <br />
          </div>
          <a className="text-about" href="mailto:hello@speck.agency">
            hello@speck.agency
          </a>{" "}
          <br />
          <a className="text-about" href="mailto:hiring@speck.agency">
            hiring@speck.agency
          </a>
        </div>
      </div>
      <div className="footerItem">
        LEGAL <br />
        <a
          className="text-about"
          href="https://www.speck.agency/privacy-policy"
        >
          Privacy policy
        </a>{" "}
        <br />
        <a className="text-about" href="https://www.speck.agency/company">
          Company
        </a>{" "}
        <br />© 2024 Speck d.o.o.
      </div>
    </div>
  );
}
