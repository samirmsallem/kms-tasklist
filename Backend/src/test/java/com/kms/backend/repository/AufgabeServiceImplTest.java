package com.kms.backend.repository;

import com.kms.backend.entities.Aufgabe;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Date;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.verify;


class AufgabeServiceImplTest {

    @Mock
    private AufgabeRepository aufgabeRepository;
    private AufgabeServiceImpl aufgabeServiceTest;
    private AutoCloseable autoCloseable;

    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        aufgabeServiceTest = new AufgabeServiceImpl();
        aufgabeServiceTest.aufgabeRepository = aufgabeRepository;
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void saveAufgabe() {
        Aufgabe aufgabe = new Aufgabe("test1",true,new Date(1));
        aufgabeServiceTest.saveAufgabe(aufgabe);

        ArgumentCaptor<Aufgabe> aufgabeArgumentCaptor = ArgumentCaptor.forClass(Aufgabe.class);
        verify(aufgabeRepository).save(aufgabeArgumentCaptor.capture());

        Aufgabe aufgabeCaptured = aufgabeArgumentCaptor.getValue();
        assertThat(aufgabeCaptured).isEqualTo(aufgabe);
    }

    @Test // todo
    void updateAufgabe() {
       // aufgabeServiceTest.saveAufgabe();
       // aufgabeServiceTest.updateAufgabe(new Aufgabe("test2",true,new Date(1)),1L);

        verify(aufgabeRepository).getById(1L);
    }

    @Test
    void deleteAufgabe() {
        aufgabeServiceTest.deleteAufgabe(new Aufgabe("test1",true,new Date(1)));
        verify(aufgabeRepository).delete(new Aufgabe("test1",true,new Date(1)));
    }

    @Test
    void deleteAufgabeById() {
        aufgabeServiceTest.deleteAufgabeById(1L);
        verify(aufgabeRepository).deleteById(1L);
    }

    @Test // todo
    void getAufgabe() {
        //aufgabeServiceTest.saveAufgabe(new Aufgabe("test1",true,new Date(1)));
        //aufgabeServiceTest.getAufgabe(1L);
        verify(aufgabeRepository).findById(1L);
    }

    @Test
    void getAllAufgabe() {
        aufgabeServiceTest.getAllAufgabe();
        verify(aufgabeRepository).findAll();
    }
}