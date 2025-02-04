import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TextField, InputAdornment } from "@mui/material";

function EmailContainer() {
  return (
    <div className="w-[100%] sm:w-[60%] lg:w-[45%]">
      <h1 className="font-semibold text-xl text-center tracking-wider mb-3">
        Join our newsletter & more information
      </h1>
      <div>
        <TextField
          type="email"
          placeholder="Email Address"
          variant="outlined"
          sx={{
            border: "1px solid white",
            opacity: "0.6",
            borderRadius: "10px",
            marginBottom: "2rem",
            color: "white",
            "& input::placeholder": {
              color: "white",
              opacity: 0.4,
            },
          }}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" className="text-white opacity-50">
                <ArrowForwardIcon
                  style={{ cursor: "pointer", color: "white" }}
                />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div>
        <h3 className="font-semibold text-md text-start tracking-wide mb-3">
          Secured Payment Gateways
        </h3>
        <div className="flex items-center justify-evenly bg-gray-600 p-3 rounded-md">
          <div className="flex flex-col gap-5 sm:flex-row">
            <img
              src="https://probid-nextjs.vercel.app/assets/img/home1/icon/visa.svg"
              alt="visa-logo"
            />
            <img
              src="https://probid-nextjs.vercel.app/assets/img/home1/icon/master-card.svg"
              alt="master-card-logo "
            />
          </div>
          <div className="flex flex-col gap-5 sm:flex-row">
            <img
              src="https://probid-nextjs.vercel.app/assets/img/home1/icon/american-express.svg"
              alt="american-express-logo"
            />
            <img
              src="https://probid-nextjs.vercel.app/assets/img/home1/icon/maestro.svg"
              alt="maestro-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailContainer;
