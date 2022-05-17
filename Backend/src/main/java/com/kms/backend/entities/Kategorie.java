package com.kms.backend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(EntityListeners.class)
public class Kategorie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long kategorieId;
    private String kategorieNAme;
    @ManyToOne
    @JoinColumn(name = "id")
    private Aufgabe aufgabe;
}
