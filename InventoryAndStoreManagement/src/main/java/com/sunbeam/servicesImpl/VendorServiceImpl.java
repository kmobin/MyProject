package com.sunbeam.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.VendorDao;
import com.sunbeam.entities.Vendor;
import com.sunbeam.services.VendorService;

@Service
public class VendorServiceImpl implements VendorService {
	@Autowired
	VendorDao vendDao;

	@Override
	public Vendor findByEmail(String email) {
		Vendor vendor = vendDao.findByEmail(email);
		return vendor;
	}

//	@Override
//	public Vendor save(Vendor vendor) {
//		
//		return vendDao.save(vendor);
//	}
//	

	@Override
	public List<Vendor> findAll() {

		return vendDao.findAll();
	}

	@Override
	public Vendor save(Vendor vend) {

		return vendDao.save(vend);
	}

	

	@Override
	public boolean deleteById(int id) {
		if(vendDao.existsById(id)) {
			vendDao.deleteById(id);
			return true;
		}
		return false;
	}

	@Override
	public Vendor findById(int id) {
		return vendDao.findById(id);
	
	}

}




