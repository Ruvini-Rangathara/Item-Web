package com.example.pos.entity;

import jakarta.persistence.*;
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
    @Lob
    private byte[] image;
}
