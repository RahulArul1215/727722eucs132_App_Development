package com.rechargebackend.pulsetopupbackend.Controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.rechargebackend.pulsetopupbackend.Model.History;
import com.rechargebackend.pulsetopupbackend.Service.HistoryService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@CrossOrigin
public class HistoryController {
    @Autowired HistoryService historyService;

    // @RequestMapping("/History")
    @PostMapping("/postHistory")
    public ResponseEntity postMethodName(@RequestBody History history ){

        history.setDate(LocalDateTime.now().toLocalDate());
        history.setTime(LocalDateTime.now().toLocalTime());
        History hi=historyService.saveHistory(history);
        return ResponseEntity.status(200).body(hi);
    }

    @GetMapping("/getHistory")
    public List<History> getMethodName() {
        return historyService.getAllData();
    }
    
}
