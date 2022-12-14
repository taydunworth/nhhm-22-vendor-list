import * as React from "react";
import VendorCard from "../components/vendorCard";


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
      name: "Tay Dunworth",
      id: 57,
      description: "Handmade women's hair accessories specializing in knotted headbands, scrunchies, and embroidered hatss",
      website: "https://www.taydunworth.com",
      facebook: "https://www.facebook.com/taydunworth/",
      instagram: "https://www.instagram.com/taydunworth/",
      tiktok: "https://www.tiktok.com/@taydunworth",
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
      facebook: "https://www.facebook.com/firelightcreationstn",
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
      website: "https://www.facebook.com/designedinink.us",
      facebook: "https://www.facebook.com/groups/872116437256053/user/100077378561867/",
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
      facebook: "https://www.facebook.com/threadbent/",
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
      name: "Made on Maude",
      id: 58,
      description: "Embroidery",
      website: "https://www.madeonmaude.etsy.com",
      facebook: "https://www.facebook.com/groups/2514683528787486",
      instagram: "https://www.instagram.com/madeonmaude",
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
      description: "Our journals begin as discarded books destined for the landfill. We breath new life into them by transforming them into unique journals. These books come from libraries, schools, churches, estates, garage sales and even salvage. Often blemished and scarred, they give character to the story you write within in a way that a store-bought journal cannot. From sketchbooks and recipe keeping to bible study and scrapbooking, there are endless ways for you to enjoy these resurrected treasures.",
      website: "https://www.resurrectedjournals.com",
      facebook: "https://www.facebook.com/resurrectedjournals/",
      instagram: "https://www.instagram.cim/resurrectedjournals"
    },
    ,
    {
      name: "Coffee & Mascara",
      id: 65,
      description: "Bleached and hand dyed graphic apparel and sublimated drinkware",
      website: "https://www.coffeeandmascarabyriss.com",
    },
    {
      name: "Sweet Southern Craft Co.",
      id: 66,
      description: "Artisan soap, bath bombs, shower steamers, shampoo & conditioner bars, and more!",
      website: "http://linktr.ee/sweetsoutherncraftco",
    },
    {
      name: "Tree's Top Creations (Chosen Sisters)",
      id: 67,
      description: "Embroidered earrings, reusable coloring dolls, kitchen scarves",
      facebook: "https://www.facebook.com/treestopcreations",
    },
    {
      name: "Jonesberry Market",
      id: 68,
      description: "Home goods and gifts",
      website: "https://www.etsy.com/jonesberrymarket",
      facebook: "https://www.facebook.com/jonesberrymarket",
      instagram: "https://www.instagram.com/jonesberrymarket",
    },
    {
      name: "Deville & Co.",
      id: 69,
      description: "Hi! My name is Kristi and I’m the owner of Deville & Co.! I love to create with vinyl and macrame! You will find all kinds of crafts that make you happy.  And always remember “You Are Magic”",
      website: "https://www.devilleandco.com",
      facebook: "https://www.facebook.com/devilleandco",
      instagram: "https://www.instagram.com/devilleandco",
      tiktok: "https://www.tiktok.com/@devilleandco",
    },
    {
      name: "Handmade by KM",
      id: 70,
      description: "Clay earrings, beaded bracelets, necklaces",
      website: "https://www.etsy.com/shop/handmadebykaym",
      facebook: "https://www.facebook.com/handmadejewelrybykm",
      instagram: "https://www.instagram.com/handmadeby_kmhandmadeby_km",
    },
    {
      name: "MS Aromatherapy",
      id: 71,
      description: "MS Aromatherapy is a beeswax-based company. We hand-make candles & wax melts.",
      website: "https://www.msaromatherapy.com",
      facebook: "https://www.facebook.com/msaromatherapy",
      instagram: "https://www.instagram.com/msaromatherapy",
      tiktok: "https://www.tiktok.com/@msaromatherapy",
    },
    {
      name: "Jade Circle Creations",
      id: 72,
      description: "Upcycled, one of a kind, planters with drainage holes and attached plates. Crocheted items including flowers, succulents, and scarves.",
      website: "https://www.jadecirclecreations.com",
      instagram: "https://www.instagram.com/jadecirclecreations",
    },
    {
      name: "Tallow and Honey LLC",
      id: 73,
      description: "Tallow based skincare",
      website: "https://www.tallowandhoney.co",
      facebook: "https://www.facebook.com/tallowandhoneyco",
      instagram: "https://www.instagram.com/tallowandhoney_",
      tiktok: "https://www.tiktok.com/@tallowandhoney",
    },
    {
      name: "El Gato Azul, LLC",
      id: 74,
      description: "Graphic tees, appliqués, crewnecks, hats, apparel and gifts",
      facebook: "https://www.facebook.com/elgatoazulmeow",
      instagram: "https://www.instagram.com/elgatoazulmeow",
    },
    {
      name: "Made by Adelaide",
      id: 75,
      description: "Handcrafted jewelry using gemstones, precious metals, hand stamping & more.",
      website: "https://www.etsy.com/shop/MadeByAdelaideTN",
      facebook: "https://www.facebook.com/madebyadelaide",
      instagram: "https://www.instagram.com/__madebyadelaide",
      tiktok: "https://www.tiktok.com/@__madebyadelaide",
    },
    {
      name: "Ink+Ether Studio",
      id: 76,
      description: "I create unique hand-painted jewelry by sealing my original alcohol ink artwork in resin. I'd love to help you find the perfect one-of-a-kind gift for the art and jewelry lovers on your holiday list--or a little treat for yourself! ✨️",
      website: "https://www.inkandetherstudio.com",
      facebook: "https://www.facebook.com/ink.and.ether.studio",
      instagram: "https://www.instagram.com/ink_and_ether_studio",
    },
    {
      name: "Vanessa’s Crochet Creations",
      id: 77,
      description: "I make hand crochet hats, gloves, scarves, etc.",
      website: "https://www.vanessacrochets.com",
      facebook: "https://www.facebook.com/vanessacrochets",
      instagram: "https://www.instagram.com/vanessacrochets",
      tiktok: "https://www.tiktok.com/@vanessacrochets",
    },
    {
      name: "Rew Elliott",
      id: 78,
      description: "Handcrafted, Vintage Inspired Jewelry",
      website: "https://www.etsy.com/shop/RewElliott",
      instagram: "https://www.instagram.com/rew_elliott",
    },
    {
      name: "Beautiful July Designs",
      id: 79,
      description: "Hand sewn/made children’s goods, decor & alterations",
      facebook: "https://www.facebook.com/100076044572689",
    },
    {
      name: "The Mountain Jewel of West Virginia",
      id: 80,
      description: "Handmade jewelry",
      facebook: "https://www.facebook.com/themountainjewel",
      instagram: "https://www.instagram.com/themountainjewel",
      tiktok: "https://www.tiktok.com/@wv_jewelrymaker",
    },
    {
      name: "Wynn & Co",
      id: 81,
      description: "Home Products, Candles and More",
      website: "https://www.thewynnco.com",
      facebook: "https://www.facebook.com/100074367042976",
      instagram: "https://www.instagram.com/the.wynn.co",
    },
    {
      name: "The Shank Shoppe",
      id: 82,
      description: "Home Decor and events",
      website: "https://www.theshankshoppe.com",
      facebook: "https://www.facebook.com/TheShankShoppe",
      instagram: "https://www.instagram.com/The_Shank_Shoppe",
    },
    {
      name: "Style by Steffi",
      id: 83,
      description: "Handmade jewelry",
      website: "https://www.stylebysteffi.com/",
      facebook: "https://www.facebook.com/stylebysteffi",
      instagram: "https://www.instagram.com/style_by_steffi",
    },
    {
      name: "The Pandemic Pup",
      id: 84,
      description: "Unique Pet accessories to spoil your pup with, and pet parent accessories to match!",
      website: "https://www.thepandemicpupshop.com/",
      instagram: "https://www.instagram.com/thepandemicpup.shop",
    },
    {
      name: "A Little Bit of Summer",
      id: 85,
      description: "Acrylic earrings and Christmas ornaments",
      website: "https://www.alittlebitofsummer.etsy.com",
      facebook: "https://www.facebook.com/alittlebitofsummer",
      instagram: "https://www.instagram.com/alittlebitofsummer.etsy",
      tiktok: "https://www.tiktok.com/@alittlebitofsummer",
    },
    {
      name: "CampCo Creations",
      id: 86,
      description: "Macramé hangings, macrame feather hangings, keychains, gnome Christmas ornaments",
      facebook: "https://www.facebook.com/groups/519449159537432",
    },
    {
      name: "Be A Pineapple Scents",
      id: 87,
      description: "Freshies - handmade air fresheners for the car or enclosed spaces at home. We also offer carpet powder and aroma sizzlers!",
      website: "https://www.beapineapplescents.com",
      facebook: "https://www.facebook.com/beapineapplescents",
      instagram: "https://www.instagram.com/beapineapplescents",
      tiktok: "https://www.tiktok.com/@beapineapplescents",
    },
    {
      name: "KnotHead Studios",
      id: 88,
      description: "Seasonal outdoor and home decor handmade from reclaimed wood.",
      website: "https://www.knotheadstudios.com",
      facebook: "https://www.facebook.com/knotheadstudios",
      instagram: "https://www.instagram.com/knothead_studios",
    },
    {
      name: "Making With Grace",
      id: 89,
      description: "Handmade Clay earrings",
      website: "https://www.makingwithgrace.com",
      facebook: "https://www.facebook.com/makingwithgrace",
      instagram: "https://www.instagram.com/makingwithgrace_",
    },
    {
      name: "Woodstock Candle Company",
      id: 90,
      description: "Hand poured wood wick candles",
      website: "https://www.etsy.com/shop/woodstockcandlesnash",
      instagram: "https://www.instagram.com/woodstockcandle_company",
    },
    {
      name: "Fairy Fire Creations",
      id: 91,
      description: "Soy wax candles, completely mutagen-free, in various vessels. We also offer a rescue animal giveback program",
      website: "https://www.fairyfirecandles.com",
      facebook: "https://www.facebook.com/fairyfirecandles",
      instagram: "https://www.instagram.com/fairyfirecandles",
      tiktok: "https://www.tiktok.com/@fairyfirecandles",
    },
    {
      name: "Southern Metalworx",
      id: 92,
      description: "Blacksmith & Metal Artist",
      website: "https://www.southernmetalworx.com",
      facebook: "https://www.facebook.com/southernmetalworx",
      instagram: "https://www.instagram.com/southernmetalworx",
    },
    {
      name: "Flutter-By",
      id: 93,
      description: "Inspirational and positivity t-shirts, hats and jewelry",
    },
    {
      name: "Norman Creations",
      id: 94,
      description: "Homemade wooden,  acrylic  and cabochon jewelry as well as Keychains and bookmarks.",
      facebook: "https://www.facebook.com/Norman-Creations-110463430440650/",
    },
    {
      name: "Acadia Design Co",
      id: 95,
      description: "Designs created to represent mental health",
      website: "https://www.acadiadesignnco.com",
      facebook: "https://www.facebook.com/acadiadesignco",
      instagram: "https://www.instagram.com/acadia.designco",
    },
    {
      name: "Graceful Leo Designs",
      id: 96,
      description: "Handmade earrings, keychains, wall decor and other miscellaneous gifts and trinkets.",
      website: "https://www.gracefulleodesigns.com",
      facebook: "https://www.facebook.com/gracefulleodesigns",
      instagram: "https://www.instagram.com/gracefulleodesigns",
    },
    {
      name: "Simply Stitched WI",
      id: 97,
      description: "I make headbands and scrunchies!",
      website: "https://www.etsy.com/shop/SimplyStitchedWisco",
      facebook: "https://www.facebook.com/simplystitchedwi",
      instagram: "https://www.instagram.com/simplystitchedwi",
    },
    {
      name: "by lisa artistry",
      id: 98,
      description: "hand painted porch boards & seasonal Woodwork. Hot Cocoa Balls, Aprons, pillowcases, painting kits",
      facebook: "https://www.facebook.com/lisabourg3361",
    },
    {
      name: "Sugie Skin Care, LLC.",
      id: 99,
      description: "All natural skin care products",
      website: "https://www.sugieskincare.com",
      facebook: "https://www.facebook.com/sugieskincare",
      instagram: "https://www.instagram.com/sugieskincare",
      tiktok: "https://www.tiktok.com/@sugieskincare",
    },
    {
      name: "Lara Jean Doodles",
      id: 100,
      description: "Illustrator, writer, freelance artist located in Clarksville TN",
      website: "https://www.larajeandoodles.com",
      facebook: "https://www.facebook.com/larajeandoodles",
      instagram: "https://www.instagram.com/larajeandoodles",
      tiktok: "https://www.tiktok.com/@larajeandoodles",
    },
    {
      name: "Nanas Creations in Tn",
      id: 101,
      description: "Tumblers and homemade gifts",
    },
    {
      name: "Till and Prism",
      id: 102,
      description: "Air Plants and Sun Catchers",
      website: "https://www.tillandprism.com/",
      instagram: "https://www.instagram.com/tillandprism",
    },
    {
      name: "B & B Design Studio",
      id: 103,
      description: "Car freshies",
      facebook: "https://www.facebook.com/groups/1399686396712810/",
    },
    {
      name: "Sprigs From Yesteryear",
      id: 104,
      description: "Rustic and Farmhouse home decor",
      facebook: "https://www.facebook.com/people/Sprigs-From-Yesteryear",
    }
]

const cardLayoutStyle = {
    width: "100%",
    display: "block",
}


const VendorCardList = () => {
    const [searchTerm, setSearchTerm] = React.useState("");

    return (
      <div>
        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
        />

        <section style={cardLayoutStyle} id="vendor-list">
          {
            vendors
                .filter(vendor => vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === "")
                // .filter(searched => hasSelectedCategory(searched))
                .map(vendor => 
                
                    <VendorCard key={vendor.id} vendor={vendor} />
                )
          }
        </section>
      </div>
    )
  }
  export default VendorCardList