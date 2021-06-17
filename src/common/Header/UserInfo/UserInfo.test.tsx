import React from 'react'
import {configure,shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// components
import UserInfo from './UserInfo';

configure({ adapter: new Adapter() }); 

describe('<UserInfo />',()=>{
   const wrapper = shallow(<UserInfo/>)
   it("name should not be undefined",()=>{
      expect(wrapper.find('#name')).not.toBeUndefined()
   })
   it("logo should not be NaN",()=>{
      expect(wrapper.find('#logo')).not.toBeNaN()
   })
})
