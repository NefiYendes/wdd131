const trails = [
    {
        id: "t1",
        name: "Pine Crest Loop",
        difficulty: "Easy",
        distance: "2.5 miles",
        duration: "1.5 hours",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=500&q=80",
        description: "A gentle forest walk suitable for families and beginner hikers."
    },
    {
        id: "t2",
        name: "Whispering River Trail",
        difficulty: "Moderate",
        distance: "5.1 miles",
        duration: "3.0 hours",
        image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=500&q=80",
        description: "Scenic riverside path with moderate incline and water views."
    },
    {
        id: "t3",
        name: "Eagle Rock Summit",
        difficulty: "Hard",
        distance: "8.4 miles",
        duration: "5.5 hours",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80",
        description: "Challenging climb rewarded with panoramic mountain views."
    },
    {
        id: "t4",
        name: "Cedar Canyon Way",
        difficulty: "Moderate",
        distance: "4.0 miles",
        duration: "2.5 hours",
        image: "https://plus.unsplash.com/premium_photo-1694475466344-945344010375?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Shaded trail leading through ancient cedar groves."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    setCurrentYear();
    setupMobileMenu();
    document.getElementById("currentyear").innerHTML = new Date().getFullYear();
    document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

    const trailsGrid = document.getElementById("trails-grid");
    if (trailsGrid) {
        renderTrailCards(trails);
        setupFilters();
        renderFavorites();
    }
});

function setCurrentYear() {
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function setupMobileMenu() {
    const toggleBtn = document.getElementById("menu-toggle");
    const primaryNav = document.getElementById("primary-nav");
    
    if (toggleBtn && primaryNav) {
        toggleBtn.addEventListener("click", () => {
            primaryNav.classList.toggle("show");
        });
    }
}

function renderTrailCards(trailList) {
    const trailsGrid = document.getElementById("trails-grid");
    trailsGrid.innerHTML = "";

    if (trailList.length === 0) {
        trailsGrid.innerHTML = `<p>No trails match your selection.</p>`;
        return;
    }

    trailList.forEach(trail => {
        const card = document.createElement("article");
        card.className = "trail-card";
        
        const badgeClass = trail.difficulty.toLowerCase();

        card.innerHTML = `
            <img src="${trail.image}" alt="${trail.name}" loading="lazy" width="300" height="180">
            <div class="trail-details">
                <span class="badge ${badgeClass}">${trail.difficulty}</span>
                <h3>${trail.name}</h3>
                <p>${trail.description}</p>
                <p><strong>Distance:</strong> ${trail.distance} | <strong>Est:</strong> ${trail.duration}</p>
                <button class="btn" onclick="saveFavorite('${trail.id}')">Save to Favorites</button>
            </div>
        `;
        trailsGrid.appendChild(card);
    });
}

function setupFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");

            const level = e.target.getAttribute("data-difficulty");
            if (level === "all") {
                renderTrailCards(trails);
            } else {
                const filtered = trails.filter(trail => trail.difficulty === level);
                renderTrailCards(filtered);
            }
        });
    });
}

function getStoredFavorites() {
    const data = localStorage.getItem("trailfinder_favorites");
    return data ? JSON.parse(data) : [];
}

function saveFavorite(trailId) {
    let favorites = getStoredFavorites();
    if (!favorites.includes(trailId)) {
        favorites.push(trailId);
        localStorage.setItem("trailfinder_favorites", JSON.stringify(favorites));
        renderFavorites();
    }
}

function removeFavorite(trailId) {
    let favorites = getStoredFavorites();
    favorites = favorites.filter(id => id !== trailId);
    localStorage.setItem("trailfinder_favorites", JSON.stringify(favorites));
    renderFavorites();
}

function renderFavorites() {
    const favoritesContainer = document.getElementById("favorites-list");
    if (!favoritesContainer) return;

    const favoriteIds = getStoredFavorites();
    favoritesContainer.innerHTML = "";

    if (favoriteIds.length === 0) {
        favoritesContainer.innerHTML = `<p class="empty-msg">No favorite trails saved yet.</p>`;
        return;
    }

    const favoriteTrails = trails.filter(t => favoriteIds.includes(t.id));

    favoriteTrails.forEach(trail => {
        const item = document.createElement("div");
        item.className = "fav-item";
        item.innerHTML = `
            <span>${trail.name}</span>
            <button class="remove-btn" onclick="removeFavorite('${trail.id}')">&times;</button>
        `;
        favoritesContainer.appendChild(item);
    });
}