<template>
  <div class="camp-landing">

    <!-- ===== HERO ===== -->
    <section class="hero">
      <div class="hero__noise"></div>
      <div class="hero__grid-lines"></div>
      <nav class="hero__nav">
        <RouterLink :to="{ name: 'home'}" class="logo-link">
          <span class="hero__logo">🏀 Chosen Elite Basketball</span>
        </RouterLink>
        <a href="#register" class="btn btn--sm">Register Now</a>
      </nav>
      <div class="hero__content">
        <div class="hero__eyebrow">Summer 2026 Youth Camp</div>
        <h1 class="hero__headline">
          <span class="hero__headline--stroke">ELEVATE</span>
          <span class="hero__headline--solid">YOUR GAME</span>
        </h1>
        <p class="hero__sub">
          Bounce Into Summer · All Fun, No Pressure · Where Little Legends Learn to Ball.<br />
          For ages 5–11 in Everett, WA.
        </p>
        <div class="hero__cta-row">
          <a href="#register" class="btn btn--lg btn--primary">Claim Your Spot</a>
          <a href="#schedule" class="btn btn--lg btn--ghost">View Schedule</a>
        </div>
      </div>
      <div class="hero__ball-deco" aria-hidden="true">🏀</div>
    </section>

    <!-- ===== SCHEDULE ===== -->
    <section id="schedule" class="section section--dark">
      <div class="container">
        <h2 class="section__title">Camp <span class="accent">Schedule</span></h2>
        <p class="section__sub">Two sessions. One goal: Confidence On and Off the Court.</p>
        <div class="schedule-grid">
          <div
            v-for="session in sessions"
            :key="session.id"
            class="schedule-card"
            :class="{ 'schedule-card--featured': session.featured }"
          >
            <div class="schedule-card__badge" v-if="session.featured">Most Popular</div>
            <div class="schedule-card__week">{{ session.week }}</div>
            <h3 class="schedule-card__name">{{ session.name }}</h3>
            <div class="schedule-card__dates">{{ session.dates }}</div>
            <ul class="schedule-card__days">
              <li v-for="day in session.days" :key="day">{{ day }}</li>
            </ul>
            <div class="schedule-card__ages">Ages {{ session.ages }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PRICING ===== -->
    <section id="pricing" class="section section--light">
      <div class="container">
        <h2 class="section__title">Pricing</h2>
        <p class="section__sub">Transparent pricing. No hidden fees.</p>
        <div class="pricing-grid">
          <div
            v-for="plan in plans"
            :key="plan.id"
            class="pricing-card"
            :class="{ 'pricing-card--highlight': plan.highlight }"
          >
            <div class="pricing-card__tag" v-if="plan.tag">{{ plan.tag }}</div>
            <h3 class="pricing-card__name">{{ plan.name }}</h3>
            <div class="pricing-card__price">
              <span class="pricing-card__dollar">$</span>{{ plan.price }}
            </div>
            <div class="pricing-card__period">{{ plan.period }}</div>
            <ul class="pricing-card__features">
              <li v-for="f in plan.features" :key="f">
                <span class="check">✓</span> {{ f }}
              </li>
            </ul>
            <a href="#register" class="btn btn--primary btn--full">Select Plan</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== COACHES ===== -->
    <section id="coaches" class="section section--dark">
      <div class="container">
        <h2 class="section__title">Meet the <span class="accent">Coaches</span></h2>
        <p class="section__sub">Experienced. Passionate. 100% invested in your development.</p>
        <div class="coaches-grid">
          <div v-for="coach in coaches" :key="coach.id" class="coach-card">
            <div class="coach-card__avatar">{{ coach.initials }}</div>
            <h3 class="coach-card__name">{{ coach.name }}</h3>
            <div class="coach-card__title">{{ coach.title }}</div>
            <p class="coach-card__bio">{{ coach.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== TESTIMONIALS ===== -->
    <section id="testimonials" class="section section--light">
      <div class="container">
        <h2 class="section__title">What <span class="accent">Players</span> Say</h2>
        <div class="testimonials-track">
          <div
            v-for="(t, i) in testimonials"
            :key="t.id"
            class="testimonial-card"
            :class="{ 'testimonial-card--active': activeTestimonial === i }"
            @click="activeTestimonial = i"
          >
            <div class="testimonial-card__quote">"{{ t.quote }}"</div>
            <div class="testimonial-card__author">
              <strong>{{ t.name }}</strong>, {{ t.age }} · {{ t.year }}
            </div>
          </div>
        </div>
        <div class="testimonials-dots">
          <button
            v-for="(t, i) in testimonials"
            :key="t.id"
            class="dot"
            :class="{ 'dot--active': activeTestimonial === i }"
            @click="activeTestimonial = i"
            :aria-label="`Testimonial from ${t.name}`"
          />
        </div>
      </div>
    </section>

    <!-- ===== REGISTRATION ===== -->
    <section id="register" class="section section--register">
      <div class="container container--narrow">
        <h2 class="section__title section__title--light">Ready to <span class="accent">Run?</span></h2>
        <p class="section__sub section__sub--light">Spots fill fast. Lock in your camper's spot today.</p>

        <form
          ref="formRef"
          class="reg-form"
          action="https://formsubmit.co/chosen2handle@gmail.com"
          method="POST"
          @submit.prevent="handleSubmit"
          novalidate
        >
          <!-- formsubmit.co configuration -->
          <input type="hidden" name="_next" value="https://buy.stripe.com/dRm00jcq8b5B2upffYfIs0a" />
          <input type="hidden" name="_subject" value="New Apex Hoops Camp Registration!" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div class="reg-form__row">
            <div class="form-group" :class="{ 'form-group--error': errors.parentName }">
              <label for="parentName">Parent / Guardian Name</label>
              <input id="parentName" v-model="form.parentName" name="Parent Name" type="text" placeholder="Jane Smith" />
              <span class="form-group__error" v-if="errors.parentName">{{ errors.parentName }}</span>
            </div>
            <div class="form-group" :class="{ 'form-group--error': errors.email }">
              <label for="email">Email Address</label>
              <input id="email" v-model="form.email" name="email" type="email" placeholder="jane@email.com" />
              <span class="form-group__error" v-if="errors.email">{{ errors.email }}</span>
            </div>
          </div>

          <div class="reg-form__row">
            <div class="form-group" :class="{ 'form-group--error': errors.playerName }">
              <label for="playerName">Player's Name</label>
              <input id="playerName" v-model="form.playerName" name="Player Name" type="text" placeholder="Alex Smith" />
              <span class="form-group__error" v-if="errors.playerName">{{ errors.playerName }}</span>
            </div>
            <div class="form-group" :class="{ 'form-group--error': errors.age }">
              <label for="age">Player's Age</label>
              <input id="age" v-model="form.age" name="Player Age" type="number" min="1" max="18" placeholder="8" />
              <span class="form-group__error" v-if="errors.age">{{ errors.age }}</span>
            </div>
          </div>

          <div class="reg-form__row">
            <div class="form-group" :class="{ 'form-group--error': errors.session }">
              <label for="session">Session</label>
              <select id="session" v-model="form.session" name="Session">
                <option value="">Select a session…</option>
                <option
                  v-for="s in sessions"
                  :key="s.id"
                  :value="s.id"
                  :disabled="!isSessionEligible(s.id)"
                >
                  {{ s.name }} — {{ s.dates }} (Ages {{ s.ages }}){{ !isSessionEligible(s.id) && form.age ? ' — Not eligible' : '' }}
                </option>
              </select>
              <span class="form-group__error" v-if="errors.session">{{ errors.session }}</span>
            </div>
            <div class="form-group" :class="{ 'form-group--error': errors.plan }">
              <label for="plan">Package</label>
              <select id="plan" v-model="form.plan" name="Package">
                <option value="">Select a package…</option>
                <option v-for="p in plans" :key="p.id" :value="p.id">
                  {{ p.name }} — ${{ p.price }}
                </option>
              </select>
              <span class="form-group__error" v-if="errors.plan">{{ errors.plan }}</span>
            </div>
          </div>

          <div class="form-group">
            <label for="notes">Additional Notes (optional)</label>
            <textarea id="notes" v-model="form.notes" name="Notes" rows="3" placeholder="Allergies, skill level, questions…"></textarea>
          </div>

          <!-- Contact banner — shown when age doesn't fit any session -->
          <div v-if="isAgeOutOfRange" class="reg-form__contact">
            <div class="reg-form__contact-icon">🏀</div>
            <div>
              <strong>This age isn't eligible for a current session.</strong>
              <p>Our camps currently serve ages 5–11. Reach out and we'll let you know about future programmes or waitlist options.</p>
              <a href="mailto:chosen2handle@gmail.com" class="btn btn--primary btn--sm">Contact Us</a>
            </div>
          </div>

          <button
            v-if="!isAgeOutOfRange"
            type="submit"
            class="btn btn--primary btn--lg btn--full"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">Submitting…</span>
            <span v-else>Complete Registration</span>
          </button>
        </form>
      </div>
    </section>

    <!-- ===== FOOTER ===== -->
    <footer class="footer">
      <span>© 2026 The Chosen Elite Youth Camp · Everett, WA</span>
      <span>Questions? <a href="mailto:chosen2handle@gmail.com">chosen2handle@gmail.com</a></span>
    </footer>

  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

// ── SCHEDULE DATA ──────────────────────────────────────────────
const sessions = ref([
  {
    id: 'session-a',
    week: 'Session A',
    name: 'Bitty Ballers: Galaxy Hoops Camp',
    dates: 'August 22nd',
    days: ['Saturday', '10:00 AM – 12:00 PM', 'Challenger Elementary Gym'],
    ages: '5–7',
    featured: false,
  },
  {
    id: 'session-b',
    week: 'Session B',
    name: 'Chosen Elite: Cosmic Crossover Camp',
    dates: 'August 22nd',
    days: ['Saturday', '1:00 PM – 3:00 PM', 'Challenger Elementary Gym'],
    ages: '8–11',
    featured: true,
  },
])

// ── PRICING DATA ───────────────────────────────────────────────
const plans = ref([
  {
    id: 'half-day',
    name: 'Half-Day',
    price: 50,
    period: 'per session',
    tag: '',
    highlight: false,
    features: [
      '1 days of coaching',
      '1 Session',
      'Camp t-shirt',
    ],
  },
])

// ── COACHES DATA ───────────────────────────────────────────────
const coaches = ref([
  {
    id: 1,
    initials: 'TP',
    name: 'Coach Timothy Prater',
    title: 'Head Coach · Former High School Coach',
    bio: '12 years developing youth players across the Pacific Northwest. Known for his player-first philosophy and contagious energy on the court.',
  },
  {
    id: 2,
    initials: 'RM',
    name: 'Coach Ron Mincy',
    title: 'Skills Coordinator · AAU Championship Coach',
    bio: 'Specializes in ball-handling, footwork, and offensive IQ. Ron has coached 100+ players who went on to play high school varsity.',
  },
  {
    id: 3,
    initials: 'AP',
    name: 'Coach Anthony Prater',
    title: 'Defensive Specialist',
    bio: 'Former high school coach with a deep focus on defensive systems, reading plays, and the mental side of competing at a high level.',
  },
])

// ── TESTIMONIALS DATA ──────────────────────────────────────────
const testimonials = ref([
  {
    id: 1,
    quote: 'Chosen Elite camp completely changed how I see the game. Coach Tim broke down my handle in two days - I made varsity that fall.',
    name: 'Marcus T.',
    age: 'Age 16',
    year: 'Summer 2024',
  },
  {
    id: 2,
    quote: 'My daughter came home every day fired up. She grew more in one week than in a whole season. We\'re already signed up for 2026.',
    name: 'Parent of Aaliyah R.',
    age: '',
    year: 'Summer 2025',
  },
  {
    id: 3,
    quote: 'The coaches actually care. It\'s not just drills - they talk to you like an athlete. Best camp investment we\'ve made.',
    name: 'Jordan P.',
    age: 'Age 21',
    year: 'Summer 2020',
  },
])

const activeTestimonial = ref(0)

// ── REGISTRATION FORM ──────────────────────────────────────────
const formRef = ref(null)

// ── AGE → SESSION ELIGIBILITY ──────────────────────────────────
const SESSION_AGE_RANGES = {
  'session-a': { min: 5, max: 7  },
  'session-b': { min: 8, max: 11 },
}

// Returns IDs of sessions the entered age qualifies for
const eligibleSessionIds = computed(() => {
  const age = Number(form.age)
  if (!age || age < 1) return []
  return Object.entries(SESSION_AGE_RANGES)
    .filter(([, range]) => age >= range.min && age <= range.max)
    .map(([id]) => id)
})

// True when a valid age is entered but matches no session range
const isAgeOutOfRange = computed(() => {
  const age = Number(form.age)
  return !!age && age > 0 && eligibleSessionIds.value.length === 0
})

// Returns true if a session is eligible for the entered age.
// When no age is entered, all sessions remain selectable.
function isSessionEligible(sessionId) {
  const age = Number(form.age)
  if (!age) return true
  return eligibleSessionIds.value.includes(sessionId)
}

const form = reactive({
  parentName: '',
  email: '',
  playerName: '',
  age: '',
  session: '',
  plan: '',
  notes: '',
})

// Auto-clear session when age changes and selected session becomes ineligible
watch(() => form.age, () => {
  if (form.session && !isSessionEligible(form.session)) {
    form.session = ''
  }
})

const errors = reactive({})
const isSubmitting = ref(false)

function validate() {
  // Clear previous errors
  Object.keys(errors).forEach(k => delete errors[k])

  if (!form.parentName.trim()) errors.parentName = 'Parent name is required.'
  if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errors.email = 'A valid email is required.'
  if (!form.playerName.trim()) errors.playerName = 'Player name is required.'

  const age = Number(form.age)
  if (!age || age < 1) {
    errors.age = 'Please enter the player\'s age.'
  } else if (isAgeOutOfRange.value) {
    errors.age = 'This age is not eligible for any current session.'
  }

  if (!form.session) {
    errors.session = 'Please select a session.'
  } else if (!isSessionEligible(form.session)) {
    const range = SESSION_AGE_RANGES[form.session]
    errors.session = `This session is for ages ${range.min}–${range.max} only.`
  }

  if (!form.plan) errors.plan = 'Please select a package.'
  return Object.keys(errors).length === 0
}

function handleSubmit() {
  if (!validate()) return
  isSubmitting.value = true
  // Native submit: sends form data to formsubmit.co, which emails
  // the organizer and redirects the user to the Stripe payment link
  // defined in the hidden _next field.
  formRef.value.submit()
}
</script>

<style scoped>
/* ── TOKENS ─────────────────────────────────────────────────── */
.camp-landing {
  --orange: rgba(248, 129, 88, 0.87);
  --orange-dark: #c2410c;
  --black: #242424;
  --black-mid: #363636;
  --slate: #334155;
  --white: rgba(79,156,225);
  --muted: #94a3b8;
  --radius: 12px;
  --font-display: 'Oswald', 'Impact', sans-serif;
  --font-body: 'DM Sans', 'Segoe UI', sans-serif;

  font-family: var(--font-body);
  color: var(--white);
  background: var(--black);
  overflow-x: hidden;
}

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap');

/* ── UTILITY ────────────────────────────────────────────────── */
.accent { color: var(--orange); }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  font-family: var(--font-body);
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.15s ease, background 0.15s ease, opacity 0.15s ease;
}
.btn:hover { transform: translateY(-2px); }
.btn:active { transform: translateY(0); }
.btn--sm  { padding: 8px 18px;  font-size: 0.875rem; }
.btn--lg  { padding: 14px 30px; font-size: 1rem; }
.btn--full { width: 100%; }
.btn--primary { background: var(--orange); color: #fff; }
.btn--primary:hover { background: var(--orange-dark); }
.btn--ghost {
  background: transparent;
  color: var(--white);
  border: 2px solid rgba(255,255,255,0.35);
}
.btn--ghost:hover { border-color: var(--orange); color: var(--orange); }
.btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

.container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
.container--narrow { max-width: 700px; margin: 0 auto; padding: 0 24px; }

.section { padding: 80px 0; }
.section--dark  { background: var(--black); }
.section--light { background: var(--black-mid); }
.section--register { background: var(--grey); }

.section__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 12px;
  line-height: 1.1;
}
.section__title--light { color: var(--white); }
.section__sub {
  color: var(--muted);
  font-size: 1.05rem;
  margin: 0 0 48px;
}
.section__sub--light { color: rgba(255,255,255,0.7); }

/* ── HERO ───────────────────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background: var(--black);
  overflow: hidden;
}

.hero__noise {
  position: absolute; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-size: 200px;
  pointer-events: none;
  opacity: 0.4;
}

.hero__grid-lines {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(249,115,22,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(249,115,22,0.06) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}

.hero__nav {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
}

.hero__logo {
  font-family: var(--font-display);
  font-size: 1.4rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--white);
}

.hero__content {
  position: relative;
  z-index: 10;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 40px 80px;
  max-width: 700px;
  margin: 0 auto;
}

.hero__eyebrow {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 16px;
}

.hero__headline {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 10vw, 7rem);
  line-height: 0.95;
  text-transform: uppercase;
  margin: 0 0 24px;
  display: flex;
  flex-direction: column;
}

.hero__headline--stroke {
  -webkit-text-stroke: 2px var(--orange);
  color: transparent;
}
.hero__headline--solid { color: var(--white); }

.hero__sub {
  font-size: 1.1rem;
  color: var(--muted);
  line-height: 1.7;
  margin: 0 0 36px;
}

.hero__cta-row {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
}

.hero__ball-deco {
  position: absolute;
  right: -40px;
  bottom: -40px;
  font-size: 320px;
  line-height: 1;
  opacity: 0.06;
  pointer-events: none;
  user-select: none;
  animation: spin 40s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ── SCHEDULE ───────────────────────────────────────────────── */
.schedule-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.schedule-card {
  position: relative;
  background: var(--black-mid);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius);
  padding: 28px;
  transition: border-color 0.2s;
}
.schedule-card:hover { border-color: var(--orange); }

.schedule-card--featured {
  border-color: var(--orange);
  background: linear-gradient(135deg, var(--black-mid), #1c1a11);
}

.schedule-card__badge {
  position: absolute;
  top: -12px;
  left: 24px;
  background: var(--orange);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 100px;
}

.schedule-card__week {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 8px;
}

.schedule-card__name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 6px;
}

.schedule-card__dates {
  font-size: 0.9rem;
  color: var(--muted);
  margin-bottom: 16px;
}

.schedule-card__days {
  list-style: none;
  padding: 0;
  margin: 0 0 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.schedule-card__days li { font-size: 0.9rem; color: var(--muted); }

.schedule-card__ages {
  display: inline-block;
  background: rgba(249,115,22,0.15);
  color: var(--orange);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 100px;
}

/* ── PRICING ────────────────────────────────────────────────── */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  align-items: start;
}

.pricing-card {
  position: relative;
  background: var(--black);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius);
  padding: 32px 28px;
  transition: border-color 0.2s, transform 0.2s;
}
.pricing-card:hover { border-color: var(--orange); transform: translateY(-4px); }

.pricing-card--highlight {
  border-color: var(--orange);
  background: linear-gradient(160deg, #1c1611, var(--black));
  transform: scale(1.03);
}
.pricing-card--highlight:hover { transform: scale(1.03) translateY(-4px); }

.pricing-card__tag {
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--orange);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 5px 16px;
  border-radius: 100px;
  white-space: nowrap;
}

.pricing-card__name {
  font-family: var(--font-display);
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 16px;
}

.pricing-card__price {
  font-family: var(--font-display);
  font-size: 3.5rem;
  line-height: 1;
  color: var(--orange);
  margin-bottom: 4px;
}
.pricing-card__dollar { font-size: 1.5rem; vertical-align: super; }
.pricing-card__period { font-size: 0.8rem; color: var(--muted); margin-bottom: 24px; }

.pricing-card__features {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.pricing-card__features li { font-size: 0.9rem; color: var(--muted); }
.check { color: var(--orange); margin-right: 6px; font-weight: 700; }

/* ── COACHES ────────────────────────────────────────────────── */
.coaches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.coach-card {
  background: var(--black-mid);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius);
  padding: 28px;
  transition: border-color 0.2s;
}
.coach-card:hover { border-color: var(--orange); }

.coach-card__avatar {
  width: 64px; height: 64px;
  background: var(--orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 16px;
}

.coach-card__name {
  font-family: var(--font-display);
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 4px;
}
.coach-card__title { font-size: 0.8rem; color: var(--orange); margin-bottom: 12px; }
.coach-card__bio { font-size: 0.88rem; color: var(--muted); line-height: 1.6; margin: 0; }

/* ── TESTIMONIALS ───────────────────────────────────────────── */
.testimonials-track {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 28px;
}

.testimonial-card {
  background: var(--black);
  border: 2px solid rgba(255,255,255,0.07);
  border-radius: var(--radius);
  padding: 24px;
  cursor: pointer;
  transition: border-color 0.2s, transform 0.2s;
  opacity: 0.6;
}
.testimonial-card:hover { opacity: 0.85; transform: translateY(-3px); }
.testimonial-card--active {
  border-color: var(--orange);
  opacity: 1;
  transform: translateY(-4px);
}

.testimonial-card__quote {
  font-size: 0.92rem;
  color: var(--white);
  line-height: 1.65;
  margin-bottom: 16px;
  font-style: italic;
}
.testimonial-card__author { font-size: 0.8rem; color: var(--orange); font-weight: 600; }

.testimonials-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
}
.dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.dot--active { background: var(--orange); transform: scale(1.3); }

/* ── REGISTRATION FORM ──────────────────────────────────────── */
.reg-form { display: flex; flex-direction: column; gap: 20px; }

.reg-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
}

.form-group input,
.form-group select,
.form-group textarea {
  background: var(--black);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  color: var(--white);
  padding: 12px 14px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.15s;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus { border-color: var(--orange); }

.form-group select option { background: var(--black-mid); }

.form-group--error input,
.form-group--error select,
.form-group--error textarea { border-color: #f87171; }

.form-group__error { font-size: 0.78rem; color: #f87171; }

/* Disabled session options */
.form-group select option:disabled {
  color: var(--muted);
  font-style: italic;
}

/* ── OUT-OF-RANGE CONTACT BANNER ────────────────────────────── */
.reg-form__contact {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: rgba(248, 129, 88, 0.08);
  border: 1px solid rgba(248, 129, 88, 0.35);
  border-radius: var(--radius);
  padding: 20px;
}

.reg-form__contact-icon {
  font-size: 2rem;
  line-height: 1;
  flex-shrink: 0;
}

.reg-form__contact strong {
  display: block;
  color: var(--white);
  font-size: 0.95rem;
  margin-bottom: 6px;
}

.reg-form__contact p {
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.55;
  margin: 0 0 14px;
}

.reg-form__success {
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34,197,94,0.4);
  color: #4ade80;
  border-radius: 8px;
  padding: 14px 18px;
  font-size: 0.9rem;
}

/* ── FOOTER ─────────────────────────────────────────────────── */
.footer {
  background: #080d14;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 24px 40px;
  font-size: 0.82rem;
  color: var(--muted);
}
.footer a { color: var(--orange); text-decoration: none; }

/* ── RESPONSIVE ─────────────────────────────────────────────── */
@media (max-width: 640px) {
  .hero__content { padding: 32px 24px 60px; }
  .hero__nav { padding: 20px 24px; }
  .reg-form__row { grid-template-columns: 1fr; }
  .pricing-card--highlight { transform: scale(1); }
  .footer { flex-direction: column; align-items: center; text-align: center; }
}
</style>