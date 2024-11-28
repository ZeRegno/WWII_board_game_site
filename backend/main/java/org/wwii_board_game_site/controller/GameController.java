package org.wwii_board_game_site.controller;

import org.wwii_board_game_site.model.GameProject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class GameController {

    @GetMapping("/api/game")
    public GameProject getGameProjectInfo() {
        // Пример данных
        GameProject gameProject = new GameProject(
                "В разработке",
                "Пошаговая настольная игра в сеттинге второй мировой",
                "В разработке",
                "?????"
        );
        return gameProject;
    }
    @GetMapping("/api/game/updates")
    public List<String> getGameUpdates() {
        // Пример данных об изменениях
        List<String> updates = new ArrayList<>();
        updates.add("Гуси гуси - гага 2024-11-10");
        updates.add("Сайт говна 2024-11-10");
        updates.add("Начал делать сайт 2024-11-10");
        return updates;
    }
}
