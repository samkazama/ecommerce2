/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nuguru.entities;

/**
 *
 * @author nuguru
 */
import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Client implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String FirstName, LastName, Email, Address, city;
    private String PaymentMethode, CardName;
    private Long CardNumber;
    private int  expiration, cvv;
    private Long id_order;

    public Client( String FirstName, String LastName, String Email, String Address, String city, String PaymentMethode, String CardName, Long CardNumber, int expiration, int cvv, Long id_order) {
        
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Address = Address;
        this.city = city;
        this.PaymentMethode = PaymentMethode;
        this.CardName = CardName;
        this.CardNumber = CardNumber;
        this.expiration = expiration;
        this.cvv = cvv;
        this.id_order = id_order;
    }

    public Client() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String FirstName) {
        this.FirstName = FirstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String LastName) {
        this.LastName = LastName;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String Address) {
        this.Address = Address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPaymentMethode() {
        return PaymentMethode;
    }

    public void setPaymentMethode(String PaymentMethode) {
        this.PaymentMethode = PaymentMethode;
    }

    public String getCardName() {
        return CardName;
    }

    public void setCardName(String CardName) {
        this.CardName = CardName;
    }

    public Long getCardNumber() {
        return CardNumber;
    }

    public void setCardNumber(Long CardNumber) {
        this.CardNumber = CardNumber;
    }

    public int getExpiration() {
        return expiration;
    }

    public void setExpiration(int expiration) {
        this.expiration = expiration;
    }

    public int getCvv() {
        return cvv;
    }

    public void setCvv(int cvv) {
        this.cvv = cvv;
    }

    public Long getId_order() {
        return id_order;
    }

    public void setId_order(Long id_order) {
        this.id_order = id_order;
    }
    
    
    
}
