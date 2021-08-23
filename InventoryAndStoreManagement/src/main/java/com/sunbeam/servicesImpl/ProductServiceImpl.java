package com.sunbeam.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.daos.ProductDao;
import com.sunbeam.entities.Product;
import com.sunbeam.services.ProductService;
import com.sunbeam.utils.StorageService;


@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDao prodDao;
	
	@Autowired
	private StorageService storageService;
	
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
	public Product save(Product p,MultipartFile pimage) {
		String fileName = storageService.store(pimage);
		p.setPimage(fileName);
		return prodDao.save(p);
	}

	@Override
	public List<Product> findall() {
		return prodDao.findAll();
	}

	
	

	

}
