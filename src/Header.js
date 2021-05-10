import React from 'react'
import Headeritem from './Headeritem'
import  { BadgeCheckIcon, ClockIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from "@heroicons/react/outline"
function Header() {
    return (
        <div className ="flex flex-col sm:flex-row m-5 justify-between   items-center h-auto" >
            <div className=" flex flex-grow justify-evenly max-w-2xl " >
            <Headeritem title = "Home" Icon={HomeIcon}  />
           <Headeritem title ="Search" Icon = {SearchIcon} />                 
                <Headeritem title = "Collection" Icon={CollectionIcon}  /> 
                <Headeritem title = "Verified" Icon={BadgeCheckIcon}  />
                <Headeritem title = "User" Icon={UserIcon}  />
                <Headeritem title = "Trending" Icon={LightningBoltIcon}  />
                <Headeritem title = "Account" Icon={ClockIcon}  />
            </div>
            <img src="https://links.papareact.com/ua6" width={200} 
             alt="logo"  height={100} />
        </div>
    )
}

export default Header
