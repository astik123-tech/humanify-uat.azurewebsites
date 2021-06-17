import React from 'react'
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { render, screen } from '@testing-library/react';
// components
import MyDesk from './MyDesk';

configure({ adapter: new Adapter() }); 

describe('<MyDesk />',()=>{
   it('check MyDesk link',()=>{
      render(<MyDesk />)
      const output = screen.getByText('My Desk',{exact:true})
      expect(output).toBeInTheDocument()
  })
})