import * as React from "react";
import { coordinates } from "./logic";

export interface labyrinthBaustein {
  wall: boolean;
  walkthrough: boolean;
  isStart?: boolean;
  playerOnTop?: boolean;
  isFinish?: boolean;
}

interface levelProps {
  player: string;
  levelArea: labyrinthBaustein[][];
  isEdit?: boolean;
  returnFunc?: (edit: coordinates) => any;
}

interface labyrinthtileprops extends labyrinthBaustein {
  player: string;
  isEdit?: coordinates;
  returnFunc?: (edit: coordinates) => any;
}

export const getPossibleLevels = () => [
  {
    name: "regular",
    structure: [
      [
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: true, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false, isStart: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false }
        ]
      ],
      [
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: true, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false }
        ]
      ],

      [
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: true, wall: false }
        ],
        [
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ]
      ],

      [
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: true, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false }
        ],
        [
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false }
        ],
        [
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: true, wall: false }
        ]
      ],

      [
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ]
      ],

      [
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: true, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ]
      ],

      [
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false, isFinish: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true },
          { walkthrough: false, wall: true }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ]
      ]
    ] as labyrinthBaustein[][][]
  },
  {
    name: "clean",
    structure: [
      [
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],

        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ],
        [
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false },
          { walkthrough: false, wall: false }
        ]
      ]
    ]
  }
];

export const getLevelStructure = (levelName: string) => {
  return new Promise((resolve, reject) => {
    console.log({ text: "Suche nach Level", value: levelName });
    getPossibleLevels().forEach(level => {
      if (level.name == levelName.toLocaleLowerCase()) {
        console.log("Level gefunden");
        console.log("Sende Level an Spiel...");
        return resolve(level.structure);
      }
    });
    return reject([] as labyrinthBaustein[][][]);
  });
};

const LabyrinthTile = (props: labyrinthtileprops) => {
  let tileRef: HTMLDivElement;
  return (
    <div
      ref={ref => (tileRef = ref)}
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        backgroundColor: props.isStart
          ? "limegreen"
          : props.isFinish
            ? "red"
            : props.wall
              ? "darkgrey"
              : props.walkthrough
                ? "lightgoldenrodyellow"
                : "whitesmoke",
        border: "1px solid grey",
        width: "2vw",
        height: "2vw",
        fontSize: "1.2vw",
        transition: "background 0.2s",
        cursor: props.isEdit ? "pointer" : "default"
      }}
      onClick={() => (props.isEdit ? props.returnFunc(props.isEdit) : "")}
      onMouseOver={() => {
        if (props.isEdit) tileRef.style.backgroundColor = "lightgrey";
      }}
      onMouseDown={() => {
        if (props.isEdit) tileRef.style.backgroundColor = "limegreen";
      }}
      onMouseUp={() => {
        if (props.isEdit)
          tileRef.style.backgroundColor = props.isStart
            ? "limegreen"
            : props.isFinish
              ? "red"
              : props.wall
                ? "darkgrey"
                : props.walkthrough
                  ? "lightgoldenrodyellow"
                  : "whitesmoke";
      }}
      onMouseLeave={() => {
        if (props.isEdit)
          tileRef.style.backgroundColor = props.isStart
            ? "limegreen"
            : props.isFinish
              ? "red"
              : props.wall
                ? "darkgrey"
                : props.walkthrough
                  ? "lightgoldenrodyellow"
                  : "whitesmoke";
      }}
    >
      {props.playerOnTop ? props.player : ""}
    </div>
  );
};

export const Level = (props: levelProps) => {
  return (
    <div
      style={{
        border: "2px solid black",
        width: "22vw"
      }}
    >
      {props.levelArea.map((row, rowIndex) => (
        <div
          style={{ display: "flex", justifyContent: "center", justifyItems: "center", flexDirection: "row" }}
          onClick={() => {}}
        >
          {row.map((tile, tileIndex) => {
            if (props.isEdit) {
              return (
                <LabyrinthTile
                  walkthrough={tile.walkthrough}
                  wall={tile.wall}
                  isStart={tile.isStart}
                  isFinish={tile.isFinish}
                  playerOnTop={tile.playerOnTop}
                  isEdit={{ level: 0, row: rowIndex, tile: tileIndex }}
                  returnFunc={edit => {
                    props.returnFunc(edit);
                  }}
                  player={props.player}
                />
              );
            } else {
              return (
                <LabyrinthTile
                  walkthrough={tile.walkthrough}
                  wall={tile.wall}
                  isStart={tile.isStart}
                  isFinish={tile.isFinish}
                  playerOnTop={tile.playerOnTop}
                  player={props.player}
                />
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};
