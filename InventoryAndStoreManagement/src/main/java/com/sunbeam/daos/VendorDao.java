package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sunbeam.entities.Vendor;

public interface VendorDao extends JpaRepository<Vendor, Integer> {
	Vendor findByEmail(String email);
	Vendor findById(int id);
	@Query("SELECT v.id FROM Vendor v")
	List<Integer> AllVendors();

}
