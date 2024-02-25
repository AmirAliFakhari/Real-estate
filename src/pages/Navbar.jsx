"use client";

import { Button, Navbar } from "flowbite-react";

export default function TopNavbar() {
  return (
    <Navbar fluid rounded className="fixed z-10 w-full  border-b-2">
      <Navbar.Brand href="#">
        <img
          src="src/assets/icons/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          مشاور املاک
        </span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          اجاره
        </Navbar.Link>
        <Navbar.Link href="#">اخبار روز</Navbar.Link>
        <Navbar.Link href="#">مشاورین املاک</Navbar.Link>
        <Navbar.Link href="#">املاک و مستغلات</Navbar.Link>
        <Navbar.Link href="#">خرید</Navbar.Link>
      </Navbar.Collapse>

      <div className="flex md:order-2">
        <Button color="red">ثبت آگهی</Button>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
