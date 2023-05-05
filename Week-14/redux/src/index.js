import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./app/theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./app/redux/store";
import Routers from "./app/router/Routers";
import { persistStore } from "redux-persist";
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routers />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);
