package com.kms.backend.repository;

import com.kms.backend.entities.Aufgabe;
import com.kms.backend.service.AufgabeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AufgabeServiceImpl implements AufgabeService {

    @Autowired
    AufgabeRepository aufgabeRepository;

    @Override
    public Aufgabe saveAufgabe(Aufgabe aufgabe) {
        return aufgabeRepository.save(aufgabe);
    }

    @Override
    public Aufgabe updateProduit(Aufgabe aufgabe, Long id) {
        Aufgabe updateAufgabe = aufgabeRepository.findById(id).get();
        updateAufgabe.setTitle(aufgabe.getTitle());
        updateAufgabe.setDone(aufgabe.isDone());
        updateAufgabe.setDate(aufgabe.getDate());
        return aufgabeRepository.save(updateAufgabe);
    }

    @Override
    public void deleteAufgabe(Aufgabe aufgabe) {
        aufgabeRepository.delete(aufgabe);
    }

    @Override
    public void deleteAufgabeById(Long id) {
        aufgabeRepository.deleteById(id);
    }

    @Override
    public Aufgabe getAufgabe(Long id) {
        return aufgabeRepository.findById(id).get();
    }

    @Override
    public List<Aufgabe> getAllAufgabe() {
        return aufgabeRepository.findAll();
    }
}
