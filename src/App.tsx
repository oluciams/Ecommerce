import "./styles.css";
import { Home } from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <section className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </section>
  );
}

export default App;
