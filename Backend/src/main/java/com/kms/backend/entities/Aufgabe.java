package com.kms.backend.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;


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

    public Aufgabe(){
        super();
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
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
