package com.sunbeam.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cart")
public class Cart {

	
	@Id
	private int pid;
	private int cid; 
	
	
	public Cart() {
		
	}


	public Cart(int pid, int cid) {
		
		this.pid = pid;
		this.cid = cid;
	}


	public int getPid() {
		return pid;
	}


	public void setPid(int pid) {
		this.pid = pid;
	}


	public int getCid() {
		return cid;
	}


	public void setCid(int cid) {
		this.cid = cid;
	}


	@Override
	public String toString() {
		return "Cart [pid=" + pid + ", cid=" + cid + "]";
	}
	
	
	
}
