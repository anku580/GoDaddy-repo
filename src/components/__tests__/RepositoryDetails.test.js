import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import RepositoryDetails from "../RepositoryDetails";
import REPOSITORYLIST from "../mocks/RepositoryList.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
      repositoryInfo: { name: "gdapi-php" },
    },
  }),
}));

describe("Test cases for Repository Detai", () => {
  it("should renders the Repository Detail Component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <RepositoryDetails />
        </BrowserRouter>
      )
    );

    const repDetails = screen.getByTestId("repositoryDetails");

    expect(repDetails).toBeInTheDocument();
  });

  it("should renders the Correct Repository Name", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <RepositoryDetails />
        </BrowserRouter>
      )
    );

    const repositoryCard = screen.getByText(REPOSITORYLIST[0].name);

    expect(repositoryCard).toBeInTheDocument();
  });
});
