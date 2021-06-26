import React from 'react'
import { render, fireEvent, screen, queryByAttribute  } from '@testing-library/react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// components
import {AdminUsers} from './AdminUsers'
configure({ adapter: new Adapter() }); 

describe('<AdminUsers />',()=>{    
  test('should contain text Users', () => {
      render(<AdminUsers/>)
      const output = screen.getByText('Users')
      expect(output).toBeInTheDocument()
  })
})