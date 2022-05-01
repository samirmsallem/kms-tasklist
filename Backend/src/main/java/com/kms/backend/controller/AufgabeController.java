package com.kms.backend.controller;

import com.kms.backend.entities.Aufgabe;
import com.kms.backend.service.AufgabeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/aufgabe")
@CrossOrigin(origins = "*")
public class AufgabeController {

    @Autowired
    AufgabeService aufgabeService;

    //get all Aufgabe
    @GetMapping("")
    public List<Aufgabe> getAllAufgaben() {
        return aufgabeService.getAllAufgabe();
    }

    //create Aufgabe rest api
    @PostMapping("")
    public Aufgabe createAufgabe(@RequestBody Aufgabe aufgabe) {
        return aufgabeService.saveAufgabe(aufgabe);
    }

    //get Aufgabe by id rest api
    @GetMapping("/{id}")
    public ResponseEntity<Aufgabe> getAufgabeById(@PathVariable Long id) {
        return ResponseEntity.ok(aufgabeService.getAufgabe(id));
    }

    //update aufgabe
    @PutMapping("/{id}")
    public ResponseEntity<Aufgabe> updateAufgabe(@PathVariable Long id, @RequestBody Aufgabe aufgabe) {
        return ResponseEntity.ok(aufgabeService.updateProduit(aufgabe, id));
    }

    //delete Aufgabe rest api
    @DeleteMapping("/{id}")
    public ResponseEntity<Map> deleteAufgabeById(@PathVariable Long id) {
        aufgabeService.deleteAufgabeById(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);

    }
}
