package com.sunbeam.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "vendor")
@Entity
public class Vendor implements Serializable {
//@GeneratedValue(strategy =Generation.Type=Identity)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;
	private String vname;
	private String vlname;
	private String vadd1;
	private String vadd2;
	private String vcity;
	private String vstate;
	private String vcountry;
	private String vmobile;
	private String email;

	public Vendor() {

	}

	public Vendor(int id, String vname, String vlname, String vadd1, String vadd2, String vcity, String vstate,
			String vcountry, String vmobile, String vemail) {
		super();
		this.id = id;
		this.vname = vname;
		this.vlname = vlname;
		this.vadd1 = vadd1;
		this.vadd2 = vadd2;
		this.vcity = vcity;
		this.vstate = vstate;
		this.vcountry = vcountry;
		this.vmobile = vmobile;
		this.email = email;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getVname() {
		return vname;
	}

	public void setVname(String vname) {
		this.vname = vname;
	}

	public String getVlname() {
		return vlname;
	}

	public void setVlname(String vlname) {
		this.vlname = vlname;
	}

	public String getVadd1() {
		return vadd1;
	}

	public void setVadd1(String vadd1) {
		this.vadd1 = vadd1;
	}

	public String getVadd2() {
		return vadd2;
	}

	public void setVadd2(String vadd2) {
		this.vadd2 = vadd2;
	}

	public String getVcity() {
		return vcity;
	}

	public void setVcity(String vcity) {
		this.vcity = vcity;
	}

	public String getVstate() {
		return vstate;
	}

	public void setVstate(String vstate) {
		this.vstate = vstate;
	}

	public String getVcountry() {
		return vcountry;
	}

	public void setVcountry(String vcountry) {
		this.vcountry = vcountry;
	}

	public String getVmobile() {
		return vmobile;
	}

	public void setVmobile(String vmobile) {
		this.vmobile = vmobile;
	}

	public String getVemail() {
		return email;
	}

	public void setVemail(String vemail) {
		this.email = vemail;
	}

	@Override
	public String toString() {
		return "Vendor [id=" + id + ", vname=" + vname + ", vlname=" + vlname + ", vadd1=" + vadd1 + ", vadd2=" + vadd2
				+ ", vcity=" + vcity + ", vstate=" + vstate + ", vcountry=" + vcountry + ", vmobile=" + vmobile
				+ ", vemail=" + email + "]";
	}

}
