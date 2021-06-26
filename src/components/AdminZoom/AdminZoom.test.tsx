import React from 'react'
import { render, fireEvent, screen, queryByAttribute  } from '@testing-library/react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// components
import {AdminZoom} from './AdminZoom'
configure({ adapter: new Adapter() }); 

describe('<AdminZoom />',()=>{    
  test('should contain text Zoom Channels', () => {
      render(<AdminZoom/>)
      const output = screen.getByText('Zoom Channels')
      expect(output).toBeInTheDocument()
  })
})