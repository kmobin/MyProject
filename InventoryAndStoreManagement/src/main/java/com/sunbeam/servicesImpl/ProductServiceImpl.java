package com.sunbeam.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

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

@Override
	public Product save(Product p) {
		
		return prodDao.save(p);
	}
	@Override
	public List<Product> findall() {
		return prodDao.findAll();
	}

	@Override
	public List<String> findDistinctSubGrp() {
		
		return prodDao.findDistinctSubGrp();
	}

	@Override
	public List<String> findDistinctMainGrp() {
		
		return prodDao.findDistinctMainGrp();
	}

	@Override
	public List<String> findDistinctName() {
		
		return prodDao.findDistinctName();
	}

	
	@Override
	public boolean deleteById(int pid) {
		if(prodDao.existsById(pid)) {
			prodDao.deleteById(pid);
			return true;
		}
		return false;
	}

	

}
