package com.sunbeam.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
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
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.sunbeam.entities.Bill;
import com.sunbeam.entities.Product;
import com.sunbeam.model.ProductBill;
import com.sunbeam.services.BillService;
import com.sunbeam.services.OrderService;
import com.sunbeam.services.ProductService;

@CrossOrigin
@RestController
@RequestMapping("/bill")
public class BillController {

	
	@Autowired
	private BillService billService;
	
	@Autowired
	private OrderService orderService;
	
	@Autowired 
	private ProductService prodService;
	
	
	@PostMapping("/save")
	public ResponseEntity<Bill> save(@RequestBody Bill bill){
		System.out.println(bill);
		       billService.save(bill);
	return	 ResponseEntity.ok(bill);      
	}

	@GetMapping("/find/{cid}")
	public ResponseEntity<List<ProductBill>> findBycid(@PathVariable("cid") int cid){
		
		System.out.println(cid);
		     List<Bill> bill = billService.findByCid(cid);
		     List<ProductBill> pd = new ArrayList<ProductBill>(); 
 		    
		     for (Bill b : bill) {
 		    	System.out.println(b);
 		      List<Integer> pid =  orderService.getByBid(b.getBid());
 		      
 		      
 	      for (Integer id : pid) {
			
 		      System.out.println(id);

 		     Product product = prodService.findByPid(id);
 		     			
 		     			String str = ServletUriComponentsBuilder.fromCurrentContextPath().path("/images/").path(product.getPimage()).toUriString();
 		     			product.setPimage(str);
 		     		
 		          
 		     		       ProductBill pb = new ProductBill(b.getBid(),b.getOrderid(),b.getPaymentid(),b.getAmount(),b.getCreatedon(),b.getCid(),b.getStatus(),product.getPid(),product.getPname(),product.getPimage(),product.getPbrand(), product.getSellprice());
 		     		      System.out.println(pb.toString());
 		     		         pd.add(pb);
		}
 		      
 		     }
			
 		     
 		     
 		     
	return	 ResponseEntity.ok(pd);      
	}
	
	
	@GetMapping("/{bid}/{str}")
	public ResponseEntity<Bill> cancel(@PathVariable("bid") int bid,@PathVariable("str") String str ){
		
		  Bill b = billService.findByBid(bid);
		b.setStatus(str);
		
		billService.save(b);
		
		return	 ResponseEntity.ok(b);      
	}
	
}
