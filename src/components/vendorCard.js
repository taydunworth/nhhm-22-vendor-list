import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

const vendors = [
    { name: "Pet Musings",
      id: 1,
      description: "Bandanas and accessories for pets and pet parents, part of every purchase donated to local rescues",
      website: "https://www.petmusings.com",
      facebook: "https://www.facebook.com/petmusings",
      instagram: "https://www.instagram.com/petmusings",
      tiktok: "https://www.tiktok.com/@petmusings",
    },
    {
      name: "Spencer Cole Baby Boutique",
      id: 2,
      description: "Handcrafted Baby Accessories & Baby Clothing...Made with organic natural material.",
      website: "https://www.myspencercole.com",
      facebook: "https://www.facebook.com/spencercole91",
      instagram: "https://www.instagram.com/spencer_cole_baby_boutique/",
    },
    {
      name: "Heavenly Jillicious",
      id: 3,
      description: "Homemade Fudge",
      website: "https://www.heavenlyjillicious.com",
      facebook: "https://www.facebook.com/HeavenlyJillicious",
      instagram: "https://www.instagram.com/HeavenlyJillicious",
    },
    {
      name: "The Scarlet Mystic",
      id: 4,
      description: "Tarot readings, Items for mystical work: Hand crafted meditation kits, mists, roll-on oils, incense, various curated kits, fiction novels (by Scarlet Darkwood)",
      website: "https://www.etsy.com/shop/TheScarletMystic",
      facebook: "https://www.facebook.com/scarletmystic/",
      instagram: "https://www.instagram.com/scarletmystic/",
    },
    {
      name: "The Barrel Project",
      id: 5,
      description: "Sold decor made from whiskey barrels.",
    },
    {
      name: "Queen Essentials",
      id: 6,
      description: "Hair and Skincare Products, for men and women",
    },
    {
      name: "Bud & Thorn",
      id: 7,
      description: "Handmade infinity scarves with a hidden zippered pocket. Because everyone needs more pockets!",
      website: "https://www.etsy.com/shop/budandthorn",
      facebook: "https://www.facebook.com/budandthorn",
      instagram: "https://www.instagram.com/budandthorn",
    },
    {
      name: "Cornerstone Tea",
      id: 8,
      description: "Fine looseleaf tea, tea accessories, tea themed giftables (including Build-A-Flight and matcha kits)",
      website: "https://www.cornerstoneteacompany.com ",
      facebook: "https://www.facebook.com/cornerstonetea",
      instagram: "https://www.instagram.com/cornerstoneteacompany",
    },
    {
      name: "Xandra Page Co.",
      id: 9,
      description: "Unique Earrings (polymer clay), jewelry, acrylic keychains, and trinkets",
      website: "https://www.etsy.com/shop/xandrapage",
      facebook: "https://www.facebook.com/xandrapageco",
      instagram: "https://www.instagram.com/xandra.page.co",
    },
    {
      name: "Bumblebee Bins",
      id: 10,
      description: "Sensory play dough bins and craft kits for children",
      website: "https://www.bumblebeebins.com",
      instagram: "https://www.instagram.com/bumblebeebins",
    },
    {
      name: "Simply Rollick",
      id: 11,
      description: "Jewelry (clay earrings, necklaces, bracelets, wire wrapped rings)",
      website: "https://www.simplyrollick.com",
      facebook: "https://www.facebook.com/simplyrollick",
      instagram: "https://www.instagram.com/simplyrollick",
    },
    {
      name: "Pepper Dealer",
      id: 12,
      description: "Fruited Pepper Jelly",
      facebook: "https://www.facebook.com/pepperdealer",
    },
    {
      name: "The Pampered Poodle Co, LLC",
      id: 13,
      description: "Handmade, durable BioThane and paracord products for your dog, as well as bandanas, homemade dehydrated treats, and crocheted cat toys!",
      facebook: "https://www.facebook.com/thepamperedpoodleco",
      instagram: "https://www.instagram.com/ThePamperedPoodleCo",
    },
    {
      name: "A Little Bit of Summer",
      id: 14,
      description: "Ornaments and acrylic earrings",
    },
    {
      name: "Alpaca Soaps",
      id: 15,
      description: "Body and Hair Care products",
      website: "https://www.alpacasoaps.com",
      facebook: "https://www.facebook.com/alpacasoaps",
      instagram: "https://www.instagram.com/alpacasoaps",
    },
    {
      name: "Miss Daisy's All Natural Boutique",
      id: 16,
      description: "We are an all natural soy candle business. We make candles ranging from 2oz to 2 lbs. And everything in between. We have a large variety of scents and collections to appease all shoppers. We also hand-make all natural body care (bug off, cooling spray, body oil, lip oil, beard oil), home care (room spray, yoga mat cleaner, antibacterial cleaner, altar kits, sage, & palo santo)and pet care products (bug off, shampoo, deodorizer, calming conditioner).",
      website: "https://www.missdaisysboutique.com/",
      facebook: "https://www.facebook.com/MissDaisysSoyCandles",
      instagram: "https://www.instagram.com/missdaisyscandles/",
      tiktok: "https://www.tiktok.com/@missdaisyscandles",
    },
   { name: "FOllinA Design",
      id: 17,
      description: "Handmade badge clips, people portrait ornaments and more",
      website: "https://etsy.me/2ZS9UJN",
      facebook: "https://www.facebook.com/follinadesigns",
      tiktok: "https://www.tiktok.com/@FOllinAdesign",
    },
    {
      name: "Bluff City Tumblers",
      id: 18,
      description: "Handmade resin and sublimated tumblers.",
      facebook: "https://www..facebook.com/bluffcitytumblers",
      instagram: "https://www.instagram.com/bluffcitytumblers/",
      tiktok: "https://www.tiktok.com/@bluffcitytumblers/",
    },
    {
      name: "That's Sew Leslie",
      id: 19,
      description: "Handmade purses, masks, pouches, wallets",
      website: "https://www.thatssewleslie.com",
      facebook: "https://www.facebook.com/thatssewleslie",
      instagram: "https://www.instagram.com/thats_sew_leslie",
    },
    {
      name: "Sweet Southern Craft Co.",
      id: 20,
      description: "Soap, sugar scrubs, bath bombs, lotion balms, shampoo & conditioner bars, beard oil, beeswax candles, shower oils, etc.",
    },
    {
      name: "SophiesBoutique08",
      id: 21,
      description: "Handmade doll clothes and accessories",
      website: "https://www.etsy.com/shop/sophiesboutique08",
      facebook: "https://www.facebook.com/sophiesboutique08",
    },
    {
      name: "Firelight Creations",
      id: 22,
      description: "3D wood creations: forest bear, wolf, tree owl, etc.., 3D wood ornaments, vendor display stands & business card holders, and wood kids puzzles: alphabet, solar system, ASL",
      website: "https://www.firelightcreations.net",
      facebook: "https://www.facebook.com/firelightcreationtn",
    },
    {
      name: "Black Poppy Emporium",
      id: 23,
      description: "Handmade pottery, clay jewelry, soap, whipped body butter, bath treats",
      website: "https://www.blackpoppyemporium.com ",
      facebook: "https://www.facebook.com/blackpoppyemporium",
    },
    {
      name: "Maddie & Kenz",
      id: 24,
      description: "Handmade baby & toddler clothing",
      website: "https://www.shopmaddieandkenz.com ",
      facebook: "https://www.facebook.com/groups/shopmaddieandkenz",
      instagram: "https://www.instagram.com/shopmaddieandkenz",
      tiktok: "https://www.tiktok.com/@shopmaddieandkenz",
    },
    {
      name: "Sunflower & Red",
      id: 25,
      description: "Seaglass Art, Leatherwork, Survival Kits",
      website: "https://www.sunflowerandred.com/",
    },
    {
      name: "Dog Bandana Co.",
      id: 26,
      description: "Accessories for pets and thier parents",
      website: "https://www.dogbandanaco.com",
      facebook: "https://www.facebook.com/DogBandanaCoShop",
      instagram: "https://www.instagram.com/dogbandanaco/",
      tiktok: "https://www.tiktok.com/@dogbandanaco",
    },
    {
      name: "Smart Whoopies LLC.",
      id: 27,
      description: "Authentic handmade Maine Whoopie Pies in many flavors. The only whoopie pie bakery in Oklahoma & outside of New England. Nationwide shipping/wholesale/Shows available. Now booking events for 2023. Woman owned.",
      website: "https://www.smartwhoopies.com",
      facebook: "https://www.facebook.com/smartwhoopies",
      instagram: "https://www.instagram.com/Smartwhoopies",
      tiktok: "https://www.tiktok.com/@whoopiequeen",
    },
    {
      name: "Little Mia Co.",
      id: 28,
      description: "Faux Leather Hair Bows & accessories",
      website: "https://www.littlemiaco.com",
      facebook: "https://www.facebook.com/littlemiaco",
      instagram: "https://www.instagram.com/littlemiaco",
      tiktok: "https://www.tiktok.com/@littlemiaco",
    },
    {
      name: "Mary Moos Creations LLC",
      id: 29,
      description: "Bath and body; soap, lotion, body butters, scrubs, candles, blankets",
      website: "https://www.marymooscreations.com",
      facebook: "https://www.facebook.com/Marymooscreations",
      instagram: "https://www.instagram.com/MaryMoosCreations_GA",
      tiktokk: "https://www.tiktok.com/@MaryMoos"
    },
    {
      name: "Jazzy Scents",
      id: 30,
      description: "Natural soy wax candles and wax melts",
      instagram: "https://www.instagram.com/jazzyscents123",
    },
    {
      name: "Renee's Baked Delights",
      id: 31,
      description: "handmade baked goods - cake pops, decorated sugar cookies, drop cookies, cupcakes, meringue pops, dipped marshmallows, pretzel sticks, etc",
      facebook: "https://www.facebook.com/ReneesBakedDelights",
    },
    {
      name: "Winged Key Gifts & Decor",
      id: 32,
      description: "Handmade aprons and kitchen scarves from men's shirts, Old world Santas, prayer boxes, ornaments and shadow boxes",
      facebook: "https://www.facebook.com/wingedkeygiftsanddecor",
    },
    { 
      name: "Jewelry by Renee Shop",
      id: 33,
      description: "handmade jewelry from polymer clay, resin, wire wrapped stones, natural stones, austrian crystals, glass and metal beads",
      website: "https://www.linktr.ee/JewelryByReneeShop",
      facebook: "https://www.facebook.com/JewelryByRenee",
    },
    {
      name: "Kelly McKernan",
      id: 34,
      description: "Fantastical watercolor and acryla gouache paintings, prints, handmade jewelry and resin artwork.",
      website: "https://www.kellymckernan.com/shop",
      facebook: "https://www.facebook.com/kellymckernanart",
      instagram: "https://www.instagram.com/kelly_mckernan",
      tiktok: "https://www.tiktok.com/@kelly_mckernan",
    },
    {
      name: "AtoZ Creations",
      id: 35,
      description: "Screen print Clothing, Sublimated Tumblers & Mugs, Patched & Bejeweled Hats, Wall decorations, Bracelets, Mouse pads, etc.",
      facebook: "https://www.facebook.com/AtoZCreations",
    },
    {
      name: "Rachael Bee Artwork",
      id: 36,
      description: "Wildlife and nature watercolor artist-art prints, stickers, journals/sketchbooks, greeting cards and tote bags, ornaments. 10% of profit is donated to National Wildlife Federation from art prints, totes, journals, greeting cards",
      website: "https://www.rachaelbeeartwork.com",
      instagram: "https://www.instagram.com/rachaelbeeartwork/",
      tiktok: "https://www.tiktok.com/@rachaelbeeartwork",
    },
    {
      name: "Leap Frog Co",
      id: 37,
      description: "Laser cut, hand painted wooden earrings",
    },
    {
      name: "Designed in Ink",
      id: 38,
      description: "Sublimation tumblers, T-shirts, keychains, car coasters, glass tumbler, kids cups, sippy cups and epoxy pens. We take custom orders.",
      facebook: "https://www.facebook.com/DesignedInInk.co",
    },
    {
      name: "The Fabled Raven",
      id: 39,
      description: "We offer real, preserved floral and ethically sourced bone art and home decor, and all things witchy. handmade floral/crystal wreaths and besom brooms, caged bone art, carved selenite, ornaments and intention jars and bottles",
      website: "https://www.fabledraven.com",
      facebook: "https://www.facebook.com/ravenfabled",
      instagram: "https://www.instagram.com/the.fabled.raven",
      tiktok: "https://www.tiktok.com/@thefabledraven",
    },
    {
      name: "Breathing Starlight",
      id: 40,
      description: "Handmade soaps, herb/crystal candles, dreamcatchers (custom orders available), witchy jewelry, spell jars, bath salts, witch balls, incense, and more",
      website: "https://www.breathingstarlight.com",
      facebook: "https://www.facebook.com/breathingstarlight",
      instagram: "https://www.instagram.com/breathingstarlight",
      tiktok: "https://www.tiktok.com/@breathingstarlight"
    },
    {
      name: "Draconite Dreams",
      id: 41,
      description: "Resin gifts, crystals, stones, candles, and more!",
      website: "https://www.draconitedreams.com",
      facebook: "https://www.facebook.com/draconitedreams",
    },
    {
      name: "Crystals & Clarity",
      id: 42,
      description: "Intentionally curated crystals & crystal experiences: crystal candles, jewelry, art, home decor",
      website: "https://www.crystalsandclarity.com",
      facebook: "https://m.facebook.com/100076201653959/",
      instagram: "https://www.instagram.com/crystals.and.clarity",
      tiktok: "https://www.tiktok.com/@crystals.and.clarity",
    },
    {
      name: "2 Nerds and a Dog",
      id: 43,
      description: "Handmade and Natural Collectibles with a Nerdy Twist: wooden pixel figures, crystals and stones, sensory bottles, unique home decor",
      website: "https://www.linktr.ee/2nerdsandadog",
      facebook: "https://www.facebook.com/2nerdsandadog ",
      instagram: "https://www.instagram.com/2nerdsandadog",
      tiktok: "https://www.tiktok.com/@2nerdsandadog10816",
    },
    {
      name: "Happy Are You Creations",
      id: 44,
      description: "Engraved cutting boards, flasks, maze keychains, craft kits, embroidered earrings and other fun stuff",
      website: "https://www.happyareyoucreations.com ",
      facebook: "https://www.facebook.com/happyareyoucreations",
      instagram: "https://www.instagram.com/happyareyoucreations",
    },
    {
      name: "Sincerely Honey Design",
      id: 45,
      description: "Rhinestone hoodie strings and shoe laces, custom Rhinestone cups and pens, as well as starbucks cups",
      website: "https://www.SincerelyHoneyDesign.com",
      facebook: "https://www.facebook.com/SINCERELYHONEYDESIGN",
      tiktok: "https://www.tiktok.com/@sincerelyhoneydesign",
    },
    {
      name: "Signs by Hailey",
      id: 46,
      description: "Handmade wooden signs, ornaments, glass tumblers, & other home decor",
      website: "https://www.etsy.com/shop/signsbyhailey",
      facebook: "https://www.facebook.com/SignsbyHailey",
      instagram: "https://instagram.com/signs.by.hailey",
    },
    {
      name: "C+J Boutique by Brooke",
      id: 47,
      description: "Laser cut/engraved items and Sublimation items(earrings)",
      facebook: "https://www.facebook.com/CJBoutiquebyBrooke/",
      instagram: "https://www.tiktok.com/@cjboutique1",
    },
    {
      name: "Classy and Kinda Sassy",
      id: 48,
      description: "Sublimated tumblers and glass cans, screen printed and hand dyed tees, laser cut earrings, laser engraved hat patches",
      website: "https://www.classyandkindasassy.com",
      facebook: "https://www.facebook.com/groups/classyandkindasassy",
      instagram: "https://www.instagram.com/classyandkindasassy",
      tiktok: "https://www.tiktok.com/@classyandkindasassy",
    },
    {
      name: "Defiant Sauce",
      id: 49,
      description: "Spicy BBQ sauces, Uniquely flavored hot sauces and specialty rubs",
      website: "https://www.defiantsauce.com",
      facebook: "https://www.facebook.com/DefiantSauce",
      instagram: "https://www.instagram.com/defiantsauce/",
    },
    {
      name: "ThreadBent",
      id: 50,
      description: "Embroidered and handcrafted gift items, including keychains, bookmarks, bags, etc.",
      website: "https://www.threadbent.com",
      facebook: "https://www.facebook.com/luvthepaw/",
      instagram: "https://www.instagram.com/thread.bent",
    },
    {
      name: "ProfoundSass",
      id: 51,
      description: "handstamped metal jewelry full of sass and profanity",
      website: "https://www.profoundsass.com",
      facebook: "https://www.facebook.com/ProfoundSass",
      instagram: "https://www.instagram.com/ProfoundSass",
    },
    {
      name: "Dirt & Grace Customs",
      id: 52,
      description: "Bleached sublimation shirts/sweatshirts, sublimation tumblers, engraved wood items including cutting boards, beard brushes, beard combs, Apple Watches, ornaments, metal slim wallets and more!",
      facebook: "https://www.facebook.com/dirtgracecustoms",
    },
    {
      name: "Sweet Ellie Mae Shop",
      id: 53,
      description: "Handmade bows, bow ties and accessories",
      website: "https://www.sweetelliemaeshop.com",
      facebook: "https://www.facebook.com/sweetelliemaeshop",
      instagram: "https://www.instagram.com/sweetelliemaeshop",
    },
    {
      name: "Iris + Gem",
      id: 54,
      description: "We offer a variety of unique handcrafted electroformed jewelry and accessories.",
      website: "https://www.irisandgem.com",
      facebook: "https://www.facebook.com/irisandgem",
      instagram: "https://www.instagram.com/irisandgem",
      tiktok: "https://www.tiktok.com/@irisandgem",
    },
    {
      name: "Magnolia Shirt Co",
      id: 55,
      description: "Hand dyed and hand bleached shirts and sweatshirts, as well as blankets and tumblers",
      website: "https://www.magnoliashirtco.Etsy.com",
      facebook: "https://www.facebook.com/MagnoliaShirtCo",
      instagram: "https://www.instagram.com/magnoliashirtcompany",
    },
    {
      name: "Luv the Paw",
      id: 56,
      description: "Tees for Pet Parents & Fun Seekers",
      website: "https://www.luvthepaw.com",
      facebook: "https://www.facebook.com/luvthepaw/",
      instagram: "https://www.instagram.com/luvthepaw/",
      tiktok: "https://www.tiktok.com/tag/luvthepaw",
    },
    {
      name: "Tay Dunworth",
      id: 57,
      description: "Handmade women's hair accessories",
      website: "https://www.taydunworth.com",
      facebook: "https://www.facebook.com/taydunworth/",
      instagram: "https://www.instagram.com/taydunworth/",
      tiktok: "https://www.tiktok.com/@taydunworth",
    },
    {
      name: "Made on Maude",
      id: 58,
      description: "Embroidery",
    },
    {
      name: "NJs Beekeeping",
      id: 59,
      description: "We sell honey, jams, glazed pecans and mixed nuts, coasters, teas, pickles, chow chow, and Mullins spice",
    },
    {
      name: "GLADYS Mae’s",
      id: 60,
      instagram: "https://www.instagram.com/GLADYS_Maes_/",
    },
    {
      name: "Homage Crafts Co.",
      id: 61,
      description: "We specialize in handmade cutting and charcuterie boards, wooden knives, and other small wood gifts.",
      facebook: "https://www.facebook.com/groups/872116437256053/user/100063616867646/",
    },
    {
      name: "P7 Creations",
      id: 62,
      description: "Laser cutting and engraving, sublimation, custom shirts and more",
    },
    {
      name: "Arte Leather Designs",
      id: 63,
      description: "Leather jewelry and accessories",
      website: "https://www.etsy.com/shop/arteleatherdesigns",
    },
    {
      name: "Resurrected Journals",
      id: 64,
      description: "Vintage book journals and sketchbooks",
      website: "https://www.resurrectedjournals.com",
      facebook: "https://www.facebook.com/Resurrectedjournals/",
      instagram: "https://www.instagram.cim/resurrectedjournals"
    },
]

    const cardLayoutStyle = {
        width: "100%",
        display: "block",
    }

    const cardStyle = {
        backgroundColor: "#F2F4F5",
        padding: 30,
        fontFamily: "-apple-system, Roboto, sans-serif, serif",
        borderRadius: 6,
        width: "100%",
        marginBottom: 30,
        color: "#223440",
    }

    const btnStyle = {
        padding: "10px 20px",
        backgroundColor: "#274253",
        color: "#fff",
        textDecoration: "none",
        borderRadius:6,
        margin: "5px 0",
        display: "inline-block",
    }

    const socialList = {
        display: "block",
        paddingTop: 10,
    }

    const fontAwesome = {
        fontSize: "1.5em",
        paddingRight: "20px",
        color: "#3F8C8C",
    }

const VendorCard = () => {
  return (
    <section style={cardLayoutStyle} id="vendor-list">
        {vendors.map(vendor => (
          <div style={cardStyle} key={vendor.id}>
            <h2>{vendor.name}</h2>
            <p>{vendor.description}</p>
            { !!vendor.website ? <a href={vendor.website} target="_blank" style={btnStyle}>Website</a> : null }
            <div style={socialList}>
                { !!vendor.facebook ? <a href={vendor.facebook} target="_blank"><FontAwesomeIcon style={fontAwesome} icon={faFacebook} /></a> : null }
                { !!vendor.instagram ? <a href={vendor.instagram} target="_blank"><FontAwesomeIcon style={fontAwesome} icon={faInstagram} /></a> : null }
                { !!vendor.tiktok ? <a href={vendor.tiktok} target="_blank"><FontAwesomeIcon style={fontAwesome} icon={faTiktok} /></a> : null }
            </div>
          </div>
        ))}
    </section>
  )
}

export default VendorCard;
