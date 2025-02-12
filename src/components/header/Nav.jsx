import React from "react";
import NavItem from "./NavItem";

function Nav() {
        let navItems = [
                {
                        name: "About",
                        dest: "about",
                },
                {
                        name: "Services",
                        dest: "about",
                },
                {
                        name: "Projects",
                        dest: "about",
                },
                {
                        name: "Contact",
                        dest: "about",
                },
        ];

        return (
                <div className="w-full h-16 bg-[#0D1B2A] flex">
                        <div className="flex-auto mt-0">
                                <img src="./src/assets/logo.png" className="object-cover h-16 w-auto" alt="logo"/>
                        </div>
                        <div className="flex-auto flex">
                                {navItems.map((item, idx) => (
                                        <NavItem children={item.name} dest={item.dest} key={idx} />
                                ))}
                        </div>
                        <div className="flex-auto"></div>
                </div>
        );
}

export default Nav;
