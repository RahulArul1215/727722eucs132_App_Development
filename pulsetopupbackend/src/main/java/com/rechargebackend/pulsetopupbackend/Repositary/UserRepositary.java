package com.rechargebackend.pulsetopupbackend.Repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rechargebackend.pulsetopupbackend.Model.User;

@Repository
public interface UserRepositary extends JpaRepository<User,Long> {
    User findByEmail(String email);
    
}
