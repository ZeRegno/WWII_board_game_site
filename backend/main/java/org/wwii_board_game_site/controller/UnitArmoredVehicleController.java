package org.wwii_board_game_site.controller;

import org.springframework.web.bind.annotation.*;
import org.wwii_board_game_site.entity.UnitArmoredVehicle;
import org.wwii_board_game_site.service.UnitArmoredVehicleService;

import java.util.List;
// UnitArmoredVehicleController.java
@RestController
@RequestMapping("/api/units")
@CrossOrigin(origins = "http://localhost:3000")
public class UnitArmoredVehicleController {

    private final UnitArmoredVehicleService unitService;

    public UnitArmoredVehicleController(UnitArmoredVehicleService unitService) {
        this.unitService = unitService;
    }

    @GetMapping
    public List<UnitArmoredVehicle> getAllUnits() {
        return unitService.getAllUnits();
    }
    @GetMapping("/{id}")
    public UnitArmoredVehicle getUnitById(@PathVariable Long id) {
        return unitService.getUnitById(id);  // Предполагается, что метод getUnitById реализован в сервисе
    }
}
