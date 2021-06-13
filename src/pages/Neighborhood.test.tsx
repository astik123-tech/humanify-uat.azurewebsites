import React from 'react'
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { render, screen } from '@testing-library/react';
// components
import Neighborhood from './Neighborhood';

configure({ adapter: new Adapter() }); 

describe('<Neighborhood />',()=>{
   it('check Neighborhood link',()=>{
      render(<Neighborhood />)
      const output = screen.getByText('Neighborhood',{exact:true})
      expect(output).toBeInTheDocument()
  })
})
