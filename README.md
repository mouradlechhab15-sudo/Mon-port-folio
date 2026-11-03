# NØX Portfolio
`npm install && npm run dev`
- **Your info**: edit `src/data/content.js` (email, socials, projects, skills).
- **Music**: drop MP3s in `public/music/`, then add entries to `playlist` in `src/data/content.js`. Missing files show a message instead of crashing. No autoplay; volume, mute, track and theme persist in localStorage.
- **Contact form**: uses a `mailto:` fallback (opens the visitor's mail app, sent to `profile.email`). For real sending, swap the `location.href` line in `src/sections/Contact.jsx` for EmailJS or Formspree.
- **Album art**: replace `public/images/nox-cover.jpg` (square image works best). Missing file shows an NØX placeholder.
