import React from 'react'
import { render, fireEvent, screen, queryByAttribute  } from '@testing-library/react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// components
import {AdminTenants} from './AdminTenants'
configure({ adapter: new Adapter() }); 

describe('<AdminTenants />',()=>{    
  test('should contain text Tenants', () => {
      render(<AdminTenants/>)
      const output = screen.getByText('Tenants')
      expect(output).toBeInTheDocument()
  })
})