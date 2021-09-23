package com.sunbeam.model;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.entities.Product;

public class ProductDto {
	private int pid;
	private String pname;
	private MultipartFile pimage;
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
	private String vemail;

	public ProductDto() {
		// TODO Auto-generated constructor stub
	}

	public ProductDto(int pid,String pname, MultipartFile pimage, String pmaingrp, String psubgrp, String ptype,
			String pbrand, double currentstock, double minstock, double maxstock, double reorderlevel,
			double reorderquantity, double sellprice, String alertmsg , Integer vid ,String vemail  ) {
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
		this.vemail=vemail;
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

	public MultipartFile getPimage() {
		return pimage;
	}

	public void setPimage(MultipartFile pimage) {
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

	public String getVemail() {
		return vemail;
	}

	public void setVemail(String email) {
		this.vemail = vemail;
	}

	@Override
	public String toString() {
		return "ProductDto [pid=" + pid + ", pname=" + pname + ", pimage=" + pimage + ", pmaingrp=" + pmaingrp
				+ ", psubgrp=" + psubgrp + ", ptype=" + ptype + ", pbrand=" + pbrand + ", currentstock=" + currentstock
				+ ", minstock=" + minstock + ", maxstock=" + maxstock + ", reorderlevel=" + reorderlevel
				+ ", reorderquantity=" + reorderquantity + ", sellprice=" + sellprice + ", alertmsg=" + alertmsg
				+ ", vid=" + vid + ", vemail=" + vemail + "]";
	}

	
//	public static Product toEntity(ProductDto dto) {
//		Product entity = new Product();
//		BeanUtils.copyProperties(dto, entity, "pimage");
//		return entity;
//	}
//	
//	public static ProductDto fromEntity(Product entity) {
//		ProductDto dto = new ProductDto();
//		BeanUtils.copyProperties(entity, dto);
//		return dto;
//	}
}
