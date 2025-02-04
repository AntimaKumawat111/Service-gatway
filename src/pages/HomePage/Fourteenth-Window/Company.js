import React from "react";

function Company() {
  return (
    <>
      <div className="w-[100%] sm:w-[50] lg:w-auto">
        <h1 className="mb-4 font-bold tracking-wider">Company</h1>
        <div>
          <ul className="flex flex-col gap-2 text-lg  ">
            <li className="hover:underline hover:text-yellow-900 ">
              <a href="https://probid-nextjs.vercel.app/book-and-comic/how-to-buy">
                How to Bid With us
              </a>
            </li>
            <li className="hover:underline hover:text-yellow-900 ">
              <a href="https://probid-nextjs.vercel.app/book-and-comic/how-to-sell">
                How to Sell With us
              </a>
            </li>
            <li className="hover:underline hover:text-yellow-900 ">
              <a href="https://probid-nextjs.vercel.app/book-and-comic/about">
                About us
              </a>
            </li>
            <li className="hover:underline hover:text-yellow-900 ">
              <a href="https://probid-nextjs.vercel.app/book-and-comic/faq">
                F.A.Q
              </a>
            </li>
            <li className="hover:underline hover:text-yellow-900 ">
              <a href="#">Our Brand</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}


export default Company;
