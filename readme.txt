=== Widget Alias ===
Contributors:      McGuive7, MIGHTYminnow
Donate link:       http://mightyminnow.com
Tags:              duplicate, widget, alias, reproduce, synchronize, mimic, sidebar, widgets, shortcode, specific, multiple
Requires at least: 3.0
Tested up to:      3.7.1
Stable tag:        1.0
License:           GPLv2 or later
License URI:       http://www.gnu.org/licenses/gpl-2.0.html

Duplicate any existing widget using the Widget Alias widget and shortcode.

== Description ==
Widget Alias allows you to create an "alias" of any existing widget, effectively reproducing / duplicating it. This can be especially handy when you want the same widget to appear in multiple sidebars. Normally you would have to edit each widget independently, but Widget Alias means you'll only have to edit one.

This plugin is similar to [Duplicate Widget](http://wordpress.org/plugins/duplicate-widget), with a few key differences:
* Widget Alias gives you the option to override the aliased widget's title.
* Widget Alias uses AJAX to update the drop-down `<select>` menus on the fly, which means you see widget changes (adding widgets, deleting widgets, re-ordering widgets, etc) in real time.
* If you delete a widget that is being aliased, the aliased copies simply revert to "None", instead of being deleted. This allows you to keep track of where you've used Widget Alias widgets, if need be.

A [**MIGHTYminnow**](http://mightyminnow.com) plugin.

= Usage =
Widget Alias can be used in one of two ways:

**1. Widget**
In *Appearances > Widgets* you'll see a new widget called "Widget Alias", in which you can specify an override title if desired, and use the drop-down `<select>` menu to choose the ID of the widget you would like to alias.

**2. Shortcode**
Widget Alias also comes packaged with a shortcode that looks like this:
`[wa id="target-widget-id" title="Override Title"]`

To use the shortcode simply enter the ID of the widget you would like to alias (`id` parameter), and an override title (`title` parameter) if you would like to change the aliased widget's title.

= Widget IDs =
Widget Alias makes it super-easy for you to find the ID of any widget you would like to alias. In *Appearance > Widgets*, all active widgets now have their ID appended below the widget title. Note: these IDs are added using jQuery, and will not appear if JavaScript is disabled. 

Banner photo by [Susannah Kay](http://susannahkay.com).

== Installation ==
Install and activate the plugin. That's it! You'll now have access to the Widget Alias widget via *Appearance > Widgets*, as well as the `[wa]` shortcode.

== Screenshots ==
1. Normal WordPress navigation.
2. Responsive select / drop-down menu at user-specified mobile width.
3. Sample first item and sub-item spacer at responsive / mobile sizes.

== Changelog ==

= 1.0 =
* First release

== Upgrade Notice ==

= 1.0 =
First Release