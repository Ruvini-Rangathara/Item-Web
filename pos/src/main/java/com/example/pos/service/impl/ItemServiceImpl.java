package com.example.pos.service.impl;

import com.example.pos.dao.ItemDao;
import com.example.pos.dto.ItemDTO;
import com.example.pos.entity.Item;
import com.example.pos.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {

    @Autowired
    private final ModelMapper modelMapper;

    @Autowired
    private ItemDao itemDao;


    @Override
    public boolean isItemExists(String code) {
        return itemDao.existsById(code);
    }

    @Override
    public ItemDTO getItem(String code) {
        Optional<Item> item = itemDao.findById(code);
        return item.map(value -> modelMapper.map(value, ItemDTO.class)).orElse(null);
    }

    @Override
    public ItemDTO addItem(ItemDTO itemDTO) {
        if(itemDao.existsById(itemDTO.getCode())){
            return null;
        }
        Item save = itemDao.save(modelMapper.map(itemDTO, Item.class));
        return modelMapper.map(save, ItemDTO.class);
    }

    @Override
    public ItemDTO updateItem(ItemDTO item) {
        if (itemDao.existsById(item.getCode())){
            Item save = itemDao.save(modelMapper.map(item, Item.class));
            return modelMapper.map(save, ItemDTO.class);
        }
        return null;
    }

    @Override
    public boolean deleteItem(String code) {
        if (itemDao.existsById(code)){
            itemDao.deleteById(code);
            return true;
        }
        return false;
    }

    @Override
    public List<ItemDTO> getAllItems() {
        List<Item> items = itemDao.findAll();
        return items.stream().map(item -> modelMapper.map(item, ItemDTO.class)).toList();
    }

    @Override
    public long countItems() {
        return itemDao.count();
    }

    @Override
    public double getTotalPrice() {
        return itemDao.getTotalPrice();
    }

    @Override
    public String getLastCode() {
        return itemDao.getLastCode();
    }
}
