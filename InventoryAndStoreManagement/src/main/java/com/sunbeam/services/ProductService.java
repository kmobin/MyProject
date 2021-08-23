package com.sunbeam.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.entities.Product;

public interface ProductService {
	Product findByPid(int pid);
	List<Product> findByPmaingrp(String pmaingrp);
	List<Product> findByPsubgrp(String psubgrp);
	Product findByPname(String pname);
	Product save(Product p,MultipartFile pimage);
	List<Product> findall();
}
