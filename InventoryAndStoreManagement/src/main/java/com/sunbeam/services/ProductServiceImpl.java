package com.sunbeam.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.ProductDao;
import com.sunbeam.entities.Product;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductDao prodao;
	
	@Override
	public Product save(Product prod) {
		
		return prodao.save(prod);
	}

	@Override
	public List<Product> findProducts(String name) {
        List<Product> prod=prodao.findProducts(name);
		return prod;
	}

	

	

}
