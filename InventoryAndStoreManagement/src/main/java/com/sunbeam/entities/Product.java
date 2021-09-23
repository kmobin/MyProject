package com.sunbeam.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.web.multipart.MultipartFile;

@Table(name="product")
@Entity
public class Product {
	
@GeneratedValue(strategy = GenerationType.IDENTITY)	
@Id	
private int pid;
private String pname;
private String pimage;
private String pmaingrp;
private String psubgrp;
private String ptype;
private String pbrand;
private double currentstock;
private double minstock;
private double maxstock;
private double reorderlevel;
private double reorderquantity;
private double sellprice;
private String alertmsg;
private Integer vid;	

     public Product() {
    	 
     }


	public Product(int pid, String pname, String pimage, String pmaingrp, String psubgrp, String ptype, String pbrand,
			double currentstock, double minstock, double maxstock, double reorderlevel, double reorderquantity,
			double sellprice, String alertmsg,Integer vid) {
		this.pid = pid;
		this.pname = pname;
		this.pimage = pimage;
		this.pmaingrp = pmaingrp;
		this.psubgrp = psubgrp;
		this.ptype = ptype;
		this.pbrand = pbrand;
		this.currentstock = currentstock;
		this.minstock = minstock;
		this.maxstock = maxstock;
		this.reorderlevel = reorderlevel;
		this.reorderquantity = reorderquantity;
		this.sellprice = sellprice;
		this.alertmsg = alertmsg;
		this.vid=vid;
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


	public String getPmaingrp() {
		return pmaingrp;
	}


	public void setPmaingrp(String pmaingrp) {
		this.pmaingrp = pmaingrp;
	}


	public String getPsubgrp() {
		return psubgrp;
	}


	public void setPsubgrp(String psubgrp) {
		this.psubgrp = psubgrp;
	}


	public String getPtype() {
		return ptype;
	}


	public void setPtype(String ptype) {
		this.ptype = ptype;
	}


	public String getPbrand() {
		return pbrand;
	}


	public void setPbrand(String pbrand) {
		this.pbrand = pbrand;
	}


	public double getCurrentstock() {
		return currentstock;
	}


	public void setCurrentstock(double currentstock) {
		this.currentstock = currentstock;
	}


	public double getMinstock() {
		return minstock;
	}


	public void setMinstock(double minstock) {
		this.minstock = minstock;
	}


	public double getMaxstock() {
		return maxstock;
	}


	public void setMaxstock(double maxstock) {
		this.maxstock = maxstock;
	}


	public double getReorderlevel() {
		return reorderlevel;
	}


	public void setReorderlevel(double reorderlevel) {
		this.reorderlevel = reorderlevel;
	}


	public double getReorderquantity() {
		return reorderquantity;
	}


	public void setReorderquantity(double reorderquantity) {
		this.reorderquantity = reorderquantity;
	}


	public double getSellprice() {
		return sellprice;
	}


	public void setSellprice(double sellprice) {
		this.sellprice = sellprice;
	}

	public String getAlertmsg() {
		return alertmsg;
	}


	public void setAlertmsg(String alertmsg) {
		this.alertmsg = alertmsg;
	}


	public Integer getVid() {
		return vid;
	}


	public void setVid(Integer vid) {
		this.vid = vid;
	}


	@Override
	public String toString() {
		return "Product [pid=" + pid + ", pname=" + pname + ", pimage=" + pimage + ", pmaingrp=" + pmaingrp
				+ ", psubgrp=" + psubgrp + ", ptype=" + ptype + ", pbrand=" + pbrand + ", currentstock=" + currentstock
				+ ", minstock=" + minstock + ", maxstock=" + maxstock + ", reorderlevel=" + reorderlevel
				+ ", reorderquantity=" + reorderquantity + ", sellprice=" + sellprice + ", alert=" + alertmsg + "]";
	}

     
     
	
}
