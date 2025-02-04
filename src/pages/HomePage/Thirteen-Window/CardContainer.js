import React from "react";
import ActionAreaCard from "./Card";

function CardContainer() {

  // array of cardValues
  const cardValues = [
    {
      productName: "Smartwatch",
      totalComments: "20",
      heading: "Tech Talk Exploring our th latest heavy Gadgets.",
      url: "https://probid-nextjs.vercel.app/assets/img/home5/blog-img1.jpg",
      paragraph:
        "Cras cursus faucibus enim porta. Curabitur an refuge tortor. Duis ut egestas libero. Aenean id lacin est.",
    },
    {
      productName: "Computer",
      totalComments: "25",
      heading: "Gadget Guide Source for tech Reviews and News.",
      url: "https://probid-nextjs.vercel.app/assets/img/home5/blog-img2.jpg",
      paragraph:
        "Cras cursus faucibus enim porta. Curabitur an refuge tortor. Duis ut egestas libero. Aenean id lacin est.",
    },
    {
      productName: "Drone",
      totalComments: "18",
      heading: "Digital Delights Explore the World of All Gadgets.",
      url: "https://probid-nextjs.vercel.app/assets/img/home5/blog-img3.jpg",
      paragraph:
        "Cras cursus faucibus enim porta. Curabitur an refuge tortor. Duis ut egestas libero. Aenean id lacin est.",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-evenly items-center gap-1">
        {cardValues.map((card, index) => (
          <div
            key={index}
            className="w-[100%] sm:w-[47%] lg:w-auto"
          >
            <ActionAreaCard
              productName={card.productName}
              totalComments={card.totalComments}
              heading={card.heading}
              url={card.url}
              paragraph={card.paragraph}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default CardContainer;
