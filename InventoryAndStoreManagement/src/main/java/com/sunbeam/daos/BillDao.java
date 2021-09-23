package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Bill;

public interface BillDao extends JpaRepository<Bill, Integer> {

	@Query("SELECT b FROM Bill b WHERE b.cid = :cid")
	List<Bill> findByCid(@Param("cid") int cid);
	@Query("SELECT b FROM Bill b WHERE b.bid = :bid")
	Bill findByBid(int bid);
	
}
