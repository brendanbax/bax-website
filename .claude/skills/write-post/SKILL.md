---
name: write-post
description: Runs a short guided interview to frame a new Insights post, then scaffolds a new file in content/insights/ with real frontmatter and a heading outline (no prose) for Bax to write into.
---

Bax wants help *framing* a new post on the Insights blog (content/insights/*.md), not
having it written for him. Posts are personal career-retrospective essays — "N years
ago I was in this role, did this thing, learned this lesson" / "built this thing" /
"grew into leading this way." Your job is to ask good questions, then scaffold an
empty-but-structured markdown file. Never write the post's prose yourself.

## Schema you're targeting

`content.config.ts` defines the `insights` collection as:

- `title: string`
- `date: string` — publish date, `YYYY-MM-DD`
- `description: string` — one-liner shown on the index page
- `category: string` — free text, narrative shape (see below), not an enum
- `tags: string[]` — includes company/role tags plus topical tags
- `draft: boolean` — new scaffolds should default to `true`

## Interview

Ask these conversationally, roughly in order. Don't dump all of them at once — this
is meant to help Bax think, not feel like a form. A couple have concrete option sets;
use AskUserQuestion for those two. The rest are open-ended — just ask in plain chat
and wait for the reply.

1. **Main idea** (open, plain chat): "What's the one idea you want this post to
   land? A sentence or two is enough — doesn't need to be polished."
2. **Shape** (AskUserQuestion, single-select, allow Other): "What shape is this
   story?" Options:
   - Lesson learned — a specific lesson from a role or moment
   - Thing I built/shipped — a project or accomplishment
   - Growth & leadership — how you grew into leading in some capacity
   - Career transition — moving from one chapter to the next
   This becomes `category`, stored as a kebab-case slug of whichever option is picked
   (e.g. "Lesson learned" → `lesson-learned`), or the user's own words slugified if
   they pick Other.
3. **Trigger** (open, plain chat): "What prompted this one — a specific role,
   project, moment, or conversation?"
4. **Takeaway** (open, plain chat): "If someone reads only the last paragraph, what
   should they walk away with?"
5. **Career context for tags** (open, plain chat): "Which company and/or role does
   this relate to, if any? I'll fold these in as tags, e.g. `acme-corp`,
   `senior-designer` — say 'skip' if it's not tied to a specific chapter."
6. **Other tags** (open, plain chat): "Any other topics to tag this with (e.g.
   `design-systems`, `mentorship`, `hiring`)? Comma-separated, optional."
7. **Description** (open, plain chat): "Give me a one-sentence description for the
   index page listing — or say 'you draft it' and I'll propose one from what you've
   told me, for you to edit."
8. **Title** (open, plain chat): "Working title? If you don't have one, I'll propose
   a few based on what you've told me and you pick or riff on one."

Keep answers 1, 3, and 4 in mind — they're only used to pick the outline and to draft
a description/title if asked, they are never copied verbatim into the post body.

## Scaffolding the file

1. Get today's date: `date +%Y-%m-%d`.
2. Slugify the title (lowercase, ascii, spaces/punctuation → hyphens) for the
   filename. Check `content/insights/` for a collision; if the slug exists, ask
   Bax how to disambiguate rather than overwriting.
3. Build `tags` as one array: kebab-cased company/role tags (step 5) followed by any
   additional tags (step 6). Skip entirely if the user opted out of both.
4. Pick an outline template below based on the `category` from step 2 (fall back to
   Other/generic if the user went off-menu). Each heading gets one italic prompt
   line underneath as a reminder of what to cover — Bax deletes these as he writes.

   **lesson-learned**
   ```
   ## The Situation
   _What was going on — the role, the context, the stakes?_

   ## What Happened
   _The moment or decision itself._

   ## The Lesson
   _What did it teach you, specifically?_

   ## How I Apply It Now
   _Where does this lesson still show up in how you work?_
   ```

   **thing-built**
   ```
   ## The Problem
   _What wasn't working, or what gap did you see?_

   ## What I Built
   _The thing itself — scope, approach, key decisions._

   ## How It Worked Out
   _Impact, reception, what shipped._

   ## What I'd Do Differently
   _With hindsight, what would change?_
   ```

   **growth-leadership**
   ```
   ## Where I Started
   _Your role and comfort level before the stretch._

   ## The Stretch
   _What was asked of you, or what you asked of yourself._

   ## What Changed
   _How you grew — concretely, not just "I got better at X."_

   ## What I'd Tell Someone Earlier in That Journey
   _Advice for someone a step behind where you were._
   ```

   **career-transition**
   ```
   ## The Chapter Before
   _Where you were, and why it made sense at the time._

   ## Why I Moved
   _The real reason, not just the resume version._

   ## The Chapter After
   _What changed once you made the move._

   ## Looking Back
   _What you know now that you didn't then._
   ```

   **generic / Other** (anything that didn't map cleanly above)
   ```
   ## Context
   _Set the scene._

   ## The Story
   _What happened._

   ## What I Learned
   _The takeaway, in your own words._
   ```

5. Write `content/insights/<slug>.md`:

   ```
   ---
   title: <title>
   date: <YYYY-MM-DD>
   description: <description>
   category: <category-slug>
   tags: [<tag1>, <tag2>, ...]
   draft: true
   ---

   <outline from step 4>
   ```

   Omit `tags: []` cleanly (empty array, not omitted key — the schema expects the
   field) if there are none.

6. Tell Bax the file path, and remind him: it's created with `draft: true` so it
   won't appear on `/insights` or be reachable by URL until he flips it to `false`
   when it's ready to publish.
