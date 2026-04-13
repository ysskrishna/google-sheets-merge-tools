# Changelog

All notable changes to **Merge Tools** are documented in this file.

The same content is shown on the [Changelog page](https://ysskrishna.github.io/google-sheets-merge-tools/changelog.html).

## [1.0.0] - 2026-04-13

### 1. Merge Every "N" Cells

Merge your selection into fixed-size groups along rows or columns.

- **Group size:** Define exactly how many cells form each merged block.
- **Last partial group:** Choose whether to merge or leave the last partial group cells at the end.

### 2. Merge By Value

Smart merging based on cell content — ideal for grouping repeated cells.

- **Merge repeated values:** Automatically detect and merge consecutive cells with the same value (vertically or horizontally).
- **Merge value with empty cells:** Extend a value across adjacent blank cells until the next non-empty cell.

**Advanced grouping:**
- *Each column on its own* — Every column decides its merge pattern independently. 
- *All columns follow the first* — The first column sets the merge pattern, and all other columns mirror it exactly.

### 3. Unmerge

Quickly split merged cells in your selection.

- **Optional:** Automatically fill every split cell with the original merged value so no data is lost.

### 4. Concatenate & Merge

Combine multiple cell values into one cell with your chosen separator, then merge them.

- **Separators**: Comma, semicolon, pipe (|), dash, newline, or any custom character.
- **Trim whitespace** — Clean extra spaces from each value before joining.
- **Skip empty cells** — Prevent blank cells from creating unwanted gaps.

**Common Merge Options**

- **Direction:** Work **vertically** (down columns) or **horizontally** (across rows).
- **Alignment:** Set both horizontal alignment (left, center, right) and vertical alignment (top, middle, bottom) for the merged cells.

[1.0.0]: https://github.com/ysskrishna/google-sheets-merge-tools
