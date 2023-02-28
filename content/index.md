---
layout: layouts/base.njk
title: hello forever
---

Our title is: <h1>{{ title }}</h1>

A little about Layouts

We can load a layouts file that will be used to render our content by adding it in the front matter.

The layouts file can be a nunjucks template or liquid or any template of your fancy.
Eleventy looks for template files in the _includes folder. If you have a subfolder where you have placed your templates, just reference them in the frontmatter.

For example. If you have a base.njk template file in your _includes/layouts folder. You will need to reference as layouts/base.njk in you frontmatter.

Right now, I don't know why My layout is not working.
For some reason the base.njk file does not link up
Also in my compiled html, the base template is not being propagated.
When I do pnpm run start it fails.
I can get it to run by removing the layout: base.njk line but what's the point if templates are not working?

SO it was not working because in the config file, we didnt reference the _includes folder correctly.
It turns out that in the dir object in our eleventy config file, eleventy assumes the _includes files are relative to the input directory.

The fix was to come up one level ie '../_includes' and it worked