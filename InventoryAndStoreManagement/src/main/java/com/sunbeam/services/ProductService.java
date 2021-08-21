package com.sunbeam.services;

import java.util.List;

import com.sunbeam.entities.Product;

public interface ProductService {
	Product findByPid(int pid);
	List<Product> findByPmaingrp(String pmaingrp);
	List<Product> findByPsubgrp(String psubgrp);
	Product findByPname(String pname);
	Product save(Product p);
	List<Product> findall();
}
