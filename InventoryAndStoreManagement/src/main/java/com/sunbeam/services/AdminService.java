package com.sunbeam.services;

import com.sunbeam.entities.Admin;

public interface AdminService {

	Admin findByEmail(String email);
}
