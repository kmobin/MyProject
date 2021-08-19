package com.sunbeam.model;

public class ProductModel {

	
	private String str;
	
	public ProductModel() {
		
	}
	
public ProductModel(String str) {
	    this.str = str;
	}

public String getStr() {
	return str;
}

public void setStr(String str) {
	this.str = str;
}

@Override
public String toString() {
	return "ProductModel [str=" + str + "]";
}





}
