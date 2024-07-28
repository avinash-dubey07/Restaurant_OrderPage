'use client'
import HeaderTop from "./components/HeaderTop";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

export default function Page() {
  return <div>
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HeaderTop />
      </PersistGate>
      </Provider>
  </div>
}
