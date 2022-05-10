package com.kms.backend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data //create getter and setter
@Entity
public class Aufgabe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private boolean done;
    private Date date;


    public Aufgabe(String title, boolean done, Date date) {
        this.title = title;
        this.done = done;
        this.date = date;

    }

    @Override
    public String toString() {
        return "Aufgabe{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", done=" + done +
                ", date=" + date +
                '}';
    }
}
