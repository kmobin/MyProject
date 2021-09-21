package com.sunbeam.services;

import java.util.List;

import com.sunbeam.entities.Product;
import com.sunbeam.entities.Vendor;
//import com.sunbeam.servicesImpl.List;

public interface VendorService {
	Vendor findByEmail(String email);
	//Vendor save(Vendor vendor);
	List<Vendor> findAll();
	Vendor save(Vendor vend);
	boolean deleteById(int id);
	Vendor findById(int id);
	
}
