package com.wrapza.controller;

import com.wrapza.model.InvestmentItem;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/investment")
public class InvestmentController {

    private static final List<InvestmentItem> BREAKDOWN = List.of(
        new InvestmentItem("Brand / franchise and setup coordination", "$20,000", false),
        new InvestmentItem("Lease deposit and initial rent setup", "$15,000", false),
        new InvestmentItem("Design, drawings, permits and approvals", "$10,000", false),
        new InvestmentItem("Leasehold improvements / buildout", "$45,000", false),
        new InvestmentItem("Kitchen equipment and refrigeration", "$50,000", false),
        new InvestmentItem("POS, security, menu screens and tech", "$10,000", false),
        new InvestmentItem("Signage, branding and storefront", "$10,000", false),
        new InvestmentItem("Initial inventory and packaging", "$10,000", false),
        new InvestmentItem("Launch marketing and local promotions", "$5,000", false),
        new InvestmentItem("Opening working capital reserve", "$25,000", false),
        new InvestmentItem("TOTAL APPROXIMATE INVESTMENT", "CAD $200,000", true)
    );

    @GetMapping
    public Map<String, Object> getInvestmentData() {
        return Map.of(
            "totalAmount", "CAD $200,000",
            "currency", "CAD",
            "breakdown", BREAKDOWN,
            "disclaimer", "Final investment may vary by province, location, landlord conditions and construction scope."
        );
    }

    @GetMapping("/breakdown")
    public List<InvestmentItem> getBreakdown() {
        return BREAKDOWN;
    }
}
