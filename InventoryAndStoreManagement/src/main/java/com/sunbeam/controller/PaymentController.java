package com.sunbeam.controller;

import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;

@CrossOrigin
@RestController
//@RequestMapping("/payment")
public class PaymentController {

	
	@GetMapping("/payment/{pay}")
	public ResponseEntity<String> payment(@PathVariable("pay") int pay) throws Exception {
		System.out.println(pay);

		var client = new RazorpayClient("rzp_test_9aUX9bGU1WLbei","gcmQS4EnC8WbqRsIfKfxalcD");
		
		
		JSONObject options = new JSONObject();
		options.put("amount", pay * 100);
		options.put("currency", "INR");
		options.put("receipt", "txn_123456");
		Order order = client.Orders.create(options);
		
		System.out.println("Order : "+order.toString());
		
		return ResponseEntity.ok(order.toString());
	}
	
//	@PostMapping
//	public String creatOrder() {
//		return "done";
//	}
	
	
}
