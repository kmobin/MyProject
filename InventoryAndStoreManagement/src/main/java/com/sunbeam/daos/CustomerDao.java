package com.sunbeam.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sunbeam.entities.Customer;

public interface CustomerDao extends JpaRepository<Customer, Integer> {

	//@Query("SELECT c.custId,c.custFname from customer c where custEmail=poonam5696@gmail.com")
Customer findByEmail(String email);
	Customer findById(int id);
  
	
}
