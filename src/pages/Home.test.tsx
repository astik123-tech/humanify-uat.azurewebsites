import React from 'react'
import { render, screen } from '@testing-library/react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// components
import Home from './Home';

configure({ adapter: new Adapter() }); 
describe('<Home />',()=>{
   it('check Home link',()=>{
      render(<Home />)
      const output = screen.getByText('Welcome',{exact:true})
      expect(output).toBeInTheDocument()
  })
})
