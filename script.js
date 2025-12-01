// PHONE DATA – updated with new prices & JPG images
const iphoneModels = [
    // Older Models
    {
        name: "iPhone 8",
        generation: "8-XS",
        price: "From R2 500",
        colors: ["Black", "Silver", "Gold", "Red"],
        storage: ["64GB", "128GB", "256GB"],
        image: "images/iphone8.jpg"
    },

    {
        name: "iPhone 8 Plus",
        generation: "8-XS",
        price: "From R3 500",
        colors: ["Black", "Silver", "Gold", "Red"],
        storage: ["64GB", "128GB", "256GB"],
        image: "images/iphone8plus.jpg"
    },

    {
        name: "iPhone X",
        generation: "8-XS",
        price: "From R4 500",
        colors: ["Space Grey", "Silver"],
        storage: ["64GB", "256GB"],
        image: "images/iphonex.jpg"
    },

    {
        name: "iPhone XR",
        generation: "8-XS",
        price: "From R4 800",
        colors: ["Black", "White", "Blue", "Yellow", "Coral", "Red"],
        storage: ["64GB", "128GB", "256GB"],
        image: "images/iphonexr.jpg"
    },

    {
        name: "iPhone XS",
        generation: "8-XS",
        price: "From R4 000",
        colors: ["Space Grey", "Silver", "Gold"],
        storage: ["64GB", "256GB", "512GB"],
        image: "images/iphonexs.jpg"
    },

    {
        name: "iPhone XS Max",
        generation: "8-XS",
        price: "From R5 500",
        colors: ["Space Grey", "Silver", "Gold"],
        storage: ["64GB", "256GB", "512GB"],
        image: "images/iphonexsmax.jpg"
    },

    // iPhone 11 Series
    {
        name: "iPhone 11",
        generation: "11",
        price: "From R5 500",
        colors: ["Black", "White", "Green", "Purple", "Yellow", "Red"],
        storage: ["64GB", "128GB", "256GB"],
        image: "images/iphone11.jpg"
    },

    {
        name: "iPhone 11 Pro",
        generation: "11",
        price: "From R6 800",
        colors: ["Space Grey", "Silver", "Gold", "Midnight Green"],
        storage: ["64GB", "256GB", "512GB"],
        image: "images/iphone11pro.jpg"
    },

    {
        name: "iPhone 11 Pro Max",
        generation: "11",
        price: "From R8 900",
        colors: ["Space Grey", "Silver", "Gold", "Midnight Green"],
        storage: ["64GB", "256GB", "512GB"],
        image: "images/iphone11promax.jpg"
    },

    // iPhone SE
    {
        name: "iPhone SE (2020/2022)",
        generation: "11",
        price: "From R4 000",
        colors: ["Black", "White", "Red"],
        storage: ["64GB", "128GB", "256GB"],
        image: "images/iphonese.jpg"
    },

    // iPhone 12 Series
    {
        name: "iPhone 12 Mini",
        generation: "12",
        price: "From R7 000",
        colors: ["Black", "White", "Blue", "Green", "Purple", "Red"],
        storage: ["64GB", "128GB", "256GB"],
        image: "images/iphone12mini.jpg"
    },

    {
        name: "iPhone 12",
        generation: "12",
        price: "From R6 500",
        colors: ["Black", "White", "Blue", "Green", "Purple", "Red"],
        storage: ["64GB", "128GB", "256GB"],
        image: "images/iphone12.jpg"
    },

    {
        name: "iPhone 12 Pro",
        generation: "12",
        price: "From R8 000",
        colors: ["Graphite", "Silver", "Gold", "Pacific Blue"],
        storage: ["128GB", "256GB", "512GB"],
        image: "images/iphone12pro.jpg"
    },

    {
        name: "iPhone 12 Pro Max",
        generation: "12",
        price: "From R9 000",
        colors: ["Graphite", "Silver", "Gold", "Pacific Blue"],
        storage: ["128GB", "256GB", "512GB"],
        image: "images/iphone12promax.jpg"
    },

    // iPhone 13 Series
    {
        name: "iPhone 13 Mini",
        generation: "13",
        price: "From R8 000",
        colors: ["Midnight", "Starlight", "Blue", "Pink", "Green"],
        storage: ["128GB", "256GB", "512GB"],
        image: "images/iphone13mini.jpg"
    },

    {
        name: "iPhone 13",
        generation: "13",
        price: "From R7 500",
        colors: ["Midnight", "Starlight", "Blue", "Pink", "Green"],
        storage: ["128GB", "256GB", "512GB"],
        image: "images/iphone13.jpg"
    },

    {
        name: "iPhone 13 Pro",
        generation: "13",
        price: "From R9 200",
        colors: ["Graphite", "Silver", "Gold", "Sierra Blue", "Alpine Green"],
        storage: ["128GB", "256GB", "512GB", "1TB"],
        image: "images/iphone13pro.jpg"
    },

    {
        name: "iPhone 13 Pro Max",
        generation: "13",
        price: "From R9 900",
        colors: ["Graphite", "Silver", "Gold", "Sierra Blue", "Alpine Green"],
        storage: ["128GB", "256GB", "512GB", "1TB"],
        image: "images/iphone13promax.jpg"
    },

    // iPhone 14 Series
    {
        name: "iPhone 14",
        generation: "14",
        price: "From R9 500",
        colors: ["Midnight", "Starlight", "Blue", "Purple", "Yellow", "Red"],
        storage: ["128GB", "256GB", "512GB"],
        image: "images/iphone14.jpg"
    },

    {
        name: "iPhone 14 Plus",
        generation: "14",
        price: "From R12 000",
        colors: ["Midnight", "Starlight", "Blue", "Purple", "Yellow", "Red"],
        storage: ["128GB", "256GB", "512GB"],
        image: "images/iphone14plus.jpg"
    },

    {
        name: "iPhone 14 Pro",
        generation: "14",
        price: "From R10 500",
        colors: ["Space Black", "Silver", "Gold", "Deep Purple"],
        storage: ["128GB", "256GB", "512GB", "1TB"],
        image: "images/iphone14pro.jpg"
    },

    {
        name: "iPhone 14 Pro Max",
        generation: "14",
        price: "From R12 500",
        colors: ["Space Black", "Silver", "Gold", "Deep Purple"],
        storage: ["128GB", "256GB", "512GB", "1TB"],
        image: "images/iphone14promax.jpg"
    },

    // iPhone 15 Series
    {
        name: "iPhone 15",
        generation: "15",
        price: "From R10 500",
        colors: ["Black", "Blue", "Pink", "Yellow", "Green"],
        storage: ["128GB", "256GB", "512GB"],
        image: "images/iphone15.jpg"
    },

    {
        name: "iPhone 15 Plus",
        generation: "15",
        price: "From R17 000",
        colors: ["Black", "Blue", "Pink", "Yellow", "Green"],
        storage: ["128GB", "256GB", "512GB"],
        image: "images/iphone15plus.jpg"
    },

    {
        name: "iPhone 15 Pro",
        generation: "15",
        price: "From R14 050",
        colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
        storage: ["128GB", "256GB", "512GB", "1TB"],
        image: "images/iphone15pro.jpg"
    },

    {
        name: "iPhone 15 Pro Max",
        generation: "15",
        price: "From R16 800",
        colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
        storage: ["256GB", "512GB", "1TB"],
        image: "images/iphone15promax.jpg"
    }
];


// ================== RENDER FUNCTION ==================
function renderIphones(filter = "all") {
    const grid = document.getElementById("iphone-grid");
    if (!grid) return;

    grid.innerHTML = "";

    iphoneModels
        .filter(phone => filter === "all" || phone.generation === filter)
        .forEach((phone, index) => {
            const colorOptions = phone.colors
                .map(c => `<option value="${c}">${c}</option>`)
                .join("");

            const storageOptions = phone.storage
                .map(s => `<option value="${s}">${s}</option>`)
                .join("");

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
        <div class="card-image">
          <img src="${phone.image}" alt="${phone.name}" onerror="this.style.display='none'">
        </div>

        <div class="card-title">${phone.name}</div>
        <div class="price">${phone.price}</div>

        <div class="options">
          <div>
            <label for="color-${index}">Colour</label>
            <select id="color-${index}">
              ${colorOptions}
            </select>
          </div>

          <div>
            <label for="storage-${index}">Storage</label>
            <select id="storage-${index}">
              ${storageOptions}
            </select>
          </div>
        </div>

        <div class="stock">Stock changes daily – confirm on WhatsApp.</div>

        <div class="card-actions">
          <button class="btn" onclick="orderWhatsApp(${index})">💬 Order on WhatsApp</button>
          <button class="btn btn-outline" onclick="callNow()">📞 Call</button>
        </div>
      `;

            grid.appendChild(card);
        });
}


// ================== ORDER ==================
function orderWhatsApp(index) {
    const phone = iphoneModels[index];
    const color = document.getElementById(`color-${index}`).value;
    const storage = document.getElementById(`storage-${index}`).value;

    const msg =
        `Hi Net gadgets, I'm interested in ${phone.name} (${storage}, ${color}). Please confirm price and availability.`;

    window.open(`https://wa.me/27601001365?text=${encodeURIComponent(msg)}`, "_blank");
}

function callNow() {
    window.location.href = "tel:+27601001365";
}


// ================== INIT ==================
document.addEventListener("DOMContentLoaded", () => {
    const filterSelect = document.getElementById("filter-generation");
    renderIphones("all");

    filterSelect.addEventListener("change", () => {
        renderIphones(filterSelect.value);
    });
});
