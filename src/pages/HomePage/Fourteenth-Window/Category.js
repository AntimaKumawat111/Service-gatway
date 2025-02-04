import React from "react";

function Category() {
  return (
    <>
      <div className="w-[100%] sm:w-[50] lg:w-auto mb-6">
        <h1 className="mb-4 font-bold tracking-wider">Category</h1>

        <div>
          <ul className="flex flex-col gap-2 text-lg  ">
            <li className="hover:underline hover:text-yellow-900 ">
              <a href="https://probid-nextjs.vercel.app/book-and-comic/auction-grid">
                Comic
              </a>
            </li>

            <li className="hover:underline hover:text-yellow-900 ">
              <a href="https://probid-nextjs.vercel.app/book-and-comic/auction-grid">
                History
              </a>
            </li>
            <li className="hover:underline hover:text-yellow-900 ">
              <a href="https://probid-nextjs.vercel.app/book-and-comic/auction-grid">
                Biography
              </a>
            </li>

            <li className="hover:underline hover:text-yellow-900 ">
              <a href="https://probid-nextjs.vercel.app/book-and-comic/auction-grid">
                Philosophy
              </a>
            </li>

            <li className="hover:underline hover:text-yellow-900 ">
              <a href="https://probid-nextjs.vercel.app/book-and-comic/auction-grid">
                Horror
              </a>
            </li>

            <li className="hover:underline hover:text-yellow-900 ">
              <a href="https://probid-nextjs.vercel.app/book-and-comic/auction-grid">
                Children's
              </a>
            </li>

            <li className="hover:underline hover:text-yellow-900 ">
              <a href="https://probid-nextjs.vercel.app/book-and-comic/auction-grid">
                Literature
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Category;
