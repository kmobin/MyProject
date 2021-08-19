package com.sunbeam.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="product")
@Entity
public class Product {
	@Id
	int prodId;
	String prodName;
	String prodMainGrp;
	String prodSubGrp;
	String prodType;
	String prodBrand;
	double currStock;
	double minStock;
	double maxStock;
	double reorderLevel;
	double reorderQuantity;
	double sellPrice;
	String alert;
	
	public Product() {
		
	}

	public Product(int prodId, String prodName, String prodMainGrp, String prodSubGrp, String prodType,
			String prodBrand, double currStock, double minStock, double maxStock, double reorderLevel,
			double reorderQuantity, double sellPrice, String alert) {
		this.prodId = prodId;
		this.prodName = prodName;
		this.prodMainGrp = prodMainGrp;
		this.prodSubGrp = prodSubGrp;
		this.prodType = prodType;
		this.prodBrand = prodBrand;
		this.currStock = currStock;
		this.minStock = minStock;
		this.maxStock = maxStock;
		this.reorderLevel = reorderLevel;
		this.reorderQuantity = reorderQuantity;
		this.sellPrice = sellPrice;
		this.alert = alert;
	}

	public int getProdId() {
		return prodId;
	}

	public void setProdId(int prodId) {
		this.prodId = prodId;
	}

	public String getProdName() {
		return prodName;
	}

	public void setProdName(String prodName) {
		this.prodName = prodName;
	}

	public String getProdMainGrp() {
		return prodMainGrp;
	}

	public void setProdMainGrp(String prodMainGrp) {
		this.prodMainGrp = prodMainGrp;
	}

	public String getProdSubGrp() {
		return prodSubGrp;
	}

	public void setProdSubGrp(String prodSubGrp) {
		this.prodSubGrp = prodSubGrp;
	}

	public String getProdType() {
		return prodType;
	}

	public void setProdType(String prodType) {
		this.prodType = prodType;
	}

	public String getProdBrand() {
		return prodBrand;
	}

	public void setProdBrand(String prodBrand) {
		this.prodBrand = prodBrand;
	}

	public double getCurrStock() {
		return currStock;
	}

	public void setCurrStock(double currStock) {
		this.currStock = currStock;
	}

	public double getMinStock() {
		return minStock;
	}

	public void setMinStock(double minStock) {
		this.minStock = minStock;
	}

	public double getMaxStock() {
		return maxStock;
	}

	public void setMaxStock(double maxStock) {
		this.maxStock = maxStock;
	}

	public double getReorderLevel() {
		return reorderLevel;
	}

	public void setReorderLevel(double reorderLevel) {
		this.reorderLevel = reorderLevel;
	}

	public double getReorderQuantity() {
		return reorderQuantity;
	}

	public void setReorderQuantity(double reorderQuantity) {
		this.reorderQuantity = reorderQuantity;
	}

	public double getSellPrice() {
		return sellPrice;
	}

	public void setSellPrice(double sellPrice) {
		this.sellPrice = sellPrice;
	}

	public String getAlert() {
		return alert;
	}

	public void setAlert(String alert) {
		this.alert = alert;
	}

	@Override
	public String toString() {
		return "Product [prodId=" + prodId + ", prodName=" + prodName + ", prodMainGrp=" + prodMainGrp + ", prodSubGrp="
				+ prodSubGrp + ", prodType=" + prodType + ", prodBrand=" + prodBrand + ", currStock=" + currStock
				+ ", minStock=" + minStock + ", maxStock=" + maxStock + ", reorderLevel=" + reorderLevel
				+ ", reorderQuantity=" + reorderQuantity + ", sellPrice=" + sellPrice + ", alert=" + alert + "]";
	}
	
}
