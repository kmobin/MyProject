package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Cart;

public interface CartDao extends JpaRepository<Cart, Integer>{

	@Query("SELECT c.pid FROM Cart c WHERE c.cid = :cid")
	List<Integer> findByCid(@Param("cid") int cid);
	
	Cart save(Cart cart);
//	@Query("DELETE FROM Cart c WHERE c.pid=:pid AND c.cid=:cid")
//	void delete(@Param("pid") int pid,@Param("cid") int cid );
	
}
