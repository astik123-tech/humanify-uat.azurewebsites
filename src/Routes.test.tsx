import React from "react";
import Routes from "./Routes";

import { AdminConfigurations } from "./components/AdminConfigurations/AdminConfigurations";
import { AdminGroups } from "./components/AdminGroups/AdminGroups";
import AdminHome from './components/AdminHome/AdminHome'
import { AdminTenants } from "./components/AdminTenants/AdminTenants";
import { AdminUsers } from "./components/AdminUsers/AdminUsers";
import { AdminZoom } from "./components/AdminZoom/AdminZoom";

import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom/extend-expect";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

jest.mock("./components/AdminConfigurations/AdminConfigurations");
jest.mock("./components/AdminGroups/AdminGroups");
jest.mock("./components/AdminHome/AdminHome");
jest.mock("./components/AdminTenants/AdminTenants");
jest.mock("./components/AdminUsers/AdminUsers");
jest.mock("./components/AdminZoom/AdminZoom");

describe("Tests for App Router", () => {
  test("Should render page header and HomePage on default route", () => {
    AdminHome.mockImplementation(() => <div>HomePageMock</div>);
    render(
      <MemoryRouter>
        <Routes />
      </MemoryRouter>
    );
    expect(screen.getByText("HomePageMock")).toBeInTheDocument();
  });
  test("should render AdminConfigurations", () => {
    AdminConfigurations.mockImplementation(() => <div>AdminConfigurationsMock</div>);
    render(
      <MemoryRouter InitialEntries={["/Configurations"]}>
        <AdminConfigurations />
      </MemoryRouter>
    );
    expect(screen.getByText("AdminConfigurationsMock")).toBeInTheDocument();
  });
  test("should render AdminTenants", () => {
    AdminTenants.mockImplementation(() => <div>AdminTenantsMock</div>);
    render(
      <MemoryRouter InitialEntries={["/tenants"]}>
        <AdminTenants />
      </MemoryRouter>
    );
    expect(screen.getByText("AdminTenantsMock")).toBeInTheDocument();
  });
  test("should render AdminUsers", () => {
    AdminUsers.mockImplementation(() => <div>AdminUsersMock</div>);
    render(
      <MemoryRouter InitialEntries={["/users"]}>
        <AdminUsers />
      </MemoryRouter>
    );
    expect(screen.getByText("AdminUsersMock")).toBeInTheDocument();
  });
  test("should render AdminZoom", () => {
    AdminZoom.mockImplementation(() => <div>AdminZoomMock</div>);
    render(
      <MemoryRouter InitialEntries={["/zoom"]}>
        <AdminZoom />
      </MemoryRouter>
    );
    expect(screen.getByText("AdminZoomMock")).toBeInTheDocument();
  });
});
