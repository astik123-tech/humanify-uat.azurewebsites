import React from 'react'
import { render, fireEvent, screen, queryByAttribute  } from '@testing-library/react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// components
import {
  Container,
  List
} from "../../styledComponents/AdmineHome";
import AdminHome from './AdminHome'
configure({ adapter: new Adapter() }); 

describe('<AdminHome />',()=>{ 
    test('should contain  container', () => {
     let wrapper = shallow(<AdminHome/>)
     expect(wrapper.find(Container)).toHaveLength(1)
  })   
  test('should contain three List container', () => {
     let wrapper = shallow(<AdminHome/>)
     expect(wrapper.find(List)).toHaveLength(3)
  })
  test('should contain text Tenants', () => {
      render(<AdminHome/>)
      const output = screen.getByText('Tenants')
      expect(output).toBeInTheDocument()
  })
  test('should contain text Groups', () => {
      render(<AdminHome/>)
      const output = screen.getByText('Groups')
      expect(output).toBeInTheDocument()
  })
  test('should contain text Users', () => {
      render(<AdminHome/>)
      const output = screen.getByText('Users')
      expect(output).toBeInTheDocument()
  })
})