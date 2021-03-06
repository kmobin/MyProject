package com.sunbeam.entities;

import java.util.Date;

import javax.persistence.Column;
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
	private String orderid;
	private String paymentid;
	private double amount;
	@GeneratedValue(strategy = GenerationType.AUTO)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	@Column(name="createdon", insertable = false, updatable = false)
	private Date createdon;
	private int cid;
	private String status;
	
	public Bill() {
		
	}

	public Bill(int bid, String orderid, String paymentid, double amount, Date createdon, int cid, String status) {
	
		this.bid = bid;
		this.orderid = orderid;
		this.paymentid = paymentid;
		this.amount = amount;
		this.createdon = createdon;
		this.cid = cid;
		this.status = status;
	}

	public int getBid() {
		return bid;
	}

	public void setBid(int bid) {
		this.bid = bid;
	}

	public String getOrderid() {
		return orderid;
	}

	public void setOrderid(String orderid) {
		this.orderid = orderid;
	}

	public String getPaymentid() {
		return paymentid;
	}

	public void setPaymentid(String paymentid) {
		this.paymentid = paymentid;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public Date getCreatedon() {
		return createdon;
	}

	public void setCreatedon(Date createdon) {
		this.createdon = createdon;
	}

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Bill [bid=" + bid + ", orderid=" + orderid + ", paymentid=" + paymentid + ", amount=" + amount
				+ ", createdon=" + createdon + ", cid=" + cid + ", status=" + status + "]";
	}
	
		 
	
}
