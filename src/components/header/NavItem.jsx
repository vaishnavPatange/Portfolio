import React from 'react'

function NavItem({
        children,
        dest="Home",


}) {
  return (
    <div className="m-auto p-1">
        <a className="text-white text-xl" href={dest}>{children}</a>
    </div>
  )
}

export default NavItem
