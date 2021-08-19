package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Product;

public interface ProductDao extends JpaRepository<Product, Integer>{
	List<Product> findProducts(String name);
}
