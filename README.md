# Umang Harmony Welfare Society - Ghost Theme

A custom Ghost CMS theme built for the **Umang Harmony Welfare Society**. This theme is designed for high performance, accessibility, and extreme manageability via the Ghost Admin interface without requiring code changes for day-to-day operations.

---

## 🚀 Technical Overview

- **Engine:** Ghost Handlebars (GScan Validated)
- **CSS:** Vanilla CSS (located in `assets/css/screen.css`)
- **JS:** Vanilla JavaScript (located in `assets/js/main.js`)
- **Compatibility:** Ghost 5.0+

---

## 📁 Directory Structure

```text
├── assets/
│   ├── css/screen.css      # Core styles (Reset, Variables, Components)
│   └── js/main.js          # Mobile toggle, Sticky header, Stats animation
├── partials/
│   ├── footer.hbs          # Site footer & Secondary navigation
│   ├── header.hbs          # Sticky header & Primary navigation
│   └── navigation.hbs      # Shared navigation helper
├── ADMIN_MANUAL.md         # Documentation for non-technical admins
├── default.hbs             # Master layout template
├── index.hbs               # Homepage with dynamic #home slug injection
├── page-*.hbs              # Specialized custom page templates
├── post.hbs                # Single post template with related posts
└── package.json            # Custom settings & metadata
```

---

## 🛠 Developer Guide

### 1. Custom Theme Settings
The theme exposes 19+ custom settings in the Ghost Admin under **Settings > Design > Site-wide**. These are defined in `package.json` under the `config.custom` object.

### 2. Dynamic Homepage Injection
The homepage (`index.hbs`) uses a unique pattern to allow full editor flexibility:
```handlebars
{{#get "pages" slug="home" limit="1"}}
  {{#foreach pages}}
    <section class="hero hero-custom">
      <!-- Injects content, feature_image, and excerpt from a Ghost page -->
    </section>
  {{/foreach}}
{{/get}}
```
*   **Logic:** If a page with the slug `home` exists and is published, its data is pulled into the homepage hero.

### 3. Internal Tag Logic
The theme uses **Internal Tags** (prefixed with `#`) to drive UI logic without cluttering public taxonomies:

- `#partnership`: Identifies posts that should appear as cards on the "Partner With Us" page.
- `#highlight`: Triggers the `card-highlight` CSS class (saffron accent) on partnership cards.
- `#founder`: Identifies leadership posts for the About page.
- `#contact-person`: Identifies the featured contact profile for the Contact page.
- `#case-story`: Filters posts into the "Latest Activities" grid on the homepage.
- `#flagship-programme`: Features a specific post in the main "Flagship" section.

### 4. Custom Filtering
The "Our Works" page feed is automatically filtered to exclude utility posts:
```handlebars
{{#get "posts" filter="tag:-hash-founder+tag:-hash-contact-person+tag:-hash-partnership"}}
```

---

## 📦 Installation & Development

1.  **Clone/Download** this repository into your Ghost `content/themes/` folder.
2.  **Zip the theme** for production upload:
    ```bash
    zip -r umang-theme.zip . -x "node_modules/*" ".git/*"
    ```
3.  **Validate** with GScan:
    ```bash
    npx gscan .
    ```

---

## 🎨 Design System

Styles are managed via CSS Custom Properties in `:root` inside `screen.css`:

- `--color-primary`: `#1a7f4b` (Deep forest green)
- `--color-accent`: `#f5a623` (Warm saffron)
- `--font-heading`: `Poppins`
- `--font-body`: `Lato`

---

## 📄 Documentation
- For content management instructions, see [ADMIN_MANUAL.md](./ADMIN_MANUAL.md).
- For Ghost theme documentation, visit [Ghost Docs](https://ghost.org/docs/themes/).
