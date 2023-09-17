import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  VStack,
  Icon,
  Text,
  Button,
  Center,
  Show,
  AspectRatio,
} from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { iconMap } from "./PlatformIconList";
import VideosCarousel from "./VideosCarousel";
import { Carousel } from "react-responsive-carousel";

//   pc: FaWindows,
//   playstation: FaPlaystation,
//   xbox: FaXbox,
//   nintendo: SiNintendo,
//   mac: FaApple,
//   linux: FaLinux,
//   android: FaAndroid,
//   ios: MdPhoneIphone,
//   web: BsGlobe,
// };

function DetailsPage() {
  const [showText, setShowText] = useState(false);
  const { gameId } = useParams();
  const game = {
    id: 3498,
    slug: "grand-theft-auto-v",
    name: "Grand Theft Auto V",
    name_original: "Grand Theft Auto V",
    description:
      "<p>Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. <br />\nSimultaneous storytelling from three unique perspectives: <br />\nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. <br />\nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.</p>\n<p>Español<br />\nRockstar Games se hizo más grande desde su entrega anterior de la serie. Obtienes la construcción del mundo complicada y realista de Liberty City de GTA4 en el escenario de Los Santos, un viejo favorito de los fans, GTA San Andreas. 561 vehículos diferentes (incluidos todos los transportes que puede operar) y la cantidad aumenta con cada actualización.<br />\nNarración simultánea desde tres perspectivas únicas:<br />\nSigue a Michael, ex-criminal que vive su vida de ocio lejos del pasado, Franklin, un niño que busca un futuro mejor, y Trevor, el pasado exacto del que Michael está tratando de huir.<br />\nGTA Online proporcionará muchos desafíos adicionales incluso para los jugadores experimentados, recién llegados del modo historia. Ahora tendrás otros jugadores cerca que pueden ayudarte con la misma probabilidad que arruinar tu misión. Los jugadores pueden experimentar todas las mecánicas de GTA actualizadas a través del personaje personalizable único, y el contenido de la comunidad combinado con el sistema de nivelación tiende a mantener a todos ocupados y comprometidos.</p>",
    metacritic: 92,
    metacritic_platforms: [
      {
        metascore: 96,
        url: "https://www.metacritic.com/game/pc/grand-theft-auto-v",
        platform: {
          platform: 4,
          name: "PC",
          slug: "pc",
        },
      },
      {
        metascore: 97,
        url: "https://www.metacritic.com/game/playstation-3/grand-theft-auto-v",
        platform: {
          platform: 16,
          name: "PlayStation 3",
          slug: "playstation3",
        },
      },
      {
        metascore: 97,
        url: "https://www.metacritic.com/game/playstation-4/grand-theft-auto-v",
        platform: {
          platform: 18,
          name: "PlayStation 4",
          slug: "playstation4",
        },
      },
      {
        metascore: 81,
        url: "https://www.metacritic.com/game/playstation-5/grand-theft-auto-v",
        platform: {
          platform: 187,
          name: "PlayStation 5",
          slug: "playstation5",
        },
      },
      {
        metascore: 97,
        url: "https://www.metacritic.com/game/xbox-360/grand-theft-auto-v",
        platform: {
          platform: 14,
          name: "Xbox 360",
          slug: "xbox360",
        },
      },
      {
        metascore: 97,
        url: "https://www.metacritic.com/game/xbox-one/grand-theft-auto-v",
        platform: {
          platform: 1,
          name: "Xbox One",
          slug: "xbox-one",
        },
      },
      {
        metascore: 79,
        url: "https://www.metacritic.com/game/xbox-series-x/grand-theft-auto-v",
        platform: {
          platform: 186,
          name: "Xbox Series S/X",
          slug: "xbox-series-x",
        },
      },
    ],
    released: "2013-09-17",
    tba: false,
    updated: "2023-09-14T14:56:56",
    background_image:
      "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    background_image_additional:
      "https://media.rawg.io/media/screenshots/5f5/5f5a38a222252d996b18962806eed707.jpg",
    website: "http://www.rockstargames.com/V/",
    rating: 4.47,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: "exceptional",
        count: 3904,
        percent: 59,
      },
      {
        id: 4,
        title: "recommended",
        count: 2172,
        percent: 32.82,
      },
      {
        id: 3,
        title: "meh",
        count: 421,
        percent: 6.36,
      },
      {
        id: 1,
        title: "skip",
        count: 120,
        percent: 1.81,
      },
    ],
    reactions: {
      1: 29,
      2: 8,
      3: 37,
      4: 18,
      5: 13,
      6: 10,
      7: 18,
      8: 22,
      9: 2,
      10: 10,
      11: 19,
      12: 15,
      13: 1,
      14: 3,
      15: 2,
      16: 6,
      18: 4,
      20: 1,
      21: 2,
    },
    added: 20009,
    added_by_status: {
      yet: 514,
      owned: 11512,
      beaten: 5623,
      toplay: 595,
      dropped: 1056,
      playing: 709,
    },
    playtime: 74,
    screenshots_count: 57,
    movies_count: 8,
    creators_count: 11,
    achievements_count: 539,
    parent_achievements_count: 75,
    reddit_url: "https://www.reddit.com/r/GrandTheftAutoV/",
    reddit_name: "/r/GrandTheftAutoV",
    reddit_description:
      "/r/GrandTheftAutoV - the subreddit for all GTA V related news, content, and discussions revolving around Rockstar's critically acclaimed single player release and the ongoing multiplayer expansion of Grand Theft Auto Online.",
    reddit_logo: "",
    reddit_count: 5159,
    twitch_count: 99,
    youtube_count: 1000000,
    reviews_text_count: 97,
    ratings_count: 6520,
    suggestions_count: 421,
    alternative_names: ["GTA 5", "GTA V", "GTA5", "GTAV"],
    metacritic_url: "https://www.metacritic.com/game/pc/grand-theft-auto-v",
    parents_count: 0,
    additions_count: 3,
    game_series_count: 10,
    user_game: null,
    reviews_count: 6617,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    parent_platforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          slug: "pc",
        },
      },
      {
        platform: {
          id: 2,
          name: "PlayStation",
          slug: "playstation",
        },
      },
      {
        platform: {
          id: 3,
          name: "Xbox",
          slug: "xbox",
        },
      },
    ],
    platforms: [
      {
        platform: {
          id: 187,
          name: "PlayStation 5",
          slug: "playstation5",
          image: null,
          year_end: null,
          year_start: 2020,
          games_count: 933,
          image_background:
            "https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg",
        },
        released_at: "2013-09-17",
        requirements: {},
      },
      {
        platform: {
          id: 186,
          name: "Xbox Series S/X",
          slug: "xbox-series-x",
          image: null,
          year_end: null,
          year_start: 2020,
          games_count: 802,
          image_background:
            "https://media.rawg.io/media/games/840/8408ad3811289a6a5830cae60fb0b62a.jpg",
        },
        released_at: "2013-09-17",
        requirements: {},
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 516362,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
        released_at: "2013-09-17",
        requirements: {
          minimum:
            "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
          recommended:
            "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:",
        },
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 6703,
          image_background:
            "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
        },
        released_at: "2013-09-17",
        requirements: {},
      },
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 3168,
          image_background:
            "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
        },
        released_at: "2013-09-17",
        requirements: {},
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 2786,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
        released_at: "2013-09-17",
        requirements: {},
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5540,
          image_background:
            "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
        },
        released_at: "2013-09-17",
        requirements: {},
      },
    ],
    stores: [
      {
        id: 290375,
        url: "",
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7838,
          image_background:
            "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
        },
      },
      {
        id: 438095,
        url: "",
        store: {
          id: 11,
          name: "Epic Games",
          slug: "epic-games",
          domain: "epicgames.com",
          games_count: 1264,
          image_background:
            "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
        },
      },
      {
        id: 290376,
        url: "",
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 79207,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
      },
      {
        id: 290377,
        url: "",
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360",
          domain: "marketplace.xbox.com",
          games_count: 1912,
          image_background:
            "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        },
      },
      {
        id: 290378,
        url: "",
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
          domain: "microsoft.com",
          games_count: 4770,
          image_background:
            "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        },
      },
    ],
    developers: [
      {
        id: 3524,
        name: "Rockstar North",
        slug: "rockstar-north",
        games_count: 29,
        image_background:
          "https://media.rawg.io/media/screenshots/b98/b98adb52b2123a14d1c88e828a6b49f3.jpg",
      },
      {
        id: 10,
        name: "Rockstar Games",
        slug: "rockstar-games",
        games_count: 26,
        image_background:
          "https://media.rawg.io/media/games/769/769b7f0f609f44bac86f2c791fee21dd.jpg",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 174268,
        image_background:
          "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
      },
      {
        id: 3,
        name: "Adventure",
        slug: "adventure",
        games_count: 133990,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
    ],
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 208833,
        image_background:
          "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 31771,
        image_background:
          "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg",
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 35530,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 14937,
        image_background:
          "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30148,
        image_background:
          "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3249,
        image_background:
          "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
      },
      {
        id: 24,
        name: "RPG",
        slug: "rpg",
        language: "eng",
        games_count: 17899,
        image_background:
          "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
      },
      {
        id: 18,
        name: "Co-op",
        slug: "co-op",
        language: "eng",
        games_count: 10134,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 36,
        name: "Open World",
        slug: "open-world",
        language: "eng",
        games_count: 6483,
        image_background:
          "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
      },
      {
        id: 411,
        name: "cooperative",
        slug: "cooperative",
        language: "eng",
        games_count: 4231,
        image_background:
          "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 29108,
        image_background:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 149,
        name: "Third Person",
        slug: "third-person",
        language: "eng",
        games_count: 9804,
        image_background:
          "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg",
      },
      {
        id: 4,
        name: "Funny",
        slug: "funny",
        language: "eng",
        games_count: 22922,
        image_background:
          "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
      },
      {
        id: 37,
        name: "Sandbox",
        slug: "sandbox",
        language: "eng",
        games_count: 6104,
        image_background:
          "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
      },
      {
        id: 123,
        name: "Comedy",
        slug: "comedy",
        language: "eng",
        games_count: 11155,
        image_background:
          "https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg",
      },
      {
        id: 150,
        name: "Third-Person Shooter",
        slug: "third-person-shooter",
        language: "eng",
        games_count: 2977,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 62,
        name: "Moddable",
        slug: "moddable",
        language: "eng",
        games_count: 799,
        image_background:
          "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
      },
      {
        id: 144,
        name: "Crime",
        slug: "crime",
        language: "eng",
        games_count: 2601,
        image_background:
          "https://media.rawg.io/media/games/473/473bd9a5e9522629d6cb28b701fb836a.jpg",
      },
      {
        id: 62349,
        name: "vr mod",
        slug: "vr-mod",
        language: "eng",
        games_count: 17,
        image_background:
          "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg",
      },
    ],
    publishers: [
      {
        id: 2155,
        name: "Rockstar Games",
        slug: "rockstar-games",
        games_count: 79,
        image_background:
          "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
      },
    ],
    esrb_rating: {
      id: 4,
      name: "Mature",
      slug: "mature",
    },
    clip: null,
    description_raw:
      "Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. \nSimultaneous storytelling from three unique perspectives: \nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. \nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.\n\nEspañol\nRockstar Games se hizo más grande desde su entrega anterior de la serie. Obtienes la construcción del mundo complicada y realista de Liberty City de GTA4 en el escenario de Los Santos, un viejo favorito de los fans, GTA San Andreas. 561 vehículos diferentes (incluidos todos los transportes que puede operar) y la cantidad aumenta con cada actualización.\nNarración simultánea desde tres perspectivas únicas:\nSigue a Michael, ex-criminal que vive su vida de ocio lejos del pasado, Franklin, un niño que busca un futuro mejor, y Trevor, el pasado exacto del que Michael está tratando de huir.\nGTA Online proporcionará muchos desafíos adicionales incluso para los jugadores experimentados, recién llegados del modo historia. Ahora tendrás otros jugadores cerca que pueden ayudarte con la misma probabilidad que arruinar tu misión. Los jugadores pueden experimentar todas las mecánicas de GTA actualizadas a través del personaje personalizable único, y el contenido de la comunidad combinado con el sistema de nivelación tiende a mantener a todos ocupados y comprometidos.",
  };

  const movies = [
    {
      id: 16228,
      name: "GTA Online: Smuggler's Run Trailer",
      preview:
        "https://media.rawg.io/media/movies/d8a/d8a61a3a12e52114afdbc28f2c813f5c.jpg",
      data: {
        480: "https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie480.mp4",
        max: "https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4",
      },
    },
    {
      id: 16227,
      name: "GTA Online: Gunrunning Trailer",
      preview:
        "https://media.rawg.io/media/movies/80c/80c2eeb2478d31291dfb5a5fd5a45f2e.jpg",
      data: {
        480: "https://steamcdn-a.akamaihd.net/steam/apps/256686767/movie480.mp4",
        max: "https://steamcdn-a.akamaihd.net/steam/apps/256686767/movie_max.mp4",
      },
    },
    {
      id: 16226,
      name: "GTA Online: Tiny Racers Trailer",
      preview:
        "https://media.rawg.io/media/movies/7c9/7c9f84f3ec31106944a04128287fdd6a.jpg",
      data: {
        480: "https://steamcdn-a.akamaihd.net/steam/apps/256683844/movie480.mp4",
        max: "https://steamcdn-a.akamaihd.net/steam/apps/256683844/movie_max.mp4",
      },
    },
    {
      id: 16225,
      name: "GTA Online Cunning Stunts: Special Vehicle Circuit Trailer",
      preview:
        "https://media.rawg.io/media/movies/d6e/d6e1deb16c4275e8f5769528780e03ac.jpg",
      data: {
        480: "https://steamcdn-a.akamaihd.net/steam/apps/256681415/movie480.mp4",
        max: "https://steamcdn-a.akamaihd.net/steam/apps/256681415/movie_max.mp4",
      },
    },
    {
      id: 16224,
      name: "GTA Online: Import/Export",
      preview:
        "https://media.rawg.io/media/movies/1c1/1c1429a6557185326c1d8c03a6f325c0.jpg",
      data: {
        480: "https://steamcdn-a.akamaihd.net/steam/apps/256676519/movie480.mp4",
        max: "https://steamcdn-a.akamaihd.net/steam/apps/256676519/movie_max.mp4",
      },
    },
    {
      id: 16223,
      name: "GTA Online: Deadline",
      preview:
        "https://media.rawg.io/media/movies/f80/f8051b0eb479fa1785c1e04c8e54e322.jpg",
      data: {
        480: "https://steamcdn-a.akamaihd.net/steam/apps/256674210/movie480.mp4",
        max: "https://steamcdn-a.akamaihd.net/steam/apps/256674210/movie_max.mp4",
      },
    },
    {
      id: 16222,
      name: "GTA Online: Bikers Trailer",
      preview:
        "https://media.rawg.io/media/movies/955/9556607dec02bf324c87aa33bba2ed8e.jpg",
      data: {
        480: "https://steamcdn-a.akamaihd.net/steam/apps/256672028/movie480.mp4",
        max: "https://steamcdn-a.akamaihd.net/steam/apps/256672028/movie_max.mp4",
      },
    },
    {
      id: 16221,
      name: "GTA Online: Cunning Stunts Trailer",
      preview:
        "https://media.rawg.io/media/movies/66e/66e78864cf57faa2a52cfab4eb6830a4.jpg",
      data: {
        480: "https://steamcdn-a.akamaihd.net/steam/apps/256666646/movie480.mp4",
        max: "https://steamcdn-a.akamaihd.net/steam/apps/256666646/movie_max.mp4",
      },
    },
  ];

  return (
    <Container marginLeft={"auto"}>
      <Grid
        templateAreas={`"details media" "similar similar" "creators creators"`}
        templateColumns={"320px 320px"}
        templateRows={"1fr 1fr 1fr"}
      >
        <GridItem area={"details"}>
          <VStack>
            <Flex marginY={5} alignSelf={"baseline"}>
              <Box>
                {game.parent_platforms.map(({ platform }) => (
                  <Icon
                    key={platform.id}
                    as={iconMap[platform.slug]}
                    color={"gray.100"}
                    marginX={1}
                  ></Icon>
                ))}
              </Box>
              <Text marginX={5}>Average Playtime: {game.playtime}</Text>
            </Flex>
            <Text fontSize={40}>{game.name}</Text>
            <Flex alignSelf={"baseline"} alignContent={"flex-start"}>
              <Button marginRight={2}>Cart</Button>
              <Button marginRight={2}>Wishlist</Button>
              <Center>
                <Text>
                  {game.rating} / {game.rating_top}
                </Text>
              </Center>
            </Flex>
            <Box marginY={10}>
              <Show breakpoint=''>
                {showText ? (
                  <Text>{game.description_raw}</Text>
                ) : (
                  <Text noOfLines={5}>{game.description_raw}</Text>
                )}
                <Button onClick={() => setShowText(!showText)}>
                  Show {showText ? "Less" : "More"}
                </Button>
              </Show>
            </Box>
          </VStack>
        </GridItem>
        <GridItem area={"media"}>
          <VideosCarousel />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default DetailsPage;
