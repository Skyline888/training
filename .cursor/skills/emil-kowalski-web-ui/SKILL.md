---
name: emil-kowalski-web-ui
description: Creates polished, minimal, high-clarity web UI in an Emil Kowalski-inspired style with strong spacing, typography, responsive layout, and clean motion. Use when user asks to improve web page visuals, landing sections, layout quality, readability, or overall frontend presentation.
---

# Emil Kowalski Web UI

## Goal

Build interfaces that look clean, premium, and readable on all screen sizes.

Default stack:
- Next.js App Router
- Tailwind CSS
- `next/image` for optimized images

## Core Style

- Minimal visual noise, strong hierarchy.
- Generous spacing and consistent rhythm.
- Neutral color base with 1 accent color.
- Soft borders and subtle shadows only where needed.
- Clear typography: readable line length, contrast, and heading scale.

## Layout Rules

1. Use centered containers (`max-w-*`) with sensible horizontal padding.
2. Prefer vertical sections with clear separation (`py-16`, `py-24`).
3. Keep content width constrained for readability.
4. On mobile, stack first; enhance progressively for larger screens.
5. Avoid magic pixel values unless necessary.

## Typography Rules

- Use 3 levels: headline, section title, body.
- Keep body text around `text-base`/`text-lg` with comfortable line-height.
- Keep paragraph width around `max-w-prose` or equivalent.
- Ensure sufficient contrast in light and dark modes.

## Component Rules

- Buttons: clear primary and secondary variants.
- Cards: simple structure (title, description, action), consistent padding.
- Inputs: clear focus states, visible labels.
- Navigation: concise labels, obvious active/hover states.

## Next.js Safety Rules

- For `next/image`, set both `width` and `height`; if CSS scales image, use `style={{ width: "auto", height: "auto" }}` when appropriate.
- Avoid hydration mismatch sources (`Date.now()`, `Math.random()`, direct `window` reads in server render path).
- If browser extensions inject DOM attributes, treat as environment issue and avoid overfitting app logic.

## Motion Rules

- Use subtle transitions (`duration-200` to `duration-300`).
- Animate opacity/transform first; avoid layout-jank animations.
- Respect reduced motion preferences for large effects.

## Delivery Checklist

Before finishing UI work:
- [ ] Mobile layout looks correct (no overflow).
- [ ] Desktop layout keeps clean visual balance.
- [ ] Text is readable and contrast is sufficient.
- [ ] Primary CTA is visible without searching.
- [ ] No obvious hydration/image warnings introduced.

## Response Format

When applying this skill:
1. Explain the visual direction in 2-4 bullets.
2. Implement directly in code with minimal complexity.
3. Provide short verification steps (`npm run dev`, viewport checks).
