package com.example.pos.service;

import com.example.pos.dto.ItemDTO;

import java.util.List;

public interface ItemService {
    boolean isItemExists(String code);
    ItemDTO getItem(String code);
    ItemDTO addItem(ItemDTO item);
    ItemDTO updateItem(ItemDTO item);
    boolean deleteItem(String code);
    List<ItemDTO> getAllItems();
    long countItems();
    double getTotalPrice();
    String getLastCode();
}
