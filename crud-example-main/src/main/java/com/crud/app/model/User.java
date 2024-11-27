package com.crud.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    private String userName;
    private String password;
    private String role;
    private String email;
    private String gender;
    public String contact;
    public String fullName;
    
    public User() {
    }

    public User(int userId, String userName, String password, String role, String email,String gender, String contact, String fullName) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.email=email;
        this.contact=contact;
        this.gender=gender;
        this.fullName=fullName;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    public String getEmail() {
    	return email;
    }
    public void setEmail(String email) {
    	this.email=email;
    }
    public String getGender() {
    	return gender;
    }
    public void setGender(String gender) {
    	this.gender=gender;
    }
    public String getContact() {
    	return contact;
    }
    public void setContact(String contact) {
    	this.contact=contact;
    }
    public String getName() {
    	return fullName;
    }
    public void setName(String fullName) {
    	this.fullName=fullName;
    }
}
