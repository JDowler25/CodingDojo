package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {
	private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents = new ArrayList<>();
    
    // TO DO: Implement a constructor that takes an ID and a role
    // TO DO: Implement HIPAACompliantUser!
    // TO DO: Implement HIPAACompliantAdmin!
    
    public AdminUser(int i, String string) {
        this.id = i; 
    }
    public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        securityIncidents.add(report);
    }
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }
    
    @Override
    public ArrayList<String> reportSecurityIncidents() {
        return this.securityIncidents;
    }

    @Override
    public boolean assignPin(int pin) {
        String thePin = Integer.toString(pin);
        if(thePin.length() >= 6){
            this.pin = pin;
            return true;
        }
        return false;
    }
    @Override
    public boolean accessAuthorized(Integer confirmedAuthID) {
        if(confirmedAuthID == this.id){
            return true;
        }
        authIncident();
        return false;
    } 
    
    // TO DO: Setters & Getters
}
