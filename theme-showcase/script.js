const themes = {
  gruvbox: {
    "--bg": "#282828",
    "--text": "#ebdbb2",
    "--primary": "#d79921",
    "--card-bg": "#3c3836",
    "--border": "#928374"
  },
  everforest: {
    "--bg": "#2f383e",
    "--text": "#d3c6aa",
    "--primary": "#a7c080",
    "--card-bg": "#3a4248",
    "--border": "#679b98"
  },
  catppuccin: {
    "--bg": "#1e1e2e",
    "--text": "#cdd6f4",
    "--primary": "#caa6f7",
    "--card-bg": "#313244",
    "--border": "#7aa3f7"
  },
  autmn: {
    "--bg": "#0f1b1f",
    "--text": "#d0dbe0",
    "--primary": "#AF8D4B",
    "--card-bg": "#24373e",
    "--border": "#A0A39F"
  },
  kanagawa: {
    "--bg": "#1f1f28",
    "--text": "#dcd7ba",
    "--primary": "#7e9cd8",
    "--card-bg": "#2a2a37",
    "--border": "#928374"
  },
  oxocarbon: {
    "--bg": "#120811",
    "--text": "#d9d7df",
    "--primary": "#b14a6c",
    "--card-bg": "#2b1a2f",
    "--border": "#6e4257"
  },
  rosepine: {
    "--bg": "#232136",
    "--text": "#e0def4",
    "--primary": "#eb6f92",
    "--card-bg": "#393552",
    "--border": "#b4637a"
  },
  graphite: {
    "--bg": "#1b1d1e",
    "--text": "#cfcfcf",
    "--primary": "#5c6370",
    "--card-bg": "#2f3132",
    "--border": "#cfcfcf"
  },
  crimson: {
    "--bg": "#100507",
    "--text": "#f2dede",
    "--primary": "#e63946",
    "--card-bg": "#2e1218",
    "--border": "#F5A78F"
  },
  flexoki: {
    "--bg": "#f2f0e5",
    "--text": "#100f0f",
    "--primary": "#5a6a69",
    "--card-bg": "#e6e4d9",
    "--border": "#b7b5a9"
  },
  slatemist: {
    "--bg": "#66757F",
    "--text": "#4a5353",
    "--primary": "#748897",
    "--card-bg": "#B2BEB5",
    "--border": "#948897"
  }
};

const themeItems = document.querySelectorAll(".theme-item");

function applyTheme(name) {
  const theme = themes[name];

  for (let key in theme) {
    document.documentElement.style.setProperty(key, theme[key]);
  }

  localStorage.setItem("theme", name);
}

function renderPalettes() {
  themeItems.forEach(item => {
    const themeName = item.dataset.theme;
    const palette = item.querySelector(".palette");
    const theme = themes[themeName];

    palette.innerHTML = "";

    Object.values(theme).forEach(color => {
      const box = document.createElement("div");
      box.classList.add("color-box");
      box.style.background = color;
      box.textContent = color;
      box.addEventListener("click", () => {
        navigator.clipboard.writeText(color);

        box.textContent = "Copied!";
        
        setTimeout(() => {
          box.textContent = color;
        }, 800);
      });
      palette.appendChild(box);
    });
  });
}

themeItems.forEach(item => {
  item.addEventListener("click", () => {
    themeItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    const themeName = item.dataset.theme;
    applyTheme(themeName);
  });
});

renderPalettes();

const saved = localStorage.getItem("theme");
if (saved && themes[saved]) {
  applyTheme(saved);
}
