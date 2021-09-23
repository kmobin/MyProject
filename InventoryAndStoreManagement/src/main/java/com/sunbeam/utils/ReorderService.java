package com.sunbeam.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ReorderService {
	@Autowired
	private JavaMailSender mailSender;
	
	public void sendSimpleReorderEmail(String toEmail,String pname,double reorderquantity) {

		
		String body = "Product Name : "+pname+" \nReorderQuantity : "+reorderquantity;
		
		SimpleMailMessage message = new SimpleMailMessage();
		
		message.setFrom("inventorymanagement76@gmail.com");
		message.setTo(toEmail);
		message.setText(body);
		message.setSubject("Reorder Product");
	
		mailSender.send(message);
		System.out.println("Mail Sent.....");
	}
}

