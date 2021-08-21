package com.sunbeam.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.entities.Product;
import com.sunbeam.model.ProductModel;
import com.sunbeam.services.ProductService;
import com.sunbeam.servicesImpl.ProductServiceImpl;

@CrossOrigin
@RequestMapping("/product")
@RestController
public class ProductController {

	@Autowired
	private ProductService prodService;
	
	
	@GetMapping("/{id}")
	public ResponseEntity<Product> findById(@PathVariable("id") int id){
		
		Product product = prodService.findByPid(id);
		return ResponseEntity.ok(product);
	}
	
	@PostMapping("/maingrp")
	public ResponseEntity<List<Product>> findByMainGrp(@RequestBody ProductModel prod){
		
		List<Product> product = prodService.findByPmaingrp(prod.getStr());
		return ResponseEntity.ok(product);
	}
	
	@PostMapping("/subgrp")
	public ResponseEntity<List<Product>> findBySubGrp(@RequestBody ProductModel prod){
		
		List<Product> product = prodService.findByPsubgrp(prod.getStr());
		for (Product product2 : product) {
			System.out.println(product2);
		}
		return ResponseEntity.ok(product);
	}
	
	@PostMapping("/pname")
	public ResponseEntity<Product> findByName(@RequestBody ProductModel prod){
		
		Product product = prodService.findByPname(prod.getStr());
		return ResponseEntity.ok(product);
	}
	
	@PostMapping("/save")
	public ResponseEntity<Product> save(@RequestBody Product p){
		Product prod = prodService.save(p);
		return ResponseEntity.ok(prod);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Product>> findall(){
		List<Product> prod = prodService.findall();
		return ResponseEntity.ok(prod);
	}
}
