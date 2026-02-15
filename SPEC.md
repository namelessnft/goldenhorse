# Golden Horse 金马 - Memecoin Website Specification

## 1. Project Overview

**Project Name:** Golden Horse 金马  
**Project Type:** Single-page memecoin website  
**Core Functionality:** A Chinese Lunar New Year themed cryptocurrency landing page with bilingual support (English/Chinese), countdown timer, and responsive design  
**Target Users:** Crypto investors, memecoin enthusiasts, Chinese New Year celebrants

---

## 2. UI/UX Specification

### 2.1 Layout Structure

**Page Sections (top to bottom):**
1. **Navigation Bar** - Fixed top, logo + language toggle
2. **Hero Section** - Full viewport height with countdown timer, floating horse image
3. **About Section** - Project story and vision
4. **Tokenomics Section** - Token distribution and details
5. **How to Buy Section** - Step-by-step purchase guide
6. **Community Section** - Social links and engagement
7. **Footer** - Copyright and disclaimers

**Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### 2.2 Visual Design

**Color Palette:**
- Primary Red: `#C41E3A` (Chinese Red)
- Secondary Red: `#8B0000` (Dark Red)
- Primary Gold: `#FFD700` (Gold)
- Secondary Gold: `#DAA520` (Goldenrod)
- Accent Gold: `#FFB800` (Bright Gold)
- Background Dark: `#1A0A0A` (Deep Red-Black)
- Background Light: `#2D1515` (Dark Maroon)
- Text Primary: `#FFFFFF` (White)
- Text Secondary: `#FFD700` (Gold)
- Text Muted: `#CC9999` (Light Red-Gray)

**Typography:**
- Headings: "Noto Serif SC" for Chinese, "Playfair Display" for English
- Body: "Noto Sans SC" for Chinese, "Inter" for English
- Accent/Ticker: "Orbitron" for futuristic feel
- Font Sizes:
  - H1: 4rem (desktop), 2.5rem (mobile)
  - H2: 3rem (desktop), 2rem (mobile)
  - H3: 2rem (desktop), 1.5rem (mobile)
  - Body: 1.125rem (desktop), 1rem (mobile)
  - Small: 0.875rem

**Spacing System:**
- Section Padding: 100px vertical (desktop), 60px (mobile)
- Container Max Width: 1200px
- Grid Gap: 30px
- Component Padding: 24px
- Border Radius: 12px (cards), 8px (buttons)

**Visual Effects:**
- Gold gradient overlays on hover
- Red glow effects (`box-shadow: 0 0 30px rgba(196, 30, 58, 0.5)`)
- Subtle particle/confetti animation in background
- Floating animation for hero image (CSS keyframes)
- Smooth scroll behavior
- Glassmorphism cards with backdrop blur

### 2.3 Components

**Navigation Bar:**
- Logo (text + horse emoji 🐴)
- Language toggle button (EN/中文)
- Transparent background, blur on scroll
- Height: 80px

**Hero Section:**
- Full viewport height
- Centered content with countdown timer
- Floating horse image with parallax-like float animation
- Glowing text effects on title
- CTA buttons: "Buy Now" + "View Chart"

**Countdown Timer:**
- Days, Hours, Minutes, Seconds
- Each unit in a gold-bordered card
- Label below each value
- Target: Chinese New Year 2026 (February 17, 2026)

**About Section:**
- Two-column layout (text + decorative element)
- Icon cards with gold borders
- Animated number counters for key stats

**Tokenomics Section:**
- Grid of 4-6 tokenomics cards
- Each card: icon + title + percentage/value
- Progress bars for allocation visualization

**How to Buy Section:**
- Numbered step cards (1-4 steps)
- Wallet icons, DEX logos
- Clear instructions in both languages

**Community Section:**
- Large social media buttons
- Telegram, Twitter/X, Discord icons
- Animated hover effects with gold glow

**Language Toggle:**
- Toggle switch or button pair
- Instant content swap (no reload)
- Smooth fade transition

---

## 3. Functionality Specification

### 3.1 Core Features

**Language Toggle (i18n):**
- Switch between English and Chinese
- Persist language choice in localStorage
- All text content available in both languages
- Smooth fade transition on switch

**Countdown Timer:**
- Target: February 17, 2026, 00:00:00 (Chinese New Year)
- Real-time countdown updating every second
- Display: Days : Hours : Minutes : Seconds
- Show "Happy New Year!" message when countdown ends

**Floating Animation:**
- Continuous floating animation on hero image
- CSS keyframes with translateY and slight rotation
- Responsive - scales appropriately on mobile

**Responsive Design:**
- Fluid typography using clamp()
- Mobile-first approach
- Hamburger menu on mobile
- Stacked layouts on smaller screens

### 3.2 User Interactions

- Smooth scroll to sections via nav links
- Hover effects on all interactive elements
- Button press animations (scale down)
- Scroll-triggered fade-in animations for sections

### 3.3 Data Handling

- Language preference stored in localStorage
- No backend required (static site)
- Countdown calculated client-side

---

## 4. Content Specification

### 4.1 English Content

**Tagline:** "Prosperity Awaits Those Who Follow The Golden Horse"  
**Ticker:** $GOLDENHORSE金马

**Navigation:** Home | About | Tokenomics | How to Buy | Community

**Hero:**
- Title: "Golden Horse 金马"
- Subtitle: "Prosperity Awaits Those Who Follow The Golden Horse"
- Countdown Label: "Chinese New Year 2026"
- CTA: "Buy Now" | "View Chart"

**About:**
- Title: "About Golden Horse"
- Description: A lucky memecoin celebrating the Year of the Horse. Join the herd and ride to prosperity!

**Tokenomics:**
- Liquidity: 70%
- Presale: 20%
- Marketing: 5%
- Team: 5%
- Total Supply: 1,000,000,000 $GOLDENHORSE金马

**How to Buy:**
1. Create a wallet (MetaMask, Trust Wallet)
2. Add BNB/ETH to your wallet
3. Connect to DEX (PancakeSwap, Uniswap)
4. Swap for $GOLDENHORSE金马

**Community:**
- "Join our community"
- Telegram | Twitter | Discord

### 4.2 Chinese Content (中文)

**Tagline:** "紧随金马，财富自来"  
**Ticker:** $GOLDENHORSE金马

**导航:** 首页 | 关于 | 代币经济学 | 如何购买 | 社区

**Hero:**
- Title: "Golden Horse 金马"
- Subtitle: "紧随金马，财富自来"
- Countdown Label: "2026年农历新年"
- CTA: "立即购买" | "查看图表"

**About:**
- Title: "关于金马"
- Description: 庆祝马年的幸运模因币。加入马群，奔向繁荣！

**Tokenomics:**
- 流动性: 70%
- 预售: 20%
- 营销: 5%
- 团队: 5%
- 总供应量: 1,000,000,000 $GOLDENHORSE金马

**How to Buy:**
1. 创建钱包 (MetaMask, Trust Wallet)
2. 添加 BNB/ETH 到钱包
3. 连接 DEX (PancakeSwap, Uniswap)
4. 兑换 $GOLDENHORSE金马

**Community:**
- "加入我们的社区"
- 电报 | 推特 | Discord

---

## 5. Acceptance Criteria

### Visual Checkpoints:
- [ ] Red and gold color theme consistently applied
- [ ] Chinese New Year decorations visible (lanterns, particles)
- [ ] Floating animation works smoothly on hero image
- [ ] All text is readable on all backgrounds
- [ ] Responsive on mobile, tablet, and desktop

### Functional Checkpoints:
- [ ] Language toggle switches all content instantly
- [ ] Countdown timer shows accurate time remaining
- [ ] Countdown updates every second
- [ ] Smooth scroll works for all nav links
- [ ] No horizontal scroll on any viewport size

### Technical Checkpoints:
- [ ] Valid HTML5 structure
- [ ] CSS variables used for theming
- [ ] No console errors
- [ ] Images optimized/lazy loaded
- [ ] Accessible (proper contrast, alt texts)

---

## 6. File Structure

```
/Golden horse (project root)
├── index.html          # Main HTML file
├── styles.css         # All CSS styles
├── script.js          # JavaScript functionality
├── SPEC.md            # This specification
└── img/
    ├── float.png      # Floating horse image
    ├── lambo.jpg      # Decorative image
    └── moon.jpg       # Background image
```

---

## 7. Technical Notes

- Use CSS custom properties (variables) for easy theming
- Implement with vanilla HTML/CSS/JS (no frameworks needed)
- Use CSS Grid and Flexbox for layouts
- Include Google Fonts: Noto Serif SC, Noto Sans SC, Playfair Display, Inter, Orbitron
- Target browser support: Modern browsers (Chrome, Firefox, Safari, Edge)
