package com.example.usuarios.controll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.usuarios.model.*;
import com.example.usuarios.repository.usuarioRepository;



import java.util.List;





@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "http://localhost:5173")
public class usuarioController {
    @Autowired
    private usuarioRepository usuarioRepository;
    @PostMapping
    public usuario createUsuario(@RequestBody usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @GetMapping
    public List<usuario> getUsuarios() {
        return usuarioRepository.findAll();
    }
    @GetMapping("/{id}")
    public usuario getUsuarioById(@PathVariable Long id) {
        return usuarioRepository.findById(id).orElse(null);
    }
    
}
