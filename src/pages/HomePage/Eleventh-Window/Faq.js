import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveTwoToneIcon from "@mui/icons-material/RemoveTwoTone";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-transparent shadow-lg rounded-lg">


      {/* Question 1 */}
      <div className="border border-gray-300 border-b p-4 mb-6 hover:bg-blue-50 focus:bg-blue-100 ">
        <button
          className="w-full text-left text-lg font-medium text-gray-800 flex items-center justify-between"
          onClick={() => toggleAnswer(1)}
        >
          <span>What is An Auction ?</span>
          {activeQuestion === 1 ? <RemoveTwoToneIcon /> : <AddIcon />}
        </button>
        {activeQuestion === 1 && (
          <div className="mt-2 text-gray-600">
            <p>
              An auction is a public sale where goods or services are sold to
              the highest bidder. Bidders compete to offer the highest price,
              and the item is awarded to the bidder with the highest bid when
              the auction ends.
            </p>
          </div>
        )}
      </div>

      {/* Question 2 */}
      <div className="border border-gray-300 border-b p-4 mb-6 hover:bg-blue-50 focus:bg-blue-100 ">
        <button
          className="w-full text-left text-lg font-medium text-gray-800 flex items-center justify-between"
          onClick={() => toggleAnswer(2)}
        >
          <span>How Do Auctions Work ?</span>
          {activeQuestion === 2 ? <RemoveTwoToneIcon /> : <AddIcon />}
        </button>
        {activeQuestion === 2 && (
          <div className="mt-2 text-gray-600">
            <p>
              Auctions allow items to be sold to the highest bidder.
              Participants bid on the item until the highest bid is reached
              within a set timeframe. The highest bidder wins and pays the bid
              amount.
            </p>
          </div>
        )}
      </div>

      {/* Question 3 */}
      <div className="border border-gray-300 border-b p-4 mb-6 hover:bg-blue-50 focus:bg-blue-100 ">
        <button
          className="w-full text-left text-lg font-medium text-gray-800 flex items-center justify-between"
          onClick={() => toggleAnswer(3)}
        >
          <span>What Types Of Auctions Are There ?</span>
          {activeQuestion === 3 ? <RemoveTwoToneIcon /> : <AddIcon />}
        </button>
        {activeQuestion === 3 && (
          <div className="mt-2 text-gray-600">
            <p>
              Types of auctions include English (ascending bid), Dutch
              (descending bid), sealed-bid (highest bid wins), and Vickrey
              (sealed-bid, second-highest bid wins). Additionally, there are
              reverse (lowest bid wins) and silent (secret bids) auctions,
              catering to various selling dynamics and bidder preferences.
            </p>
          </div>
        )}
      </div>

      {/* Question 4 */}
      <div className="border border-gray-300 border-b p-4 mb-6 hover:bg-blue-50 focus:bg-blue-100 ">
        <button
          className="w-full text-left text-lg font-medium text-gray-800 flex items-center justify-between"
          onClick={() => toggleAnswer(4)}
        >
          <span>Who Can Part In Auctions ?</span>
          {activeQuestion === 4 ? <RemoveTwoToneIcon /> : <AddIcon />}
        </button>
        {activeQuestion === 4 && (
          <div className="mt-2 text-gray-600">
            <p>
              Anyone meeting auction requirements, typically 18 years or older,
              can participate. Registration may be necessary, depending on the
              auction platform. Ensure compliance with specific auction rules
              and regulations.
            </p>
          </div>
        )}
      </div>

      {/* Question 5 */}
      <div className="border border-gray-300 border-b p-4 mb-6 hover:bg-blue-50 focus:bg-blue-100 ">
        <button
          className="w-full text-left text-sm lg:text-lg font-medium text-gray-800 flex items-center justify-between"
          onClick={() => toggleAnswer(5)}
        >
          <span>What Happens If I Win An Auction?</span>
          {activeQuestion === 5 ? <RemoveTwoToneIcon /> : <AddIcon />}
        </button>
        {activeQuestion === 5 && (
          <div className="mt-2 text-gray-600">
            <p>
              If you win an auction, you're obligated to purchase the item at
              the winning bid price. Follow payment instructions provided by the
              auction platform. Non-compliance may lead to penalties or account
              suspension.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
