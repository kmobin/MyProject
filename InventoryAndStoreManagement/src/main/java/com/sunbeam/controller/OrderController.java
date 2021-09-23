package com.sunbeam.controller;

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

import com.sunbeam.entities.Order;
import com.sunbeam.services.OrderService;

@CrossOrigin
@RequestMapping("/order")
@RestController
public class OrderController {

	@Autowired
	private OrderService orderService;
	
	
	 @PostMapping("/save")
	  public ResponseEntity<Order> save(@RequestBody Order order){
		  
		 System.out.println(order.toString());
		 
		 orderService.save(order);
		 return ResponseEntity.ok(order);
	  }
	 @GetMapping("/getProduct/{cid}")
	 public ResponseEntity<List<?>> getProduct(@PathVariable("cid") int cid){
		 
		 List<?> list = orderService.getByCid(cid);
		
		for (Object object : list) {
			
			
			System.out.println(object.toString());
		}
		 return ResponseEntity.ok(list);
	 }
	
//	 @GetMapping("/getProd/{bid}")
//	 public ResponseEntity<List<Integer>> getProd(@PathVariable("bid") int bid){
//		 
//		 List<Integer> list = orderService.findByBid(bid);
//		
//		 return ResponseEntity.ok(list);
//	 }
	
	
}
