package org.wwii_board_game_site.repository;

import org.wwii_board_game_site.entity.UnitArmoredVehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UnitArmoredVehicleRepository extends JpaRepository<UnitArmoredVehicle, Long> {
}