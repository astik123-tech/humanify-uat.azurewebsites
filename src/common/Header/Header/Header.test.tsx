import React from 'react'
import { render, fireEvent, screen,queryByAttribute  } from '@testing-library/react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Link } from "react-router-dom";
import {StyledNavLink} from '../../../styledComponents/Header'
// components
import Header from './Header'
configure({ adapter: new Adapter() }); 

describe('<Header />',()=>{
    const getById = queryByAttribute.bind(null, 'id');
    let wrapper = shallow(<Header/>)
    it("should render three link",()=>{
        expect(wrapper.find(StyledNavLink)).toHaveLength(3)
    })
    it("should render logo",()=>{
        expect(wrapper.find(Link)).toHaveLength(1)
    })
   
})