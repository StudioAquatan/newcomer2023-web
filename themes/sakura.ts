import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      backgroundColor: string;
      normalTextColor: string;
      subTextColor: string;
      button: {
        enable: {
          backgroundColor: string;
          textColor: string;
        };
        disable: {
          backgroundColor: string;
          textColor: string;
        };
        active: {
          textColor: string;
        };
      };
      orgCard: {
        backgroundColor: string;
        normalTextColor: string;
        borderColor: string;
        hover: {
          backgroundColor: string;
        };
      };
      stamp: {
        backgroundColor: string;
        normalTextColor: string;
      };
      progressBar: {
        backgroundColor: string;
        progressColor: string;
      };
      storyLike: {
        backgroundColor: string;
        normalTextColor: string;
      };
    };
  }
}

export const sakura = {
  colors: {
    backgroundColor: "#F7FFF5",
    normalTextColor: "#000000",
    subTextColor: "#797979",
    button: {
      enable: {
        backgroundColor: "#FF8DBD",
        textColor: "#000000",
      },
      disable: {
        backgroundColor: "#AAAAAA",
        textColor: "#000000",
      },
      active: {
        textColor: "#512C3C",
      },
    },
    orgCard: {
      backgroundColor: "#FFFFFF",
      normalTextColor: "#000000",
      borderColor: "#8B8B8B",
      hover: {
        backgroundColor: "#DFEDDC",
      },
    },
    stamp: {
      backgroundColor: "#FFC8DF",
      normalTextColor: "#F6F6F6",
    },
    progressBar: {
      backgroundColor: "#DFEDDC",
      progressColor: "#FF8DBD",
    },
    storyLike: {
      backgroundColor: "#202020",
      normalTextColor: "#E6E6E6",
    },
  },
};
