import React from 'react'
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from './Sidebar'
import { VscHome } from "react-icons/vsc";
import { MdWidgets } from "react-icons/md";
import { MdBusiness } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CgChevronDoubleRightO } from "react-icons/cg";
import { CgChevronDoubleLeftO } from "react-icons/cg";
import { SideBarLink } from "../../styledComponents/SideBar";
import { CustomDiv } from "../../styledComponents/AdmineHome";
import enableHooks from 'jest-react-hooks-shallow';
import { render, fireEvent, screen, queryByAttribute  } from '@testing-library/react';
configure({ adapter: new Adapter() }); 
enableHooks(jest);


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

  test('should contain SideBarLink', () => {
    expect(wrapper.find(SideBarLink)).toHaveLength(6)
  })

})