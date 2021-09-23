package com.sunbeam.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.OrderDao;
import com.sunbeam.entities.Order;
import com.sunbeam.model.ProductBill;
import com.sunbeam.services.OrderService;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderDao dao;

	@Override
	public Order save(Order order) {
		
		return dao.save(order);
	}

	@Override
	public List<Integer> findByCid(int cid) {
		
		return dao.findByCid(cid);
	}

	@Override
	public List<Integer> findByBid(int bid) {
		
		return dao.findByBid(bid);
	}

	@Override
	public List<?> getByCid(int cid) {
		
		return dao.getByCid(cid);
	}

	@Override
	public  List<Integer> getByBid(int bid) {
		
		return dao.getByBid(bid);
	}
	
	
	
	
}
