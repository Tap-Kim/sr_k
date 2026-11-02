# Resume editing instructions

## Default target for LLM edits

When a user asks to update, revise, improve, tailor, or otherwise modify "the resume" or "경력기술서" without naming a specific route, **always treat `/sr_k/latest/` as the default/current resume**.

### Files to edit by default

- Route: `src/app/latest/page.tsx`
- Resume content: `src/payload/sr_k/latest/*`

Typical content edits should be made only inside:

- `src/payload/sr_k/latest/introduce.tsx`
- `src/payload/sr_k/latest/work-experience.tsx`
- `src/payload/sr_k/latest/skill.tsx`
- `src/payload/sr_k/latest/other-experience.tsx`
- `src/payload/sr_k/latest/education.tsx`
- `src/payload/sr_k/latest/etc.tsx`
- `src/payload/sr_k/latest/profile.tsx`
- `src/payload/sr_k/latest/meta.ts`

## Legacy routes are read-only by default

Do **not** modify these unless the user explicitly names that route/version:

- `/sr_k/` → `src/app/page.tsx`, `src/payload/*.tsx`
- `/sr_k/simple/`
- `/sr_k/toss-bank/`
- `/sr_k/toss-invest/`
- Any other named resume variant

Use legacy versions for reference only.

## New variants

Create a new path only when the user explicitly asks for a separate/company-specific/versioned resume.

Use:

```bash
pnpm resume:new <path>
```

Then edit only the generated variant.

## Validation

After code or resume-content changes, run:

```bash
pnpm build
```

Confirm that `/latest` remains a valid static route.

## Priority rule

If instructions conflict, follow this order:

1. Explicit path/version named by the user
2. `/sr_k/latest/`
3. Never infer that the root `/sr_k/` should be updated
