import React from 'react'
import { render, fireEvent, screen, queryByAttribute  } from '@testing-library/react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// components
import {AdminGroups} from './AdminGroups'
configure({ adapter: new Adapter() }); 

describe('<AdminGroups />',()=>{    
  test('should contain text Groups', () => {
      render(<AdminGroups/>)
      const output = screen.getByText('Groups')
      expect(output).toBeInTheDocument()
  })
})