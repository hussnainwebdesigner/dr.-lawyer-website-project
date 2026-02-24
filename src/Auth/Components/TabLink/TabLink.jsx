import { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useAuth } from "../../../AuthContext/AuthContext";

const TabLink = () => {

  const { login } = useAuth();
  const [searchParams] = useSearchParams();
  const roleQuery = searchParams.get("role")?.toLowerCase();
  const [links] = useState([
    {
      name: "Log In",
      path: "/login",
    },
    {
      name: "Sign Up",
      path: "/sign-up",
    },
  ]);

  return (
    <div className="flex w-full justify-center rounded-full p-1 bg-white items-center ">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={`${link.path}?role=${roleQuery}`}
          className={({ isActive }) =>
            `
            w-full p-3 text-center rounded-full inter
            transition-all duration-300
            shadow-[#80808040] 
            cursor-pointer
            ${isActive
              ? "bg-[#642329] text-white"
              : "bg-white text-black hover:bg-[#642329] hover:text-white"
            }
          `
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default TabLink;
