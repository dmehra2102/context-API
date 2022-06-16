import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
      const heading = [
            {
                  style: { color: "whitesmoke" },
                  to: "/",
                  title: "Home",
            },
            {
                  style: { color: "whitesmoke" },
                  to: "/books",
                  title: "Books",
            },
            {
                  style: { color: "whitesmoke" },
                  to: "/users",
                  title: "Users",
            },
            {
                  style: { color: "whitesmoke" },
                  to: "/setting",
                  title: "Setting",
            },
            {
                  style: { color: "whitesmoke" },
                  to: "/login",
                  title: "Login",
            },
      ];
      return (
            <Navbox>
                  {heading.map((itme) => {
                        return (
                              <NavLink
                                    key={itme.title}
                                    style={itme.style}
                                    to={itme.to}
                              >
                                    {itme.title}
                              </NavLink>
                        );
                  })}
            </Navbox>
      );
}

const Navbox = styled.div`
      background-color: rgb(25, 49, 60);
      font-size: 20px;
      color: whitesmoke !important;
      justify-content: space-evenly;
      display: flex;
      height: 35px;
`;
export default Navbar;
