# Use bindAsync() in WAForth to send HTTP(s) requests from inside WASM

## Instructions for this devcontainer

Tested with Node 20.17.0, Bun 1.1.29, Deno 1.46.3, WAForth [v0.20.1](https://github.com/remko/waforth/releases/tag/v0.20.1).

### Preparation

1. Open this repo in devcontainer, e.g. using Github Codespaces.
   Type or copy/paste following commands to devcontainer's terminal.

### Installation

1. `cd` into the folder of this example:

```sh
cd browser-and-node
```

2. Install WAForth library:

```sh
yarn add waforth
```

### Test with browser

1. Run simple HTTP server to temporarily publish project to Web:

```sh
python3 -m http.server
```

Codespace will show you "Open in Browser" button. Just click that button or
obtain web address from "Forwarded Ports" tab.

2. As `index.html` and JS files (containing bundled WASM in base64 form) are loaded into browser, refer to browser developer console
   to see the results.

### Test with Node.js

1. Run with Node:

```sh
node httpget.mjs
```

### Test with Bun

1. Install Bun:

```sh
curl -fsSL https://bun.sh/install | bash
```

2. Run with Bun:

```sh
~/.bun/bin/bun bun.mjs
```

### Test with Deno

1. Install Deno:

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

2. Run with Deno:

```sh
~/.deno/bin/deno run --allow-read --allow-net httpget.mjs
```

### Finish

Perform your own experiments if desired.
