package com.sunbeam.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.sunbeam.entities.Product;
import com.sunbeam.model.ProductDto;
import com.sunbeam.model.ProductModel;
import com.sunbeam.model.Response;
import com.sunbeam.services.ProductService;
import com.sunbeam.servicesImpl.ProductServiceImpl;
import com.sunbeam.utils.FileUpload;

@CrossOrigin
@RequestMapping("/product")
@RestController
public class ProductController {

	@Autowired
	private ProductService prodService;
	
	@Autowired
	private FileUpload file;
	
	@GetMapping("/{id}")
	public ResponseEntity<Product> findById(@PathVariable("id") int id){
		
		Product product = prodService.findByPid(id);
		
		String str = ServletUriComponentsBuilder.fromCurrentContextPath().path("/images/").path(product.getPimage()).toUriString();
		product.setPimage(str);
		return ResponseEntity.ok(product);
	}
	
	@CrossOrigin
	@GetMapping("/maingrp/{str}")
	public ResponseEntity<List<Product>> findByMainGrp(@PathVariable("str") String str){
		System.out.println(str);
		List<Product> product = prodService.findByPmaingrp(str);
		
		for (Product product2 : product) {
			String str1 = ServletUriComponentsBuilder.fromCurrentContextPath().path("/images/").path(product2.getPimage()).toUriString();
			product2.setPimage(str1);

			System.out.println(product2);
			
		}
		 System.out.println();
		return ResponseEntity.ok(product);
	}
	
	@GetMapping("/subgrp/{str}")
	public ResponseEntity<List<Product>> findBySubGrp(@PathVariable("str") String str){
		
		List<Product> product = prodService.findByPsubgrp(str);
		for (Product product2 : product) {
			String str1 = ServletUriComponentsBuilder.fromCurrentContextPath().path("/images/").path(product2.getPimage()).toUriString();
			product2.setPimage(str1);

			System.out.println(product2);
		}
		return ResponseEntity.ok(product);
	}
	
	@GetMapping("/pname/{str}")
	public ResponseEntity<Product> findByName(@PathVariable("str") String str){
		
		Product product = prodService.findByPname(str);
		
		String str1 = ServletUriComponentsBuilder.fromCurrentContextPath().path("/images/").path(product.getPimage()).toUriString();
		product.setPimage(str1);
		
		return ResponseEntity.ok(product);
	}
	
	@PostMapping("/save")
	public ResponseEntity<String> save(ProductDto pdto){
		
		try {
			System.out.println("PName : "+pdto.getPname());
			
			if(pdto.getPimage().isEmpty())
			{
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Please Updaload Image");
			}
			if(!pdto.getPimage().isEmpty()) {
				
				
				if(pdto.getPimage().getContentType().equals("image/jpeg")) {
			
					Product prod = new Product();
					System.out.println("PName : "+pdto.getPname());
					String name = pdto.getPname();
					System.out.println("Name : "+name);
					prod.setPname(name);
					System.out.println("PName : "+prod.getPname());
					prod.setPimage(file.uploadFile(pdto.getPimage()));
					prod.setPmaingrp(pdto.getPmaingrp());
					prod.setPsubgrp(pdto.getPsubgrp());
					prod.setPtype(pdto.getPtype());
					prod.setPbrand(pdto.getPbrand());
					prod.setCurrentstock(pdto.getCurrentstock());
					prod.setMinstock(pdto.getMinstock());
					prod.setMaxstock(pdto.getMaxstock());
					prod.setReorderlevel(pdto.getReorderlevel());
					prod.setReorderquantity(pdto.getReorderquantity());
			    	prod.setSellprice(pdto.getSellprice());
					prod.setAlertmsg(pdto.getAlertmsg());
					
					
					
					
					prodService.save(prod);
					
					return ResponseEntity.ok("Image Uploaded SuccessFull");
				}
			
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Only JPEG or PNG Format");
			
				}
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok("Image Uploaded");
	}
	
	@GetMapping("/all")
	public ResponseEntity<?> findall(){
		List<Product> prod = prodService.findall();
	
		for (Product product : prod) {
			
			String str = ServletUriComponentsBuilder.fromCurrentContextPath().path("/images/").path(product.getPimage()).toUriString();
			product.setPimage(str);
		}
		
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
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> Delete(@PathVariable("id")int id){
		boolean prod = prodService.deleteById(id);
		return ResponseEntity.ok(prod);
	}
	
	@PostMapping("/update")
	public ResponseEntity<String> update(ProductDto pdto){
			
			
			try {
				String name ="";
				Product prod = new Product();
		    	System.out.println(pdto.getPimage());
		    	prod.setPid(pdto.getPid());
	            if(pdto.getPimage()==null) {
//	            	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Please Upload Image");
	            
	            	  System.out.println("Hello");
	                
	            	  			
	            	  Product pp = prodService.findByPid(prod.getPid());
	            	  name = pp.getPimage();            
	            }
	            else {
	            
	            	 name = file.uploadFile(pdto.getPimage());
	            }
	            
	                	System.out.println("Hiiii");                	
	
	                   prod.setPid(pdto.getPid());	
	                   prod.setPname(pdto.getPname());
	                   prod.setPimage(name);
						prod.setPmaingrp(pdto.getPmaingrp());
						prod.setPsubgrp(pdto.getPsubgrp());
						prod.setPtype(pdto.getPtype());
						prod.setPbrand(pdto.getPbrand());
						prod.setCurrentstock(pdto.getCurrentstock());
						prod.setMinstock(pdto.getMinstock());
						prod.setMaxstock(pdto.getMaxstock());
						prod.setReorderlevel(pdto.getReorderlevel());
						prod.setReorderquantity(pdto.getReorderquantity());
				    	prod.setSellprice(pdto.getSellprice());
						prod.setAlertmsg(pdto.getAlertmsg());
	
	                    prodService.save(prod);

			}catch(Exception e) {
				e.printStackTrace();
			}
			
			return ResponseEntity.ok("Updated SuccessFully");
		}
}
