import styles from "./styles.module.css";
import { Home } from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./redux-store/store";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <section className={styles["App"]}>
        <Header />
        <Cart />
        <Home />
      </section>
    </Provider>
  );
}

export default App;
