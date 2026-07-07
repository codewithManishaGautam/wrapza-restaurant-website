package com.wrapza.model;

public class InvestmentItem {
    private String label;
    private String amount;
    private boolean isTotal;

    public InvestmentItem() {}

    public InvestmentItem(String label, String amount, boolean isTotal) {
        this.label = label;
        this.amount = amount;
        this.isTotal = isTotal;
    }

    public String getLabel() { return label; }
    public void setLabel(String label) { this.label = label; }

    public String getAmount() { return amount; }
    public void setAmount(String amount) { this.amount = amount; }

    public boolean isTotal() { return isTotal; }
    public void setTotal(boolean total) { isTotal = total; }
}
