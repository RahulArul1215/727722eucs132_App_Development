package com.rechargebackend.pulsetopupbackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rechargebackend.pulsetopupbackend.Model.History;
import com.rechargebackend.pulsetopupbackend.Repositary.HistoryRepo;

@Service
public class HistoryService {
    @Autowired HistoryRepo historyRepo;

    public History saveHistory(History history)
    {
        return historyRepo.save(history);
    }

    public List<History> getAllData(){
        return historyRepo.findAll();
    }
}
