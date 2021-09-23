package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.sunbeam.entities.Order;

public interface OrderDao extends JpaRepository<Order, Integer>{
	@Query("SELECT o.pid FROM Order o WHERE o.cid = :cid")
	List<Integer> findByCid(@Param("cid") int cid);
	
	@Query("SELECT o.pid FROM Order o WHERE o.bid = :bid")
	List<Integer> findByBid(@Param("bid") int bid);
	

	@Query("SELECT o.pid FROM Order o WHERE o.bid = :bid")
     List<Integer> getByBid(@Param("bid") int bid);
	
	@Query("SELECT b,o.pid FROM Bill b INNER JOIN Order o ON b.cid = :cid AND b.bid = o.bid")
	List<?> getByCid(@Param("cid") int cid);
	
//	@Query("DELETE FROM Cart c WHERE c.pid=:pid AND c.cid=:cid")
//	void delete(@Param("pid") int pid,@Param("cid") int cid );

	
	
}
