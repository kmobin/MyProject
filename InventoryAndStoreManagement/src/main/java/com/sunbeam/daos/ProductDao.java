package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Product;

public interface ProductDao extends JpaRepository<Product, Integer>{
	
	Product findByPid(int pid);
	List<Product> findByPmaingrp(String pmaingrp);
	List<Product> findByPsubgrp(String psubgrp);
	Product findByPname(String pname);
}
