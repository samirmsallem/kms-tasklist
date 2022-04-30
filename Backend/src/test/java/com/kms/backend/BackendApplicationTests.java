package com.kms.backend;

import com.kms.backend.entities.Aufgabe;
import com.kms.backend.repository.AufgabeRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;

@SpringBootTest
class BackendApplicationTests {
    @Autowired
    private AufgabeRepository aufgabeRepository;

    @Test
    void testCreateAufgabe() {
        Aufgabe aufgabe = new Aufgabe("test",true,new Date());
        aufgabeRepository.save(aufgabe);
    }
    @Test
    public void testAufgabe() {
        Aufgabe aufgabe = aufgabeRepository.findById(1L).get();
        System.out.println(aufgabe);
    }
    @Test
    public void testUpdateAufgabe() {
        Aufgabe aufgabe = aufgabeRepository.findById(1L).get();
        aufgabe.setTitle("test2");
        aufgabeRepository.save(aufgabe);
    }
    @Test
    public void testDeleteAufgabe() {
        aufgabeRepository.deleteById(1L);;
    }

    @Test
    public void testListAufgabe() {
        List<Aufgabe> aufgaben = aufgabeRepository.findAll();
        for (Aufgabe aufgabe : aufgaben) {
            System.out.println(aufgabe);
        }
    }

}
