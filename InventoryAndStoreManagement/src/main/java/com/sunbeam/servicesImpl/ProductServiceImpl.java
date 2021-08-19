package com.sunbeam.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.ProductDao;
import com.sunbeam.entities.Product;
import com.sunbeam.services.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDao prodDao;
	
	@Override
	public Product findByPid(int pid) {
		return prodDao.findByPid(pid);
	}

	@Override
	public List<Product> findByPmaingrp(String pmaingrp) {
		return prodDao.findByPmaingrp(pmaingrp);
	}

	@Override
	public List<Product> findByPsubgrp(String psubgrp) {
		return prodDao.findByPsubgrp(psubgrp);
	}

	@Override
	public Product findByPname(String pname) {
		return prodDao.findByPname(pname);
	}

	
	

	

}
