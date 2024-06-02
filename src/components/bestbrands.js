import React from "react";
import "../css/bestbrands.css";
import Navbar2 from "./NavBar2";

import elementLogo from "../images/element.jpg";
import bakerLogo from "../images/baker.png";
import girlLogo from "../images/girl.png";
import santaCruzLogo from "../images/santa-cruz.png";
import zeroLogo from "../images/zero.png";
import planBLogo from "../images/plan-b.jpg";
import powellPeraltaLogo from "../images/powell-peralta5.jpg";
import enjoiLogo from "../images/enjoi.png";
import antiHeroLogo from "../images/anti-hero.png";
import almostLogo from "../images/almost.png";

const BestBrands = () => {
  // Extended list of skateboard brands
  const bestSkateboardBrands = [
    {
      id: 1,
      name: "Element Skateboards",
      founded: 1992,
      headquarters: "Irvine, California, USA",
      logo: elementLogo,
      description:
        "Element Skateboards is a skateboard company that manufactures skateboard decks, apparel, and accessories.",
    },
    {
      id: 2,
      name: "Baker Skateboards",
      founded: 2000,
      headquarters: "Los Angeles, California, USA",
      logo: bakerLogo,
      description:
        "Baker Skateboards is a skateboarding company founded by professional skateboarder Andrew Reynolds and artist Jay Strickland in 2000.",
    },
    {
      id: 3,
      name: "Girl Skateboards",
      founded: 1993,
      headquarters: "Torrance, California, USA",
      logo: girlLogo,
      description:
        "Girl Skateboards is a Torrance, CA based skateboard company that specializes in providing top quality skateboarding equipment and accessories.",
    },
    {
      id: 4,
      name: "Santa Cruz Skateboards",
      founded: 1973,
      headquarters: "Santa Cruz, California, USA",
      logo: santaCruzLogo,
      description:
        "Santa Cruz Skateboards is one of the oldest skateboard companies, known for its iconic graphics and high-quality skateboard decks.",
    },
    {
      id: 5,
      name: "Zero Skateboards",
      founded: 1996,
      headquarters: "Carlsbad, California, USA",
      logo: zeroLogo,
      description:
        "Zero Skateboards is a skateboard company founded by professional skateboarder Jamie Thomas, known for its dark, punk rock-inspired graphics.",
    },
    {
      id: 6,
      name: "Plan B Skateboards",
      founded: 1991,
      headquarters: "San Diego, California, USA",
      logo: planBLogo,
      description:
        "Plan B Skateboards is a well-respected skateboard company that produces high-quality decks and is known for its team of elite skateboarders.",
    },
    {
      id: 7,
      name: "Powell Peralta",
      founded: 1978,
      headquarters: "Santa Barbara, California, USA",
      logo: powellPeraltaLogo,
      description:
        "Powell Peralta is a legendary skateboard company co-founded by George Powell and Stacy Peralta, known for its Bones Brigade team and iconic graphics.",
    },
    {
      id: 8,
      name: "Enjoi Skateboards",
      founded: 2000,
      headquarters: "Los Angeles, California, USA",
      logo: enjoiLogo,
      description:
        "Enjoi Skateboards is known for its fun and whimsical graphics, as well as high-quality decks and a team of talented skateboarders.",
    },
    {
      id: 9,
      name: "Anti-Hero Skateboards",
      founded: 1995,
      headquarters: "San Francisco, California, USA",
      logo: antiHeroLogo,
      description:
        "Anti-Hero Skateboards is a company known for its raw and gritty approach to skateboarding, producing durable decks and unique graphics.",
    },
    {
      id: 10,
      name: "Almost Skateboards",
      founded: 2003,
      headquarters: "El Segundo, California, USA",
      logo: almostLogo,
      description:
        "Almost Skateboards is a company that produces high-quality decks and innovative designs, founded by professional skateboarders Rodney Mullen and Daewon Song.",
    },
  ];

  return (
    <div className="best-brands">
      <Navbar2 />
      <h2>Best Skateboard Brands</h2>
      <div className="brand-list">
        {bestSkateboardBrands.map((brand) => (
          <div key={brand.id} className="brand">
            <img src={brand.logo} alt={brand.name} />
            <div className="brand-details">
              <h3>{brand.name}</h3>
              <p>
                <strong>Founded:</strong> {brand.founded}
              </p>
              <p>
                <strong>Headquarters:</strong> {brand.headquarters}
              </p>
              <p>{brand.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestBrands;
