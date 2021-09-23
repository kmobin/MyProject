package com.sunbeam.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.BillDao;
import com.sunbeam.entities.Bill;
import com.sunbeam.services.BillService;

@Service
public class BillServiceImpl implements BillService{

	@Autowired
	private BillDao dao;
	
	@Override
	public Bill save(Bill bill) {
		
		return dao.save(bill);
	}

	@Override
	public List<Bill> findByCid(int cid) {
		
		return dao.findByCid(cid);
	}

	@Override
	public Bill findByBid(int bid) {
		
		return dao.findByBid(bid);
	}

	
}
