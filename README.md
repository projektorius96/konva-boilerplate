# MOTIVATION

> [Konva.js](https://konvajs.org/) (hereinafter – Konva) gives you ability to hook into native "CanvasAPI" context (CanvasRenderingContext2D) via `Konva.Shape` exposed `sceneFunc`, but also enjoy Konva-specific functionality such as `draggable` shape (_enabled at Layer level_).

---

### Installation

1.  Clone the project to your local machine;
2.  `npm ci` # it assumes you have **Node.js** as well as **npm** installed prior to using this command.

#### Dependencies

- [Konva.js](https://konvajs.org/api/Konva.html) | \[REQUIRED\]
- [Vite.js](https://vitejs.dev/) | \[REQUIRED\]
- [typed-getters](https://npmjs.com/package/@gloch96/typed-getters?activeTab=readme) | \[OPTIONAL\]

### Conventions

> To reproduce token used as Letter modifier class (Lm Unicode) for valid a ECMAScript (JavaScript) _indentifier_ found in this codebase, you can follow-up one of the respective methods as follows:

A. Leverage Regex in JavaScript:

```
    // # alternatively just use dollar '$' token
    RegExp('\u{3035}').source // '〵'
```

B. Set global snippet in VSC (**recommended**):

[Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

> DEV_TIP # you can make your own aliases in _**prefix\[\]**_, use your imagination what works best for you !

```
{
    "Letter modifier (Lm U+3035) := vertical kana lower half": {
        "scope": "javascript,typescript",
        "prefix": ["lm:lower-kana", "u3035", "downkana"]
        "body": [
            "〵$0"
        ],
        "description": "JavaScript-friendly backward-slash"
    }
}
```

---

### Playground

> In order to drag a shape drew within `Konva.Shape` we have to create a `Konva.Rect` instance and plug it onto `CanvasRenderingContext2D`'s ctx accessible via Konva.Shape's exposed `sceneFunc`;

#### Interactions

> npx vite serve --open

Click on black-coloured border (frame) of circle and drag around, it will change a color whilst dragging, but gets back to its defaults then dragging is done;

---

> Feel free to accommodate the codebase to your needs, just clone the boilerplate and enjoy coding with Konva.js ! ♥

Cheers
