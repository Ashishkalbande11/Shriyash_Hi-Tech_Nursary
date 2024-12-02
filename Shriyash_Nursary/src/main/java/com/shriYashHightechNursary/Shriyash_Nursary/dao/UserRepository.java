package com.shriYashHightechNursary.Shriyash_Nursary.dao;

import com.shriYashHightechNursary.Shriyash_Nursary.enums.UserRole;
import com.shriYashHightechNursary.Shriyash_Nursary.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    User findByRole(UserRole userRole);
}

