import React from "react";
import BasicCard from "./BasicCard";

function ImageContainer() {
  return (
    <div
      className="flex flex-wrap justify-center gap-4"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      <BasicCard
        name={"Discover the best deals"}
        paragraph={
          "Egestas libero. Aenean id lacin est. Mauris urn purus, docni."
        }
      />
      <BasicCard
        name={"Standout Auctions"}
        paragraph={
          "Egestas libero. Aenean id lacin est. Mauris urn purus, docni."
        }
      />
      <BasicCard
        name={"Pay safely"}
        paragraph={
          "Egestas libero. Aenean id lacin est. Mauris urn purus, docni."
        }
      />
      <BasicCard
        name={"We're here to help"}
        paragraph={
          "Egestas libero. Aenean id lacin est. Mauris urn purus, docni."
        }
      />
    </div>
  );
}

export default ImageContainer;
