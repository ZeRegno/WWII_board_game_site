package org.wwii_board_game_site.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "units_vehicles")
public class UnitArmoredVehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")
    private Long id;

    @Column(name = "name", nullable = false)
    @JsonProperty("name")
    private String name;

    @Column(name = "nation", nullable = false)
    @JsonProperty("nation")
    private String nation;

    @Column(name = "class")
    @JsonProperty("vehicleClass")
    private String vehicleClass;

    @Column(name = "price")
    @JsonProperty("price")
    private Integer price;

    @Column(name = "weight")
    @JsonProperty("weight")
    private Integer weight;

    @Column(name = "accuracy_infantry")
    @JsonProperty("accuracyInfantry")
    private Integer accuracyInfantry;

    @Column(name = "accuracy_artillery")
    @JsonProperty("accuracyArtillery")
    private Integer accuracyArtillery;

    @Column(name = "accuracy_small_v")
    @JsonProperty("accuracySmallV")
    private Integer accuracySmallV;

    @Column(name = "accuracy_medium_v")
    @JsonProperty("accuracyMediumV")
    private Integer accuracyMediumV;

    @Column(name = "accuracy_large_v")
    @JsonProperty("accuracyLargeV")
    private Integer accuracyLargeV;

    @Column(name = "accuracy_modifier")
    @JsonProperty("accuracyModifier")
    private Integer accuracyModifier;

    @Column(name = "penetration")
    @JsonProperty("penetration")
    private String penetration;

    @Column(name = "damage_vehicles")
    @JsonProperty("damageVehicles")
    private String damageVehicles;

    @Column(name = "damage_infantry")
    @JsonProperty("damageInfantry")
    private String damageInfantry;

    @Column(name = "armor_front")
    @JsonProperty("armorFront")
    private Integer armorFront;

    @Column(name = "armor_side")
    @JsonProperty("armorSide")
    private Integer armorSide;

    @Column(name = "armor_rear")
    @JsonProperty("armorRear")
    private Integer armorRear;

    @Column(name = "modules")
    @JsonProperty("modules")
    private List<String> modules;

    @Column(name = "attacks_per_turn")
    @JsonProperty("attacksPerTurn")
    private Integer attacksPerTurn;

    @Column(name = "shots_per_attack")
    @JsonProperty("shotsPerAttack")
    private Integer shotsPerAttack;

    @Column(name = "move_distance")
    @JsonProperty("moveDistance")
    private Integer moveDistance;

    @Column(name = "additional_actions")
    @JsonProperty("additionalActions")
    private List<String> additionalActions;

    @Column(name = "image_name")
    @JsonProperty("imageName")
    private String imageName;

    // Getters and setters
}