const pawsonaData = {
    [PAWSONA_KEYS.CHILL]: {
        title: "Chill Champ 🛋️",
        shortResult: "Your pet is a Chill Champ — cozy comforters and soft pastels suit them best.",
        description: "Comfort first — plush sweaters, pastel bows, and cozy beds are their love language.",
        colorClass: "result-color-chill",
        products: [
            // Matches: Cloud Snuggle Hoodie.jpg
            { img: Cloud Snuggle Hoodie.jpg, name: "Cloud Snuggle Hoodie", price: "₹799" },
            // Matches: Pastel Bow.jpg (used for both bow products)
            { img: Pastel Bow.jpg , name: "Pastel Bow Pack", price: "₹299" },
            // Matches: Chill-Blanket.jpg
            { img: Chill-Blanket.jpg , name: "Fleece Lounge Blanket", price: "₹499" },
        ],
        bundle: "Cozy Combo: Hoodie + Bow Pack ₹999 (save ₹100)"
    },
    [PAWSONA_KEYS.TREND]: {
        title: "Trend Setter 👑",
        shortResult: "Your pet is a Trend Setter — designer trims, bows and luxe textures are their vibe.",
        description: "Elegance & flair — velvet textures, designer bows and limited drops suit their style.",
        colorClass: "result-color-trend",
        products: [
            // Matches: Fancy Suit.jpg
            { img: Fancy Suit.jpg , name: "Furry Royal Suit", price: "₹1999" },
            // Matches: Pastel Bow.jpg (used for Crystal Bow Tie)
            { img: Pastel Bow.jpg , name: "Crystal Bow Tie", price: "₹549" },
            // Matches: Crowwn Cap.jpg
            { img: Crowwn Cap.jpg, name: "Limited Crown Cap", price: "₹799" },
        ],
        bundle: "Glam Trio — Jacket + Bow + Cap ₹2899 (exclusive)"
    },
    [PAWSONA_KEYS.PLAYGROUND]: {
        title: "Playground Pro 🏅",
        shortResult: "Your pet is a Playground Pro — sporty, breathable, and ready to zoom.",
        description: "Active, brave, and always ready — breathable sporty wear and reflective harnesses make their day.",
        colorClass: "result-color-playground",
        products: [
            // Matches: Breathable Vesst.jpg
            { img: "Breathable Vesst.jpg", name: "Breathable Sport Vest", price: "₹899" },
            // *** CRITICAL FIX HERE ***: Matches Reflective harness (1).jpg
            { img: "Reflective harness (1).jpg", name: "Reflective Harness", price: "₹699" },
            // Matches: Treat Ball.jpg
            { img: "Treat Ball.jpg", name: "Thooth Cleaning Ball Pack", price: "₹299" },
        ],
        bundle: "Active Pack — Vest + Harness ₹1490 (save ₹108)"
    }
};

