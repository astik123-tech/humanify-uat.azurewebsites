import React from 'react'
import { render, fireEvent, screen, queryByAttribute  } from '@testing-library/react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Logo, CustomDiv } from "../../styledComponents/AdmineHome";
import {BsBoxArrowRight} from 'react-icons/bs'

// components
import AdminHeader from './AdminHeader'
configure({ adapter: new Adapter() }); 

describe('<AdminHeader />',()=>{    
    test('should render logo', () => {
        const wrapper = shallow(<AdminHeader/>)
        expect(wrapper.find(Logo)).toHaveLength(1)
    })
    test('should have custome div',()=>{
        const wrapper = shallow(<AdminHeader/>)
        expect(wrapper.find(CustomDiv)).toHaveLength(1)
    })
    test('should contain  icon <BsBoxArrowRight/>', () => {
        const wrapper = shallow(<AdminHeader/>)
        expect(wrapper.find(BsBoxArrowRight)).toHaveLength(1)
    })
    test('should contain Frederick ', () => {
        render(<AdminHeader/>)
        const output = screen.getByText('Frederick')
        expect(output).toBeInTheDocument()
    })
})