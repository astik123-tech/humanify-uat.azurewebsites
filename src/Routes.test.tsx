import React from "react";
import Routes from "./Routes";
import Header from "./common/Header/Header/Header";
import Home from "./components/Home/Home";
import MyDesk from "./components/MyDesk/MyDesk";
import Neighborhood from "./components/Neighborhood/Neighborhood";
import ProductionFloor from "./components/ProductionFloor/ProductionFloor";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom/extend-expect";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

jest.mock("./common/Header/Header/Header");
jest.mock("./components/Home/Home");
jest.mock("./components/MyDesk/MyDesk");
jest.mock("./components/Neighborhood/Neighborhood");
jest.mock("./components/ProductionFloor/ProductionFloor");

describe("Tests for App Router", () => {
  test("Should render page header and HomePage on default route", () => {
    Home.mockImplementation(() => <div>HomePageMock</div>);
    render(
      <MemoryRouter>
        <Routes />
      </MemoryRouter>
    );
    expect(screen.getByText("HomePageMock")).toBeInTheDocument();
  });
  test("should render neighborhood", () => {
    Neighborhood.mockImplementation(() => <div>NeighborhoodMock</div>);
    render(
      <MemoryRouter InitialEntries={["/neighborhood"]}>
        <Neighborhood />
      </MemoryRouter>
    );
    expect(screen.getByText("NeighborhoodMock")).toBeInTheDocument();
  });
  test("should render ProductionFloor", () => {
    ProductionFloor.mockImplementation(() => <div>ProductionFloorMock</div>);
    render(
      <MemoryRouter InitialEntries={["/production-floor"]}>
        <ProductionFloor />
      </MemoryRouter>
    );
    expect(screen.getByText("ProductionFloorMock")).toBeInTheDocument();
  });
  test("should render MyDesk", () => {
    MyDesk.mockImplementation(() => <div>MyDeskMock</div>);
    render(
      <MemoryRouter InitialEntries={["/my-desk"]}>
        <MyDesk />
      </MemoryRouter>
    );
    expect(screen.getByText("MyDeskMock")).toBeInTheDocument();
  });
});
