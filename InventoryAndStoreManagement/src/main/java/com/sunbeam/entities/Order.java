package com.sunbeam.entities;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="orders")
@Entity
public class Order {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int orderid;
	private int pid;
	private int cid;
    private int bid; 	
	public Order() {
		
	}

	public Order(int pid, int cid,int bid) {
	
		this.pid = pid;
		this.cid = cid;
		this.bid = bid;
	}

	public int getOrderid() {
		return orderid;
	}

	public void setOrderid(int orderid) {
		this.orderid = orderid;
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

	public void setBid(int bid) {
		this.bid = bid;
	}
	public int getBid() {
		return bid;
	}

	@Override
	public String toString() {
		return "Order [orderid=" + orderid + ", pid=" + pid + ", cid=" + cid + ", bid=" + bid + "]";
	}

	
	
}
