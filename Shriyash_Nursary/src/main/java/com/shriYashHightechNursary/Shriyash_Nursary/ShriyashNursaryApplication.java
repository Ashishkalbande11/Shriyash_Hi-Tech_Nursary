package com.shriYashHightechNursary.Shriyash_Nursary;

import com.shriYashHightechNursary.Shriyash_Nursary.dao.UserRepository;
import com.shriYashHightechNursary.Shriyash_Nursary.enums.UserRole;
import com.shriYashHightechNursary.Shriyash_Nursary.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class ShriyashNursaryApplication  implements CommandLineRunner {
	@Autowired
	UserRepository userRepository;
	public static void main(String[] args) {
		SpringApplication.run(ShriyashNursaryApplication.class, args);
	}

	public void run(String... args){
		User user = new User();
		user.setEmail("admin@gmail.com");
		user.setName("Admin");
		User adminAcc = userRepository.findByRole(UserRole.ADMIN);
		if(null == adminAcc){
			user.setRole(UserRole.ADMIN);
			user.setPassword(new BCryptPasswordEncoder().encode("admin"));
			user.setPhoneNumber(Long.valueOf("9752401269"));
			user.setAddress("Bramhan Pipla");
			userRepository.save(user);
		}

	}
}
