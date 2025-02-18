import React from "react";

function Nav() {
  let navItems = [
    {
      name: "About",
      dest: "about",
    },
    {
      name: "Services",
      dest: "services",
    },
    {
      name: "Projects",
      dest: "projects",
    },
    {
      name: "Contact",
      dest: "contact",
    },
  ];

  return (

      <nav className="grid sm:grid-cols-12 grid-col-1 min-h-[80px] bg-[#0D1B2A] sticky top-0">
          <div className="sm:col-span-2 sm:block hidden "></div>
          <div className="sm:col-span-8">
           <ul className="flex p-2 justify-center items-center mt-1">
              {
                  navItems.map((item, idx) => (
                    <li className="text-2xl flex items-center mr-14 hover:cursor-pointer hover:bg-[#1B263B] 
                                   px-4 py-2 rounded-2xl ">
                      <a href={item.dest}>{item.name}</a>
                    </li>
                  ))
              }
           </ul>
          </div>

          {/* //menu */}
          {/* <div className="sm:hidden col-span-1 w-[100px] border absolute right-0 bottom-0"></div> */}
      </nav>

  );
}

export default Nav;
