import React from "react";
// import ListCss from "./DropdownList.module.css";
import ListCss from "./DropdownList.module.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

export function HomeDropDown() {
  return (
    <div className={ListCss.dropdown}>
      <button className={ListCss.dropdown_button}>
        Home <KeyboardArrowDownOutlinedIcon />{" "}
      </button>
      <div className={ListCss.dropdown_content}>
        <a href="https://probid-nextjs.vercel.app/">Multipurpose 01</a>
        <a href="https://probid-nextjs.vercel.app/car-auction">Car Action</a>
        <a href="https://probid-nextjs.vercel.app/antiques-auction">Antiqure Action</a>
        <a href="https://probid-nextjs.vercel.app/art-auction">Art Action</a>
        <a href="https://probid-nextjs.vercel.app/gadget-and-technology">Gadeget & Techonology</a>
        <a href="https://probid-nextjs.vercel.app/book-and-comic">Book & Comic</a>
        <a href="https://probid-nextjs.vercel.app/multipurpose2">Multipurpose 02</a>
      </div>
    </div>
  );
}

export function AuctionsDropDown() {
  return (
    <div className={ListCss.dropdown}>
      <button className={ListCss.dropdown_button}>
        Actions <KeyboardArrowDownOutlinedIcon />{" "}
      </button>
      <div className={ListCss.dropdown_content}>
        <a href="https://probid-nextjs.vercel.app/multipurpose2/auction-grid">Actions Grid</a>
        <a href="https://probid-nextjs.vercel.app/multipurpose2/auction-sidebar"> Actions Sidebar</a>
        <a href="https://probid-nextjs.vercel.app/multipurpose2/auction-details"> Actions Detials Style 01</a>
        <a href="https://probid-nextjs.vercel.app/multipurpose2/auction-details2"> Actions Details Stype 02</a>
      </div>
    </div>
  );
}

export function BlogDropDown() {
  return (
    <div className={ListCss.dropdown}>
      <button className={ListCss.dropdown_button}>
        Blog <KeyboardArrowDownOutlinedIcon />{" "}
      </button>
      <div className={ListCss.dropdown_content}>
        <a href="https://probid-nextjs.vercel.app/multipurpose2/blog-grid">Blog Grid </a>
        <a href="https://probid-nextjs.vercel.app/multipurpose2/blog-standard"> Blog Standard</a>
        <a href="https://probid-nextjs.vercel.app/multipurpose2/blog-details"> Blog Detals </a>
      </div>
    </div>
  );
}

export function PagesDropDown() {
  return (
    <div className={ListCss.dropdown}>
      <button className={ListCss.dropdown_button}>
        Pages <KeyboardArrowDownOutlinedIcon />
      </button>
      <div className={ListCss.dropdown_content}>
        <a href="https://probid-nextjs.vercel.app/multipurpose2/about">About</a>
        <a href="https://probid-nextjs.vercel.app/multipurpose2/category">Category</a>

        <div className={ListCss.subDropdown}>
          <a href="#item2">
            Seller <ChevronRightOutlinedIcon />{" "}
          </a>
          <div className={ListCss.subDropdown_content}>
            <a href="https://probid-nextjs.vercel.app/multipurpose2/store-list">Seller List</a>
            <a href="https://probid-nextjs.vercel.app/antiques-auction/store-details">Seller Details</a>
          </div>
        </div>
        <a href="https://probid-nextjs.vercel.app/antiques-auction/how-to-sell">How to Sell</a>
        <a href="https://probid-nextjs.vercel.app/antiques-auction/how-to-buy">How to Bid</a>
        <a href="https://probid-nextjs.vercel.app/antiques-auction/dashboard">Dashboard</a>
        <a href="https://probid-nextjs.vercel.app/antiques-auction/dashboard">FAQs</a>
        <a href="https://probid-nextjs.vercel.app/antiques-auction/error">Error</a>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <>
      <a
        href="https://probid-nextjs.vercel.app/contact"
        className="text-white hover:text-blue-700"
      >
        Contact
      </a>
    </>
  );
}
