package school.sptech.Back_end_Nicholas;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@RestController
@RequestMapping("/noticias")
public class NoticiaController {

    private final JdbcTemplate jdbcTemplate;

    public NoticiaController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping
    public ResponseEntity<List<Noticia>> listarNoticias() {

        String sql = "SELECT * FROM noticia";

        List<Noticia> noticias = jdbcTemplate.query(
                sql,
                new BeanPropertyRowMapper<>(Noticia.class)
        );

        return ResponseEntity.status(200).body(noticias);
    }

    @PostMapping
    public ResponseEntity<Noticia> criarNoticia(@RequestBody Noticia noticia) {
        if (noticia.getTitulo() == null || noticia.getTitulo().isBlank()) {
            return ResponseEntity.status(400).build();
        }

        String sql = "INSERT INTO noticia (titulo, conteudo, autor, categoria, data_publicacao) VALUES (?, ?, ?, ?, ?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(con -> {
            PreparedStatement ps = con.prepareStatement(
                    sql,
                    Statement.RETURN_GENERATED_KEYS
            );

            ps.setString(1, noticia.getTitulo());
            ps.setString(2, noticia.getConteudo());
            ps.setString(3, noticia.getAutor());
            ps.setString(4, noticia.getCategoria());
            ps.setDate(5, Date.valueOf(noticia.getDataPublicacao()));

            return ps;

        }, keyHolder);

        Integer idInserido = keyHolder.getKeyAs(Integer.class);
        noticia.setId(idInserido);

        return ResponseEntity.status(201).body(noticia);
    }
}