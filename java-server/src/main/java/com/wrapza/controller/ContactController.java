package com.wrapza.controller;

import com.wrapza.model.ContactRequest;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/contact")
public class ContactController {

    // In-memory storage (for demo purposes)
    private final List<Map<String, String>> inquiries = new ArrayList<>();

    @PostMapping
    public ResponseEntity<Map<String, String>> submitInquiry(
            @Valid @RequestBody ContactRequest request) {

        String timestamp = LocalDateTime.now()
            .format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

        // Store inquiry
        inquiries.add(Map.of(
            "name", request.getName(),
            "email", request.getEmail(),
            "phone", request.getPhone(),
            "message", request.getMessage(),
            "timestamp", timestamp
        ));

        System.out.printf("[Wrapza Inquiry] From: %s <%s> | Phone: %s | Time: %s%n",
            request.getName(), request.getEmail(), request.getPhone(), timestamp);

        return ResponseEntity.ok(Map.of(
            "status", "success",
            "message", "Thank you " + request.getName() +
                       "! We have received your inquiry and will contact you shortly.",
            "timestamp", timestamp
        ));
    }

    @GetMapping("/count")
    public Map<String, Integer> getInquiryCount() {
        return Map.of("totalInquiries", inquiries.size());
    }
}
