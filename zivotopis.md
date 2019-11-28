---
layout: default
title: Životopis
---

<section>
  <div class="max-w-lg mx-auto my-10 px-4 pb-24">
    {%- for item in site.data.members -%}

    <div class="pb-10 md:lg-16">
      {{item.cv}}
    </div>

    {%- endfor -%}

  </div>
</section>
