import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Input, Space } from "antd";
import { Link } from "react-router-dom"; // Import Link for navigation

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const InputBoxforMenu = () => (
  <>
    <Space
      direction="vertical"
      className="gap-3 flex flex-col items-center align-middle w-full mt-1"
    >
      <Search
        placeholder="Search Your product..."
        onSearch={onSearch}
        enterButton
        className="custom-search"
        style={{ width: "100%" }} // Input takes full width of parent
      />

      <button className="w-full p-3 pl-9 pr-9 text-base bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-700 rounded-md">
        <AccountCircleOutlinedIcon className="mr-2" />
        My Account
      </button>
      <Link to="/course">
        <button className="border border-black text-sm font-semibold bg-blue-500 hover:bg-blue-700 text-black  rounded-3xl pl-20 pr-20 h-7 hover">
          Course
        </button>
      </Link>
        
      <Link to="/payment">
        <button className="border  border-black text-sm font-semibold bg-blue-500 hover:bg-blue-700  text-black rounded-3xl pl-20 pr-20 h-7">
          Payment
        </button>
      </Link>
    </Space>
  </>
);

export default InputBoxforMenu;
