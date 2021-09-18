package com.sunbeam.services;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Cart;

public interface CartService {
	List<Integer> findByCid(int cid);
	Cart save(Cart cart);
	void delete(Cart cart );
}
