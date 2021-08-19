package com.sunbeam.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Vendor;

public interface VendorDao extends JpaRepository<Vendor, Integer> {
	Vendor findByEmail(String email);
	Vendor findById(int id);

}
