# extended_inlinestyle
Redactor plugins which extends/replaces the default inlinestyle plugin

# Installation

* Download the package
* Rename, if needed, the downloaded directory to `extended_inlinestyle`
* Copy the directory to the redactor plugin directory
* If you had the redactor plugin `inlinestyle` activated, please remove it from the `plugins` list
* To enable the plugin, you have to add `extended_inlinestyle` to the `plugins` definition in your redactor config file

# Default Inline Styles

This plugin uses the same inline styles as the original plugin.

Here the list:

```
{
    "marked": {
        title: "Marked",
        api: "module.inline.format",
        args: "mark"
    },
    "code": {
        title: "Code",
        api: "module.inline.format",
        args: "code"
    },
    "variable": {
        title: "Variable",
        api: "module.inline.format",
        args: "var"
    },
    "shortcut": {
        title: "Shortcut",
        api: "module.inline.format",
        args: "kbd"
    },
    "sup": {
        title: "Superscript",
        api: "module.inline.format",
        args: "sup"
    },
    "sub": {
        title: "Subscript",
        api: "module.inline.format",
        args: "sub"
    }
}
```

# Examples

Extend the default inline styles:
```
{
  "buttons": ["html", "formatting","bold", "italic", "unorderedlist", "orderedlist", "link", "image", "video"],
  "plugins": ["alignment", "fullscreen", "video", "extended_inlinestyle", "table", "clear_format"],
  "inline_stylesAdd": {
    "clear_format": {
      "title": "Clear inline format",
      "api": "plugin.clear_format.toggle"
    }
  }
}
```

Create your own inline style list:
```
{
  "buttons": ["html", "formatting","bold", "italic", "unorderedlist", "orderedlist", "link", "image", "video"],
  "plugins": ["alignment", "fullscreen", "video", "extended_inlinestyle", "table", "clear_format"],
  "inline_styles": {
    "marked": {
        title: "Marked",
        api: "module.inline.format",
        args: "mark"
    },
    "code": {
        title: "Code",
        api: "module.inline.format",
        args: "code"
    }
  }
}
```
