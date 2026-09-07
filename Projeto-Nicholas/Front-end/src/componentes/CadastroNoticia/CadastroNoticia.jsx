import { useState } from "react";
import styles from "./CadastroNoticia.module.css";

function CadastroNoticia() {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [autor, setAutor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [dataPublicacao, setDataPublicacao] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function cadastrar() {
    const resposta = await fetch("http://localhost:8080/noticias", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        titulo,
        conteudo,
        autor,
        categoria,
        dataPublicacao,
      }),
    });

    if (!resposta.ok) {
      setMensagem("Erro " + resposta.status);
      return;
    }

    const dados = await resposta.json();
    setMensagem(dados.mensagem);
    setTitulo("");
    setConteudo("");
    setAutor("");
    setCategoria("");
    setDataPublicacao("");
  }

  return (
    <section className={styles.card}>
      <h2>Cadastro de Notícia</h2>

      <div className={styles.bloco}>
        <label className={styles.campo}>
          Título
          <input
            type="text"
            placeholder="Título da notícia"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
      </div>

      <div className={styles.bloco}>
        <label className={styles.campo}>
          Conteúdo
          <textarea
            placeholder="Escreva o conteúdo aqui..."
            rows={4}
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
          />
        </label>
      </div>

      <div className={styles.bloco}>
        <div className={styles.linha}>
          <label className={styles.campo}>
            Autor
            <input
              type="text"
              placeholder="Nome do autor"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />
          </label>

          <label className={styles.campo}>
            Categoria
            <input
              type="text"
              placeholder="Ex: Tecnologia"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </label>

          <label className={styles.campo}>
            Data
            <input
              type="date"
              value={dataPublicacao}
              onChange={(e) => setDataPublicacao(e.target.value)}
            />
          </label>
        </div>
      </div>

      <button className={styles.botao} onClick={cadastrar}>
        Cadastrar
      </button>

      <p className={styles.mensagem}>{mensagem}</p>
    </section>
  );
}

export default CadastroNoticia;
