import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RepositoryList from "../RepositoryList";
import REPOSITORYLIST from "../mocks/RepositoryList.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(REPOSITORYLIST);
    },
  });
});

describe("Test cases for Repository List", () => {
  it("should renders the Repository List Component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <RepositoryList />
        </BrowserRouter>
      )
    );

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should render all the repository card component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <RepositoryList />
        </BrowserRouter>
      )
    );

    const repCards = screen.getAllByTestId("repCard");

    expect(repCards.length).toBe(30);
  });
});
