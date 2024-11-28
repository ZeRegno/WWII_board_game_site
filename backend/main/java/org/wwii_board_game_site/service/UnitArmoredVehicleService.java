package org.wwii_board_game_site.service;


import org.wwii_board_game_site.entity.UnitArmoredVehicle;
import org.wwii_board_game_site.repository.UnitArmoredVehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UnitArmoredVehicleService {

    private final UnitArmoredVehicleRepository unitRepository;

    public UnitArmoredVehicleService(UnitArmoredVehicleRepository unitRepository) {
        this.unitRepository = unitRepository;
    }

    public List<UnitArmoredVehicle> getAllUnits() {
        return unitRepository.findAll();
    }
    public UnitArmoredVehicle getUnitById(Long id) {
        return unitRepository.findById(id).orElse(null);  // Возвращает юнит по id или null, если не найден
    }
}