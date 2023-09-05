package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPAACompliantUser {
    private ArrayList<String> patientNotes;

    // TO DO: Constructor that takes an IDcopy
    // TO DO: Implement HIPAACompliantUser!

    public Physician(int id) {
        this.id = id;
        this.patientNotes = new ArrayList<>();
    }

    public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
                "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }

    @Override
    public boolean assignPin(int pin) {
        String thePin = Integer.toString(pin);
        if (thePin.length() == 4) {
            this.pin = pin;
            return true;
        } else{
            return false;
        }
    }

    @Override
    public boolean accessAuthorized(Integer confirmedAuthID) {
        return this.id.equals(confirmedAuthID);
    }

    // TO DO: Setters & Getters
}
