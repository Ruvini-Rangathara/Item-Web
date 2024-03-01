package com.example.pos.dao;

import com.example.pos.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ItemDao extends JpaRepository<Item, String> {

    @Query("SELECT SUM(i.unitPrice * i.qtyOnHand) FROM Item i")
    double getTotalPrice();

    @Query("SELECT i.code FROM Item i ORDER BY i.code DESC")
    String getLastCode();

    @Query("SELECT i FROM Item i WHERE i.description LIKE %?1%")
    List<Item> findByDescription(String description);

}
