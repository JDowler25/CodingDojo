package com.jaydandowler.propfolio.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="properties")
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotEmpty
    @NotNull
    @Size(min = 5, max = 300)
    private String address;
    @NotEmpty
    @NotNull
    @Size(min = 1, max = 99999)
    private Integer sqft;
    @NotEmpty
    @NotNull
    private Boolean rented;
    @NotEmpty
    @NotNull
    @Size(min = 1, max = 9999999)
    private Integer mortage;
    @NotEmpty
    @NotNull
    @Size(min = 1, max = 9999999)
    private Integer bedrooms;
    @NotEmpty
    @NotNull
    @Size(min = 1, max = 9999999)
    private Integer baths;
    @NotEmpty
    @NotNull
    @Size(min = 1, max = 999999)
    private Integer rentPrice;

    
    // This will not allow the createdAt column to be updated after creation
    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;

    public Property() {
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getSqft() {
        return this.sqft;
    }

    public void setSqft(Integer sqft) {
        this.sqft = sqft;
    }

    public Boolean isRented() {
        return this.rented;
    }

    public Boolean getRented() {
        return this.rented;
    }

    public void setRented(Boolean rented) {
        this.rented = rented;
    }

    public Integer getMortage() {
        return this.mortage;
    }

    public void setMortage(Integer mortage) {
        this.mortage = mortage;
    }

    public Integer getBedrooms() {
        return this.bedrooms;
    }

    public void setBedrooms(Integer bedrooms) {
        this.bedrooms = bedrooms;
    }

    public Integer getBaths() {
        return this.baths;
    }

    public void setBaths(Integer baths) {
        this.baths = baths;
    }

    public Integer getRentPrice() {
        return this.rentPrice;
    }

    public void setRentPrice(Integer rentPrice) {
        this.rentPrice = rentPrice;
    }

    public Date getCreatedAt() {
        return this.createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return this.updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
