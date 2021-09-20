package com.sunbeam.services;

import java.util.List;
import java.util.Optional;

import com.sunbeam.entities.Admin;
import com.sunbeam.entities.Customer;

public interface CustomerServices {

Customer findByEmail(String email);
	Customer save(Customer cust);
	Customer findById(int id);
	List<Customer> findAll();
	
}
