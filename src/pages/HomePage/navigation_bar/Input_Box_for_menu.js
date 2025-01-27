

import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Input, Space } from "antd";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const InputCheckforMenu = () => (
  <>
    <Space
      direction="vertical"
      className="gap-5 flex flex-col items-center align-middle w-full mt-3"
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
    </Space>
  </>
);

export default InputCheckforMenu;
