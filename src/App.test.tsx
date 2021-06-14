import React from 'react'
import App from './App'
import Header  from './common/header/Header'
import Home from './pages/Home'
import MyDesk from './pages/MyDesk'
import Neighborhood from './pages/Neighborhood'
import ProductionFloor from './pages/ProductionFloor'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import '@testing-library/jest-dom/extend-expect'
import {configure, mount} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() })

jest.mock('./common/header/Header')
jest.mock('./pages/Home')
jest.mock('./pages/MyDesk')
jest.mock('./pages/Neighborhood')
jest.mock('./pages/ProductionFloor')


describe("Tests for App Router", () => {
  test("Should render page header and HomePage on default route", () => {
    Header.mockImplementation(() => <div>PageHeaderMock</div>)
    Home.mockImplementation(() => <div>HomePageMock</div>)
    render(<MemoryRouter>
        <App/>
      </MemoryRouter>
    )
    expect(screen.getByText("PageHeaderMock")).toBeInTheDocument()
    expect(screen.getByText("HomePageMock")).toBeInTheDocument()
  })
  test('should render neighborhood',() => {
    Header.mockImplementation(() => <div>PageHeaderMock</div>)
    Neighborhood.mockImplementation(() => <div>NeighborhoodMock</div>)
    render(<MemoryRouter InitialEntries={["/neighborhood"]}>
        <Header/>
        <Neighborhood/>
      </MemoryRouter>
    )
    expect(screen.getByText("PageHeaderMock")).toBeInTheDocument()
    expect(screen.getByText("NeighborhoodMock")).toBeInTheDocument()
  })
  test('should render ProductionFloor',() => {
    Header.mockImplementation(() => <div>PageHeaderMock</div>)
    ProductionFloor.mockImplementation(() => <div>ProductionFloorMock</div>)
    render(<MemoryRouter InitialEntries={["/ProductionFloor"]}>
        <Header/>
        <ProductionFloor/>
      </MemoryRouter>
    )
    expect(screen.getByText("PageHeaderMock")).toBeInTheDocument()
    expect(screen.getByText("ProductionFloorMock")).toBeInTheDocument()
  })
  test('should render MyDesk',() => {
    Header.mockImplementation(() => <div>PageHeaderMock</div>)
    MyDesk.mockImplementation(() => <div>MyDeskMock</div>)
    render(<MemoryRouter InitialEntries={["/MyDesk"]}>
        <Header/>
        <MyDesk/>
      </MemoryRouter>
    )
    expect(screen.getByText("PageHeaderMock")).toBeInTheDocument()
    expect(screen.getByText("MyDeskMock")).toBeInTheDocument()
  })
})
