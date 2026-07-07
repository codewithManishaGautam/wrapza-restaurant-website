package com.wrapza.controller;

import com.wrapza.model.MenuItem;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu")
public class MenuController {

    private static final List<MenuItem> MENU_ITEMS = List.of(
        new MenuItem(
            "kathi-rolls", "kathi-rolls", "🌯", "KATHI ROLLS",
            List.of("Chicken Tikka", "Butter Chicken", "Paneer", "Egg",
                    "Veggie", "Seekh Kebab", "Fish", "Spicy Potato"),
            "Core Identity"
        ),
        new MenuItem(
            "pizza", "pizza", "🍕", "PIZZA",
            List.of("Build-your-own", "Tandoori Paneer", "Butter Chicken",
                    "Spicy Chicken", "Veggie"),
            "Family Favourite"
        ),
        new MenuItem(
            "wings", "wings", "🍗", "WINGS",
            List.of("Tandoori", "Peri-Peri", "Buffalo", "BBQ",
                    "Honey Garlic", "Hot Garlic", "Masala"),
            "Late-Night Bestseller"
        ),
        new MenuItem(
            "momos", "momos", "🥟", "MOMOS",
            List.of("Steamed", "Fried", "Tandoori", "Butter Masala"),
            "Street Food Classic"
        ),
        new MenuItem(
            "chai", "chai", "☕", "DAILY CHAI",
            List.of("Standard from CAD $1.50", "Masala", "Ginger",
                    "Elaichi", "Karak"),
            "Daily Repeat Driver"
        ),
        new MenuItem(
            "pasta", "pasta", "🍝", "PASTA",
            List.of("Creamy Masala", "Butter Chicken", "Veggie",
                    "Spicy Red Sauce", "Tandoori Paneer"),
            "Comfort Crowd-Pleaser"
        )
    );

    @GetMapping
    public List<MenuItem> getAllMenuItems() {
        return MENU_ITEMS;
    }

    @GetMapping("/{id}")
    public MenuItem getMenuItemById(@PathVariable String id) {
        return MENU_ITEMS.stream()
            .filter(item -> item.getId().equals(id))
            .findFirst()
            .orElseThrow(() -> new org.springframework.web.server.ResponseStatusException(
                org.springframework.http.HttpStatus.NOT_FOUND,
                "Menu item not found: " + id
            ));
    }
}

