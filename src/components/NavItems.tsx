"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { useState } from "react"
import NavItem from "./NavItem"

const NavItems = () => {
  const [activeIndex,setactiveIndex]= useState<null | number>(null)
  const isAnyOpen= activeIndex !== null
  
  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category,i)=>{
          const handleOpen=()=>{
            if(activeIndex===i){
              
              setactiveIndex(null)
            }
            else{
              setactiveIndex(i)
            }
          }
            const isOpne= i === activeIndex
return (
  <NavItem category={category} handleOpen={handleOpen} isOpen={isOpne} key={category.value} isAnyOpen={isAnyOpen}/>
)
      })}


    </div>
  )
}

export default NavItems