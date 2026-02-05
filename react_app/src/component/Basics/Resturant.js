import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [...new Set(Menu.map((curElem) => {
    return curElem.category;
})), "All",
]
console.log(uniqueList);
export const Resturant = () => {
    const [menuData, setmenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    const filterItems = (category) => {
        if (category === "All") {
            setmenuData(Menu);
            return
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category
        });
        setmenuData(updatedList);
    };

    return (
        <>
            <Navbar filterItems={filterItems} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}


