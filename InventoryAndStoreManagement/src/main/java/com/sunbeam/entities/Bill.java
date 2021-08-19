package com.sunbeam.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrimaryKeyJoinColumns;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Table(name="Bill")
@Entity
public class Bill {

	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	 private int bid;
	 private int cid;
	 @DateTimeFormat(pattern = "yyyy-MM-dd")
	 @Temporal(TemporalType.DATE)
	 private Date billdate;
	 private double total;
	 
	 public Bill() {
		 
	 }

	public Bill(int bid, int cid, Date billdate, double total) {
		
		this.bid = bid;
		this.cid = cid;
		this.billdate = billdate;
		this.total = total;
	}

	public int getBid() {
		return bid;
	}

	public void setBid(int bid) {
		this.bid = bid;
	}

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public Date getBilldate() {
		return billdate;
	}

	public void setBilldate(Date billdate) {
		this.billdate = billdate;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	@Override
	public String toString() {
		return "Bill [bid=" + bid + ", cid=" + cid + ", billdate=" + billdate + ", total=" + total + "]";
	}
	 
	 
	 
	 
	
}
