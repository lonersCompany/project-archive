---
layout: default
title: Ocenění
---

<section>
  <div class="max-w-md mx-auto my-10 px-4">
    {%- include label-hr.html content="Ocenění" -%} {%- for item in
    site.data.information.awards -%}
    <p>{{ item }}</p>
    {%- endfor -%}
  </div>
</section>
