import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    const { container } = render(<Home />);
    expect(container.querySelector("#events")).toBeInTheDocument();
  });

  it("a list a people is displayed", async () => {
    render(<Home />);
    expect(screen.getByText("Samira")).toBeInTheDocument();
    expect(screen.getByText("Jean-baptiste")).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Luís")).toBeInTheDocument();
    expect(screen.getByText("Christine")).toBeInTheDocument();
    expect(screen.getByText("Isabelle")).toBeInTheDocument();
  });

  it("a footer is displayed", () => {
    const { container } = render(<Home />);
    expect(container.querySelector("footer")).toBeInTheDocument();
  });

  it("an event card, with the last event, is displayed", () => {
    render(<Home />);
    expect(screen.getByText("Notre derniére prestation")).toBeInTheDocument();
  });
});
