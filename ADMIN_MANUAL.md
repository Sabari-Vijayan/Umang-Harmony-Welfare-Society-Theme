# Umang Harmony Theme - Admin Manual

Welcome to the **Umang Harmony Welfare Society** Ghost theme (v1.0.0). This manual is designed for "No-Code" administrators to manage the website's content, layout, and settings directly from the Ghost Admin interface.

---

## 1. Custom Theme Settings
You can find these settings in your Ghost Admin under **Settings > Design > Site-wide**.

### Social Media & Contact
*   **LinkedIn URL**: Full URL to the organisation's LinkedIn page.
*   **Contact Address**: Physical office location shown in footer and contact page.
*   **Contact Email**: Primary email address for inquiries.
*   **Contact Phone**: Primary phone number.
*   **Contact WhatsApp**: **Numbers only** (e.g., `910000000000`). Used for the "WhatsApp Chat" button.

### Homepage Sections
*   **About Section Description**: Brief summary on the homepage "Who We Are" strip.
*   **Madhya Pradesh Image**: Image representing the region/mission, shown in the About strip.
*   **Flagship Section Description**: Text describing the primary initiative (e.g., Cotton Wick Production) on the homepage.
*   **Impact Story Content**: Teaser text for the "Impact Story" section.
*   **Impact Story Image**: Background image for the Impact Story section.

### Impact Statistics
Displayed in the "Impact Stats Bar" on the homepage:
*   **Women Engaged**: Total women involved (e.g., "1000+").
*   **Women Earning**: Women actively generating income (e.g., "700+").
*   **Villages Covered**: Number of villages reached (e.g., "22").
*   **SROI**: Social Return on Investment value (e.g., "2.8x").

### Footer & Error Pages
*   **Footer Tagline**: Short phrase shown in the footer and pre-footer CTA.
*   **Footer Registration**: Legal registration details.
*   **Error Title**: Main heading for the 404 page (e.g., "Oops! Page Not Found").
*   **Error Message**: Explanatory text for the 404 page.

---

## 2. Available Pages & Custom Templates
When creating a new **Page**, select the appropriate "Template" in the sidebar:

| Page Name | Template | Description |
| :--- | :--- | :--- |
| **Homepage Hero** | `Default` | Create a page with slug `home` to control the top of the homepage. |
| **About Us** | `About` | Layout with "Our Journey" hero and "Our Leadership" section. |
| **Contact Us** | `Contact Us` | Includes details and a "Contact Person" profile. |
| **Impact Story** | `Impact Story` | Clean layout for long-form case studies. |
| **Our Works** | `Our Works` | Vertical list of all posts/initiatives (automatically filtered). |
| **Partner With Us** | `Partner With Us` | Grid of partnership options (managed via posts). |

---

## 3. Custom Internal Tags
Internal tags (starting with `#`) control specific content areas. They are invisible to visitors.

*   **`#case-story`**: Shows the post in the "Latest Activities" grid on the homepage.
*   **`#flagship-programme`**: Features the post in the homepage "Flagship Programmes" section and footer menu.
*   **`#partnership`**: Displays the post as a card on the "Partner With Us" page.
    *   **Post Title**: Card Heading.
    *   **Post Excerpt**: Card Description (2–3 sentences).
    *   **Post Content**: The text on the button (e.g., "Donate Now").
    *   **Feature Image**: Image covering the top half of the card.
    *   **Canonical URL**: The external link the button opens.
        *   *Location:* Click the **Gear icon** (top right) → **Meta Data** → scroll down to **Canonical URL**.
    *   **`#highlight`**: Add this secondary tag to make the card stand out (accent color).
*   **`#founder`**: Shows the post in the "Our Leadership" section of the About page.
*   **`#contact-person`**: Shows the post as the featured profile on the Contact page.

---

## 4. How to Edit Content

### Finding & Modifying Existing Items
To update any part of the website, you first need to identify if it is a **Custom Setting**, a **Page**, or a **Post**.

1.  **Site-wide Text (Footer, Stats, Descriptions)**:
    *   Go to **Settings > Design > Site-wide**.
    *   Change the text in the corresponding field and click **Save**.
2.  **Existing Pages (About, Home, Contact, etc.)**:
    *   Go to **Pages**.
    *   Click on the page title (e.g., "About Us").
    *   Edit the text or swap the **Feature Image** in the sidebar.
3.  **Specific Sections (Founders, Partners, Flagship)**:
    *   These are all **Posts**. Go to **Posts**.
    *   Use the search bar or filter by **Tag** to find the item you want to change.
    *   *Example:* To change a Founder's bio, find the post with the `#founder` tag and edit it.

### The Homepage Hero
To edit the very top of your landing page:
1.  Go to **Pages** and find the page with the slug **`home`**.
2.  **Feature Image**: Swap this to change the background.
3.  **Title**: Edit this to change the main large heading.
4.  **Excerpt**: Edit this in the page settings (sidebar) to change the small blurred tag.
5.  **Content**: Edit the text in the editor to change the subtitle.

### Partner With Us Cards
To update your "Corporate", "Volunteer", or "Donate" cards:
1.  Go to **Posts** and find the post tagged **`#partnership`**.
2.  **Description**: Change the **Excerpt** in the post settings.
3.  **Image**: Change the **Feature Image**.
4.  **Link**: Update the **Canonical URL**.
    *   Click the **Gear icon** (top right) in the post editor.
    *   Click the **Meta Data** tab.
    *   Paste your link into the **Canonical URL** field at the bottom.
5.  **Button Label**: Change the text inside the post editor.

---

## 5. Admin "Do's and Don'ts"

### ✅ Do
*   **Use High-Resolution Images**: Use images at least 1920px wide for heroes.
*   **Check Canonical URLs**: Ensure all external links start with `https://`.
*   **Use Excerpts**: Always fill in the "Excerpt" field; it is used for descriptions across the site.

### ❌ Don't
*   **Forget the `#` in Internal Tags**: Tags like `partnership` (without the `#`) will show up publicly and break the filters.
*   **Add Multiple Paragraphs to Button Text**: Keep the Post Content for `#partnership` posts to 2–3 words only.
*   **Delete the 'Home' Page**: If you delete the page with the `home` slug, the top of your landing page will disappear.
