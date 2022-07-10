import React from "react";
import{DiCreativecommons} from "react-icons/di"
import{GiComb} from "react-icons/gi"
import {AiOutlineGlobal} from "react-icons/ai"
import{FaMedal} from "react-icons/fa"
import{FcSearch} from "react-icons/fc"
import{IoMegaphoneOutline} from "react-icons/io5"
import{FiPercent} from "react-icons/fi"
import{FiType} from "react-icons/fi"
import{RiLightbulbLine} from "react-icons/ri"

 

export const  tedhenat =[
        {
        icon: <DiCreativecommons size= '2em' color = "blue"/>,
        title: 'The TLD',
        description: 'Does the domain extension math the language of the domain name?'
        },
        {
            icon: <GiComb size='2em' color="blue"  />,
            title: 'Domain Length',
            description: 'Is the domain short enough to  remember?'
        },
        {
            icon: <AiOutlineGlobal size= '2em' color="blue"   />,
            title: 'Language',
            description: 'How complex is actuall domain name?'
        },
        {
          icon: <FaMedal size='2em' color="blue" />,
          title: 'International recognition',
          description: 'Can the domain name be used  on an international scale?'
        },
        {
          icon: <FcSearch size='2em' color="blue"/>,
          title:'Search engine',
          description:'Does the domain follow  search engine guidelines?'
        },
        {
            icon: <IoMegaphoneOutline size='2em' color="blue"/>,
            title: 'Adevrtising Potential',
            description:'Could the domain used for advertising campagins?'
        },
        {
            icon:<FiPercent size='2em' color="blue"/>,
            title:'Sales Opportunities',
            description: 'Can the domain name be used on an international scale?'
        },
        {
            icon: <FiType size='2em' color="blue"/>,
            title: 'Typo susceptibility',
            description: 'How high is the risk of mistyping the domain name?'
        },
        {
            icon:<RiLightbulbLine size='2em' color="blue"/>,
            title: 'Bussines potential',
            description: 'Can the domain name be used as your company address?'
        },
    ];
    

