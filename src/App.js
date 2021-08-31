import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import CakeContaier from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='App'>
          {/* <CakeContaier /> */}

          <HooksCakeContainer />
          <HooksIceCreamContainer />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
