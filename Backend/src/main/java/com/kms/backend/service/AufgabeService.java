package com.kms.backend.service;

import com.kms.backend.entities.Aufgabe;

import java.util.List;

public interface AufgabeService {
    Aufgabe saveAufgabe(Aufgabe aufgabe);
    Aufgabe updateProduit(Aufgabe aufgabe , Long id);
    void deleteAufgabe(Aufgabe aufgabe);
    void deleteAufgabeById(Long id);
    Aufgabe getAufgabe(Long id);
    List<Aufgabe> getAllAufgabe();
}
