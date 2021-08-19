package com.sunbeam.services;

import com.sunbeam.entities.Vendor;

public interface VendorService {
	Vendor findByEmail(String email);
	Vendor save(Vendor vendor);
}
