package com.sunbeam.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.sunbeam.entities.SaveForLater;


public interface SaveForLaterService {

	
	List<Integer> findByCid(int cid);
	SaveForLater save(SaveForLater sfl);
	void delete(SaveForLater sfl); 
	


	
	
}
