package com.sunbeam.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

public class ProductBill {

	private int bid;
	private String orderid;
	private String paymentid;
	private double amount;
	private Date createdon;
	private int cid;
	private String status;
	private int pid;
	private String pname;
	private String pimage;
	private String pbrand;
	private double sellprice;
	
	public ProductBill() {
		
	}
	public ProductBill(int bid, String orderid, String paymentid, double amount, Date createdon, int cid, String status,
			int pid, String pname, String pimage, String pbrand, double sellprice) {
		super();
		this.bid = bid;
		this.orderid = orderid;
		this.paymentid = paymentid;
		this.amount = amount;
		this.createdon = createdon;
		this.cid = cid;
		this.status = status;
		this.pid = pid;
		this.pname = pname;
		this.pimage = pimage;
		this.pbrand = pbrand;
		this.sellprice = sellprice;
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
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getPimage() {
		return pimage;
	}
	public void setPimage(String pimage) {
		this.pimage = pimage;
	}
	public String getPbrand() {
		return pbrand;
	}
	public void setPbrand(String pbrand) {
		this.pbrand = pbrand;
	}
	public double getSellprice() {
		return sellprice;
	}
	public void setSellprice(double sellprice) {
		this.sellprice = sellprice;
	}
	@Override
	public String toString() {
		return "ProductBill [bid=" + bid + ", orderid=" + orderid + ", paymentid=" + paymentid + ", amount=" + amount
				+ ", createdon=" + createdon + ", cid=" + cid + ", status=" + status + ", pid=" + pid + ", pname="
				+ pname + ", pimage=" + pimage + ", pbrand=" + pbrand + ", sellprice=" + sellprice + "]";
	}
	
	
	
}
