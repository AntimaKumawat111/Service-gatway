import React from "react";
import ListCss from "./dropdown_list.module.css";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

export function HomeDropDown() {
  return (
    <div className={ListCss.dropdown}>
      <button className={ListCss.dropdown_button}>Home <KeyboardArrowDownOutlinedIcon/> </button>
      <div className={ListCss.dropdown_content}> 
        <a href="#item1">Multipurpose 01</a>
        <a href="#item2">Car Action</a>
        <a href="#item3">Antiqure Action</a>
        <a href="#item4">Art Action</a>
        <a href="#item4">Gadeget & Techonology</a>
        <a href="#item4">Book & Comic</a>
        <a href="#item4">Multipurpose 02</a>
      </div>
    </div>
  );
}

export function AuctionsDropDown() {
  return (
    <div className={ListCss.dropdown}>
      <button className={ListCss.dropdown_button}>Actions <KeyboardArrowDownOutlinedIcon/> </button>
      <div className={ListCss.dropdown_content}>
        <a href="#item1">Actions Grid</a>
        <a href="#item2"> Actions Sidebar</a>
        <a href="#item3"> Actions Detials Style 01</a>
        <a href="#item4"> Actions Details Stype 02</a>
      </div>
    </div>
  );
}

export function BlogDropDown() {
  return (
    <div className={ListCss.dropdown}>
      <button className={ListCss.dropdown_button}>Blog <KeyboardArrowDownOutlinedIcon/> </button>
      <div className={ListCss.dropdown_content}>
        <a href="#item1">Blog Grid </a>
        <a href="#item2"> Blog Standard</a>
        <a href="#item3"> Blog Detals </a>
      </div>
    </div>
  );
}

export function PagesDropDown() {
  return (
    <div className={ListCss.dropdown}>
      <button className={ListCss.dropdown_button}>Pages <KeyboardArrowDownOutlinedIcon/></button>
      <div className={ListCss.dropdown_content}>
        <a href="#item1">About</a>
        <a href="#item1">Category</a>

        <div className={ListCss.subDropdown}>
          <a href="#item2">Seller <ChevronRightOutlinedIcon/> </a>
          <div className={ListCss.subDropdown_content}>
            <a href="#seller1">Seller 1</a>
            <a href="#seller2">Seller 2</a>
            <a href="#seller3">Seller 3</a>
          </div>
        </div>
        <a href="#item3">How to Sell</a>
        <a href="#item4">How to Bid</a>
        <a href="#item5">Dashboard</a>
        <a href="#item6">FAQs</a>
        <a href="#item7">Error</a>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <>
<a href="https://probid-nextjs.vercel.app/contact" className="text-white hover:text-blue-700">Contact</a>
</>
  );
}
