package com.sunbeam.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.CartDao;
import com.sunbeam.entities.Cart;
import com.sunbeam.services.CartService;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	private CartDao dao;
	
	@Override
	public List<Integer> findByCid(int cid) {
		
		return dao.findByCid(cid);
	}

	@Override
	public Cart save(Cart cart) {
		
		return dao.save(cart);
	}

	@Override
	public void delete(Cart cart) {
		dao.delete(cart);
		
	}

	

	
	
	
}
