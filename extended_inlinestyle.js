(function($R) {
    $R.add('plugin', 'extended_inlinestyle', {
        translations: {
            en: {
                "extended_inlinestyle": "Style"
            }
        },
        init: function(app) {
            this.app = app;
            this.lang = app.lang;
            this.toolbar = app.toolbar;
			this.opts = app.opts;

            // local
    		this.default_styles = {
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
			};
			
			this.inline_styles = (this.opts.inline_styles) ? this.opts.inline_styles : this.default_styles;			
        },
        start: function() {
			var dropdown = {};
			
			for (var key in this.inline_styles) {
				dropdown[key] = this.inline_styles[key]
			}

			if (this.opts.inline_stylesAdd) {
				for (var key in this.opts.inline_stylesAdd) {
					dropdown[key] = this.opts.inline_stylesAdd[key];
				}
			}			

			var buttonData = {
				title: this.lang.get('extended_inlinestyle'),
				icon: '<i class="re-icon-inline"></i>'
			};  

            var $button = this.toolbar.addButtonAfter('format', 'inline', buttonData);

			$button.setDropdown(dropdown);
        }
    });
})(Redactor);