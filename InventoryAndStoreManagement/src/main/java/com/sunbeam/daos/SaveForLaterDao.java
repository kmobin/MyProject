package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Cart;
import com.sunbeam.entities.SaveForLater;

public interface SaveForLaterDao extends JpaRepository<SaveForLater,Integer> {
	@Query("SELECT s.pid FROM SaveForLater s WHERE s.cid = :cid")
	List<Integer> findByCid(@Param("cid") int cid);
	
	SaveForLater save(SaveForLater sfl);
//	@Query("DELETE FROM Cart c WHERE c.pid=:pid AND c.cid=:cid")
//	void delete(@Param("pid") int pid,@Param("cid") int cid );
	
	
}
