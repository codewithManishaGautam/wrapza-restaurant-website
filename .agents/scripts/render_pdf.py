import fitz
import os

doc = fitz.open("attached_assets/Wrapza_Urban_Fusion_Kitchen_PDF_1_1783216870141.pdf")
print(f"Pages: {doc.page_count}")
print(f"Metadata: {doc.metadata}")

for i, page in enumerate(doc):
    print(f"\nPage {i+1}: {page.rect}")
    mat = fitz.Matrix(2, 2)
    pix = page.get_pixmap(matrix=mat)
    out_path = f".agents/outputs/page_{i+1:02d}.png"
    pix.save(out_path)
    print(f"Saved: {out_path}")
    text = page.get_text("text")
    print(f"Text: {text[:800]}")

