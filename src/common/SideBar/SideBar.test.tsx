import React from 'react'
import { render, fireEvent, screen, queryByAttribute  } from '@testing-library/react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// components
import Sidebar from './Sidebar'
//icon
import { VscHome } from "react-icons/vsc";
import { MdWidgets } from "react-icons/md";
import { MdBusiness } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CgChevronDoubleRightO } from "react-icons/cg";
import { CgChevronDoubleLeftO } from "react-icons/cg";


configure({ adapter: new Adapter() }); 

describe('<Sidebar />',()=>{    
  let wrapper = shallow(<Sidebar/>)
  test('should render common icon, sidebar', () => {
      expect(wrapper.find(VscHome)).toHaveLength(1)
      expect(wrapper.find(MdWidgets)).toHaveLength(1)
      expect(wrapper.find(MdBusiness)).toHaveLength(2)
      expect(wrapper.find(MdGroup)).toHaveLength(1)
      expect(wrapper.find(FaRegUser)).toHaveLength(1)
      expect(wrapper.find(CgChevronDoubleRightO)).toHaveLength(1)
  }) 
})