package com.rechargebackend.pulsetopupbackend.Repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rechargebackend.pulsetopupbackend.Model.History;

@Repository
public interface HistoryRepo extends JpaRepository<History,Integer> {
    
}
