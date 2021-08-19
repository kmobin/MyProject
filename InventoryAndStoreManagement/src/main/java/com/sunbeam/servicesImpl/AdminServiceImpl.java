package com.sunbeam.servicesImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.AdminDao;
import com.sunbeam.entities.Admin;
import com.sunbeam.services.AdminService;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminDao adminDao;
	
	@Override
	public Admin findByEmail(String email) {
	
		Admin admin = adminDao.findByEmail(email);
		return admin;
	}

	

	
	
	
}
