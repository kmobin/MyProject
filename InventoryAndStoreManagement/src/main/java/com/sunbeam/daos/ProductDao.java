package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sunbeam.entities.Product;

public interface ProductDao extends JpaRepository<Product, Integer>{
	
	Product findByPid(int pid);
	List<Product> findByPmaingrp(String pmaingrp);
	List<Product> findByPsubgrp(String psubgrp);
	Product findByPname(String pname);
	
	@Query("SELECT DISTINCT(p.pmaingrp) FROM Product p")
	List<String> findDistinctMainGrp();

	@Query("SELECT DISTINCT(p.psubgrp) FROM Product p")
	List<String> findDistinctSubGrp();
	
	@Query("SELECT DISTINCT(p.pname) FROM Product p")
	List<String> findDistinctName();
}
