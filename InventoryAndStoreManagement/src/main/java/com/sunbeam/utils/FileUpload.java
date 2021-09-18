package com.sunbeam.utils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileUpload {

	
	public final String UPLOAD_DIR = new ClassPathResource("static/images/").getFile().getAbsolutePath();
	
	
	public FileUpload() throws IOException{
		
	}
	
	public String uploadFile(MultipartFile f) {
       
        String newName="";
        try {
        	  newName = f.hashCode() + ".jpeg";
      	   System.out.println(newName);
      	   Files.copy(f.getInputStream(), Paths.get(UPLOAD_DIR+"\\"+newName),StandardCopyOption.REPLACE_EXISTING);
      	   
        }catch(Exception e) {
        	e.printStackTrace();
        }
        
        return newName;
}
}