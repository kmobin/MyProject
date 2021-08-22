package com.sunbeam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.entities.Vendor;
import com.sunbeam.model.Response;
//import com.sunbeam.services.VendorService;
import com.sunbeam.services.VendorService;

@CrossOrigin
@RestController
public class VendorController {
	@Autowired
	private VendorService vendService;

	@GetMapping("/vendor/{email}")
	public ResponseEntity<?> findVendorByEmail(@PathVariable("email")String email){
		Vendor vendor =vendService.findByEmail(email);		
		return Response.success(vendor);
		
	}
	
	@GetMapping("/vendor")
	public ResponseEntity<List<Vendor>> findAll(){
		List<Vendor>list=vendService.findAll();
		return ResponseEntity.ok(list);
	}
}

















