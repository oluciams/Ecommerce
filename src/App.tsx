import styles from "./styles.module.css";
import { Home } from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./redux-store/store";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";

function App() {
  return (
    <section className={styles["App"]}>
      <Provider store={store}>
        <Header />
        <Cart />
        <Home />
      </Provider>
    </section>
  );
}

export default App;
