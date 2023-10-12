import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Root from "@/routes/root";
import { store } from "@/app/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
