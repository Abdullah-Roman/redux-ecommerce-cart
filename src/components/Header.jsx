"use client";
import { Button, Navbar } from "keep-react";
import { ShoppingCart, User } from "phosphor-react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Header = ({ setShow }) => {
  const products = useSelector((state) => state.cart.value);
  return (
    <div>
      <Navbar fluid={true} className="bg-slate-300">
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Brand>
            <img src="/sh.png" alt="keep" width="100" height="40" />
          </Navbar.Brand>

          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <NavLink
              to=""
              className={({ isActive }) =>
                `block text-xl ${isActive ? "text-blue-500" : "text-black"}`
              }
            >
              Home
            </NavLink>
          </Navbar.Container>

          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              {/* <Navbar.Link linkName="Home" />
              <Navbar.Link linkName="Projects" />
              <Navbar.Link linkName="Blogs" />
              <Navbar.Link linkName="News" />
              <Navbar.Link linkName="Resources" /> */}
            </Navbar.Container>
          </Navbar.Collapse>

          <Navbar.Container className="flex items-center gap-3">
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-5"
            >
              <Navbar.Link
                icon={<User size={20} color="#444" />}
                iconAnimation={false}
              />
            </Navbar.Container>
            <NavLink>
              <Button
                size="xs"
                className="cursor-pointer"
                variant="outline"
                onClick={() => setShow(true)}
              >
                <span>
                  <ShoppingCart size={20} color="#444" />
                </span>
                <span className="ml-1 text-metal-600">
                  <span>Cart {products.length}</span>
                </span>
              </Button>
            </NavLink>

            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};

export default Header;
