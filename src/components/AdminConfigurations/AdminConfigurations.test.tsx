import React from 'react'
import { render, fireEvent, screen, queryByAttribute  } from '@testing-library/react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// components
import {AdminConfigurations} from './AdminConfigurations'
configure({ adapter: new Adapter() }); 

describe('<AdminConfigurations />',()=>{    
  test('should contain text Configurations', () => {
      render(<AdminConfigurations/>)
      const output = screen.getByText('Configurations')
      expect(output).toBeInTheDocument()
  })
})