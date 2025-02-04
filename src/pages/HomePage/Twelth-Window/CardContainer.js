import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ActionAreaCard from "./Card";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "-40px", // Arrows ko slider ke andar rakha
        right: "10px",
        zIndex: "2",
        cursor: "pointer",
        backgroundColor: "transparent",
        padding: "8px",
        borderRadius: "50%",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
      onClick={onClick}
    >
      <ArrowForwardIcon style={{ color: "black", fontSize: "24px" }} />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "-40px",
        left: "10px",
        zIndex: "2",
        cursor: "pointer",
        backgroundColor: "transparent",
        padding: "8px",
        borderRadius: "50%",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
      onClick={onClick}
    >
      <ArrowBackIcon style={{ color: "black", fontSize: "24px" }} />
    </div>
  );
}

function CardContainer() {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      
      
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cardValues = [
    {
      heading: "Fantastic Bidding Item!",
      url: "https://probid-nextjs.vercel.app/assets/img/home2/testi-author-img1.png",
      name: "Brooks Abelam",
      paragraph:
        "Feel free to customize the key features based on thena helps potential clients understand the specific valueles they'll receive at each pricing tier.",
      date: "Dec 31,2023",
      time: "11.45 PM",
    },
    {
      heading: "Great Auction Product!",
      url: "https://probid-nextjs.vercel.app/assets/img/home2/testi-author-img2.png",
      name: "Western Bennett",
      paragraph:
        "Please feel free to alter the main features in a way that best explains to prospective customers the precise benefits they will receive at each price point.",
      date: "Jan 20,2024",
      time: "10.30 PM",
    },
    {
      heading: "Outstanding Auction Items!",
      url: "https://probid-nextjs.vercel.app/assets/img/home2/testi-author-img3.png",
      name: "Pinelop Gian",
      paragraph:
        "You are welcome to alter the salient characteristics in a way that makes prospective customers aware of the precise benefits associated with each price point.",
      date: "Dec 31, 2023",
      time: "11.45 PM",
    },
    {
      heading: "Subarb Bidding Deals!",
      url: "https://probid-nextjs.vercel.app/assets/img/home2/testi-author-img4.png",
      name: "Daniel Scoot",
      paragraph:
        "Feel free to customize the key features based on thena helps potential clients understand the specific valueles they'll receive at each pricing tier.",
      date: "Jan 20, 2024",
      time: "10.30 PM",
    },
    {
      heading: "Wonderful Auction Items!",
      url: "https://probid-nextjs.vercel.app/assets/img/home2/testi-author-img5.png",
      name: "Harbard Mack",
      paragraph:
        "Please feel free to alter the main features in a way that best explains to prospective customers the precise benefits they will receive at each price point.",
      date: "Dec 31, 2023",
      time: "11.45 PM",
    },
    {
      heading: "Amazing Bidding Deals!",
      url: "https://probid-nextjs.vercel.app/assets/img/home2/testi-author-img6.png",
      name: "Hanrry Ghust",
      paragraph:
        "You are welcome to alter the salient characteristics in a way that makes prospective customers aware of the precise benefits associated with each price point.",
      date: "Dec 31, 2023",
      time: "11.45 PM",
    },
  ];

  return (
    <div className="card_from12thWindow relative py-12 ">
      <Slider {...settings}>
        {cardValues.map((card, index) => (
          <div key={index}>
            <ActionAreaCard
              heading={card.heading}
              url={card.url}
              name={card.name}
              paragraph={card.paragraph}
              date={card.date}
              time={card.time}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardContainer;
