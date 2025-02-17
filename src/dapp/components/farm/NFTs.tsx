import React from "react";
import { Prop } from "xstate/lib/model.types";

import statue from "../../images/ui/sunflower_statue.png";
import potatoStatue from "../../images/ui/potato_statue.png";
import scarecrow from "../../images/ui/scarecrow.png";
import christmasTree from "../../images/ui/christmas_tree.png";
import pebbletower from "../../images/ui/pebbletower.png";
import { Inventory } from "../../types/crafting";

import "./NFTs.css";

interface Props {
  inventory: Inventory;
}

export const NFTs: React.FC<Props> = ({ inventory }) => {
  const now = new Date();
  const hasInventoryChristmasTree = inventory["Christmas Tree"] > 0;
  const isProperTimingChristmasTree =
    now.getMonth() === 11 && now.getDate() <= 25;
  const showChristmasTree =
    hasInventoryChristmasTree && isProperTimingChristmasTree;

  return (
    <>
      <div id="statue">
        {inventory["Sunflower Statue"] > 0 && (
          <img src={statue} alt="statue" />
        )}
      </div>

      <div id="potato-statue">
        {inventory["OG Potato Statue"] > 0 && (
          <img src={potatoStatue} alt="statue" />
        )}
      </div>

      <div id="scarecrow">
        {inventory["Scarecrow"] > 0 && (
          <img src={scarecrow} alt="statue" />
        )}
      </div>

      <div id="christmas-tree">
        {showChristmasTree && (
          <img src={christmasTree} alt="christmasTree" />
        )}
      </div>
      <div id="pebbletower">
        {inventory["Pebble Tower"] > 0 &&
            <img src={pebbletower} alt="pebbletower" />
        }
    </div>
      <div className="dirt" style={{ gridColumn: 6, gridRow: 7 }} />
      <div className="dirt" style={{ gridColumn: 6, gridRow: 6 }} />
    </>
  );
};
