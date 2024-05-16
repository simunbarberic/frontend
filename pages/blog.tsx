import React from "react";
import Layout from "../components/layout";
import "../styles/blog.css";
import { Poppins } from "next/font/google";
import { useState } from "react";
const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

const blog = () => {
  const [selectedButton, setSelectedButton] = useState(null); // Stanje koje prati koji je gumb trenutno odabran

  const handleButtonClick = (buttonText: any) => {
    setSelectedButton(buttonText);
  };
  return (
    <Layout>
      <div className="blogPageLayout">
        <div className="heroBannerClass">
          <div className="pageHeroTitle">
            Specks of knowledge<span className="redDot">.</span>
          </div>
          <div className="heroTextUnder">
            Explore our selection of stories, opinions and guides about
            business, tech, investments and corporate innovation.
          </div>
        </div>
        <div className="buttonFilters">
          <button
            className={`filterButton ${
              selectedButton === "All" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("All")}
          >
            All
          </button>
          <button
            className={`filterButton ${
              selectedButton === "Company culture" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("Company culture")}
          >
            Company culture
          </button>
          <button
            className={`filterButton ${
              selectedButton === "Digital transformation" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("Digital transformation")}
          >
            Digital transformation
          </button>
          <button
            className={`filterButton ${
              selectedButton === "Insights" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("Insights")}
          >
            Insights
          </button>
          <button
            className={`filterButton ${
              selectedButton === "Other" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("Other")}
          >
            Other
          </button>
          <button
            className={`filterButton ${
              selectedButton === "Product design" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("Product design")}
          >
            Product design
          </button>
          <button
            className={`filterButton ${
              selectedButton === "Product development" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("Product development")}
          >
            Product development
          </button>
          <button
            className={`filterButton ${
              selectedButton === "Product managment" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("Product managment")}
          >
            Product managment
          </button>
        </div>
        <div className="blogPost">
          <div className="imgCover">
            <a href="https://www.speck.agency/blog/posts/unlocking-excellence-a-deep-dive-into-how-dedicated-teams-work-in-speck">
              <img
                className="blogPicture"
                src="/blogSlika.webp"
                alt="speckslika"
              />
            </a>
          </div>

          <span className="blogDesc">
            <div className="blogGenre">
              <div className="blogType">Other</div> <br />
              <span className="readTime">10 minute read</span>
            </div>
            <div className="blogTitle">
              Unlocking excellence: A deep dive into how dedicated teams work in
              Speck
            </div>{" "}
            <br />
            <div className="blogShortDesc">
              In the dynamic tech industry, dedicated teams have emerged as
              efficient and pragmatic solutions to the challenges faced by
              companies struggling with capacity for innovation, development,
              and maintenance. <br />
            </div>
            <div className="blogAuthor">Kaja Pavlinić · May 14, 2024</div>
          </span>
        </div>
        <div className="blogCards">
          <div>
            <img className="blogPic" src="/coop.webp" alt="" />
            <span>
              <div className="blogGenre">
                <div className="blogType">Digital Transformation</div> <br />
                <span className="readTime">5 minute read</span>
              </div>
              <div>
                <a
                  className="blogSmallTitle"
                  href="https://www.speck.agency/blog/posts/digital-transformation"
                >
                  Four Main Areas of Digital Transformation
                </a>
              </div>
              <div className="blogShortDesc">
                <br /> The term digital transformation is broad and often poorly
                defined. Find out more about what digital transformation is.
              </div>
              <div className="blogAuthor">Kaja Pavlinić · Feb 27, 2024</div>
            </span>
          </div>

          <div>
            <img className="blogPic" src="/digit.webp" alt="" />
            <span>
              <div className="blogGenre">
                <div className="blogType">Other</div> <br />
                <span className="readTime">8 min read</span>
              </div>
              <div>
                <a
                  className="blogSmallTitle"
                  href="https://www.speck.agency/blog/posts/different-forms-of-cooperation-models-with-it-agencies"
                >
                  Different Forms of Cooperation Models with IT Agencies
                </a>
              </div>
              <div>
                <a
                  className="blogShortDesc"
                  href="https://www.speck.agency/blog/posts/digital-transformation"
                >
                  {" "}
                  Various collaboration frameworks between clients and agencies{" "}
                </a>
              </div>
              <div className="blogAuthor">Kaja Pavlinić · Aug 31, 2023</div>
            </span>
          </div>

          <div>
            <img className="blogPic" src="/geekg.webp" alt="" />
            <span>
              <div className="blogGenre">
                <div className="blogType">Product development</div> <br />
                <span className="readTime">4 min read</span>
              </div>
              <div className="blogSmallTitle">
                <a
                  className="blogSmallTitle"
                  href="https://www.speck.agency/blog/posts/how-to-know-what-your-customers-want-before-they-realize-it-themselves"
                >
                  How to Know What Your Customers Want – Before They Realize it
                  Themselves?
                </a>
              </div>
              <div className="blogShortDesc">
                In this blog, I’d like to share the lessons I’ve learned about
                customer development over the past 4 years of working at Speck -
                its importance, how to conduct it, and applying it to gain
                valuable information for your product.
              </div>
              <div className="blogAuthor">Kaja Pavlinić · Aug 31, 2023</div>
            </span>
          </div>
        </div>
        <section className="blogNews">
          <div className="heroBannerInsights">
            Insights
            <div className="smallerBannerInsights">Insights</div>
          </div>
          <div className="blogNewsCards">
            <div className="newsCard">
              <img className="newsPic" src="/blnwh.png" alt="" />
              <span>
                <div className="readTime">2 min read</div>
                <div className="blogSmallTitle">
                  Spring Update: March and April Recap
                </div>
                <div className="blogNewsDesc">
                  What we've been up to in March and April
                </div>
                <div className="blogAuthor">Marta Jerković · May 6, 2024</div>
              </span>
            </div>
            <div className="newsCard">
              <img className="newsPic" src="/blnwh.png" alt="" />
              <span>
                <div className="readTime">3 min read</div>
                <div className="blogSmallTitle">
                  Reflecting on the Start of 2024
                </div>
                <div className="blogNewsDesc">
                  We've been busy at the start of the year! Read all about our
                  updates from the first two months of 2024.
                </div>
                <div className="blogAuthor">Marta Jerković · Mar 11, 2024</div>
              </span>
            </div>
            <div className="newsCard"></div>
          </div>
          <div className="btnFlex">
            <button className="btnMore">
              <img className="btnPicture" src="/morebtn.png" alt="" />
            </button>
          </div>
        </section>
        <section className="blogDigitalTransformation">
          <div className="heroBannerDT">
            Digital transformation
            <div className="heroBannersmallerDT">Digital transformation</div>
          </div>
          <div className="blogCards">
          <div>
            <img className="blogPic" src="/news.webp" alt="" />
            <span>
              <div className="blogGenre">
                <span className="readTime">5 min read</span>
              </div>
              <div>
                <a
                  className="blogSmallTitle"
                  href="https://www.speck.agency/blog/posts/digital-transformation-trends-in-media"
                >
                  Digital Transformation in Media: The Biggest Trends for 2024
                </a>
              </div>
              <div className="blogShortDesc">
                <br /> Here’s a look into how media companies are embracing digital transformation to help grow their businesses.
              </div>
              <div className="blogAuthor">Kaja Pavlinić · Apr 16, 2024</div>
            </span>
          </div>

          <div>
            <img className="blogPic" src="/traps.webp" alt="" />
            <span>
              <div className="blogGenre">
                <span className="readTime">5 min read</span>
              </div>
              <div>
                <a
                  className="blogSmallTitle"
                  href="https://www.speck.agency/blog/posts/digital-transformation-traps"
                >
                  4 Common Digital Transformation Traps (and How to Avoid Falling into Them)
                </a>
              </div>
              <div>
                <a
                  className="blogShortDesc"
                  href="https://www.speck.agency/blog/posts/digital-transformation"
                >
                  Check out the 4 most common digital transformation traps and the ways you can avoid falling into them.
                </a>
              </div>
              <div className="blogAuthor">Kaja Pavlinić · Apr 8, 2024</div>
            </span>
          </div>

          <div>
            <img className="blogPic" src="/digit.webp" alt="" />
            <span>
              <div className="blogGenre">
                <span className="readTime">5 min read</span>
              </div>
              <div className="blogSmallTitle">
                <a
                  className="blogSmallTitle"
                  href="https://www.speck.agency/blog/posts/digital-transformation"
                >
                  Four Main Areas of Digital Transformation
                </a>
              </div>
              <div className="blogShortDesc">
              The term digital transformation is broad and often poorly defined. Find out more about what digital transformation is.
              </div>
              <div className="blogAuthor">Kaja Pavlinić · Feb 27, 2024</div>
            </span>
          </div>
        </div>
        <div className="btnFlexWhite">
            <button className="btnMoreWhite">
              <img className="btnPicture" src="/morebtn.png" alt="" />
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default blog;
