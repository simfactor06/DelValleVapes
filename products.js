// DEL VALLE VAPES — catálogo de productos
// Precios en ARS. Imágenes en assets/products/
const PRODUCTS = [
  // ---- ELFBAR TE30K ----
  { id: "te30k-strawmelon-peach", brand: "Elfbar TE30K", flavor: "Strawmelon Peach", price: 21500, puffs: "30.000", img: "elfbar_te30k_strawmelon_peach.png", tag: "elfbar-te30k" },
  { id: "te30k-miami-mint", brand: "Elfbar TE30K", flavor: "Miami Mint", price: 21500, puffs: "30.000", img: "elfbar_te30k_miami_mint.png", tag: "elfbar-te30k" },
  { id: "te30k-acai-banana-ice", brand: "Elfbar TE30K", flavor: "Acai Banana Ice", price: 21500, puffs: "30.000", img: "elfbar_te30k_acai_banana_ice.png", tag: "elfbar-te30k" },

  // ---- IGNITE MIX (doble sabor) ----
  { id: "mix-passionfruit-pineapple", brand: "Ignite Mix", flavor: "Passion Fruit Sour Kiwi / Pineapple Ice", price: 28000, img: "ignite_mix_passionfruit_kiwi_pineapple.png", tag: "ignite" },
  { id: "mix-strawberrymango-banana", brand: "Ignite Mix", flavor: "Strawberry Mango Ice / Banana Ice", price: 28000, img: "ignite_mix_strawberry_mango_banana.png", tag: "ignite" },
  { id: "mix-banana-strawberry", brand: "Ignite Mix", flavor: "Banana / Strawberry Ice", price: 28000, img: "ignite_mix_banana_strawberry.png", tag: "ignite" },
  { id: "mix-grape-strawberry", brand: "Ignite Mix", flavor: "Grape Ice / Strawberry", price: 28000, img: "ignite_mix_grape_strawberry.png", tag: "ignite" },
  { id: "mix-icymint-peachgrape", brand: "Ignite Mix", flavor: "Icy Mint / Peach Grape", price: 28000, img: "ignite_mix_icymint_peachgrape.png", tag: "ignite" },
  { id: "mix-grape-watermelon", brand: "Ignite Mix", flavor: "Grape Ice / Watermelon Ice", price: 28000, img: "ignite_mix_grape_watermelon.png", tag: "ignite" },
  { id: "mix-strawberrywatermelon-aloegrape", brand: "Ignite Mix", flavor: "Strawberry Watermelon Ice / Aloe Grape", price: 28000, img: "ignite_mix_strawberrywatermelon_aloegrape.png", tag: "ignite" },
  { id: "mix-blueberry-raspberryblackberry", brand: "Ignite Mix", flavor: "Blueberry Ice / Raspberry Blackberry", price: 28000, img: "ignite_mix_blueberry_raspberryblackberry.png", tag: "ignite" },

  // ---- IGNITE V NANO / IGNITE base ----
  { id: "vnano-watermelon-ice", brand: "Ignite V Nano", flavor: "Watermelon Ice", price: 8000, puffs: "+1.000", img: "ignite_vnano_watermelon_ice.png", tag: "ignite" },
  { id: "vnano-green-apple", brand: "Ignite V Nano", flavor: "Green Apple", price: 8000, puffs: "+1.000", img: "ignite_vnano_green_apple.png", tag: "ignite" },
  { id: "vnano-pineapple-ice", brand: "Ignite V Nano", flavor: "Pineapple Ice", price: 8000, puffs: "+1.000", img: "ignite_vnano_pineapple_ice.png", tag: "ignite" },
  { id: "ignite-blueberry-raspberry-ice", brand: "Ignite", flavor: "Blueberry Raspberry Ice", price: 8000, img: "ignite_blueberry_raspberry_ice.png", tag: "ignite" },
  { id: "ignite-strawberry-watermelon", brand: "Ignite", flavor: "Strawberry Watermelon", price: 8000, img: "ignite_strawberry_watermelon.png", tag: "ignite" },

  // ---- IGNITE 4000 ----
  { id: "ignite4000-watermelon-ice", brand: "Ignite 4000", flavor: "Watermelon Ice", price: 8500, img: "ignite4000_watermelon_ice.png", tag: "ignite" },

  // ---- RABBEATS RC50000 ----
  { id: "rabbeats-watermelon-ice", brand: "RabBeats RC50000", flavor: "Watermelon Ice", price: 22000, puffs: "50.000", img: "rabbeats_watermelon_ice.png", tag: "rabbeats" },
  { id: "rabbeats-menthol", brand: "RabBeats RC50000", flavor: "Menthol", price: 22000, puffs: "50.000", img: "rabbeats_menthol.png", tag: "rabbeats" },
  { id: "rabbeats-green-apple-ice", brand: "RabBeats RC50000", flavor: "Green Apple Ice", price: 22000, puffs: "50.000", img: "rabbeats_green_apple_ice.png", tag: "rabbeats" },
  { id: "rabbeats-icy-mint", brand: "RabBeats RC50000", flavor: "Icy Mint", price: 22000, puffs: "50.000", img: "rabbeats_icy_mint.png", tag: "rabbeats" },
  { id: "rabbeats-strawberry-kiwi-ice", brand: "RabBeats RC50000", flavor: "Strawberry Kiwi Ice", price: 22000, puffs: "50.000", img: "rabbeats_strawberry_kiwi_ice.png", tag: "rabbeats" },

  // ---- LOST MARY DURA ----
  { id: "lostmary-green-apple-ice", brand: "Lost Mary Dura", flavor: "Green Apple Ice", price: 22000, puffs: "35.000", img: "lostmary_green_apple_ice.png", tag: "lostmary" },
  { id: "lostmary-strawberry-watermelon", brand: "Lost Mary Dura", flavor: "Strawberry Watermelon", price: 22000, puffs: "35.000", img: "lostmary_strawberry_watermelon.png", tag: "lostmary" },
  { id: "lostmary-strawberry-ice", brand: "Lost Mary Dura", flavor: "Strawberry Ice", price: 22000, puffs: "35.000", img: "lostmary_strawberry_ice.png", tag: "lostmary" },
  { id: "lostmary-grape-ice", brand: "Lost Mary Dura", flavor: "Grape Ice", price: 22000, puffs: "35.000", img: "lostmary_grape_ice.png", tag: "lostmary" },
  { id: "lostmary-watermelon-ice", brand: "Lost Mary Dura", flavor: "Watermelon Ice", price: 22000, puffs: "35.000", img: "lostmary_watermelon_ice.png", tag: "lostmary" },
  { id: "lostmary-miami-mint", brand: "Lost Mary Dura", flavor: "Miami Mint", price: 22000, puffs: "35.000", img: "lostmary_miami_mint.png", tag: "lostmary" },

  // ---- ELFBAR ICE KING ---- (2 sabores pendientes de foto: Strawberry Watermelon y Watermelon Ice)
  { id: "iceking-grape-ice", brand: "Elfbar Ice King", flavor: "Grape Ice", price: 24000, puffs: "40.000", img: "elfbariceking_grape_ice.png", tag: "elfbar-iceking" },
  { id: "iceking-cherry-strazz", brand: "Elfbar Ice King", flavor: "Cherry Strazz", price: 24000, puffs: "40.000", img: "elfbariceking_cherry_strazz.png", tag: "elfbar-iceking" },
  { id: "iceking-strawberry-ice", brand: "Elfbar Ice King", flavor: "Strawberry Ice", price: 24000, puffs: "40.000", img: "elfbariceking_strawberry_ice.png", tag: "elfbar-iceking" },
  { id: "iceking-miami-mint", brand: "Elfbar Ice King", flavor: "Miami Mint", price: 24000, puffs: "40.000", img: "elfbariceking_miami_mint.png", tag: "elfbar-iceking" },

  // ---- IGNITE V300 ULTRA SLIM ----
  { id: "v300-strawberry-ice", brand: "Ignite V300 Ultra Slim", flavor: "Strawberry Ice", price: 26000, puffs: "30.000", img: "ignitev300_strawberry_ice.png", tag: "ignite" },

  // ---- IGNITE V155 ULTRA SLIM ----
  { id: "v155-watermelon-mix-negro", brand: "Ignite V155 Ultra Slim", flavor: "Watermelon Mix (negro)", price: 20500, img: "ignitev155_watermelon_mix_negro.png", tag: "ignite" },
  { id: "v155-watermelon-mix-naranja", brand: "Ignite V155 Ultra Slim", flavor: "Watermelon Mix (naranja)", price: 20500, img: "ignitev155_watermelon_mix_naranja.png", tag: "ignite" },
  { id: "v155-strawberrywatermelon-ice", brand: "Ignite V155 Ultra Slim", flavor: "Strawberry Watermelon Ice", price: 20500, img: "ignitev155_strawberrywatermelon_ice.png", tag: "ignite" },
  { id: "v155-strawberry-ice-a", brand: "Ignite V155 Ultra Slim", flavor: "Strawberry Ice", price: 20500, img: "ignitev155_strawberry_ice_a.png", tag: "ignite" },
  { id: "v155-strawberry-ice-b", brand: "Ignite V155 Ultra Slim", flavor: "Strawberry Ice (variante)", price: 20500, img: "ignitev155_strawberry_ice_b.png", tag: "ignite" },

  // ---- TE6000 / EBDESIGN TE6000 ----
  { id: "te6000-blue-razz-ice", brand: "TE6000", flavor: "Blue Razz Ice", price: 9500, img: "te6000_blue_razz_ice.png", tag: "te6000" },
  { id: "ebdesign-te6000-grape-ice", brand: "EBDesign TE6000", flavor: "Grape Ice", price: 9500, img: "ebdesign_te6000_grape_ice.png", tag: "te6000" },
  { id: "te6000-watermelon-ice", brand: "TE6000", flavor: "Watermelon Ice", price: 9500, img: "te6000_watermelon_ice.png", tag: "te6000" },
  { id: "ebdesign-te6000-strawberry-ice", brand: "EBDesign TE6000", flavor: "Strawberry Ice", price: 9500, img: "ebdesign_te6000_strawberry_ice.png", tag: "te6000" },
  { id: "ebdesign-te6000-ice-mint", brand: "EBDesign TE6000", flavor: "Ice Mint", price: 9500, img: "ebdesign_te6000_ice_mint.png", tag: "te6000" },
];

const WHATSAPP_NUMBER = "5493834018431"; // 549 + código de área sin 0 + número sin 15

// Portadas de línea/marca (landing de secciones) — fotos del catálogo del proveedor
const SECTIONS = [
  { tag: "elfbar-te30k", label: "Elfbar TE30K", sub: "30.000 puffs", img: "elfbar_te30k.jpg" },
  { tag: "elfbar-iceking", label: "Elfbar Ice King", sub: "40.000 puffs", img: "elfbar_iceking.jpg" },
  { tag: "ignite", label: "Ignite", sub: "Mix · V Nano · V300 · V155 · 4000", img: "ignite.jpg" },
  { tag: "rabbeats", label: "RabBeats RC50000", sub: "50.000 puffs", img: "rabbeats.jpg" },
  { tag: "lostmary", label: "Lost Mary Dura", sub: "35.000 puffs", img: "lostmary.jpg" },
  { tag: "te6000", label: "TE6000 / EBDesign", sub: "6.000 puffs", img: "te6000.jpg" },
];
