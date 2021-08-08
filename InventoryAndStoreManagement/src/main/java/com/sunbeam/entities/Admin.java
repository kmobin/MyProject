package com.sunbeam.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="admin")
public class Admin {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;
	private String fname;
	private String mname;
	private String lname;
	private String add1;
	private String add2;
	private String city;
	private String state;
	private String country;
	private String mobile;
    private String email;
	private String 	password;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date dob;

	
	public Admin() {
	
		
	}
	
	public Admin(int id, String fname, String mname, String lname, String add1, String add2, String city, String state,
			String country, String mobile, String email, String password, Date dob) {
	
		this.id = id;
		this.fname = fname;
		this.mname = mname;
		this.lname = lname;
		this.add1 = add1;
		this.add2 = add2;
		this.city = city;
		this.state = state;
		this.country = country;
		this.mobile = mobile;
		this.email = email;
		this.password = password;
		this.dob = dob;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getMname() {
		return mname;
	}

	public void setMname(String mname) {
		this.mname = mname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getAdd1() {
		return add1;
	}

	public void setAdd1(String add1) {
		this.add1 = add1;
	}

	public String getAdd2() {
		return add2;
	}

	public void setAdd2(String add2) {
		this.add2 = add2;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	@Override
	public String toString() {
		return "Admin [id=" + id + ", fname=" + fname + ", mname=" + mname + ", lname=" + lname + ", add1=" + add1
				+ ", add2=" + add2 + ", city=" + city + ", state=" + state + ", country=" + country + ", mobile="
				+ mobile + ", email=" + email + ", password=" + password + ", dob=" + dob + "]";
	}

	
	
	
	
	
	
	
}
