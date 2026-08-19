# RallyIQ — Website Repo

**Read this file in full before changing any marketing copy.**

This is the static marketing website for RallyIQ, deployed to Netlify from `rallyiq.io`.

---

## Strategic North Star — BRAND POSITIONING

RallyIQ is **live-match coaching intelligence** for youth club volleyball coaches. Every word on this site must reinforce that. Drift toward "AI film review" or "Hudl competitor" language weakens the wedge.

### The wedge we own
Youth club volleyball. Mobile-first. Fast. Trusted. Solo-coach workflow. Sideline speed.

### What Hudl owns (don't compete)
Film library. Post-game review. Recruiting. Heavy tagging workflow. Enterprise admin.

### Messaging rule
> RallyIQ is what you open between rallies, not after the season.

---

## Locked Elements — Do Not Change Without Discussion

| Element | Value |
|---------|-------|
| Tagline (H1 sub) | **"Film room intelligence. Sideline speed."** |
| Hero line | **"The timeout is 60 seconds — make the adjustment before the next serve."** |
| Domain | `rallyiq.io` (Namecheap) |
| Deploy target | Netlify (auto-deploys from git push to main) |
| Instagram | RallyIQ account exists |
| Color palette | bg `#0A0F1E`, card `#111827`, primary gold `#C9A84C`, text `#F0EDE6`, CourtIQ cyan `#06B6D4` |
| **NO PURPLE** | Purple fully eliminated. Never reintroduce. |

---

## Banned Phrases — Do Not Use on the Site

These contradict the strategic brief. Reject them in PRs and copy changes.

- "AI film review"
- "Video platform" (we are not a platform)
- "Recruiting tool" / "recruiting database"
- "Hudl replacement" / "Hudl killer" / "replace film review"
- "3-model consensus" (removed Phase 20 — no longer accurate)
- "Multi-model voting" (same reason)
- "Opponent scouting" / "Scout your next opponent" (Scout IQ is search on OWN data)
- "AI watches your game" (too passive, too generic)
- "Replace your coaches" (never)
- Anything implying the tool coaches for you rather than alongside you

## Preferred Vocabulary

- "Live-match coaching intelligence"
- "Film room intelligence at sideline speed"
- "Clip-to-coaching in seconds"
- "Turn rallies into immediate coaching adjustments"
- "Sideline-ready"
- "What you open between rallies"

---

## Tier Descriptions — Current & Correct

### RallyIQ (free tier)
- **Positioning:** the snapshot assistant. Fast, frame-based, single-model Claude analysis.
- **What it does:** "Pattern recognition grounded in what the AI actually sees — zone-specific, rotation-aware, tied to what happened in that clip. Not generic advice. Coaching language you can use in the next timeout."
- **Speed:** ~25 seconds

### CourtIQ (paid)
- **Positioning:** the sideline film room. Full-video depth.
- **DO NOT describe as:** "3-model consensus" or "multi-model voting" (removed Phase 20).
- **Current differentiators (honest):**
  - Full-video analysis (not sampled frames)
  - CV-confirmed player identity (named players, jersey numbers)
  - Temporal pattern detection across the whole clip
  - Rally-integrated context (score, rotations, momentum baked into insights)
- **Speed:** ~47 seconds async (push notification on complete)

### Scout IQ (coming soon)
- **Positioning:** natural language search across your own season footage.
- **DO NOT describe as:** opponent scouting, pre-game prep, or Hudl-style film breakdown.
- **What it is:** "Multi-clip async analysis across a full match or tournament day. Search your season footage with natural language — find every rally where a pattern repeated, across every game you've recorded. Your team's history, on demand."
- **Based on:** Twelve Labs Marengo indexing over already-processed CourtIQ data.

---

## File Location & Deploy

| Item | Detail |
|------|--------|
| Main file | `~/Documents/rallyiq-site/index.html` |
| Deploy | `git add -A && git commit -m "..." && git push` (Netlify auto-deploys) |
| Preview | Open `index.html` locally or use `python3 -m http.server 8000` |
| DNS | Namecheap → points to Netlify |

---

## Content Sections (as of Phase 20)

1. **Hero** — Title, tagline, hero sub-line, CTA
2. **RallyIQ Analysis card** — current copy locked Phase 20
3. **CourtIQ card** — current copy locked Phase 20 (includes rally context angle)
4. **Player Tracking card** — individual insight history framing
5. **Parent View section**
6. **Coaching Staff section**
7. **Club Admin section**
8. **Tiers section** — with Scout IQ "coming soon" entry

---

## Phase 21 — Planned Copy Updates

### CourtIQ positioning refresh (Q3 from April 22 coworker review)
After Phase 20 removed consensus, CourtIQ's selling point needs refreshing. Direction agreed:

**Contrast framing:**
> RallyIQ shows you what just happened. CourtIQ shows you why it keeps happening.

**Feature bullets:**
- **Roster Recognition** — it doesn't just see a libero; it sees #4 Victoria and tracks her movement through every rotation
- **Full-Video Context** — we analyze the seconds between the frames that snapshot analysis misses
- **Rally-Integrated Logic** — maps your live scoreboard data directly to the video, explaining why the score is moving the way it is

Keep the tone coach-facing, not technical. Avoid "AI" and "models" in hero and section H1s — readers assume AI, they want to know what it DOES.

### Alternate positioning line (from ChatGPT, backup option)
> "From clips to patterns. From patterns to decisions."

---

## SEO & Social

- Meta description should emphasize "live-match coaching" and "youth club volleyball" — those are the queries that convert
- Twitter/X and Instagram meta tags should use the locked tagline
- Avoid generic "AI sports analytics" meta — too broad, competes with everyone

---

## Git Hygiene

`.claude/` directory is gitignored to prevent Claude Code worktrees from being committed. Do not remove this.

---

## Change Approval — What Needs Discussion First

These require a decision conversation before changing, even if copy seems better:
- Hero line
- Tagline
- Tier names (RallyIQ / CourtIQ / Scout IQ)
- Tier positioning (what each tier IS)
- Color palette
- The "we are NOT" vocabulary (film library, platform, etc.)

These can be updated freely:
- Meta descriptions
- Footer links
- Pricing (when finalized)
- Feature bullet ordering within a card
- Typography tweaks that stay within the palette

---

## Branch, review, THEN merge (adopted 2026-08-19, all of Chris's projects)

Chris: *"instead of coding on main we use branches now… you use codex to review the
code, once you and codex agree it passes then you merge it back to main and push it.
That way code is reviewed as you write versus us having to go back."*

**Where this came from:** on 2026-08-18 the OpenAI Codex plugin for Claude Code
(`openai/codex-plugin-cc`, installed at user scope so it is available in every repo)
reviewed one night's work in Vanity and found **nine real defects** — including a
`security definer` Postgres function callable by anon off the publishable key, and a
three-attempt retry that had never once fired because it wrapped `fetch()`, which
resolves at the response headers rather than after the body. Every one of them was
already deployed. The reviewing was not the problem; it was happening after the merge.

**The loop, every time:**
1. `git checkout -b <short-slug>` before touching code.
2. Work and commit on the branch as normal.
3. Review the branch: `/codex:review --base main --scope branch`, or from a script,
   `node ~/.claude/plugins/cache/openai-codex/codex/<version>/scripts/codex-companion.mjs review --wait --base <merge-base> --scope branch`.
   (Vanity wraps this as `npm run review`, which picks the base itself — worth copying
   into any repo where Chris will run it himself. See `vanity/scripts/review.mjs`.)
4. Fix the findings, then **review again**. Three of Vanity's nine findings were
   defects in the fix for the previous finding; a fix written knowing about the bug is
   not automatically clean.
5. Merge to main and push once it passes. Delete the branch.

**"Passes" is not "zero findings"** — it is nothing left unaddressed. Fix it, or write
down why it was declined. Codex is a second opinion, not an authority: it has been
wrong about severity, and complying with a wrong finding once meant adding a network
call to an error handler whose premise was that the network had just failed.

⚠️ **Branching isolates CODE, not data.** Schema changes and data repairs hit the live
database whatever branch is checked out.

⚠️ **Hotfix escape hatch:** if the app is broken for a real user right now, fix on main
and review afterwards. The workflow protects them; it does not outrank them.

Docs-only changes (progress logs, this file) do not need a branch — they cannot break
the app, and ceremony paid on changes that cannot cause the failure it guards against
is the kind of thing these files have had to strip out before.
