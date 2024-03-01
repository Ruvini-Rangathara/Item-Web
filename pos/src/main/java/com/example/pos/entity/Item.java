package com.example.pos.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "item")
public class Item {
    @Id
    private String code;
    private String description;
    @Column(name = "unit_price")
    private double unitPrice;
    @Column(name = "qty_on_hand")
    private int qtyOnHand;
}
