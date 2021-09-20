package com.sunbeam.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class EmailService {

	@Autowired
	private JavaMailSender mailSender;
	
	public void sendSimpleEmail(String toEmail,String name,String password) {

		
		String body = "Name : "+name+" \nPassword : "+password;
		
		SimpleMailMessage message = new SimpleMailMessage();
		
		message.setFrom("inventorymanagement76@gmail.com");
		message.setTo(toEmail);
		message.setText(body);
		message.setSubject("Forgot Password");
	
		mailSender.send(message);
		System.out.println("Mail Sent.....");
	}
}
