import CadastroNoticia from "./componentes/CadastroNoticia/CadastroNoticia";
import styles from "./App.module.css";
import ListaNoticias from "./componentes/ListarNoticia/ListaNoticias";

function App() {
  return (
    <div className={styles.pagina}>
      <header className={styles.cabecalho}>
        <h1>Notícias</h1>
      </header>

      <div className={styles.colunas}>
        <CadastroNoticia />

        <ListaNoticias/>

      </div>
    </div>
  );
}

export default App;