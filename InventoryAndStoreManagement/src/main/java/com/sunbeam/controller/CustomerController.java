package com.sunbeam.controller;

import java.io.IOException;
import java.net.http.HttpResponse;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.entities.Admin;
import com.sunbeam.entities.Customer;
import com.sunbeam.entities.Vendor;
import com.sunbeam.model.Crediential;
import com.sunbeam.model.Response;
import com.sunbeam.services.AdminService;
//import com.sunbeam.model.Credintial;
import com.sunbeam.services.CustomerServices;

@CrossOrigin
@RestController
public class CustomerController {

	@Autowired
	private CustomerServices custService;
	@Autowired
	private AdminService adminService;
	@Autowired
	private PasswordEncoder passEncoder;
	
	
	@PostMapping("/login")
	public String login(@RequestBody Crediential cred,HttpSession session,HttpServletResponse response) throws IOException 
	{
		Customer cust = custService.findByEmail(cred.getEmail());
		
		
		
		if(cust!=null&&cred.getPassword().equals(cust.getPassword()))
		{	System.out.println(cust);
			session.setAttribute("cust", cust);
			response.sendRedirect("/customer");
		}
		else if(cust==null) {
			
			
			Admin admin = adminService.findByEmail(cred.getEmail());
		    
			
			if(admin!=null&&cred.getPassword().equals(admin.getPassword())) {//passEncoder.matches(cred.getPassword(), admin.getPassword()))
				System.out.println(admin);
				session.setAttribute("admin", admin);
				response.sendRedirect("/admin");
			}
			else
			{
				response.sendRedirect("/login");
			}
		}
           return "Invalid Login";
	}
	

	@RequestMapping("/customer")
	public @ResponseBody Customer customer(HttpSession session)
	{
		
		
		Customer cust = (Customer)session.getAttribute("cust");
		System.out.println(cust);
	  return cust;				
	}
	
	
	@RequestMapping("/admin")
	public ResponseEntity<?> admin(HttpSession session){
		
	
		Admin admin = (Admin)session.getAttribute("admin");
		System.out.println(admin);
		
		return ResponseEntity.ok(admin);
	}
	
	@PostMapping("/customer/register")
	public ResponseEntity<?> save(@RequestBody Customer cust){
		
		Customer c = custService.save(cust);
		return  ResponseEntity.ok(c);
	}
	
	@GetMapping("/customer/{str}")
	public ResponseEntity<Customer> getData(@PathVariable("str") String str,HttpSession session,HttpServletResponse response) throws IOException 
	{
		System.out.println(str);
		Customer cust = custService.findByEmail(str);
		System.out.println(cust.toString());
		return ResponseEntity.ok(cust);
	}
	
	@GetMapping("/login/{str}")
	public int getId(@PathVariable("str") String str,HttpSession session,HttpServletResponse response) throws IOException 
	{
		System.out.println(str);
		Customer cust = custService.findByEmail(str);
		System.out.println(cust.toString());
		return cust.getId();
	}
	
	@GetMapping("/cust/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable("id") int id,HttpSession session,HttpServletResponse response) throws IOException 
	{
		System.out.println(id);
		Customer cust = custService.findById(id);
		System.out.println(cust.toString());
		return ResponseEntity.ok(cust);
	}
	
	@GetMapping("/findAll/cust")
	public ResponseEntity<List<Customer>> findAll(){
		List<Customer>list=custService.findAll();
		return ResponseEntity.ok(list);
	}
	
}
