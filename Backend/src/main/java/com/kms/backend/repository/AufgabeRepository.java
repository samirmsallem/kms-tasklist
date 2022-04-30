package com.kms.backend.repository;

import com.kms.backend.entities.Aufgabe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AufgabeRepository extends JpaRepository <Aufgabe,Long> {
}
