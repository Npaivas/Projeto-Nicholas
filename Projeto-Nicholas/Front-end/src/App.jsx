import CadastroNoticia from "./components/CadastroNoticia/CadastroNoticia";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.pagina}>
      <header className={styles.cabecalho}>
        <h1>Notícias</h1>
      </header>

      <div className={styles.colunas}>
        <CadastroNoticia />
      </div>
    </div>
  );
}

export default App;
