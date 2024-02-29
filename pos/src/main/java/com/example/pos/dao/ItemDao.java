package com.example.pos.dao;

import com.example.pos.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ItemDao extends JpaRepository<Item, String> {

    @Query("SELECT SUM(i.unitPrice * i.qtyOnHand) FROM Item i")
    double getTotalPrice();

    @Query("SELECT i.code FROM Item i ORDER BY i.code DESC")
    String getLastCode();

}
