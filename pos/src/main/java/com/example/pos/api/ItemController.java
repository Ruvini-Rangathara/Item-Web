package com.example.pos.api;

import com.example.pos.dto.ItemDTO;
import com.example.pos.dto.ResponseDTO;
import com.example.pos.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:5174")
@RestController
@RequestMapping("/api/item")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping
    public ResponseEntity<ResponseDTO> getAllItems() {
        try{
            List<ItemDTO> allItems = itemService.getAllItems();
            return ResponseEntity.ok(new ResponseDTO(200, "Success", itemService.getAllItems()));
        } catch (Exception e) {
            return ResponseEntity.ok(new ResponseDTO(500, e.getMessage(), null));
        }
    }

    @GetMapping("/{code}")
    public ResponseEntity<ResponseDTO> getItemById(@PathVariable("code") String code) {
        try{
            return ResponseEntity.ok(new ResponseDTO(200, "Success", itemService.getItem(code)));
        } catch (Exception e) {
            return ResponseEntity.ok(new ResponseDTO(500, e.getMessage(), null));
        }
    }

    @PostMapping
    public ResponseEntity<ResponseDTO> saveItem(@RequestBody ItemDTO itemDTO) {
        try{
            return ResponseEntity.ok(new ResponseDTO(200, "Success", itemService.addItem(itemDTO)));
        } catch (Exception e) {
            return ResponseEntity.ok(new ResponseDTO(500, e.getMessage(), null));
        }
    }

    @PutMapping
    public ResponseEntity<ResponseDTO> updateItem(@RequestBody ItemDTO itemDTO) {
        try{
            return ResponseEntity.ok(new ResponseDTO(200, "Success", itemService.updateItem(itemDTO)));
        } catch (Exception e) {
            return ResponseEntity.ok(new ResponseDTO(500, e.getMessage(), null));
        }
    }

    @DeleteMapping("/{code}")
    public ResponseEntity<ResponseDTO> deleteItem(@PathVariable("code") String code) {
        try{
            return ResponseEntity.ok(new ResponseDTO(200, "Success", itemService.deleteItem(code)));
        } catch (Exception e) {
            return ResponseEntity.ok(new ResponseDTO(500, e.getMessage(), null));
        }
    }

    @GetMapping("/count")
    public ResponseEntity<ResponseDTO> getItemCount() {
        try{
            return ResponseEntity.ok(new ResponseDTO(200, "Success", itemService.countItems()));
        } catch (Exception e) {
            return ResponseEntity.ok(new ResponseDTO(500, e.getMessage(), null));
        }
    }

    @GetMapping("/totPrice")
    public ResponseEntity<ResponseDTO> getTotalPrice() {
        try{
            return ResponseEntity.ok(new ResponseDTO(200, "Success", itemService.getTotalPrice()));
        } catch (Exception e) {
            return ResponseEntity.ok(new ResponseDTO(500, e.getMessage(), null));
        }
    }

    @GetMapping("/newCode")
    public ResponseEntity<ResponseDTO> getLastCode() {
        System.out.println("////////////////////////////////////////////////////////////////");
        try{
            String lastCode = itemService.getLastCode();
            String newCode = "P" + String.format("%03d", Integer.parseInt(lastCode.substring(1)) + 1);
            return ResponseEntity.ok(new ResponseDTO(200, "Success", newCode));
        } catch (Exception e) {
            return ResponseEntity.ok(new ResponseDTO(500, e.getMessage(), null));
        }
    }

    @GetMapping("/byDescription/{description}")
    public ResponseEntity<ResponseDTO> findByDescription(@PathVariable("description") String description) {
        try{
            if (description==null || description.isEmpty()) {
                return ResponseEntity.ok(new ResponseDTO(200, "Success", itemService.getAllItems()));
            }
            return ResponseEntity.ok(new ResponseDTO(200, "Success", itemService.findByDescription(description)));
        } catch (Exception e) {

            return ResponseEntity.ok(new ResponseDTO(500, e.getMessage(), itemService.getAllItems()));
        }
    }

}
