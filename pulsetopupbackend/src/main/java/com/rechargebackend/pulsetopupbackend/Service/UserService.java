package com.rechargebackend.pulsetopupbackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rechargebackend.pulsetopupbackend.Model.User;
import com.rechargebackend.pulsetopupbackend.Repositary.UserRepositary;

@Service
public class UserService {
    @Autowired UserRepositary userRepositary;

    public User registerUser(User user) {
        return userRepositary.save(user);
    }

    public User findByEmail(String email) {
        return userRepositary.findByEmail(email);
    }
    
    public List<User> getalldetails(){
        return userRepositary.findAll();
    }
}
