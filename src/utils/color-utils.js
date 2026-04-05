/**
 * Color and brightness utilities.
 */

export const IMPORTANCE_BRIGHTNESS = { low: 15, medium: 30, high: 100 };

export const BEHAVIORS = ["solid", "blink_fast", "blink_slow", "pulse", "off"];

export const DEFAULT_TEMPLATES = [
  {
    id: "batterie",
    name: "Batterie",
    importance: "medium",
    rules: [
      { condition: "state >= 50", color: "#00FF00", behavior: "solid" },
      { condition: "state >= 10", color: "#FFFF00", behavior: "solid" },
      { condition: "state >= 1",  color: "#FF0000", behavior: "solid" },
      { condition: "default",     color: "#FF0000", behavior: "pulse"  },
    ],
  },
  {
    id: "on_off",
    name: "On/Off",
    importance: "medium",
    rules: [
      { condition: "state == on",  color: "#00FF00", behavior: "solid" },
      { condition: "default",      color: "#333333", behavior: "solid" },
    ],
  },
  {
    id: "unavailable_alert",
    name: "Alerte indisponible",
    importance: "high",
    rules: [
      { condition: "unavailable", color: "#FF6600", behavior: "blink_fast" },
      { condition: "default",     color: "#00FF00", behavior: "solid"      },
    ],
  },
  {
    id: "temp_hot",
    name: "Température chaude (équipement)",
    importance: "medium",
    rules: [
      { condition: "state >= 80", color: "#FF0000", behavior: "pulse" },
      { condition: "state >= 60", color: "#FF3300", behavior: "solid" },
      { condition: "state >= 45", color: "#FF8800", behavior: "solid" },
      { condition: "state >= 35", color: "#FFDD00", behavior: "solid" },
      { condition: "default",     color: "#00FF00", behavior: "solid" },
    ],
  },
  {
    id: "temp_fridge",
    name: "Réfrigérateur (°C)",
    importance: "medium",
    rules: [
      { condition: "state >= 15", color: "#FF0000", behavior: "pulse" },
      { condition: "state >= 12", color: "#FF6600", behavior: "solid" },
      { condition: "state >= 10", color: "#FFAA00", behavior: "solid" },
      { condition: "state >= 8",  color: "#FFFF00", behavior: "solid" },
      { condition: "state >= 2",  color: "#00FF00", behavior: "solid" },
      { condition: "state >= 0",  color: "#00DDFF", behavior: "solid" },
      { condition: "default",     color: "#0088FF", behavior: "solid" },
    ],
  },
  {
    id: "temp_freezer",
    name: "Congélateur (°C)",
    importance: "medium",
    rules: [
      { condition: "state >= -10", color: "#FF0000", behavior: "pulse" },
      { condition: "state >= -15", color: "#FF6600", behavior: "solid" },
      { condition: "state >= -18", color: "#FFCC00", behavior: "solid" },
      { condition: "default",      color: "#00FF00", behavior: "solid" },
    ],
  },
  {
    id: "temp_room",
    name: "Pièce / confort (°C)",
    importance: "medium",
    rules: [
      { condition: "state >= 28", color: "#FF2200", behavior: "solid" },
      { condition: "state >= 26", color: "#FF8800", behavior: "solid" },
      { condition: "state >= 24", color: "#FFDD00", behavior: "solid" },
      { condition: "state >= 19", color: "#00FF00", behavior: "solid" },
      { condition: "state >= 16", color: "#00DDFF", behavior: "solid" },
      { condition: "default",     color: "#0088FF", behavior: "solid" },
    ],
  },
  {
    id: "humidity_plant",
    name: "Humidité sol / plante (%)",
    importance: "medium",
    rules: [
      { condition: "state < 20",  color: "#FF0000", behavior: "pulse" },
      { condition: "state < 35",  color: "#FF8800", behavior: "solid" },
      { condition: "state < 50",  color: "#FFDD00", behavior: "solid" },
      { condition: "state < 70",  color: "#00FF00", behavior: "solid" },
      { condition: "default",     color: "#0088FF", behavior: "solid" },
    ],
  },
  {
    id: "humidity_room",
    name: "Humidité maison (%)",
    importance: "medium",
    rules: [
      { condition: "state >= 70", color: "#CC2200", behavior: "solid" },
      { condition: "state >= 65", color: "#FF6600", behavior: "solid" },
      { condition: "state >= 60", color: "#FFCC00", behavior: "solid" },
      { condition: "state >= 35", color: "#00FF00", behavior: "solid" },
      { condition: "state >= 30", color: "#FFCC00", behavior: "solid" },
      { condition: "default",     color: "#FF8800", behavior: "solid" },
    ],
  },
  {
    id: "power_instant",
    name: "Puissance (W)",
    importance: "medium",
    rules: [
      { condition: "state >= 2000", color: "#FF0000", behavior: "pulse" },
      { condition: "state >= 1000", color: "#FF6600", behavior: "solid" },
      { condition: "state >= 200",  color: "#FFCC00", behavior: "solid" },
      { condition: "state >= 50",   color: "#88FF00", behavior: "solid" },
      { condition: "default",       color: "#444444", behavior: "solid" },
    ],
  },
  {
    id: "energy_period",
    name: "Énergie (kWh)",
    importance: "medium",
    rules: [
      { condition: "state >= 30", color: "#FF0000", behavior: "solid" },
      { condition: "state >= 15", color: "#FF8800", behavior: "solid" },
      { condition: "state >= 5",  color: "#FFDD00", behavior: "solid" },
      { condition: "default",     color: "#00CC00", behavior: "solid" },
    ],
  },
  {
    id: "air_pm25",
    name: "PM2.5 (µg/m³)",
    importance: "high",
    rules: [
      { condition: "state >= 55", color: "#CC0000", behavior: "solid" },
      { condition: "state >= 35", color: "#FF8800", behavior: "solid" },
      { condition: "state >= 12", color: "#FFDD00", behavior: "solid" },
      { condition: "default",     color: "#00CC00", behavior: "solid" },
    ],
  },
  {
    id: "air_pm10",
    name: "PM10 (µg/m³)",
    importance: "high",
    rules: [
      { condition: "state >= 100", color: "#CC0000", behavior: "solid" },
      { condition: "state >= 50",  color: "#FF8800", behavior: "solid" },
      { condition: "state >= 45",  color: "#FFDD00", behavior: "solid" },
      { condition: "default",      color: "#00CC00", behavior: "solid" },
    ],
  },
  {
    id: "air_co2",
    name: "CO₂ (ppm)",
    importance: "high",
    rules: [
      { condition: "state >= 2000", color: "#FF0000", behavior: "pulse" },
      { condition: "state >= 1500", color: "#FF3300", behavior: "solid" },
      { condition: "state >= 1000", color: "#FF8800", behavior: "solid" },
      { condition: "state >= 800",  color: "#FFDD00", behavior: "solid" },
      { condition: "default",       color: "#00CC00", behavior: "solid" },
    ],
  },
  {
    id: "air_radon",
    name: "Radon (Bq/m³)",
    importance: "high",
    rules: [
      { condition: "state >= 300", color: "#CC0000", behavior: "pulse" },
      { condition: "state >= 200", color: "#FF6600", behavior: "solid" },
      { condition: "state >= 100", color: "#FFCC00", behavior: "solid" },
      { condition: "default",      color: "#00CC00", behavior: "solid" },
    ],
  },
  {
    id: "noise_db",
    name: "Bruit (dB)",
    importance: "medium",
    rules: [
      { condition: "state >= 80", color: "#FF0000", behavior: "solid" },
      { condition: "state >= 70", color: "#FF8800", behavior: "solid" },
      { condition: "state >= 55", color: "#FFDD00", behavior: "solid" },
      { condition: "state >= 40", color: "#00FF00", behavior: "solid" },
      { condition: "default",     color: "#0088CC", behavior: "solid" },
    ],
  },
  {
    id: "uv_index",
    name: "Indice UV",
    importance: "medium",
    rules: [
      { condition: "state >= 11", color: "#AA00FF", behavior: "pulse" },
      { condition: "state >= 8",  color: "#FF0000", behavior: "solid" },
      { condition: "state >= 6",  color: "#FF8800", behavior: "solid" },
      { condition: "state >= 3",  color: "#FFDD00", behavior: "solid" },
      { condition: "default",     color: "#00CC44", behavior: "solid" },
    ],
  },
  {
    id: "alarm",
    name: "Alarme",
    importance: "high",
    rules: [
      { condition: "state == triggered",   color: "#FF0000", behavior: "blink_fast" },
      { condition: "state == armed_away",  color: "#FF6600", behavior: "solid"      },
      { condition: "state == armed_home",  color: "#FFAA00", behavior: "solid"      },
      { condition: "state == arming",      color: "#FFDD00", behavior: "blink_slow" },
      { condition: "state == disarmed",    color: "#00CC00", behavior: "solid"      },
      { condition: "default",              color: "#444444", behavior: "solid"      },
    ],
  },
  {
    id: "cover",
    name: "Volet roulant",
    importance: "medium",
    rules: [
      { condition: "state == opening", color: "#FFDD00", behavior: "blink_slow" },
      { condition: "state == closing", color: "#FF8800", behavior: "blink_slow" },
      { condition: "state == open",    color: "#00CC00", behavior: "solid"      },
      { condition: "state == closed",  color: "#444444", behavior: "solid"      },
      { condition: "default",          color: "#888888", behavior: "solid"      },
    ],
  },
  {
    id: "person",
    name: "Présence personne",
    importance: "medium",
    rules: [
      { condition: "state == home",     color: "#00CC00", behavior: "solid" },
      { condition: "state == not_home", color: "#444444", behavior: "solid" },
      { condition: "default",           color: "#888888", behavior: "solid" },
    ],
  },
];

/**
 * Apply brightness to a hex color (#RRGGBB) and return a CSS rgba string.
 * brightness is 0-100.
 */
export function applyBrightness(hex, brightness) {
  const b = Math.max(0, Math.min(100, brightness)) / 100;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const bl = parseInt(hex.slice(5, 7), 16);
  return `rgb(${Math.round(r * b)},${Math.round(g * b)},${Math.round(bl * b)})`;
}

/**
 * Given an assignment, return the "default display color" for the grid:
 * - Use the first matching rule color (from config, not live state)
 * - Apply importance brightness
 */
export function assignmentDisplayColor(assignment) {
  const rules = assignment.rules || [];
  const rule = rules.find((r) => r.condition === "default") || rules[0];
  if (!rule || rule.behavior === "off") return "#1a1a1a";
  const brightness = IMPORTANCE_BRIGHTNESS[assignment.importance] ?? 30;
  return applyBrightness(rule.color || "#ffffff", brightness);
}

/**
 * Given a matched rule and importance, return the live display color.
 */
export function ruleDisplayColor(rule, importance) {
  if (!rule || rule.behavior === "off") return "#1a1a1a";
  const brightness = IMPORTANCE_BRIGHTNESS[importance] ?? 30;
  return applyBrightness(rule.color || "#ffffff", brightness);
}
