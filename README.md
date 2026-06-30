# Pradeep C. Shah Resume Website

Static resume website ready for GitHub Pages.

## Local Preview

Open `index.html` directly, or run:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then visit:

```text
http://127.0.0.1:4173/index.html
```

## GitHub Pages Setup

1. Create a GitHub repository, for example `resume` or `pradeep-shah-resume`.
2. Upload or push these files to the repository root:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `.nojekyll`
   - `assets/`
3. In GitHub, open the repository settings.
4. Go to `Pages`.
5. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `master` or `main`
   - Folder: `/root`
6. Save. GitHub will publish the site at:

```text
https://<github-username>.github.io/<repository-name>/
```

## Custom Domain Setup

1. In repository `Settings > Pages`, enter your custom domain.
2. Add a `CNAME` file in this repository root containing only your domain name, for example:

```text
resume.example.com
```

3. In your domain DNS provider, add one of these:

For a subdomain such as `resume.example.com`:

```text
Type: CNAME
Name: resume
Value: <github-username>.github.io
```

For an apex/root domain such as `example.com`, add GitHub Pages `A` records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

4. After DNS verifies in GitHub Pages, enable `Enforce HTTPS`.
