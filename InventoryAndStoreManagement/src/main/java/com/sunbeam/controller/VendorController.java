package com.sunbeam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.sunbeam.entities.Product;
import com.sunbeam.entities.Vendor;
import com.sunbeam.model.ProductDto;
import com.sunbeam.model.Response;
import com.sunbeam.model.VendorDto;
//import com.sunbeam.services.VendorService;
import com.sunbeam.services.VendorService;
import com.sunbeam.utils.ReorderService;

@CrossOrigin

@RestController
public class VendorController {
	@Autowired
	private VendorService vendService;
	
	@Autowired
	private ReorderService reorderService;
	
    @CrossOrigin
	@GetMapping("/vendor/{email}")
	public ResponseEntity<Vendor> findByEmail(@PathVariable("email")String email){
		Vendor vendor =vendService.findByEmail(email);		
		//return Response.success(vendor);
		return ResponseEntity.ok(vendor);
		
	}
	
	@GetMapping("/vendor")
	public ResponseEntity<List<Vendor>> findAll(){
		List<Vendor>list=vendService.findAll();
		return ResponseEntity.ok(list);
	}
	
	@PostMapping("/vendor/save")
	public ResponseEntity<Vendor> save(@RequestBody Vendor vend){
		Vendor vendor = vendService.save(vend);
		return ResponseEntity.ok(vendor);
	}
	
	@DeleteMapping("/vendor/delete/{id}")
	public  ResponseEntity<?> Delete(@PathVariable("id")int id){
		boolean vendor=vendService.deleteById(id);
		return ResponseEntity.ok(vendor);
		
	}
	
	@GetMapping("/vendor/find/{id}")
	public ResponseEntity<Vendor> getVendorById(@PathVariable("id") int id) 
	{
		System.out.println(id);
		Vendor vendor = vendService.findById(id);
		System.out.println(vendor);
		return ResponseEntity.ok(vendor);
	}
	
	@PostMapping("/vendor/update")
	public ResponseEntity<String> update(VendorDto vdto){
			
			
			try {
				String name ="";
				Vendor vendor = new Vendor();
				vendor.setId(vdto.getId());
	         
	                 	
	
	                   vendor.setId(vdto.getId());	
	                   vendor.setVname(vdto.getVname());
	                   vendor.setVlname(vdto.getVlname());
	                   vendor.setVadd1(vdto.getVadd1());
	                   vendor.setVadd2(vdto.getVadd2());
	                   vendor.setVcity(vdto.getVcity());
	                   vendor.setVstate(vdto.getVstate());
	                   vendor.setVcountry(vdto.getVcountry());
	                   vendor.setVmobile(vdto.getVmobile());
	                   vendor.setVemail(vdto.getVemail());
						

	                   vendService.save(vendor);

			}catch(Exception e) {
				e.printStackTrace();
			}
			
			return ResponseEntity.ok("Updated SuccessFully");
		}
	
	@PostMapping("/vendor/reorder")
	public ResponseEntity<String> forgot(@RequestBody VendorDto venddto) {
		System.out.println(venddto.toString());
		reorderService.sendSimpleReorderEmail(venddto.getVemail(),venddto.getPname(),venddto.getReorderquantity());
		return ResponseEntity.ok("Success");
	}
}

















