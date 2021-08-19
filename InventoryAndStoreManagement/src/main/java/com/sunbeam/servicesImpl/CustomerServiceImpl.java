package com.sunbeam.servicesImpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.CustomerDao;
import com.sunbeam.entities.Customer;
import com.sunbeam.services.CustomerServices;

@Service
public class CustomerServiceImpl implements CustomerServices{

	@Autowired
	private CustomerDao custDao;
	
	@Override
	public Customer findByEmail(String email) {
		
		Customer cust = custDao.findByEmail(email);
		
		return cust;
	}

	@Override
	public Customer save(Customer cust) {
		
		return custDao.save(cust);
	}


	
}
