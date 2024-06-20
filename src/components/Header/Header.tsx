import { FC, useState, useEffect } from "react";
import { HeaderProps } from "./Header.types";
import Logo from "./components/Logo/Logo";
import Button from "src/common/Button/Button";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";

const Header: FC<HeaderProps> = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserName = localStorage.getItem("userName");

    if (token && storedUserName) {
      setUserName(storedUserName);
    } else {
      setUserName(null);
    }
  }, []);

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/registration";

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="header">
      <Logo />
      {!isAuthPage && (
        <>
          {userName && <span className="user-name">{userName}</span>}
          <Button buttonText="LOGOUT" onClick={handleLogout} />
        </>
      )}
    </header>
  );
};

export default Header;
