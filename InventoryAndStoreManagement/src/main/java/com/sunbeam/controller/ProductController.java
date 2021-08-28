package com.sunbeam.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.entities.Product;
import com.sunbeam.model.ProductDto;
import com.sunbeam.model.ProductModel;
import com.sunbeam.model.Response;
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
	
	@CrossOrigin
	@GetMapping("/maingrp/{str}")
	public ResponseEntity<List<Product>> findByMainGrp(@PathVariable("str") String str){
		System.out.println(str);
		List<Product> product = prodService.findByPmaingrp(str);
		
		for (Product product2 : product) {
			System.out.println(product2);
		}
		 System.out.println();
		return ResponseEntity.ok(product);
	}
	
	@GetMapping("/subgrp/{str}")
	public ResponseEntity<List<Product>> findBySubGrp(@PathVariable("str") String str){
		
		List<Product> product = prodService.findByPsubgrp(str);
		for (Product product2 : product) {
			System.out.println(product2);
		}
		return ResponseEntity.ok(product);
	}
	
	@GetMapping("/pname/{str}")
	public ResponseEntity<Product> findByName(@PathVariable("str") String str){
		
		Product product = prodService.findByPname(str);
		return ResponseEntity.ok(product);
	}
	
	@PostMapping("/save")
	public ResponseEntity<Product> save(ProductDto pdto){
		Product prod = ProductDto.toEntity(pdto);
		 prod = prodService.save(prod,pdto.getPimage());
		return ResponseEntity.ok(prod);
	}
	
	@GetMapping("/all")
	public ResponseEntity<?> findall(){
		List<Product> prod = prodService.findall();
		//Stream<ProductDto> result = prod.stream().map(product -> ProductDto.fromEntity(product));
		return ResponseEntity.ok(prod);
	}
	@CrossOrigin
	@GetMapping("/all/{type}")
	public ResponseEntity<List<String>> find(@PathVariable("type") String type){
		List<String> list = new ArrayList<String>();
		if(type.equals("main"))
		list.addAll(prodService.findDistinctMainGrp());
		else if(type.equals("sub"))
		list.addAll(prodService.findDistinctSubGrp());
		else if(type.equals("name"))
		list.addAll(prodService.findDistinctName());
		for (String string : list) {
			System.out.println();
		}
		return ResponseEntity.ok(list);
	}
	
	
	
	
}
