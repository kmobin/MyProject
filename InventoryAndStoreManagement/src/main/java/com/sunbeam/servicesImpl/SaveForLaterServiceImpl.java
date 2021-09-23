package com.sunbeam.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.SaveForLaterDao;
import com.sunbeam.entities.Cart;
import com.sunbeam.entities.SaveForLater;
import com.sunbeam.services.SaveForLaterService;


@Service
public class SaveForLaterServiceImpl implements SaveForLaterService {
	
	@Autowired
	private SaveForLaterDao dao;
	
	@Override
	public List<Integer> findByCid(int cid) {
		
		return dao.findByCid(cid);
	}

	@Override
	public SaveForLater save(SaveForLater sfl) {
		
		return dao.save(sfl);
	}

	@Override
	public void delete(SaveForLater sfl) {
		dao.delete(sfl);
		
	}

	
}
