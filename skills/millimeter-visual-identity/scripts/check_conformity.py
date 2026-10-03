#!/usr/bin/env python3
"""Millimeter Dark conformity check. Usage: check_conformity.py <file|dir> [...]

Scans HTML, CSS, JSX, SVG and Markdown for rule violations. Exit 1 if any hit.
It is a lint, not a proof: a clean run still needs the eyes.
"""
import re, sys, pathlib

EXTS = {".html", ".htm", ".css", ".jsx", ".tsx", ".js", ".svg", ".md", ".txt"}
SKIP_DIRS = {"node_modules", ".git"}
SKIP_FILES = {"support.js", "ds-base.js", "deck-stage.js", "_ds_bundle.js"}  # generated runtime
COMMENT = re.compile(r"^\s*(/\*|\*|//|<!--)")
RULES = [
    ("pure-black", re.compile(r"#000(?:000)?\b(?![0-9a-fA-F])|\brgb\(\s*0\s*,\s*0\s*,\s*0\s*\)", re.I), "pure black is banned, use Void #0B0C0F"),
    ("pure-white", re.compile(r"#fff(?:fff)?\b(?![0-9a-fA-F])|\brgb\(\s*255\s*,\s*255\s*,\s*255\s*\)", re.I), "pure white is banned, use Paper #F2F3F5"),
    ("shadow", re.compile(r"box-shadow\s*:\s*(?!none)|text-shadow\s*:\s*(?!none)|drop-shadow\(", re.I), "no shadow or glow, depth is tone"),
    ("blur", re.compile(r"backdrop-filter|filter\s*:\s*blur", re.I), "no blur"),
    ("gradient-fill", re.compile(r"(?:linear|radial|conic)-gradient\((?!\s*(?:90deg,\s*)?rgba\(255,\s*255,\s*255|\s*(?:90deg,\s*)?rgba\(\$\{)", re.I), "no gradient fill (grid gradients are the only exception)"),
    ("light-mode-hex", re.compile(r"#(?:2F6BE4|F2B233|D6493D|4BA84E|A855F7|EDE7DC)\b", re.I), "light-mode value, muddy on dark"),
    ("edge-stripe", re.compile(r"border-(?:left|right|top|bottom)\s*:\s*[2-9]px", re.I), "no thick edge stripe"),
    ("dash-kicker", re.compile(r"\b\d{2}\s+[—–-]\s+[A-Z]{2,}"), "kickers carry no dash: write 01 PALETTE"),
    ("em-dash", re.compile(r"—"), "no em dash as punctuation"),
    ("emoji", re.compile("[\U0001F300-\U0001FAFF☀-➿]"), "no emoji"),
    ("wordmark", re.compile(r"wordmark", re.I), "no wordmark or logo (ignore if a rule is quoting this)"),
]
VIOLET = re.compile(r"#B57BFF|--ultra-violet|ultra-violet", re.I)

def files(p):
    p = pathlib.Path(p)
    if p.is_file():
        yield p
    else:
        for f in p.rglob("*"):
            if f.is_file() and f.suffix.lower() in EXTS and f.name not in SKIP_FILES and not (set(f.parts) & SKIP_DIRS):
                yield f

def main(args):
    hits = 0
    for a in args:
        for f in files(a):
            try:
                lines = f.read_text(encoding="utf-8").splitlines()
            except Exception:
                continue
            in_block = False
            for n, line in enumerate(lines, 1):
                if in_block:
                    in_block = "*/" not in line
                    continue
                if line.lstrip().startswith("/*") and "*/" not in line:
                    in_block = True
                    continue
                if COMMENT.match(line) or "transparent 1px" in line:
                    continue
                for name, rx, msg in RULES:
                    if rx.search(line) and not (name == "wordmark" and re.search(r"\b(no|never|not|nothing)\b", line, re.I)):
                        hits += 1
                        print(f"{f}:{n}: [{name}] {msg}")
                if VIOLET.search(line) and re.search(r"chart|stat|heading|<h[1-6]|kicker", line, re.I):
                    hits += 1
                    print(f"{f}:{n}: [violet] violet is action only, not for charts, stats or headings")
    print(f"{hits} hit(s)")
    return 1 if hits else 0

if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    sys.exit(main(sys.argv[1:]))
