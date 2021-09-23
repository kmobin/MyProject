package com.sunbeam.services;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Bill;
import com.sunbeam.entities.Order;

public interface BillService {
	Bill save(Bill bill);
	
	List<Bill> findByCid(@Param("cid") int cid);
	Bill findByBid(int bid);
}
