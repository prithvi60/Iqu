"use client";
import { NAV_LINKS } from "@/constants";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Image,
} from "@nextui-org/react";
import { Link as MyLink } from "react-scroll";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const OtherNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" position="sticky">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className="flex justify-between items-center w-full gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="logo" width={40} height={40} />
              <h3 className="block md:hidden lg:block font-Montserrat font-bold text-lg lg:text-2xl">
                iQu Clinic Healthcare
              </h3>
            </Link>
            {/* <div className="flex items-center gap-4"> */}
            {/* <Link href={"/"}>
                    <MdContactPhone className="h-7 w-7 block md:hidden" />
                  </Link> */}
            <MyLink
              to={"enquire"}
              spy={true}
              offset={-50}
              smooth={true}
              duration={500}
            >
              <FaPhoneAlt className="h-8 w-8 block md:hidden bg-yellow-400 rounded-full p-2" />
            </MyLink>
            {/* </div> */}
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex gap-4 lg:gap-5 xl:gap-10"
        justify="center"
      >
        {/* {NAV_LINKS.map((item, index) => ( */}
        <NavbarItem>
          <MyLink
            to={"FAQ"}
            spy={true}
            offset={50}
            smooth={true}
            duration={500}
            className="btn capitalize cursor-pointer w-full font-Lato font-medium md:text-base lg:text-lg xl:text-xl hover:opacity-60"
          >
            FAQ
          </MyLink>
        </NavbarItem>
        <MyLink
          to={"enquire"}
          spy={true}
          offset={50}
          smooth={true}
          duration={500}
        >
          <button
            className={`flexCenter gap-3 rounded-full bg-secondary px-5 py-3 text-black font-Lato font-semibold ml-8 hover:bg-opacity-80`}
          >
            Enquire
          </button>
        </MyLink>
      </NavbarContent>

      <NavbarMenu>
        {/* {NAV_LINKS.map((item, index) => ( */}
        <NavbarMenuItem className="ms-14 mt-10">
          <Link href={"/typesoftherapy"}>
            <h4
              className="btn capitalize cursor-pointer font-Lato font-semibold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Types of Counselling
            </h4>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default OtherNavbar;
