import styles from "./styles.module.css";
import { Home } from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./redux-store/store";


function App() {
  return (
    <section className={styles["App"]}>
      <Provider store={store}>
        <Home />
      </Provider>
    </section>
  );
}

export default App;
