import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { TEST_ID } from "./config/testId";

describe("Todo List", () => {
  test("App container should be rendered", () => {
    const { container } = render(<App />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
  test("App title should be rendered", () => {
    render(<App />);
    const apptitle = screen.getByTestId(TEST_ID.APP_TITLE);
    expect(apptitle).toHaveTextContent("Todo List Sample");
  });
  test("Todo input should be rendered", () => {
    render(<App />);
    const todoInput = screen.getByTestId(TEST_ID.TODO_INPUT);
    const addButton = screen.getByTestId(TEST_ID.ADD_BUTTON);

    fireEvent.change(todoInput, { target: { value: "test" } });
    fireEvent.click(addButton);

    const todoItem = screen.getByTestId(`${TEST_ID.TODO_ITEM}_test`);
    expect(todoItem).toBeInTheDocument();
  });
  test("Todo item should be removed", () => {
    render(<App />);
    const todoInput = screen.getByTestId(TEST_ID.TODO_INPUT);
    const addButton = screen.getByTestId(TEST_ID.ADD_BUTTON);

    fireEvent.change(todoInput, { target: { value: "delete" } });
    fireEvent.click(addButton);

    const todoItem = screen.getByTestId(`${TEST_ID.TODO_ITEM}_delete`);
    fireEvent.click(todoItem);
    expect(todoItem).not.toBeInTheDocument();
  });
});
