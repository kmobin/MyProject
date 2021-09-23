package com.sunbeam.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.sun.mail.iap.Response;
import com.sunbeam.entities.Cart;
import com.sunbeam.entities.Product;
import com.sunbeam.services.CartService;
import com.sunbeam.services.ProductService;

@RequestMapping("/cart")
@CrossOrigin
@RestController
public class CartController {

	
	@Autowired
	private CartService cartService;
	
	@Autowired
	private ProductService prodService;
	
	@GetMapping("/{id}")
	public ResponseEntity<List<Product>> cart(@PathVariable("id") int id){
		
		List<Integer> cart = cartService.findByCid(id);
		
		List<Product> plist = new ArrayList<Product>();
		
		for (Integer pid : cart) {
			
			Product prod = prodService.findByPid(pid);
			String str = ServletUriComponentsBuilder.fromCurrentContextPath().path("/images/").path(prod.getPimage()).toUriString();
			prod.setPimage(str);
			
			if(!plist.contains(prod))
			     plist.add(prod);
		}
		
		return ResponseEntity.ok(plist);
	}
	
	@GetMapping("/save/{pid}/{cid}")
	public ResponseEntity<Cart> save(@PathVariable("pid") int pid,@PathVariable("cid") int cid){
		
		Cart cart = new Cart(pid,cid);
		Cart c = cartService.save(cart);
         
		if(c!=null)
        	  return ResponseEntity.ok(c);
		
		return ResponseEntity.internalServerError().build();
				
	}
	
	@DeleteMapping("/delete/{pid}/{cid}")
	public void Delete(@PathVariable("pid") int pid,@PathVariable("cid") int cid){
		Cart cart = new Cart(pid,cid);
		cartService.delete(cart);
		
	}
	
	@GetMapping("/total/{cid}")
	public ResponseEntity<Double> total(@PathVariable("cid") int cid){
		
		List<Integer> pids = cartService.findByCid(cid);
		
//		List<Product> plist = new ArrayList<Product>();
		
		double total = 0;
		
		for (Integer pid : pids) {
			
			Product prod = prodService.findByPid(pid);
//			String str = ServletUriComponentsBuilder.fromCurrentContextPath().path("/images/").path(prod.getPimage()).toUriString();
//			prod.setPimage(str);
			total = total + prod.getSellprice();
			
		}
		System.out.println(total);
		return ResponseEntity.ok(total);
	}
	
	@GetMapping("/find/{cid}")
	public ResponseEntity<List<Integer>> find(@PathVariable("cid") int cid){
		
		List<Integer> list = cartService.findByCid(cid);
		return ResponseEntity.ok(list);
	}
	
}
