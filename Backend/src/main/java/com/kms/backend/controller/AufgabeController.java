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

@Controller
public class AufgabeController {

    @Autowired
    AufgabeService aufgabeService;

    @RestController
    @RequestMapping("/api/v1")
    @CrossOrigin(origins = "*")
    public class StudentController {

        //get all Aufgabe
        @GetMapping("/aufgabe")
        public List<Aufgabe> getAllStudent(){
            return aufgabeService.getAllAufgabe();
        }

        //create Aufgabe rest api
        @PostMapping("/aufgabe")
        public Aufgabe createAufgabe(@RequestBody Aufgabe aufgabe){
            return aufgabeService.saveAufgabe(aufgabe);
        }

        //get Aufgabe by id rest api
        @GetMapping("/aufgabe/{id}")
        public ResponseEntity<Aufgabe> getSAufgabeById(@PathVariable Long id){
            return ResponseEntity.ok(aufgabeService.getAufgabe(id));
        }

        //update aufgabe
        @PutMapping("/aufgabe/{id}")
        public ResponseEntity<Aufgabe> updateAufgabe(@PathVariable Long id , @RequestBody Aufgabe aufgabe){
            return ResponseEntity.ok(aufgabeService.updateProduit(aufgabe,id));
        }

        //delete Aufgabe rest api
        @DeleteMapping("/aufgabe/{id}")
        public ResponseEntity<Map> deleteAufgabeId(@PathVariable Long id){
            aufgabeService.deleteAufgabeById(id);
            Map<String,Boolean> response=new HashMap<>();
            response.put("deleted",Boolean.TRUE);
            return ResponseEntity.ok(response);

        }

    }
}
