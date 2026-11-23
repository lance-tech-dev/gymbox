/**
 * Copy for the About and Activities pages. Edit the text here; the pages
 * render whatever is in these lists.
 */

export type IconName =
  | "seedling"
  | "users"
  | "wallet"
  | "key"
  | "droplet"
  | "dumbbell"
  | "heart"
  | "flame"
  | "spark"
  | "calendar";

export type FeatureCard = {
  icon: IconName;
  title: string;
  description: string;
  /** Optional small label, e.g. "All levels". */
  tag?: string;
};

export const ABOUT_HIGHLIGHTS: FeatureCard[] = [
  {
    icon: "seedling",
    title: "Beginner-friendly",
    description:
      "Never stepped into a gym before? You're in the right place. Start at your own pace and ask anytime. No one is judging.",
  },
  {
    icon: "users",
    title: "Friendly community",
    description:
      "A neighborhood gym where members greet each other, share tips, and cheer each other on.",
  },
  {
    icon: "wallet",
    title: "Affordable for everyone",
    description:
      "Daily, monthly, and 3-month plans with student rates on every one, so cost is never the reason to skip.",
  },
  {
    icon: "key",
    title: "All-access, every plan",
    description:
      "Every plan gives you full access to the gym and free drinking water. No hidden add-ons.",
  },
];

export const FIRST_VISIT_STEPS = [
  {
    title: "Walk in or sign up",
    description: "Drop by the gym or create your account online in under a minute.",
  },
  {
    title: "Pick a plan",
    description: "Start with a daily pass to try it out, or save with a monthly or 3-month plan.",
  },
  {
    title: "Start training",
    description: "Warm up, start light, and build from there. Ask the staff whenever you need help.",
  },
];

export const ACTIVITIES: FeatureCard[] = [
  {
    icon: "dumbbell",
    title: "Strength training",
    description:
      "Build muscle and get stronger with free weights and machines. Start light, focus on form, and progress at your pace.",
    tag: "All levels",
  },
  {
    icon: "heart",
    title: "Cardio",
    description:
      "Improve your stamina and heart health with steady cardio sessions. Great as a warm-up or a workout on its own.",
    tag: "All levels",
  },
  {
    icon: "flame",
    title: "Weight loss & conditioning",
    description:
      "Combine cardio and simple circuits to burn calories, boost energy, and build a lasting routine.",
    tag: "All levels",
  },
  {
    icon: "spark",
    title: "Bodyweight & core",
    description:
      "Push-ups, squats, planks, and core work. Simple moves that build a strong base for everything else.",
    tag: "Great for beginners",
  },
];

export const BEGINNER_TIPS = [
  "Start with lighter weights and focus on proper form.",
  "Warm up for 5–10 minutes before you train.",
  "Train 2–3 times a week at first and rest in between.",
  "Drink water often. It's free with every plan.",
  "Don't be shy to ask the staff or fellow members for help.",
];
