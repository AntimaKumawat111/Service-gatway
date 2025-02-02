import React from "react";
// import "../../../App.css";
import "../../App.css";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Input, Space } from "antd";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const InputBox = () => (
  <Space
    direction="vertical"
    className="gap-4 flex flex-col md:flex-row items-center justify-between w-full md:w-auto flex-wrap"
  >
    <Search
      placeholder="Search Your product..."
      onSearch={onSearch}
      enterButton
      className="custom-search w-full md:w-[300px] min-w-0"
    />

    <button className="pr-3 text-sm bg-white text-black flex items-center hover:bg-black hover:text-white transition-all duration-700 rounded-md">
      <AccountCircleOutlinedIcon
        className="mr-2 bg-black text-white rounded-md"
        style={{ fontSize: "2rem",padding:'0.2rem' }}
      />
      My Account
    </button>
  </Space>
);

export default InputBox;
