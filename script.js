const PAWSONA_KEYS = {
    CHILL: 'CHILL',
    TREND: 'TREND',
    PLAYGROUND: 'PLAYGROUND'
}; // Added a mock for PAWSONA_KEYS to ensure standalone code is valid

const pawsonaData = {
    [PAWSONA_KEYS.CHILL]: {
        title: "Chill Champ 🛋️",
        shortResult: "Your pet is a Chill Champ — cozy comforters and soft pastels suit them best.",
        description: "Comfort first — plush sweaters, pastel bows, and cozy beds are their love language.",
        colorClass: "result-color-chill",
        products: [
            // Ensure path is correct, e.g., 'images/Cloud_Snuggle_Hoodie.jpg'
            { img: "Cloud_Snuggle_Hoodie.jpg", name: "Cloud Snuggle Hoodie", price: "₹799" },
            { img: "Pastel_Bow.jpg" , name: "Pastel Bow Pack", price: "₹299" },
            { img: "Chill-Blanket.jpg" , name: "Fleece Lounge Blanket", price: "₹499" },
        ],
        bundle: "Cozy Combo: Hoodie + Bow Pack ₹999 (save ₹100)"
    },
    [PAWSONA_KEYS.TREND]: {
        title: "Trend Setter 👑",
        shortResult: "Your pet is a Trend Setter — designer trims, bows and luxe textures are their vibe.",
        description: "Elegance & flair — velvet textures, designer bows and limited drops suit their style.",
        colorClass: "result-color-trend",
        products: [
            { img: "Fancy_Suit.jpg" , name: "Furry Royal Suit", price: "₹1999" },
            { img: "Pastel_Bow.jpg" , name: "Crystal Bow Tie", price: "₹549" },
            // FIX: Changed 'Crowwn_Cap.jpg' to 'Crown_Cap.jpg'
            { img: "Crown_Cap.jpg", name: "Limited Crown Cap", price: "₹799" }, 
        ],
        bundle: "Glam Trio — Jacket + Bow + Cap ₹2899 (exclusive)"
    },
    [PAWSONA_KEYS.PLAYGROUND]: {
        title: "Playground Pro 🏅",
        shortResult: "Your pet is a Playground Pro — sporty, breathable, and ready to zoom.",
        description: "Active, brave, and always ready — breathable sporty wear and reflective harnesses make their day.",
        colorClass: "result-color-playground",
        products: [
            // FIX: Changed 'BreathableVesst.jpg' to 'BreathableVest.jpg'
            { img: "BreathableVest.jpg", name: "Breathable Sport Vest", price: "₹899" }, 
            // The file name here was clean but a note mentioned a potential variation. Sticking with the clean one.
            { img: "Reflective_harness.jpg", name: "Reflective Harness", price: "₹699" }, 
            { img: "Treat_Ball.jpg", name: "Thooth Cleaning Ball Pack", price: "₹299" },
        ],
        bundle: "Active Pack — Vest + Harness ₹1490 (save ₹108)"
    }
};
