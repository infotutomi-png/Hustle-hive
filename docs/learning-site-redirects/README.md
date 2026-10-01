# Redirecting the old Hustle Hive Learning site

Once the merged site (with `/alternative-provision`) is **live on hustlehive.co.uk**, every address on
hustlehivelearning.co.uk should permanently (301) redirect to its new home, so old links, bookmarks and
Google results keep working.

## Redirect map

| Old address (hustlehivelearning.co.uk) | New address (hustlehive.co.uk) |
|---|---|
| `/` and `/index.html` | `/alternative-provision` |
| `/our-approach` and `/our-approach.html` | `/alternative-provision/approach` |
| `/for-schools` and `/for-schools.html` | `/alternative-provision/schools` |
| `/team` and `/team.html` | `/about#team` |
| `/contact` and `/contact.html` | `/alternative-provision#contact` |
| `/services` | `/alternative-provision#services` |
| `/our-curriculum` | `/alternative-provision/approach#curriculum` |
| `/policies-and-procedures` | `/about/safeguarding#policies` |
| `/meet-the-team` | `/about#team` |
| `/gallery` | `/alternative-provision#gallery` |
| `/day-in-the-life` | `/alternative-provision/approach#day` |
| `/pricing` | `/alternative-provision/schools#pricing` |
| `/privacy` | `/about/safeguarding#policies` (was a direct link to the parent & learner privacy notice) |
| `/downloads/hustle-hive-commissioner-pack.pdf` | `/downloads/hustle-hive-commissioner-pack.pdf` |
| anything else | `/alternative-provision` |

Section links keep working: an old link such as `/our-approach#hustle-100` lands on
`/alternative-provision/approach#hustle-100`, because the new pages use the same section names
(`#why`, `#who`, `#services`, `#days`, `#gallery`, `#approach`, `#activities`, `#day`, `#curriculum`,
`#hustle-100`, `#ambition`, `#referrals`, `#safeguarding`, `#pricing`, `#policies`, `#faqs`).
`www.hustlehivelearning.co.uk` works the same way, because both addresses point at the same Cloudflare Pages project.

## How to switch it on (only after the merged site is live)

In the `hustle-hive-learning` repository:

1. **Delete everything except** `README.txt` (optional) and add this folder's `_redirects` file at the top level.
2. **Delete the `functions` folder.** Cloudflare Pages Functions run before `_redirects`, so if it's left in,
   the old contact form and "www" redirect would still answer instead of the new redirects.
3. Commit and push to `main`. Cloudflare redeploys in a minute or two.
4. Check a few addresses (e.g. `hustlehivelearning.co.uk/for-schools`) land on the right new pages.
5. In Google Search Console, for the hustlehivelearning.co.uk property, use **Settings → Change of address**
   to tell Google the site has moved to hustlehive.co.uk.

Keep the domain registered and the Cloudflare Pages project running for at least a year so the redirects keep working.
