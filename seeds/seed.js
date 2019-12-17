const db = require('../models');

const glacier_bay = new db.Park({
  name: 'Glacier Bay',
  state: 'Alaska',
  visitors: 597915,
  date: 'December 2, 1980',
  link: 'https://en.wikipedia.org/wiki/Glacier_Bay_National_Park_and_Preserve',
  description: 'Glacier Bay contains tidewater glaciers, mountains, fjords, and a temperate rainforest, and is home to large populations of grizzly bears, mountain goats, whales, seals, and eagles. When discovered in 1794 by George Vancouver, the entire bay was covered by ice, but the glaciers have since receded more than 65 miles (105 km).',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/GlacierBay3.jpg/400px-GlacierBay3.jpg'
})

const katmai = new db.Park({
  name: 'Katmai',
  state: 'Alaska',
  visitors: 37818,
  date: 'December 2, 1980',
  link: 'https://en.wikipedia.org/wiki/Katmai_National_Park_and_Preserve',
  description: 'This park on the Alaska Peninsula protects the Valley of Ten Thousand Smokes, an ash flow formed by the 1912 eruption of Novarupta, as well as Mount Katmai. Over 2,000 grizzly bears come here each year to catch spawning salmon. Other wildlife includes caribou, wolves, moose, and wolverines.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Brown_bears_brooks_falls.jpg/400px-Brown_bears_brooks_falls.jpg'
})

const kenai_fjords = new db.Park({
  name: 'Kenai Fjords',
  state: 'Alaska',
  visitors: 321596,
  date: 'December 2, 1980',
  link: 'https://en.wikipedia.org/wiki/Kenai_Fjords_National_Park',
  description: 'Near Seward on the Kenai Peninsula, this park protects the Harding Icefield and at least 38 glaciers and fjords stemming from it. The only area accessible to the public by road is Exit Glacier; the rest must be viewed or reached from boat tours.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Exit_Glacier_Jul09.JPG/400px-Exit_Glacier_Jul09.JPG'
})

const lake_clark = new db.Park({
  name: 'Lake Clark',
  state: 'Alaska',
  visitors: 14479,
  date: 'December 2, 1980',
  link: 'https://en.wikipedia.org/wiki/Lake_Clark_National_Park_and_Preserve',
  description: 'The region around Lake Clark features four active volcanoes, including Mount Redoubt, as well as an abundance of rivers, glaciers, and waterfalls. Temperate rainforests, a tundra plateau, and three mountain ranges complete the landscape.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Lake_Clark_National_Park.jpg/400px-Lake_Clark_National_Park.jpg'
})

const wrangell_stElias = new db.Park({
  name: 'Wrangell-St. Elias',
  state: 'Alaska',
  visitors: 79450,
  date: 'December 2, 1980',
  link: 'https://en.wikipedia.org/wiki/Wrangell%E2%80%93St._Elias_National_Park_and_Preserve',
  description: 'An over 8 million acres (32,375 km2) plot of mountainous country—the largest national park in the system—protects the convergence of the Alaska, Chugach, and Wrangell-Saint Elias Ranges, which include many of the continent\'s tallest mountains and volcanoes, including the 18,008-foot Mount Saint Elias. More than a quarter of the park is covered with glaciers, including the tidewater Hubbard Glacier, piedmont Malaspina Glacier, and valley Nabesna Glacier.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/MountJarvis.jpg/400px-MountJarvis.jpg'
})

const denali = new db.Park({
  name: 'Denali',
  state: 'Alaska',
  visitors: 594660,
  date: 'February 26, 1917',
  link: 'https://en.wikipedia.org/wiki/Denali_National_Park_and_Preserve',
  description: 'Centered on Denali, the tallest mountain in North America, Denali is serviced by a single road leading to Wonder Lake. Denali and other peaks of the Alaska Range are covered with long glaciers and boreal forest. Wildlife includes grizzly bears, Dall sheep, Porcupine caribou, and wolves.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Mount_McKinley_and_Denali_National_Park_Road_2048px.jpg/400px-Mount_McKinley_and_Denali_National_Park_Road_2048px.jpg'
})

const kobruk = new db.Park({
  name: 'Kobruk Valley', 
  state: 'Alaska',
  date: 'December 2, 1980',
  visitors: 14937,
  link: 'https://en.wikipedia.org/wiki/Kobuk_Valley_National_Park',
  description: 'Kobuk Valley protects 61 miles (98 km) of the Kobuk River and three regions of sand dunes. Created by glaciers, the Great Kobuk, Little Kobuk, and Hunt River Sand Dunes can reach 100 feet (30 m) high and 100 °F (38 °C), and they are the largest dunes in the Arctic. Twice a year, half a million caribou migrate through the dunes and across river bluffs that expose well-preserved ice age fossils.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Agie_River.jpg'
})

const gates_artic = new db.Park({
  name: 'Gates of the Artic',
  state: 'Alaska',
  date: 'December 2, 1980',
  visitors: 9591,
  link: 'https://en.wikipedia.org/wiki/Gates_of_the_Arctic_National_Park_and_Preserve',
  description: 'The countr\'s northernmost park protects an expanse of pure wilderness in Alaska\'s Brooks Range and has no park facilities. The land is home to Alaska Natives who have relied on the land and caribou for 11,000 years.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/GatesofArctic.jpg/400px-GatesofArctic.jpg'
})

const american_samoa = new db.Park({
  name: 'American Somoa',
  state: 'American Somoa',
  date: 'October 31, 1988',
  visitors: 28626,
  link: 'https://en.wikipedia.org/wiki/National_Park_of_American_Samoa',
  description: 'The southernmost national park is on three Samoan islands and protects coral reefs, rainforests, volcanic mountains, and white beaches. The area is also home to flying foxes, brown boobies, sea turtles, and 900 species of fish.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ofu_Beach_NPS.jpg/400px-Ofu_Beach_NPS.jpg'
})

const saguano = new db.Park({
  name: 'Saguano',
  state: 'Arizona',
  date: 'October 14, 1994',
  visitors: 957405,
  link: 'https://en.wikipedia.org/wiki/Saguaro_National_Park',
  description: 'Split into the separate Rincon Mountain and Tucson Mountain districts, this park is evidence that the dry Sonoran Desert is still home to a great variety of life spanning six biotic communities. Beyond the namesake giant saguaro cacti, there are barrel cacti, chollas, and prickly pears, as well as lesser long-nosed bats, spotted owls, and javelinas.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Saguaronationalparl17102008.jpg/400px-Saguaronationalparl17102008.jpg'
})

const petrified_forest = new db.Park({
  name: 'Petrified Forest',
  state: 'Arizona',
  date: 'Decebmer 9, 1962',
  visitors: 644922,
  link: 'https://en.wikipedia.org/wiki/Petrified_Forest_National_Park',
  description: 'This portion of the Chinle Formation has a large concentration of 225-million-year-old petrified wood. The surrounding Painted Desert features eroded cliffs of red-hued volcanic rock called bentonite. Dinosaur fossils and over 350 Native American sites are also protected in this park.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/PAINTED_DESERT_BADLANDS.jpg/400px-PAINTED_DESERT_BADLANDS.jpg'
})

const grand_canyon = new db.Park({
  name: 'Grand Canyon',
  state: 'Arizona',
  date: 'February 26, 1919',
  visitors: 6380495,
  link: 'https://en.wikipedia.org/wiki/Grand_Canyon_National_Park',
  description: 'The Grand Canyon, carved by the mighty Colorado River, is 277 miles (446 km) long, up to 1 mile (1.6 km) deep, and up to 15 miles (24 km) wide. Millions of years of erosion have exposed the multicolored layers of the Colorado Plateau in mesas and canyon walls, visible from both the north and south rims, or from a number of trails that descend into the canyon itself.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/USA_09847_Grand_Canyon_Luca_Galuzzi_2007.jpg/400px-USA_09847_Grand_Canyon_Luca_Galuzzi_2007.jpg'
})

const hot_springs = new db.Park({
  name: 'Hot Springs',
  state: 'Arkansas',
  date: 'March 4, 1921',
  visitors: 1506887,
  link: 'https://en.wikipedia.org/wiki/Hot_Springs_National_Park',
  description: 'Hot Springs was established as a federal reserve by Congress on April 20, 1832—the oldest area managed by the National Park Service. Congress redesignated Hot Springs as a national park on March 4, 1921. Natural hot springs flow out of the Ouachita Mountains, providing opportunities for relaxation in a historic setting. Bathhouse Row preserves numerous examples of 19th-century architecture.[66] Hot Springs is the first national park in a city and was the smallest national park until February 22, 2018 when the Jefferson National Expansion Memorial was redesignated Gateway Arch National Park.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hots_Springs_National_Park_aerial.jpg/400px-Hots_Springs_National_Park_aerial.jpg'
})

const death_valley = new db.Park({
  name: 'Death Valley',
  state: 'California',
  date: 'October 31, 1994',
  visitors: 1678660,
  link: 'https://en.wikipedia.org/wiki/Death_Valley_National_Park',
  description: 'Death Valley is the hottest, lowest, and driest place in the United States, with daytime temperatures that have exceeded 130 °F (54 °C). The park protects Badwater Basin and its vast salt flats located at the lowest elevation in North America, −282 ft (−86 m).[34] The park also protects canyons, badlands, sand dunes, mountain ranges, historic mines, springs, and more than 1000 species of plants which grow in this geologic graben.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mesquite_Sand_Dunes_in_Death_Valley.jpg/400px-Mesquite_Sand_Dunes_in_Death_Valley.jpg'
})

const joshua_tree = new db.Park({
  name: 'Joshua Tree',
  state: 'California',
  date: 'October 31, 1994',
  visitors: 2942382,
  link: 'https://en.wikipedia.org/wiki/Joshua_Tree_National_Park',
  description: 'Covering large areas of the Colorado and Mojave Deserts and the Little San Bernardino Mountains, this desert landscape is populated by vast stands of Joshua trees. Large changes in elevation reveal various contrasting environments including bleached sand dunes, dry lakes, rugged mountains, and maze-like clusters of monzogranite monoliths.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Joshua_Tree_-_Rock_formation_in_Real_Hidden_Valley_1.jpg/400px-Joshua_Tree_-_Rock_formation_in_Real_Hidden_Valley_1.jpg'
})

const channel_islands = new db.Park({
  name: 'Channel Islands',
  state: 'California',
  date: 'March 5, 1980',
  visitors: 366250,
  link: 'https://en.wikipedia.org/wiki/Channel_Islands_National_Park',
  description: 'Five of the eight Channel Islands are protected, and half of the park\'s area is underwater. The islands have a unique Mediterranean ecosystem originally settled by the Chumash people. They are home to over 2,000 species of land plants and animals, and 145 are unique to them, including the island fox. Ferry services offer transportation to the islands from the mainland.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Channel_Islands_National_Park.jpg/400px-Channel_Islands_National_Park.jpg'
})

const sequoia = new db.Park({
  name: 'Sequoia',
  state: 'California',
  date: 'September 25, 1890',
  visitors: 1229594,
  link: 'https://en.wikipedia.org/wiki/Sequoia_National_Park',
  description: 'This park protects the Giant Forest, which boasts some of the world\'s largest trees, the General Sherman being the largest measured tree in the park. Other features include over 240 caves, a long segment of the Sierra Nevada including the tallest mountain in the contiguous United States, and Moro Rock, a large granite dome.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Giant_Forest.jpg/400px-Giant_Forest.jpg'
})

const pinnacles = new db.Park({
  name: 'Pinnacles',
  state: 'California',
  date: 'January 10, 2013',
  visitors: 222152,
  link: 'https://en.wikipedia.org/wiki/Pinnacles_National_Park',
  description: '	Named for the eroded leftovers of a portion of an extinct volcano, the park\'s massive black and gold monoliths of andesite and rhyolite are a popular destination for rock climbers. Hikers have access to trails crossing the Coast Range wilderness. The park is home to the endangered California condor (Gymnogyps californianus) and one of the few locations in the world where these extremely rare birds can be seen in the wild. Pinnacles also supports a dense population of prairie falcons, and more than 13 species of bat which populate its talus caves.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Pinnacles_National_Park.jpg/400px-Pinnacles_National_Park.jpg'
})

const kings_canyon = new db.Park({
  name: 'Kings Canyon',
  state: 'California',
  date: 'March 4, 1940',
  visitors: 699023,
  link: 'https://en.wikipedia.org/wiki/Kings_Canyon_National_Park',
  description: 'Home to several giant sequoia groves and the General Grant Tree, the world\'s second largest measured tree, this park also features part of the Kings River, sculptor of the dramatic granite canyon that is its namesake, and the San Joaquin River, as well as Boyden Cave. Although Kings Canyon National Park was designated as such in 1940, it subsumed General Grant National Park, which had been established on October 1, 1890 as the United States\' fourth national park.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/KingsCanyonNP.JPG/400px-KingsCanyonNP.JPG'
})

const yosemite = new db.Park({
  name: 'Yosemite',
  state: 'California',
  date: 'October 1, 1890',
  visitors: 4009436,
  link: 'https://en.wikipedia.org/wiki/Yosemite_National_Park',
  description: 'Yosemite features sheer granite cliffs, exceptionally tall waterfalls, and old-growth forests at a unique intersection of geology and hydrology. Half Dome and El Capitan rise from the park\'s centerpiece, the glacier-carved Yosemite Valley, and from its vertical walls drop Yosemite Falls, one of North America\'s tallest waterfalls at 2,425 feet (739 m) high. Three giant sequoia groves, along with a pristine wilderness in the heart of the Sierra Nevada, are home to a wide variety of rare plant and animal species.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/YosemitePark2_amk.jpg/400px-YosemitePark2_amk.jpg'
})

const lassen_volcanic = new db.Park({
  name: 'Lassen Volcanic',
  state: 'California',
  date: 'August 9, 1916',
  visitors: 499435,
  link: 'https://en.wikipedia.org/wiki/Lassen_Volcanic_National_Park',
  description: 'Lassen Peak, the largest lava dome volcano in the world, is joined by all three other types of volcanoes in this park: shield, cinder cone, and composite. Though Lassen itself last erupted in 1915, most of the rest of the park is continuously active. Numerous hydrothermal features, including fumaroles, boiling pools, and bubbling mud pots, are heated by molten rock from beneath the peak.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lake_Helen_-_Flickr_-_Joe_Parks.jpg/400px-Lake_Helen_-_Flickr_-_Joe_Parks.jpg'
})

const redwood = new db.Park({
  name: 'Redwood',
  state: 'California',
  date: 'October 2, 1968',
  visitors: 482536,
  link: 'https://en.wikipedia.org/wiki/Redwood_National_and_State_Parks',
  description: 'This park and the co-managed state parks protect almost half of all remaining coastal redwoods, the tallest trees on earth. There are three large river systems in this very seismically active area, and 37 miles (60 km) of protected coastline reveal tide pools and seastacks. The prairie, estuary, coast, river, and forest ecosystems contain a wide variety of animal and plant species.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Redwood_National_Park%2C_fog_in_the_forest.jpg/400px-Redwood_National_Park%2C_fog_in_the_forest.jpg'
})

const mesa_verde = new db.Park({
  name: 'Mesa Verde',
  state: 'Colorado',
  date: 'June 29, 1906',
  visitors: 563420,
  link: 'https://en.wikipedia.org/wiki/Mesa_Verde_National_Park',
  description: 'This area constitutes over 4,000 archaeological sites of the Ancestral Puebloan people, who lived here and elsewhere in the Four Corners region for at least 700 years. Cliff dwellings built in the 12th and 13th centuries include Cliff Palace, which has 150 rooms and 23 kivas, and the Balcony House, with its many passages and tunnels.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mesa_Verde_National_Park_Cliff_Palace_Right_Part_2006_09_12.jpg/400px-Mesa_Verde_National_Park_Cliff_Palace_Right_Part_2006_09_12.jpg'
})

const great_sand_dunes = new db.Park({
  name: 'Great Sand Dunes',
  state: 'Colorado',
  date: 'September 13, 2004',
  visitors: 442905,
  link: 'https://en.wikipedia.org/wiki/Great_Sand_Dunes_National_Park_and_Preserve',
  description: 'The tallest sand dunes in North America, up to 750 feet (230 m) tall, were formed by deposits of the ancient Rio Grande in the San Luis Valley. Abutting a variety of grasslands, shrublands, and wetlands, the park also has alpine lakes, six 13,000-foot mountains, and old-growth forests.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Coloradodunes.jpg/400px-Coloradodunes.jpg'
})

const black_canyon = new db.Park({
  name: 'Black Canyon',
  state: 'Colorado',
  date: 'October 21, 1999',
  visitors: 308962,
  link: 'https://en.wikipedia.org/wiki/Black_Canyon_of_the_Gunnison_National_Park',
  description: 'The park protects a quarter of the Gunnison River, which slices sheer canyon walls from dark Precambrian-era rock. The canyon features some of the steepest cliffs and oldest rock in North America, and is a popular site for river rafting and rock climbing. The deep, narrow canyon is composed of gneiss and schist which appears black when in shadow.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Black_canyon_gunnison_Colorado.jpg/400px-Black_canyon_gunnison_Colorado.jpg'
})

const rocky_mountain = new db.Park({
  name: 'Rocky Mountain',
  state: 'Colorado',
  date: 'January 26, 1915',
  visitors: 4950493,
  link: 'https://en.wikipedia.org/wiki/Rocky_Mountain_National_Park',
  description: 'Bisected north to south by the Continental Divide, this portion of the Rockies has ecosystems varying from over 150 riparian lakes to montane and subalpine forests to treeless alpine tundra. Wildlife including mule deer, bighorn sheep, black bears, and cougars inhabit its igneous mountains and glacial valleys. Longs Peak, a classic Colorado fourteener, and the scenic Bear Lake are popular destinations, as well as the historic Trail Ridge Road, which reaches an elevation of more than 12,000 feet (3,700 m).',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Bierstadt_Lake%2C_Rocky_Mountain_National_Park%2C_USA.jpg/400px-Bierstadt_Lake%2C_Rocky_Mountain_National_Park%2C_USA.jpg'
})

const dry_tortugas = new db.Park({
  name: 'Dry Tortugas',
  state: 'Florida',
  date: 'October 26, 1992',
  visitors: 56810,
  link: 'https://en.wikipedia.org/wiki/Dry_Tortugas_National_Park',
  description: 'The islands of the Dry Tortugas, at the westernmost end of the Florida Keys, are the site of Fort Jefferson, a Civil War-era fort that is the largest masonry structure in the Western Hemisphere. The park is home to undisturbed coral reefs and shipwrecks, and is only accessible by plane or boat.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Fort-Jefferson_Dry-Tortugas.jpg/400px-Fort-Jefferson_Dry-Tortugas.jpg'
})

const everglades = new db.Park({
  name: 'Everglades',
  state: 'Florida',
  date: 'May 30, 1934',
  visitors: 597124,
  link: 'https://en.wikipedia.org/wiki/Everglades_National_Park',
  description: 'The Everglades are the largest tropical wilderness in the United States. This mangrove and tropical rainforest ecosystem and marine estuary is home to 36 protected species, including the Florida panther, American crocodile, and West Indian manatee. Some areas have been drained and developed; restoration projects aim to restore the ecology.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Everglades_National_Park_cypress.jpg/400px-Everglades_National_Park_cypress.jpg'
})

const biscayne = new db.Park({
  name: 'Biscayne',
  state: 'Florida',
  date: 'June 28, 1980',
  visitors: 469253,
  link: 'https://en.wikipedia.org/wiki/Biscayne_National_Park',
  description: 'Located in Biscayne Bay, this park at the north end of the Florida Keys has four interrelated marine ecosystems: mangrove forest, the Bay, the Keys, and coral reefs. Threatened animals include the West Indian manatee, American crocodile, various sea turtles, and peregrine falcon.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Biscayne_NP_snorkeling.jpg/400px-Biscayne_NP_snorkeling.jpg'
})

const hawaii_volcanos = new db.Park({
  name: 'Hawai\i Volcanos',
  state: 'Hawaii',
  date: 'August 1, 1916',
  visitors: 1116891,
  link: 'https://en.wikipedia.org/wiki/Hawai%CA%BBi_Volcanoes_National_Park',
  description: 'This park on the Big Island protects the Kīlauea and Mauna Loa volcanoes, two of the world\'s most active geological features. Diverse ecosystems range from tropical forests at sea level to barren lava beds at more than 13,000 feet (4,000 m).',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Puu_Oo_cropped.jpg/400px-Puu_Oo_cropped.jpg'
})

const haleakala = new db.Park({
  name: 'Haleakalā',
  state: 'Hawaii',
  date: 'August 1, 1916',
  visitors: 1044084,
  link: 'https://en.wikipedia.org/wiki/Haleakal%C4%81_National_Park',
  description: 'The Haleakalā volcano on Maui features a very large crater with numerous cinder cones, Hosmer\'s Grove of alien trees, the Kipahulu section\'s scenic pools of freshwater fish, and the native Hawaiian goose. The park protects the greatest number of endangered species within a U.S. National Park.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Haleakala_Crater.jpg/400px-Haleakala_Crater.jpg'
})

const indiana_dunes = new db.Park({
  name: 'Indiana Dunes',
  state: 'Indiana',
  date: 'February 15, 2019',
  visitors: 1756079,
  link: 'https://en.wikipedia.org/wiki/Indiana_Dunes_National_Park',
  description: 'Previously designated a national lakeshore, the dunes run for nearly 25 miles (40 km) along the southern shore of Lake Michigan. The sandy beach adjoins a grassy prairie, bog, and wetlands home to over 2,000 species.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/2010-11-26_3060x2040_portage_indiana_dunes.jpg/400px-2010-11-26_3060x2040_portage_indiana_dunes.jpg'
})

const mammoth_cave = new db.Park({
  name: 'Mammoth Cave',
  state: 'Kentucky',
  date: 'July 1, 1941',
  visitors: 533206,
  link: 'https://en.wikipedia.org/wiki/Mammoth_Cave_National_Park',
  description: 'With more than 400 miles (640 km) of passageways explored, Mammoth Cave is the world\'s longest known cave system. Subterranean wildlife includes eight bat species, Kentucky cave shrimp, Northern cavefish, and cave salamanders. Above ground, the park provides recreation on the Green River, 70 miles of hiking trails, and plenty of sinkholes and springs.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Mammoth_Cave_National_Park_007.jpg'
})

const acadia = new db.Park({
  name: 'Acadia',
  state: 'Maine',
  date: 'February 26, 1919',
  visitors: 3573575,
  link: 'https://en.wikipedia.org/wiki/Acadia_National_Park',
  description: 'Covering most of Mount Desert Island and other coastal islands, Acadia features the tallest mountain on the Atlantic coast of the United States, granite peaks, ocean shoreline, woodlands, and lakes. There are freshwater, estuary, forest, and intertidal habitats.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bass_Harbor_Head_Light_Station_2016.jpg/400px-Bass_Harbor_Head_Light_Station_2016.jpg'
})

const isle_royale = new db.Park({
  name: 'Isle Royale',
  state: 'Michigan',
  date: 'April 3, 1940',
  visitors: 25798,
  link: 'https://en.wikipedia.org/wiki/Isle_Royale_National_Park',
  description: 'The largest island in Lake Superior is a place of isolation and wilderness. Along with its many shipwrecks, waterways, and hiking trails, the park also includes over 400 smaller islands within 4.5 miles (7.2 km) of its shores. There are only 20 mammal species on the entire island, though the relationship between its wolf and moose populations is especially unique.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/IsleRoyalePlane.jpg/400px-IsleRoyalePlane.jpg'
})

const voyageurs = new db.Park({
  name: 'Voyageurs',
  state: 'Minnesota',
  date: 'January 8, 1971',
  visitors: 239656,
  link: 'https://en.wikipedia.org/wiki/Voyageurs_National_Park',
  description: 'This park protecting four lakes near the Canada–US border is a site for canoeing, kayaking, and fishing. The park also preserves a history populated by Ojibwe Native Americans, French fur traders called voyageurs, and gold miners. Formed by glaciers, the region features tall bluffs, rock gardens, islands, bays, and several historic buildings.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Voyageurs_National_Park.jpg/400px-Voyageurs_National_Park.jpg'
})

const gateway_arch = new db.Park({
  name: 'Gateway Arch',
  state: 'Missouri',
  date: 'February 22, 2018',
  visitors: 2016180,
  link: 'https://en.wikipedia.org/wiki/Gateway_Arch_National_Park',
  description: 'The Gateway Arch is a 630-foot (192 m) (both high and wide) catenary arch built to commemorate the Lewis and Clark Expedition, initiated by Thomas Jefferson, and the subsequent westward expansion of the country. The nearby Old Courthouse, across a greenway to the west of the arch, was the first site of the Dred Scott case about slavery. A museum, located in the underground visitor center below the arch, describes the arch\'s construction and the country\'s westward expansion.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/St_Louis_night_expblend.jpg/400px-St_Louis_night_expblend.jpg'
})

const glacier = new db.Park({
  name: 'Glacier',
  state: 'Montana',
  date: 'May 11, 1910',
  visitors: 2965309,
  link: 'https://en.wikipedia.org/wiki/Glacier_National_Park_(U.S.)',
  description: 'The U.S. half of Waterton-Glacier International Peace Park, this park includes 26 glaciers and 130 named lakes surrounded by Rocky Mountain peaks. There are historic hotels and a landmark road called the Going-to-the-Sun Road in this region of rapidly receding glaciers. The local mountains, formed by an overthrust, expose Paleozoic fossils including trilobites, mollusks, giant ferns and dinosaurs.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/St_Mary_Lake_-_Wild_goose_Island.jpg/400px-St_Mary_Lake_-_Wild_goose_Island.jpg'
})

const great_basin = new db.Park({
  name: 'Great Basin',
  state: 'Nevada',
  date: 'October 27, 1986',
  visitors: 153094,
  link: 'https://en.wikipedia.org/wiki/Great_Basin_National_Park',
  description: 'Based around Nevada\'s second tallest mountain, Wheeler Peak, Great Basin National Park contains 5,000-year-old bristlecone pines, a rock glacier, and the limestone Lehman Caves. Due to its remote location, the park has some of the country\'s darkest night skies. Wildlife includes the Townsend\'s big-eared bat, pronghorn, and Bonneville cutthroat trout.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Prometheus_Wheeler.jpg/400px-Prometheus_Wheeler.jpg'
})

const carlsbad_caverns = new db.Park({
  name: 'Carlsbad Caverns',
  state: 'New Mexico',
  date: 'May 14, 1930',
  visitors: 465912,
  link: 'https://en.wikipedia.org/wiki/Carlsbad_Caverns_National_Park',
  description: 'Carlsbad Caverns has 117 caves, the longest of which is over 120 miles (190 km) long. The Big Room is almost 4,000 feet (1,200 m) long, and the caves are home to over 400,000 Mexican free-tailed bats and sixteen other species. Above ground are the Chihuahuan Desert and Rattlesnake Springs.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Carlsbad_Interior_Formations.jpg/400px-Carlsbad_Interior_Formations.jpg'
})

const theodore_roosevelt = new db.Park({
  name: 'Theodore Roosevelt',
  state: 'North Dakota',
  date: 'November 10, 1978',
  visitors: 749369,
  link: 'https://en.wikipedia.org/wiki/Theodore_Roosevelt_National_Park',
  description: 'This region that enticed and influenced President Theodore Roosevelt consists of a park of three units in the northern badlands. Besides Roosevelt\'s historic cabin, there are numerous scenic drives and backcountry hiking opportunities. Wildlife includes American bison, pronghorn, bighorn sheep, and wild horses.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Theodore_Roosevelt_National_Park.jpg/400px-Theodore_Roosevelt_National_Park.jpg'
})

const cuyahoga_valley = new db.Park({
  name: 'Cuyahoga Park',
  state: 'Ohio',
  date: 'October 11, 2000',
  visitors: 2096053,
  link: 'https://en.wikipedia.org/wiki/Cuyahoga_Valley_National_Park',
  description: 'This park along the Cuyahoga River has waterfalls, hills, trails, and exhibits on early rural living. The Ohio and Erie Canal Towpath Trail follows the Ohio and Erie Canal, where mules towed canal boats. The park has numerous historic homes, bridges, and structures, and also offers a scenic train ride.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cuyahoga_Valley_National_Park_03.jpg/400px-Cuyahoga_Valley_National_Park_03.jpg' 
})

const crater_lake = new db.Park({
  name: 'Crater Lake',
  state: 'Oregon',
  date: 'May 22, 1902',
  visitors: 720695,
  link: 'https://en.wikipedia.org/wiki/Crater_Lake_National_Park',
  description: 'Crater Lake lies in the caldera of an ancient volcano called Mount Mazama that collapsed 7,700 years ago. The lake is the deepest in the United States and is noted for its vivid blue color and water clarity. Wizard Island and the Phantom Ship are more recent volcanic formations within the caldera. As the lake has no inlets or outlets, the lake is replenished only by precipitation.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Crater_lake_oregon.jpg/400px-Crater_lake_oregon.jpg'
})

const congaree = new db.Park({
  name: 'Congaree',
  state: 'South Carolina',
  date: 'November 10, 2003',
  visitors: 145929,
  link: 'https://en.wikipedia.org/wiki/Congaree_National_Park',
  description: 'On the Congaree River, this park is the largest portion of old-growth floodplain forest left in North America. Some of the trees are the tallest in the eastern United States. An elevated walkway called the Boardwalk Loop guides visitors through the swamp.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bald_cypress_and_creek_%287166139814%29.jpg/400px-Bald_cypress_and_creek_%287166139814%29.jpg'
})

const wind_cave = new db.Park({
  name: 'Wind Park',
  state: 'South Dakota',
  date: 'January 9, 1903',
  visitors: 656397,
  link: 'https://en.wikipedia.org/wiki/Wind_Cave_National_Park',
  description: 'Wind Cave is distinctive for its calcite fin formations called boxwork, a unique formation rarely found elsewhere, and needle-like growths called frostwork. The cave is one of the longest and most complex caves in the world. Above ground is a mixed-grass prairie with animals such as bison, black-footed ferrets, and prairie dogs, and ponderosa pine forests that are home to cougars and elk.[106] The cave is culturally significant to the Lakota people as the site "from which Wakan Tanka, the Great Mystery, sent the buffalo out into their hunting grounds."',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Wind_Cave_lower.jpg/400px-Wind_Cave_lower.jpg'
})

const badlands = new db.Park({
  name: 'Badlands',
  state: 'South Dakota',
  date: 'November 10, 1978',
  visitors: 1008942,
  link: 'https://en.wikipedia.org/wiki/Badlands_National_Park',
  description: 'The Badlands are a collection of buttes, pinnacles, spires, and mixed-grass prairies. The White River Badlands contain the largest assemblage of known late Eocene and Oligocene mammal fossils. The wildlife includes bison, bighorn sheep, black-footed ferrets, and prairie dogs.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/BadlandsView3.jpg/400px-BadlandsView3.jpg'
})

const great_smoky_moutains = new db.Park({
  name: 'Great Smoky Moutains',
  state: 'Tennessee',
  date: 'June 15, 1934',
  visitors: 11421200,
  link: 'https://en.wikipedia.org/wiki/Great_Smoky_Mountains_National_Park',
  description: 'The Great Smoky Mountains, part of the Appalachian Mountains, span a wide range of elevations, making them home to over 400 vertebrate species, 100 tree species, and 5000 plant species. Hiking is the park\'s main attraction, with over 800 miles (1,300 km) of trails, including 70 miles (110 km) of the Appalachian Trail. Other activities include fishing, horseback riding, and touring nearly 80 historic structures.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Fall_at_Oconaluftee_Overlook.JPG/400px-Fall_at_Oconaluftee_Overlook.JPG'
})

const big_bend = new db.Park({
  name: 'Big Bend',
  state: 'Texas',
  date: 'June 12, 1944',
  visitors: 440091,
  link: 'https://en.wikipedia.org/wiki/Big_Bend_National_Park',
  description: 'Named for the prominent bend in the Rio Grande along the U.S.–Mexico border, this park encompasses a large and remote part of the Chihuahuan Desert. Its main attraction is backcountry recreation in the arid Chisos Mountains and in canyons along the river. A wide variety of Cretaceous and Tertiary fossils as well as cultural artifacts of Native Americans also exist within its borders.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Big_Bend_National_Park_PB112573.jpg/400px-Big_Bend_National_Park_PB112573.jpg'
})

const guadalupe_mountains = new db.Park({
  name: 'Guadalupe Mountains',
  state: 'Texas',
  date: 'October 15, 1966',
  visitors: 172347,
  link: 'https://en.wikipedia.org/wiki/Guadalupe_Mountains_National_Park',
  description: 'This park contains Guadalupe Peak, the highest point in Texas, as well as the scenic McKittrick Canyon filled with bigtooth maples, a corner of the arid Chihuahuan Desert, and a fossilized coral reef from the Permian era.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/West_face_of_Guadalupe_Mountains_at_sunset_2006.jpg/400px-West_face_of_Guadalupe_Mountains_at_sunset_2006.jpg'
})

const virgin_islands = new db.Park({
  name: 'Virgin Islands',
  state: 'U.S. Virgin Islands',
  date: 'August 2, 1956',
  visitors: 112287,
  link: 'https://en.wikipedia.org/wiki/Virgin_Islands_National_Park',
  description: 'This island park on Saint John preserves Taíno archaeological sites and the ruins of sugar plantations from Columbus\'s time, as well as all the natural environs. Surrounding the pristine beaches are mangrove forests, seagrass beds, and coral reefs.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/St_John_Trunk_Bay_1.jpg/400px-St_John_Trunk_Bay_1.jpg'
})

const zion = new db.Park({
  name: 'Zion',
  state: 'Utah',
  date: 'November 19, 1919',
  visitors: 4320033,
  link: 'https://en.wikipedia.org/wiki/Zion_National_Park',
  description: 'Located at the junction of the Colorado Plateau, Great Basin, and Mojave Desert, this park contains sandstone features such as mesas, rock towers, and canyons, including the Virgin River Narrows. The various sandstone formations and the forks of the Virgin River create a wilderness divided into four ecosystems: desert, riparian, woodland, and coniferous forest.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Angels_Landing.jpg/400px-Angels_Landing.jpg'
})

const bryce_canyon = new db.Park({
  name: 'Bryce Canyon',
  state: 'Utah',
  date: 'February 25, 1928',
  visitors: 2679478,
  link: 'https://en.wikipedia.org/wiki/Bryce_Canyon_National_Park',
  description: 'Bryce Canyon is a geological amphitheater on the Paunsaugunt Plateau with hundreds of tall, multicolored sandstone hoodoos formed by erosion. The region was originally settled by Native Americans and later by Mormon pioneers.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bryce_Canyon_Hoodoos_Amphitheater.jpg/400px-Bryce_Canyon_Hoodoos_Amphitheater.jpg'
})

const canyonlands = new db.Park({
  name: 'Canyonlands',
  state: 'Utah',
  date: 'September 12, 1964',
  visitors: 739449,
  link: 'https://en.wikipedia.org/wiki/Canyonlands_National_Park',
  description: 'This landscape was eroded into a maze of canyons, buttes, and mesas by the combined efforts of the Colorado River, Green River, and their tributaries, which divide the park into three districts. The park also contains rock pinnacles and arches, as well as artifacts from Ancient Pueblo peoples.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Canyonlands_National_Park%E2%80%A6Needles_area_%286294480744%29.jpg/400px-Canyonlands_National_Park%E2%80%A6Needles_area_%286294480744%29.jpg'
})

const capitol_reef = new db.Park({
  name: 'Capitol Reef',
  state: 'Utah',
  date: 'December 18, 1971',
  visitors: 1227627,
  link: 'https://en.wikipedia.org/wiki/Capitol_Reef_National_Park',
  description: 'The park\'s Waterpocket Fold is a 100-mile (160 km) monocline that exhibits the earth\'s diverse geologic layers. Other natural features include monoliths, cliffs, and sandstone domes shaped like the United States Capitol.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cassidy_Arch%2C_Capitol_Reef_National_Park.JPG/400px-Cassidy_Arch%2C_Capitol_Reef_National_Park.JPG'
})

const arches = new db.Park({
  name: 'Arches',
  state: 'Utah',
  date: 'November 12, 1971',
  visitors: 1663557,
  link: 'https://en.wikipedia.org/wiki/Arches_National_Park',
  description: 'This site features more than 2,000 natural sandstone arches, with some of the most popular arches in the park being Delicate Arch, Landscape Arch and Double Arch. Millions of years of erosion have created these structures located in a desert climate where the arid ground has life-sustaining biological soil crusts and potholes that serve as natural water-collecting basins. Other geologic formations include stone pinnacles, fins, and balancing rocks.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Delicatearch1.jpg/400px-Delicatearch1.jpg'
})

const shenandoah = new db.Park({
  name: 'Shenandoah',
  state: 'Virginia',
  date: 'December 26, 1935',
  visitors: 1264880,
  link: 'https://en.wikipedia.org/wiki/Shenandoah_National_Park',
  description: 'Shenandoah\'s Blue Ridge Mountains are covered by hardwood forests that teem with a wide variety of wildlife. The Skyline Drive and Appalachian Trail run the entire length of this narrow park, along with more than 500 miles (800 km) of hiking trails passing scenic overlooks and cataracts of the Shenandoah River.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Early_Fall_at_Dark_Hollow_Falls_%2822028259442%29.jpg/400px-Early_Fall_at_Dark_Hollow_Falls_%2822028259442%29.jpg'
})

const mount_rainier = new db.Park({
  name: 'Mount Rainier',
  state: 'Washington',
  date: 'March 2, 1899',
  visitors: 1518491,
  link: 'https://en.wikipedia.org/wiki/Mount_Rainier_National_Park',
  description: 'Mount Rainier, an active stratovolcano, is the most prominent peak in the Cascades and is covered by 26 named glaciers including Carbon Glacier and Emmons Glacier, the largest in the contiguous United States. The mountain is popular for climbing, and more than half of the park is covered by subalpine and alpine forests and meadows seasonally in bloom with wildflowers. Paradise on the south slope is the snowiest place on Earth where snowfall is measured regularly. The Longmire visitor center is the start of the Wonderland Trail, which encircles the mountain.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mount_Rainier_from_west.jpg/400px-Mount_Rainier_from_west.jpg'
})

const olympic = new db.Park({
  name: 'Olympic',
  state: 'Washington',
  date: 'June 29, 1938',
  visitors: 3104455,
  link: 'https://en.wikipedia.org/wiki/Olympic_National_Park',
  description: 'Situated on the Olympic Peninsula, this park includes a wide range of ecosystems from Pacific shoreline to temperate rainforests to the alpine slopes of the Olympic Mountains, the tallest of which is Mount Olympus. The Hoh Rainforest and Quinault Rainforest are the wettest area in the contiguous United States, with the Hoh receiving an average of almost 12 ft (3.7 m) of rain every year.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Acer_macrophyllum_in_Hoh_Rain_Forest.jpg/400px-Acer_macrophyllum_in_Hoh_Rain_Forest.jpg'
})

const north_cascades = new db.Park({
  name: 'North Cascades',
  state: 'Washington',
  date: 'October 2, 1968',
  visitors: 30085,
  link: 'https://en.wikipedia.org/wiki/North_Cascades_National_Park',
  description: 'This complex includes two geographically distinct units of the national park, as well as Ross Lake and Lake Chelan National Recreation Areas. The highly glaciated mountains are spectacular examples of Cascade geology. Popular hiking and climbing areas include Cascade Pass, Mount Shuksan, Mount Triumph, and Eldorado Peak.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Cascade_pass.jpg/400px-Cascade_pass.jpg'
})

const yellowstone = new db.Park({
  name: 'Yellowstone',
  state: 'Wyoming',
  date: 'March 1, 1872',
  visitors: 4115000,
  link: 'https://en.wikipedia.org/wiki/Yellowstone_National_Park',
  description: 'Situated on the Yellowstone Caldera, the park has an expansive network of geothermal areas including boiling mud pots, vividly colored hot springs such as Grand Prismatic Spring, and regularly erupting geysers, the best-known being Old Faithful. The yellow-hued Grand Canyon of the Yellowstone River contains several high waterfalls, and four mountain ranges traverse the park. More than 60 mammal species including gray wolves, grizzly bears, black bears, lynxes, bison, and elk, make this park one of the best wildlife viewing spots in the country.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Grand_Prismatic_Spring_and_Midway_Geyser_Basin_from_above.jpg/400px-Grand_Prismatic_Spring_and_Midway_Geyser_Basin_from_above.jpg'
})

const grand_teton = new db.Park({
  name: 'Grand Teton',
  state: 'Wyoming',
  date: 'February 26, 1929',
  visitors: 3491151,
  link: 'https://en.wikipedia.org/wiki/Grand_Teton_National_Park',
  description: 'Grand Teton is the tallest mountain in the Teton Range. The park\'s historic Jackson Hole and reflective piedmont lakes teem with endemic wildlife, with a backdrop of craggy mountains that rise abruptly from the sage-covered valley.',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Teton_Range_from_Glacier_View_Turnout-closeup.JPG/400px-Teton_Range_from_Glacier_View_Turnout-closeup.JPG'
})

module.exports = [
  glacier_bay,
  katmai,
  kenai_fjords,
  lake_clark,
  wrangell_stElias,
  denali,
  kobruk,
  gates_artic,
  american_samoa,
  saguano,
  petrified_forest,
  grand_canyon,
  hot_springs,
  death_valley,
  joshua_tree,
  channel_islands,
  sequoia,
  pinnacles,
  kings_canyon,
  yosemite,
  lassen_volcanic,
  redwood,
  mesa_verde,
  great_sand_dunes,
  black_canyon,
  rocky_mountain,
  dry_tortugas,
  everglades,
  biscayne,
  hawaii_volcanos,
  haleakala,
  indiana_dunes,
  mammoth_cave,
  acadia,
  isle_royale,
  voyageurs,
  gateway_arch,
  glacier,
  great_basin,
  carlsbad_caverns,
  theodore_roosevelt,
  cuyahoga_valley,
  crater_lake,
  wind_cave,
  badlands,
  great_smoky_moutains,
  big_bend,
  guadalupe_mountains,
  virgin_islands,
  zion,
  canyonlands,
  capitol_reef,
  shenandoah,
  mount_rainier,
  olympic,
  north_cascades,
  yellowstone,
  grand_teton,
  congaree,
  bryce_canyon,
  arches
]