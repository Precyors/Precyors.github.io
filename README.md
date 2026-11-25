# Precious Odutola — Personal Website

A responsive, minimal personal website with dark and light themes. Built with plain HTML, CSS and JavaScript for free static hosting.

## Preview locally

Open `index.html` in a browser. For a local development server, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a public GitHub repository named **`Precyors.github.io`** (the name must match your GitHub username exactly, including capitalization if desired).
2. Upload the contents of this folder to the repository root. `index.html` should be at the root, not inside another folder.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. Wait for GitHub Pages to publish. The site should appear at `https://precyors.github.io/`.

## Before publishing: personal details to verify

- Confirm the professional positioning and biography in `index.html`.
- Add your real LinkedIn profile URL in the two places currently using the generic LinkedIn homepage.
- Add a professional contact email or contact form if you want one.
- Add direct repository links for projects when those repositories are public.
- Verify the Hugging Face model link and project description.
- Update canonical URL, Open Graph URL, JSON-LD URL and sitemap if you choose a custom domain.

## Search visibility

The starter includes:
- Descriptive title and meta description.
- Open Graph metadata.
- Person structured data (`schema.org`).
- A `robots.txt` file and XML sitemap.
- Crawlable, semantic HTML.

These are foundations, not a guarantee of inclusion or ranking in AI-generated answers. Keep the site public, publish original work, earn credible external references, and verify indexing with Google Search Console.

## Theme

The theme toggle switches between dark and light mode and remembers the visitor's choice in local storage. First visit follows the visitor's operating-system preference.
