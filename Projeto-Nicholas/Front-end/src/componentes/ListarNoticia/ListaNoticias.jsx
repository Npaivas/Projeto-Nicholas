import { useState } from "react";
import styles from "./ListaNoticias.module.css";

function ListaNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [mensagem, setMensagem] = useState("");

  async function buscar() {
    const resposta = await fetch("http://localhost:8080/noticias");

    if (!resposta.ok) {
      setMensagem("Erro " + resposta.status);
      return;
    }

    const dados = await resposta.json();
    setNoticias(dados);
    setMensagem("");
  }

  return (
    <section className={styles.card}>
      <div className={styles.cabecalho}>
        <h2>Notícias cadastradas</h2>
        <button className={styles.botaoBuscar} onClick={buscar}>
          Buscar notícias
        </button>
      </div>

      <div className={styles.conteudo}>
        {noticias.length === 0 && (
          <div className={styles.estadoVazio}>
          </div>
        )}

        {noticias.length > 0 && (
          <ul className={styles.lista}>
            {noticias.map((noticia) => (
              <li key={noticia.id} className={styles.item}>
                <p className={styles.categoria}>
                  {noticia.categoria} — {noticia.dataPublicacao}
                </p>
                <h3>{noticia.titulo}</h3>
                <p>{noticia.conteudo}</p>
                <p className={styles.autor}>{noticia.autor}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className={styles.mensagem}>{mensagem}</p>
    </section>
  );
}

export default ListaNoticias;
