package org.wwii_board_game_site.model;

public class GameProject {
    private String name;
    private String description;
    private String status;
    private String releaseDate;
    // Конструкторы, геттеры и сеттеры
    public GameProject(String name, String description, String status, String releaseDate) {
        this.name = name;
        this.description = description;
        this.status = status;
        this.releaseDate = releaseDate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }
}

