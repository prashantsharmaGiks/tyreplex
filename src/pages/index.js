import { useState, useRef } from "react";
import Link from "next/link";
import Header from "@/components/header";
import homepageStyle from "@/styles/Home.module.css";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import TyreCard from "@/components/tyreCard";
import FilterSortComponent from "@/components/filter";
import Footer from "@/components/footer";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024, // For large screens (lg) and above
        settings: {
          slidesToShow: 3, // Show 3 slides per view
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991, // For large screens (lg) and above
        settings: {
          slidesToShow: 2, // Show 3 slides per view
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For medium screens (md) and above
        settings: {
          slidesToShow: 2, // Show 2 slides per view
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575, // For small screens (sm) and below
        settings: {
          slidesToShow: 1, // Show 1 slide per view
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleDotClick = (index) => {
    setActiveDot(index);
    // Navigate to the start of the group (3 slides per group)
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index * 3); // Use .current to access the slider instance
    }
  };
  const tyreData = [
    {
      id: 1,
      name: "NYLOGRIP ZAPPER",
      rating: 4,
      reviews: 174,
      price: "1,125 - 3,051",
      variants: 49,
      warranty: 6,
      image: "/assets/images/tyre1.png",
    },
    {
      id: 2,
      name: "PERFINZA",
      rating: 4.5,
      reviews: 210,
      price: "2,200 - 4,000",
      variants: 30,
      warranty: 5,
      image: "/assets/images/tyre2.png",
    },
    {
      id: 3,
      name: "RANGER H/T",
      rating: 4.3,
      reviews: 90,
      price: "4,500 - 8,000",
      variants: 35,
      warranty: 5,
      image: "/assets/images/tyre3.png",
    },
    {
      id: 4,
      name: "MILAZE",
      rating: 4,
      reviews: 130,
      price: "1,800 - 3,200",
      variants: 60,
      warranty: 5,
      image: "/assets/images/tyre1.png",
    },
    {
      id: 5,
      name: "APOLLO ALNAC 4G",
      rating: 4.2,
      reviews: 140,
      price: "2,500 - 5,000",
      variants: 45,
      warranty: 4,
      image: "/assets/images/tyre2.png",
    },
    {
      id: 6,
      name: "CEAT SECURA DRIVE",
      rating: 4.4,
      reviews: 180,
      price: "3,000 - 6,000",
      variants: 40,
      warranty: 5,
      image: "/assets/images/tyre3.png",
    },
    {
      id: 7,
      name: "CONTINENTAL CROSSCONTACT",
      rating: 4.3,
      reviews: 200,
      price: "5,000 - 10,000",
      variants: 25,
      warranty: 6,
      image: "/assets/images/tyre1.png",
    },
    {
      id: 8,
      name: "BRIDGESTONE TURANZA",
      rating: 4.1,
      reviews: 160,
      price: "3,500 - 7,000",
      variants: 50,
      warranty: 5,
      image: "/assets/images/tyre2.png",
    },
    {
      id: 9,
      name: "GOODYEAR ASSURANCE",
      rating: 4.5,
      reviews: 220,
      price: "3,800 - 7,500",
      variants: 55,
      warranty: 6,
      image: "/assets/images/tyre3.png",
    },
  ];

  return (
    <>
      <Header />
      {/* ---------banner------------- */}
      <div className={homepageStyle.homeBanner}>
        <div className={homepageStyle.videoContainer}>
          <video
            className={homepageStyle.videoItem}
            src="/assets/video/video.mp4"
            autoPlay
            loop
            muted
          />
        </div>
        <div className={`${homepageStyle.homeBannerContainer} container`}>
          <div className="row align-items-center w-100">
            <div className="col-lg-9 mx-auto">
              <div className={homepageStyle.homeBannerLeft}>
                <p className={homepageStyle.bannerSubtitle}>
                  Innovating Tyre Technology
                  <br /> For Safer, Greener Journeys
                </p>
                <p className={homepageStyle.bannerPara}>
                  Lorem ipsum dolor sit amet consectetur. Nibh faucibus vitae id
                  est neque. Quam mauris suspendisse ornare non consectetur
                  dolor est placerat.
                </p>
                <a
                  href="#"
                  className="common-btn mt-lg-4 mt-md-3 mt-sm-3 mt-2 d-inline-block"
                ></a>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-6 home-banner-second-col"></div>
          </div>
        </div>
      </div>
      {/* ----------about----------------- */}
      <section className={homepageStyle.aboutSection}>
        <div className="container  ">
          <div className="row">
            <div className="col-md-8">
              <h1 className="commonHeading">
                About <span>Us</span>
              </h1>
              <p className="commonParaDark">
                Kings Infra Ventures Limited is a focused aquaculture company
                with activities in aquaculture farming, seafood processing,
                international trade of marine products, aquaculture consultancy,
                food related infrastructure development and venturing into
                domestic marketing and supply of retail packed marine products.
              </p>
              <Link href={""} className="commonBtn">
                Sea more
              </Link>
            </div>
            <div className="col-md-4">
              <div className={homepageStyle.aboutimageSection}>
                <img
                  className="img-fluid"
                  src="\assets\images\about.jpg"
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------services-------------------- */}
      <section className={homepageStyle.serviceSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="commonHeading">
                Our Featured <span>Services</span>
              </h2>
              <p className="commonParaDark">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className={homepageStyle.serviceSectionCard}>
                <div className={homepageStyle.serviceSectionCardUpper}>
                  <p className={homepageStyle.serviceSectionCardTitle}>
                    our Services
                  </p>
                  <p className={homepageStyle.serviceSectionCardHeading}>
                    Wheel Balancing
                  </p>
                </div>
                <div className={homepageStyle.serviceSectionCardLower}>
                  <div className={homepageStyle.serviceSectionCardLowerLeft}>
                    <span className="commonReadMore">Read More +</span>
                  </div>
                  <div className={homepageStyle.serviceSectionCardLowerRight}>
                    <span className={homepageStyle.serviceSectionCardIcon}>
                      <img
                        className="img-fluid"
                        src="\assets\images\services\balancing.png"
                        alt="servicePic"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className={homepageStyle.serviceSectionCard}>
                <div className={homepageStyle.serviceSectionCardUpper}>
                  <p className={homepageStyle.serviceSectionCardTitle}>
                    our Services
                  </p>
                  <p className={homepageStyle.serviceSectionCardHeading}>
                    Wheel Alignment
                  </p>
                </div>
                <div className={homepageStyle.serviceSectionCardLower}>
                  <div className={homepageStyle.serviceSectionCardLowerLeft}>
                    <span className="commonReadMore">Read More +</span>
                  </div>
                  <div className={homepageStyle.serviceSectionCardLowerRight}>
                    <span className={homepageStyle.serviceSectionCardIcon}>
                      <img
                        className="img-fluid"
                        src="\assets\images\services\wheels.png"
                        alt="servicePic"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className={homepageStyle.serviceSectionCard}>
                <div className={homepageStyle.serviceSectionCardUpper}>
                  <p className={homepageStyle.serviceSectionCardTitle}>
                    our Services
                  </p>
                  <p className={homepageStyle.serviceSectionCardHeading}>
                    Perfomance Upgrade
                  </p>
                </div>
                <div className={homepageStyle.serviceSectionCardLower}>
                  <div className={homepageStyle.serviceSectionCardLowerLeft}>
                    <span className="commonReadMore">Read More +</span>
                  </div>
                  <div className={homepageStyle.serviceSectionCardLowerRight}>
                    <span className={homepageStyle.serviceSectionCardIcon}>
                      <img
                        className="img-fluid"
                        src="\assets\images\services\efficiency.png"
                        alt="servicePic"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className={homepageStyle.serviceSectionCard}>
                <div className={homepageStyle.serviceSectionCardUpper}>
                  <p className={homepageStyle.serviceSectionCardTitle}>
                    our Services
                  </p>
                  <p className={homepageStyle.serviceSectionCardHeading}>
                    Transmission Services
                  </p>
                </div>
                <div className={homepageStyle.serviceSectionCardLower}>
                  <div className={homepageStyle.serviceSectionCardLowerLeft}>
                    <span className="commonReadMore">Read More +</span>
                  </div>
                  <div className={homepageStyle.serviceSectionCardLowerRight}>
                    <span className={homepageStyle.serviceSectionCardIcon}>
                      <img
                        className="img-fluid"
                        src="\assets\images\services\gearbox.png"
                        alt="servicePic"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className={homepageStyle.serviceSectionCard}>
                <div className={homepageStyle.serviceSectionCardUpper}>
                  <p className={homepageStyle.serviceSectionCardTitle}>
                    our Services
                  </p>
                  <p className={homepageStyle.serviceSectionCardHeading}>
                    Break Repair & Service
                  </p>
                </div>
                <div className={homepageStyle.serviceSectionCardLower}>
                  <div className={homepageStyle.serviceSectionCardLowerLeft}>
                    <span className="commonReadMore">Read More +</span>
                  </div>
                  <div className={homepageStyle.serviceSectionCardLowerRight}>
                    <span className={homepageStyle.serviceSectionCardIcon}>
                      <img
                        className="img-fluid"
                        src="\assets\images\services\break.png"
                        alt="servicePic"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className={homepageStyle.serviceSectionCard}>
                <div className={homepageStyle.serviceSectionCardUpper}>
                  <p className={homepageStyle.serviceSectionCardTitle}>
                    our Services
                  </p>
                  <p className={homepageStyle.serviceSectionCardHeading}>
                    Engine Service & Repair
                  </p>
                </div>
                <div className={homepageStyle.serviceSectionCardLower}>
                  <div className={homepageStyle.serviceSectionCardLowerLeft}>
                    <span className="commonReadMore">Read More +</span>
                  </div>
                  <div className={homepageStyle.serviceSectionCardLowerRight}>
                    <span className={homepageStyle.serviceSectionCardIcon}>
                      <img
                        className="img-fluid"
                        src="\assets\images\services\worker.png"
                        alt="servicePic"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -----------------------customer staisfaction--------- */}
      <section className={homepageStyle.customerSatisfaction}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="commonHeadingWhite">
                Quality Service And <br />
                <span>Customer Satisfaction !!</span>
              </h2>
              <p className="commonPara">
                We utilize the most recent symptomatic gear to ensure your
                vehicle is fixed or adjusted appropriately and in an opportune
                manner. We are an individual from Professional Auto Service, a
                first class execution arrange, where free assistance offices
                share shared objectives of being world-class car administration
                focuses.
              </p>
            </div>
            <div className="col-lg-6">
              <div className={homepageStyle.customerSatisfactionPic}>
                <img
                  className="img-fluid"
                  src="\assets\images\customer.jpg"
                  alt="servicePic"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------testimonial--------------------------- */}
      <section className={homepageStyle.sliderContainer}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="commonHeading">
                Google<span>Review</span>
              </h2>
              <p className="commonParaDark">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution.
              </p>
            </div>
          </div>
          <div className="row  mt-lg-4">
            <div className="col-lg-12">
              <Slider {...settings}>
                <div className={homepageStyle.testimonialCardWrapper}>
                  <div className={homepageStyle.testimonialCard}>
                    <div className={homepageStyle.testimonialCardUpper}>
                      <div className={homepageStyle.testimonialCardUpperPic}>
                        <img
                          className="img-fluid"
                          src="\assets\images\testimonial\user.jpg"
                          alt="servicePic"
                        />
                      </div>
                      <div className={homepageStyle.testimonialCardTitleBox}>
                        <p
                          className={
                            homepageStyle.testimonialCardTitleBoxHeading
                          }
                        >
                          Rahul
                        </p>
                      </div>
                    </div>
                    <div className={homepageStyle.testimonialCardLower}>
                      <p className="commonParaDark">
                        Best tyre shop in Indirapuram. Good dealing with
                        customer. All types tyre available here. Price also
                        responsible. Overall good experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className={homepageStyle.testimonialCardWrapper}>
                  <div className={homepageStyle.testimonialCard}>
                    <div className={homepageStyle.testimonialCardUpper}>
                      <div className={homepageStyle.testimonialCardUpperPic}>
                        <img
                          className="img-fluid"
                          src="\assets\images\testimonial\user2.jpg"
                          alt="servicePic"
                        />
                      </div>
                      <div className={homepageStyle.testimonialCardTitleBox}>
                        <p
                          className={
                            homepageStyle.testimonialCardTitleBoxHeading
                          }
                        >
                          Rahul
                        </p>
                      </div>
                    </div>
                    <div className={homepageStyle.testimonialCardLower}>
                      <p className="commonParaDark">
                        Best tyre shop in Indirapuram. Good dealing with
                        customer. All types tyre available here. Price also
                        responsible. Overall good experience
                      </p>
                    </div>
                  </div>
                </div>

                <div className={homepageStyle.testimonialCardWrapper}>
                  <div className={homepageStyle.testimonialCard}>
                    <div className={homepageStyle.testimonialCardUpper}>
                      <div className={homepageStyle.testimonialCardUpperPic}>
                        <img
                          className="img-fluid"
                          src="\assets\images\testimonial\user.jpg"
                          alt="servicePic"
                        />
                      </div>
                      <div className={homepageStyle.testimonialCardTitleBox}>
                        <p
                          className={
                            homepageStyle.testimonialCardTitleBoxHeading
                          }
                        >
                          Rahul
                        </p>
                      </div>
                    </div>
                    <div className={homepageStyle.testimonialCardLower}>
                      <p className="commonParaDark">
                        Best tyre shop in Indirapuram. Good dealing with
                        customer. All types tyre available here. Price also
                        responsible. Overall good experience
                      </p>
                    </div>
                  </div>
                </div>

                <div className={homepageStyle.testimonialCardWrapper}>
                  <div className={homepageStyle.testimonialCard}>
                    <div className={homepageStyle.testimonialCardUpper}>
                      <div className={homepageStyle.testimonialCardUpperPic}>
                        <img
                          className="img-fluid"
                          src="\assets\images\testimonial\user2.jpg"
                          alt="servicePic"
                        />
                      </div>
                      <div className={homepageStyle.testimonialCardTitleBox}>
                        <p
                          className={
                            homepageStyle.testimonialCardTitleBoxHeading
                          }
                        >
                          Rahul
                        </p>
                      </div>
                    </div>
                    <div className={homepageStyle.testimonialCardLower}>
                      <p className="commonParaDark">
                        Best tyre shop in Indirapuram. Good dealing with
                        customer. All types tyre available here. Price also
                        responsible. Overall good experience
                      </p>
                    </div>
                  </div>
                </div>

                <div className={homepageStyle.testimonialCardWrapper}>
                  <div className={homepageStyle.testimonialCard}>
                    <div className={homepageStyle.testimonialCardUpper}>
                      <div className={homepageStyle.testimonialCardUpperPic}>
                        <img
                          className="img-fluid"
                          src="\assets\images\testimonial\user.jpg"
                          alt="servicePic"
                        />
                      </div>
                      <div className={homepageStyle.testimonialCardTitleBox}>
                        <p
                          className={
                            homepageStyle.testimonialCardTitleBoxHeading
                          }
                        >
                          Rahul
                        </p>
                      </div>
                    </div>
                    <div className={homepageStyle.testimonialCardLower}>
                      <p className="commonParaDark">
                        Best tyre shop in Indirapuram. Good dealing with
                        customer. All types tyre available here. Price also
                        responsible. Overall good experience
                      </p>
                    </div>
                  </div>
                </div>

                <div className={homepageStyle.testimonialCardWrapper}>
                  <div className={homepageStyle.testimonialCard}>
                    <div className={homepageStyle.testimonialCardUpper}>
                      <div className={homepageStyle.testimonialCardUpperPic}>
                        <img
                          className="img-fluid"
                          src="\assets\images\testimonial\user2.jpg"
                          alt="servicePic"
                        />
                      </div>
                      <div className={homepageStyle.testimonialCardTitleBox}>
                        <p
                          className={
                            homepageStyle.testimonialCardTitleBoxHeading
                          }
                        >
                          Rahul
                        </p>
                      </div>
                    </div>
                    <div className={homepageStyle.testimonialCardLower}>
                      <p className="commonParaDark">
                        Best tyre shop in Indirapuram. Good dealing with
                        customer. All types tyre available here. Price also
                        responsible. Overall good experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className={homepageStyle.testimonialCardWrapper}>
                  <div className={homepageStyle.testimonialCard}>
                    <div className={homepageStyle.testimonialCardUpper}>
                      <div className={homepageStyle.testimonialCardUpperPic}>
                        <img
                          className="img-fluid"
                          src="\assets\images\testimonial\user.jpg"
                          alt="servicePic"
                        />
                      </div>
                      <div className={homepageStyle.testimonialCardTitleBox}>
                        <p
                          className={
                            homepageStyle.testimonialCardTitleBoxHeading
                          }
                        >
                          Rahul
                        </p>
                      </div>
                    </div>
                    <div className={homepageStyle.testimonialCardLower}>
                      <p className="commonParaDark">
                        Best tyre shop in Indirapuram. Good dealing with
                        customer. All types tyre available here. Price also
                        responsible. Overall good experience
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------Deals in ---------------------- */}
      <section className={homepageStyle.dealingCompanies}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="commonHeading">
                <span className="text-white">Deals</span>
                <span>In</span>
              </h2>
              <p className="commonPara">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Marquee pauseOnHover className="mt-lg-5" autoFill={true}>
                <div className={homepageStyle.marqueeImageWrapper}>
                  <img
                    className="img-fluid"
                    src="\assets\images\deals\birla.png"
                    alt="DealsPic"
                  />
                </div>
                <div className={homepageStyle.marqueeImageWrapper}>
                  <img
                    className="img-fluid"
                    src="\assets\images\deals\ceat.png"
                    alt="DealsPic"
                  />
                </div>
                <div className={homepageStyle.marqueeImageWrapper}>
                  <img
                    className="img-fluid"
                    src="\assets\images\deals\falken.png"
                    alt="DealsPic"
                  />
                </div>
                <div className={homepageStyle.marqueeImageWrapper}>
                  <img
                    className="img-fluid"
                    src="\assets\images\deals\jk.png"
                    alt="DealsPic"
                  />
                </div>
                <div className={homepageStyle.marqueeImageWrapper}>
                  <img
                    className="img-fluid"
                    src="\assets\images\deals\michelon.png"
                    alt="DealsPic"
                  />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      {/* -----------------------Products------------------------- */}
      <section className={homepageStyle.productsOffered}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="commonHeading text-center">
                Tyres sold by <span>this Dealer</span>
              </h2>
              <p className="commonParaDark">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution.
              </p>
            </div>
          </div>
          <div className="row mt-lg-5">
            <div className="row ">
              <div className="col-lg-12">
                <FilterSortComponent />
              </div>
            </div>
            <div className="row m-0">
              {tyreData.map((tyre) => (
                <div key={tyre.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                  <TyreCard tyre={tyre} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------paymentmode----------------- */}

      <section className={homepageStyle.paymentMode}>
        <div className="container">
          <div className="row">
            <div className="col-g-12">
              <h2 className="commonHeading text-center">
                How would you<span>like to pay?</span>
              </h2>
              <p className="commonParaDark">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution.
              </p>
            </div>
          </div>
          <div className="row mt-lg-5">
            <div className="col-lg-3 col-md-3 col-sm-4 col-6">
              <div className={homepageStyle.paymentMethodBox}>
                <img
                  className="img-fluid"
                  src="\assets\images\payment\1.png"
                  alt="paymentPic"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4  col-6">
              <div className={homepageStyle.paymentMethodBox}>
                <img
                  className="img-fluid"
                  src="\assets\images\payment\2.png"
                  alt="paymentPic"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4  col-6">
              <div className={homepageStyle.paymentMethodBox}>
                <img
                  className="img-fluid"
                  src="\assets\images\payment\3.png"
                  alt="paymentPic"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4  col-6">
              <div className={homepageStyle.paymentMethodBox}>
                <img
                  className="img-fluid"
                  src="\assets\images\payment\4.png"
                  alt="paymentPic"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4  col-6">
              <div className={homepageStyle.paymentMethodBox}>
                <img
                  className="img-fluid"
                  src="\assets\images\payment\5.png"
                  alt="paymentPic"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4  col-6">
              <div className={homepageStyle.paymentMethodBox}>
                <img
                  className="img-fluid"
                  src="\assets\images\payment\6.png"
                  alt="paymentPic"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4  col-6">
              <div className={homepageStyle.paymentMethodBox}>
                <img
                  className="img-fluid"
                  src="\assets\images\payment\7.png"
                  alt="paymentPic"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4  col-6">
              <div className={homepageStyle.paymentMethodBox}>
                <img
                  className="img-fluid"
                  src="\assets\images\payment\8.png"
                  alt="paymentPic"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------footer------------ */}
      <Footer />
    </>
  );
}
