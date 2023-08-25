import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RepositoryCard from "../RepositoryCard";
import REPOSITORYLIST from "../mocks/RepositoryList.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

describe("Test cases for Repository Card", () => {
  it("should renders the Repository Card Component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <RepositoryCard {...REPOSITORYLIST[0]} />
        </BrowserRouter>
      )
    );

    const repositoryCard = screen.getByTestId("repCard");

    expect(repositoryCard).toBeInTheDocument();
  });

  it("should renders the Correct Repository Name", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <RepositoryCard {...REPOSITORYLIST[0]} />
        </BrowserRouter>
      )
    );

    const heading = screen.getByText("gdapi-php");

    expect(heading).toBeInTheDocument();
  });
});
