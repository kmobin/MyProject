package com.sunbeam.services;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Order;
import com.sunbeam.model.ProductBill;

public interface OrderService {

	Order save(Order order);
	List<Integer> findByCid(int cid);
	List<Integer> findByBid(int bid);
	List<?> getByCid(int cid);
	 List<Integer> getByBid(@Param("bid") int bid);
}
