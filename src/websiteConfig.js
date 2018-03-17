// needed imports
import GitHubIcon from "./static/GitHubIcon";
import DesignIcon from "./static/DesignIcon";
import DevicesIcon from "./static/DevicesIcon";
import LockIcon from "./static/LockIcon";
import PeopleIcon from "./static/PeopleIcon";
import CodeIcon from "./static/CodeIcon";
import AtSignIcon from "./static/AtSignIcon";
import PersonIcon from "./static/PersonIcon";
import BookIcon from "./static/BookIcon";
import WrenchIcon from "./static/WrenchIcon";
import GAssistantIcon from "./static/GAssistantIcon";
import EmojiSmileIcon from "./static/EmojiSmileIcon";


// Footer structure
export const footerStructure = [
  [
    {
      title: "Footer content",
      href: "/"
    },
    {
      title: "Footer content",
      href: "/"
    },
    {
      title: "Footer content",
      href: "/"
    },
    {
      title: "Footer content",
      href: "/"
    }
  ],
  [
    {
      title: "Footer content",
      href: "/"
    },
    {
      title: "Footer content",
      href: "/"
    },
    {
      title: "Footer content",
      href: "/"
    },
    {
      title: "Footer content",
      href: "/"
    }
  ],
  [
    {
      title: "Footer content",
      href: "/"
    },
    {
      title: "Footer content",
      href: "/"
    },
    {
      title: "Footer content",
      href: "/"
    },
    {
      title: "Footer content",
      href: "/"
    }
  ]
];

// Docs pagemap
export const docsPageMap = {
  core: ["index"],
  mobile: ["index"],
  desktop: ["index"],
  api: ["index"],
  faq: ["index"]
};

// NavBar structure
export const navBarStructure = [
  {
    text: "Play",
    href: "/play"
  },
  {
    text: "Download",
    href: "/download"
  },
  {
    text: "Docs",
    href: "/docs"
  },
  {
    text: "FAQs",
    href: "/docs/faq"
  }
];

// HomeGrid structure
export const gridStructure = [
  [
    {
      icon: DesignIcon,
      title: "Custom design",
      description:
        "Built from scratch chess apps with beautiful custom design.",
      fillColor: "rgb(145, 25, 175)"
    },
    {
      icon: DevicesIcon,
      title: "Multi-platform",
      description:
        "RSG Chess is available on Android, Windows, macOS, Linux and on the web!",
      fillColor: "rgb(40, 152, 150)"
    },
    {
      icon: LockIcon,
      title: "Secure",
      description: "RSG Chess is 100% secure! Confirmed by Google Play Protect",
      fillColor: "green"
    },
    {
      icon: PeopleIcon,
      title: "Community",
      description:
        "Open community for everyone on YouTube, Slack, Discord and more!",
      fillColor: "rgb(51,51,51)"
    }
  ],
  [
    {
      icon: CodeIcon,
      title: "API",
      description:
        "We created special APIs that allows you to build very rich chess experience",
      fillColor: "rgb(180, 30, 30)"
    },
    {
      icon: GitHubIcon,
      title: "Open-Source",
      description: "All RSG Chess projects are 100% open-sourced!",
      fillColor: "rgb(51,51,51)"
    },
    {
      icon: AtSignIcon,
      title: "AI built-in",
      description:
        "The game has built-in AI which is improved after every release!",
      fillColor: "red"
    },
    {
      icon: PersonIcon,
      title: "User preferences",
      description: "The game graphics are based on client's preferences.",
      fillColor: "rgb(75, 60, 140)"
    }
  ],
  [
    {
      icon: BookIcon,
      title: "Well documented",
      description:
        "Rich documentation including examples, code, FAQs and more.",
      fillColor: "rgb(51,51,51)"
    },
    {
      icon: WrenchIcon,
      title: "Support",
      description: "Fast support response and helpful services.",
      fillColor: "rgb(22, 90, 170)"
    },
    {
      icon: GAssistantIcon,
      title: "Google Assistant",
      description:
        "Expect few G Assistant apps, a part of The RSG Chess Family",
      fillColor: ""
    },
    {
      icon: EmojiSmileIcon,
      title: "Fun & interesting",
      description: "Have fun while using our Quizzes and watching our videos.",
      fillColor: ""
    }
  ]
];

// Download Table structures
export const downloadHeadStructure = [
  {
    colSpan: 1,
    text: "Android"
  },
  {
    colSpan: 2,
    text: "Windows"
  },
  {
    colSpan: 2,
    text: "Linux"
  },
  {
    colSpan: 2,
    text: "macOS"
  }
];

export const downloadBodyStructure = [
  {
    href:
      "https://github.com/RSG-Group/RSG-Chess-desktop/releases/download/0.0.1/installation.txt",
    text: "64-bit (.exe)"
  },
  {
    href:
      "https://github.com/RSG-Group/RSG-Chess-desktop/releases/download/0.0.1/installation.txt",
    text: "64-bit (.zip)"
  },
  {
    href:
      "https://github.com/RSG-Group/RSG-Chess-desktop/releases/download/0.0.1/installation.txt",
    text: "x64"
  },
  {
    href:
      "https://github.com/RSG-Group/RSG-Chess-desktop/releases/download/0.0.1/installation.txt",
    text: "ARM v8"
  },
  {
    href:
      "https://github.com/RSG-Group/RSG-Chess-desktop/releases/download/0.0.1/installation.txt",
    text: "64-bit (.pkg)"
  },
  {
    href:
      "https://github.com/RSG-Group/RSG-Chess-desktop/releases/download/0.0.1/installation.txt",
    text: "32-bit (.pkg)"
  }
];

export const downloadSourceStructure = [
  {
    colSpan: 1,
    href: "https://github.com/RSG-Group/RSG-Chess-mobile/archive/master.zip",
    text: "Source (.zip)"
  },
  {
    colSpan: 6,
    href: "https://github.com/RSG-Group/RSG-Chess-desktop/archive/master.zip",
    text: "Source (.zip)"
  }
];
