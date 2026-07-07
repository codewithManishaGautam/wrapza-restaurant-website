package com.wrapza.model;

import java.util.List;

public class MenuItem {
    private String id;
    private String category;
    private String emoji;
    private String name;
    private List<String> items;
    private String highlight;

    public MenuItem() {}

    public MenuItem(String id, String category, String emoji, String name,
                    List<String> items, String highlight) {
        this.id = id;
        this.category = category;
        this.emoji = emoji;
        this.name = name;
        this.items = items;
        this.highlight = highlight;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getEmoji() { return emoji; }
    public void setEmoji(String emoji) { this.emoji = emoji; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public List<String> getItems() { return items; }
    public void setItems(List<String> items) { this.items = items; }

    public String getHighlight() { return highlight; }
    public void setHighlight(String highlight) { this.highlight = highlight; }
}
