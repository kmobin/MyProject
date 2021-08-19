package com.sunbeam.services;

import java.util.List;

import com.sunbeam.entities.Product;

public interface ProductService {
	Product save(Product prod);
	List<Product> findProducts(String name);
}
