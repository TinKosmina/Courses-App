import { FC } from "react";
import { LogoProps } from "./Logo.types";
import logo from "../../../../assets/logo-no-background.png";
import "./Logo.css";

const Logo: FC<LogoProps> = () => {
  return (
    <img
      className="logo"
      src={logo}
      alt="website-logo"
      width={220}
      height={45}
    />
  );
};

export default Logo;
