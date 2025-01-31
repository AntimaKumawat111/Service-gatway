

import React from "react";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Input, Space } from "antd";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const InputCheck = () => (
  <>
    <Space
      direction="vertical"
      className="gap-8 flex flex-row items-center align-middle"
    >
      <Search
        placeholder="Search Your product..."
        onSearch={onSearch}
        enterButton
        className="custom-search"
        style={{ width: 300 }}

        />

      <button className="w-auto pr-3 text-sm bg-white text-black flex items-center hover:bg-black hover:text-white transition-all duration-700 rounded-md">
        <AccountCircleOutlinedIcon
          style={{
            fontSize: "2rem",
            paddingTop: "0.4rem",
            paddingBottom: "0.4rem",
            marginRight: "10px",
            background: "black",
            color: "white",
            borderRadius: "5px",
          }}
        />
        My Account
      </button>
    </Space>
  </>
);

export default InputCheck;
