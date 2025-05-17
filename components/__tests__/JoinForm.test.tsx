import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import JoinForm from "../JoinForm";

describe("JoinForm", () => {
  beforeEach(() => {
    render(<JoinForm />);
  });

  it("renders the form with all required fields", () => {
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mobile Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
  });

  it("shows validation errors for empty fields", async () => {
    const submitButton = screen.getByRole("button", { name: /Join Now/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/First name must be at least 2 characters/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Last name must be at least 2 characters/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Mobile number must be at least 10 digits/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/Please select a state/i)).toBeInTheDocument();
    });
  });

  it("submits the form with valid data", async () => {
    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ message: "Form submitted successfully" }),
    });

    // Fill in the form
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Mobile Number/i), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText(/State/i), {
      target: { value: "Maharashtra" },
    });

    // Submit the form
    const submitButton = screen.getByRole("button", { name: /Join Now/i });
    fireEvent.click(submitButton);

    // Check if the form was submitted
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          mobileNumber: "1234567890",
          state: "Maharashtra",
        }),
      });
    });
  });

  it("handles form submission error", async () => {
    // Mock the fetch function to return an error
    global.fetch = jest
      .fn()
      .mockRejectedValueOnce(new Error("Failed to submit form"));

    // Fill in the form
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Mobile Number/i), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText(/State/i), {
      target: { value: "Maharashtra" },
    });

    // Submit the form
    const submitButton = screen.getByRole("button", { name: /Join Now/i });
    fireEvent.click(submitButton);

    // Check if the error was handled
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });
  });
});
