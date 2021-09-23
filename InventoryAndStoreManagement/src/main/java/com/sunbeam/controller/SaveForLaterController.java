package com.sunbeam.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.sunbeam.entities.Cart;
import com.sunbeam.entities.Product;
import com.sunbeam.entities.SaveForLater;
import com.sunbeam.services.ProductService;
import com.sunbeam.services.SaveForLaterService;


@CrossOrigin
@RestController
@RequestMapping("/saveForLater")
public class SaveForLaterController {

	@Autowired
	private SaveForLaterService sflService;
	
	@Autowired
	private ProductService prodService;
	
	@GetMapping("/{id}")
	public ResponseEntity<List<Product>> saveForLater(@PathVariable("id") int id){
		
		List<Integer> sfl = sflService.findByCid(id);
		
		List<Product> plist = new ArrayList<Product>();
		
		for (Integer pid : sfl) {
			
			Product prod = prodService.findByPid(pid);
			String str = ServletUriComponentsBuilder.fromCurrentContextPath().path("/images/").path(prod.getPimage()).toUriString();
			prod.setPimage(str);
			
			if(!plist.contains(prod))
			     plist.add(prod);
		}
		
		return ResponseEntity.ok(plist);
	}
	
	@GetMapping("/save/{pid}/{cid}")
	public ResponseEntity<SaveForLater> save(@PathVariable("pid") int pid,@PathVariable("cid") int cid){
		
		SaveForLater sfl = new SaveForLater(pid,cid);
		SaveForLater s = sflService.save(sfl);
         
		if(s!=null)
        	  return ResponseEntity.ok(s);
		
		return ResponseEntity.internalServerError().build();
				
	}
	
	@DeleteMapping("/delete/{pid}/{cid}")
	public void Delete(@PathVariable("pid") int pid,@PathVariable("cid") int cid){
		SaveForLater sfl = new SaveForLater(pid,cid);
		sflService.delete(sfl);
		
	}

}
