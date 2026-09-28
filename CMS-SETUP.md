# Hustle Hive — Content Manager (CMS) Setup

The site now has a built-in content manager so you can edit text and images
yourself, without touching code. It lives at:

    https://YOUR-SITE-DOMAIN/admin/

You log in with **GitHub**, make your changes in a simple form, and click
**Publish**. The site rebuilds automatically (usually live within ~1–2 minutes).

There is a **one-time setup** below to switch on the GitHub login. After that,
editing is just: open `/admin`, change things, publish.

---

## How it works (the short version)

- All editable content lives in small files in the repo
  (`src/lib/content/*.json`) and images live in `static/images`.
- When you publish an edit, the CMS saves it straight to GitHub.
- Cloudflare sees the change and rebuilds the live site automatically.
- Nothing new to host, no monthly fee, no database.

---

## ONE-TIME SETUP — turn on GitHub login (~10 minutes)

You only do this once. It connects the `/admin` page to GitHub securely.
There are two parts: (A) deploy a tiny login helper to Cloudflare, and
(B) register it with GitHub.

### Part A — Deploy the login helper (Cloudflare Worker)

1. Go to the auth helper project:
   **https://github.com/sveltia/sveltia-cms-auth**
2. Click the **“Deploy to Cloudflare”** button in its README and follow the
   prompts (sign in to Cloudflare when asked). This creates a small Worker.
3. When it finishes, copy the Worker’s URL from the Cloudflare dashboard.
   It looks like:

       https://sveltia-cms-auth.YOUR-SUBDOMAIN.workers.dev

   Keep this URL handy — you need it in Part B and Part C.

### Part B — Register the helper with GitHub

1. Go to **https://github.com/settings/applications/new**
   (GitHub → Settings → Developer settings → OAuth Apps → New OAuth App).
2. Fill in:
   - **Application name:** `Hustle Hive CMS`
   - **Homepage URL:** your site’s address, e.g. `https://hustlehive.org`
   - **Authorization callback URL:** your Worker URL from Part A with
     `/callback` on the end, e.g.

         https://sveltia-cms-auth.YOUR-SUBDOMAIN.workers.dev/callback

3. Click **Register application**.
4. GitHub shows a **Client ID** — copy it.
5. Click **Generate a new client secret** — copy that too (you only see it once).

### Part C — Give the helper its secrets

1. In the **Cloudflare dashboard**, open the Worker you deployed in Part A
   → **Settings → Variables (and Secrets)**.
2. Add these:
   - `GITHUB_CLIENT_ID` = the Client ID from Part B
   - `GITHUB_CLIENT_SECRET` = the Client secret from Part B (click *Encrypt*)
   - `ALLOWED_DOMAINS` = your site’s domain, e.g. `hustlehive.org`
     (this stops anyone else’s site using your login helper)
3. Save / deploy.

### Part D — Point the CMS at the helper (one line of code)

1. Open the file **`static/admin/config.yml`** in the repo.
2. Find these two lines near the top:

   ```yaml
       # base_url is the URL of the OAuth worker ...
       # base_url: https://sveltia-cms-auth.<your-subdomain>.workers.dev
   ```

3. **Uncomment the second line** (remove the leading `# `) and replace it with
   your real Worker URL from Part A, so it reads:

   ```yaml
   backend:
     name: github
     repo: dmac925/hive-fresh
     branch: main
     base_url: https://sveltia-cms-auth.YOUR-SUBDOMAIN.workers.dev
   ```

4. Also check the `repo:` line says the correct GitHub repo
   (`owner/repository-name`) for **your** copy of the site.
5. Save and commit/push that change (or ask Andy to).

That’s it. Go to `https://YOUR-SITE-DOMAIN/admin/`, click **Login with GitHub**,
approve, and you’re in.

---

## Day-to-day: how to edit content

1. Go to **https://YOUR-SITE-DOMAIN/admin/** and log in with GitHub.
2. Pick the page on the left: **Home, Happening Soon, About, Programmes, Shop**.
3. Edit the text fields, or click an image to upload/replace a photo.
4. Click **Publish** (top right).
5. Wait ~1–2 minutes and refresh the live site — your change is there.

### What you can edit

| Page        | You can change |
|-------------|----------------|
| **Home**    | Hero heading/text/button + logo, the "Where to next?" cards, the About Hustle Hive section, and the Makers to Market photo carousel (shown on the Makers to Market page) |
| **Happening Soon** | The big cards under the homepage hero — swap these for each new holiday club, event or intake (title, badge, text, details, button, image) |
| **About**   | Hero image & title, Mission, Vision, the 3 Values, the founders, the button |
| **Programmes** | Page title/subtitle and each programme card (title, description, image, “Coming soon” toggle, “Register interest” subject) |
| **Shop**    | Page text and each product (name, maker, price, images, description, bullet-point details) |

### Tips

- **Images:** click an image field → upload from your computer. It’s saved into
  the site automatically. Use reasonably sized photos (under ~1–2 MB) so pages
  stay fast.
- **Adding/removing items** (a programme card, a Happening Soon card, a product): use the
  **+ Add** button and the drag handle to reorder; the trash icon removes one.
- **“Image position” fields** are an advanced layout setting — leave them as they
  are unless Andy advises otherwise.
- **Product “ID” field:** lowercase letters, numbers and dashes only (it becomes
  part of the product’s web address). Avoid changing it after a product is live.

---

## Want to try it before the GitHub login is set up?

Developers can test the CMS locally without any of the setup above:

```bash
npm run dev
# then open http://localhost:5173/admin/  and choose "Work with Local Repository"
```

This edits the JSON files on disk directly — handy for a demo or a dry run.

---

## Questions / something looks off?

Edits are just saved to GitHub, so nothing can be permanently broken — any change
can be reverted from the repo’s history. If a login or publish step misbehaves,
send Andy the Worker URL and a screenshot and he can check the configuration.
