import React from 'react'
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// components
import ProductionFloor from './ProductionFloor';
import { render, screen } from '@testing-library/react';

configure({ adapter: new Adapter() }); 

describe('<ProductionFloor />',()=>{
   it('check productionFloor link',()=>{
      render(<ProductionFloor />)
      const output = screen.getByText('Production FLoor',{exact:true})
      expect(output).toBeInTheDocument()
  })
})
