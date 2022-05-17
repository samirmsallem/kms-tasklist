package com.kms.backend;

import com.kms.backend.entities.Aufgabe;
import com.kms.backend.repository.AufgabeRepository;
import com.kms.backend.service.AufgabeService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.assertj.core.api.Assertions.assertThat;

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
        aufgabeRepository.deleteById(1L);
    }

    @Test
    public void testListAufgabe() {
        List<Aufgabe> aufgaben = aufgabeRepository.findAll();
        for (Aufgabe aufgabe : aufgaben) {
            System.out.println(aufgabe);
        }
    }

    @Test
    public void testDeleteAufgabeWrongId() {
        // schlauer
        if (aufgabeRepository.existsById(2L)) {
            aufgabeRepository.deleteById(2L);
            System.out.println("should handle not existable Task");
        }
    }

    @Test
    public void testUpdateAufgabeAllFields() {
        if (aufgabeRepository.existsById(1L)) {
            Aufgabe aufgabe = aufgabeRepository.findById(1L).get();
            aufgabe.setTitle("test2");
            aufgabe.setDate(new Date(10));
            aufgabe.setDone(false);
            aufgabeRepository.save(aufgabe);
        }
    }

    @Test
    public void testUpdateAufgabeId() {
        Aufgabe aufgabe = aufgabeRepository.findById(1L).get();
        aufgabe.setId(2L);
        aufgabeRepository.save(aufgabe);
        Aufgabe aufgabe2 = aufgabeRepository.findById(2L).get();
        System.out.println(aufgabe2);
    }

    @Test
    public void testListAufgaben() {
        Aufgabe aufgabe1 = new Aufgabe("test1",true,new Date());
        aufgabeRepository.save(aufgabe1);
        Aufgabe aufgabe2 = new Aufgabe("test2",true,new Date());
        aufgabeRepository.save(aufgabe2);
        Aufgabe aufgabe3 = new Aufgabe("test3",true,new Date());
        aufgabeRepository.save(aufgabe3);
        List<Aufgabe> aufgaben = aufgabeRepository.findAll();
        if (aufgaben.size() == 3) {
            System.out.println("all Tasks found");
        }
    }

}

    // test Repository
    @DataJpaTest
    @AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
    class AufgabeRepositoryTest {
        @Autowired
        private AufgabeRepository aufgabeRepositoryTest;

        @MockBean
        AufgabeService aufgabeService;

        @AfterEach
        void tearDown() {
            aufgabeRepositoryTest.deleteAll();
        }

        // not empty
        @Test
        void itRepoShouldToBeEmpty() {
            assertThat(aufgabeRepositoryTest.findAll().size() == 0).isTrue();

        }

        @Test
        void itShouldCheckWhenAufgabeExists() {
            Aufgabe aufgabe = new Aufgabe("test1",true,new Date());
            aufgabeRepositoryTest.save(aufgabe);

            assertThat(aufgabeRepositoryTest.existsById(1L)).isTrue();
        }

        //
        @Test
        void itShouldCheckWhenAufgabeNotExists() {
            Aufgabe aufgabe = new Aufgabe("test1",false, new Date());
            aufgabe.setId(10L);
            System.out.println(aufgabeRepositoryTest.findAll().size());
            assertThat(aufgabeRepositoryTest.existsById(aufgabe.getId())).isFalse();
        }
    }
