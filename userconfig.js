let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Miami',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      k: ["https://kagi.com/search?q=", "Kagi"],
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://app.raindrop.io/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "local",
      background_url: "src/img/banners/cbg-3.gif",
      categories: [{
        name: "Main",
        links: [
          {
            name: "Pi-hole",
            url: "http://pi.hole/admin/",
            icon: "cherry",
            icon_color: "#eb1a28",
          },
          {
            name: "Truenas",
            url: "http://truenas.local/",
            icon: "binary-tree-2",
            icon_color: "#3c4252",
          },
          {
            name: "Dockge",
            url: "http://192.168.1.71:5001/",
            icon: "brand-docker",
            icon_color: "#6ca0e4",
          },
          {
            name: 'Pihole disabled',
            url: 'http://192.168.1.100/admin/api.php?disable=120&auth=1ff21fde42a45942bb6fbe1bda0ea7e86359c61ab024aed63831ed387e3c6c3b',
            icon: 'cherry',
            icon_color: '#eb1a28',
          }
        ],
      }, {
        name: "Devtools",
        links: [
          {
            name: "Bookstack",
            url: "http://192.168.1.71:6875/",
            icon: "books",
            icon_color: "#326ea6",
          },
          {
            name: "Filebrowser",
            url: "http://192.168.1.71:9090/",
            icon: "device-floppy",
            icon_color: "#50bcfe",
          },
          {
            name: "Syncthing",
            url: "http://192.168.1.71:8384/",
            icon: "refresh-alert",
            icon_color: "#42a5d4",
          },
          {
            name: "NginxPM",
            url: "http://192.168.1.71:81/",
            icon: "brand-graphql",
            icon_color: "#DF4440",
          },
          {
            name: "Vscode",
            url: "http://192.168.1.71:8443/",
            icon: "brand-vscode",
            icon_color: "#0072be",
          },
          {
            name: "Local Syncthing",
            url: "http://127.0.0.1:8384/",
            icon: "refresh-alert",
            icon_color: "#42a5d4",
          }
        ],
      }, {
        name: "Personal",
        links: [
          {
            name: "Mealie",
            url: "http://192.168.1.71:9925/",
            icon: "tools-kitchen-2",
            icon_color: "#dd842e",
          },
          {
            name: "Memos",
            url: "http://192.168.1.71:5230/explore",
            icon: "brand-twitter",
            icon_color: "#7D7D83",
          },
          {
            name: "qb",
            url: "http://qbit.clau.io/",
            icon: "brand-bilibili",
            icon_color: "#DEF1FF",
          },
          {
            name: "Plex",
            url: "http://192.168.1.70:32400/web/",
            icon: "brand-youtube",
            icon_color: "#e5a00d",
          }
        ],
      }],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "bitbucket",
              url: "https://bitbucket.org/",
              icon: "brand-bitbucket",
              icon_color: "#0C66E4",
            },
          ],
        },
        {
          name: "work links",
          links: [
            {
              name: "Trello",
              url: "https://trello.com/b/XyKhClVF/",
              icon: "brand-trello",
              icon_color: "#89b482",
            },
            {
              name: "Aws",
              url: "https://us-east-1.signin.aws.amazon.com/",
              icon: "brand-aws",
              icon_color: "#ff9900",
            }
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "JSON to typescript",
              url: "https://transform.tools/json-to-typescript",
              icon: "brand-typescript",
              icon_color: "#0e7ccf",
            },
            {
              name: "wallpapers",
              url: "https://www.kriegs.net/",
              icon: "polaroid",
              icon_color: "#e78a4e",
            },
            {
              name: "icons",
              url: "https://tabler.io/icons",
              icon: "icons",
              icon_color: "#7daea3",
            },
            {
              name: "colors",
              url: "https://coolors.co/",
              icon: "color-swatch",
              icon_color: "#ea6962",
            },
            {
              name: "Old network links",
              url: "https://sites.google.com/view/claudevblog/homelab/network",
              icon: "network",
              icon_color: "#ea6962",
            }
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
              icon: "box-seam",
              icon_color: "#7daea3",
            },
            {
              name: "fotos",
              url: "https://photos.google.com/u/1",
              icon: "photo-filled",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
