import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../../Header";
import store from "../../Utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Render the header componet on load", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);
  const logo = header.getAllByTestId("logo");
  console.log("logo");
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Render the header componet on green icon", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);
  const greenIcon = header.getByTestId("greenIcon");
  console.log("greenIcon");
  expect(greenIcon.innerHTML).toBe("✔");
});
