---
layout: default
title: Životopis
---

{%- for item in site.data.members -%}

  <section>
    <div class="max-w-xl mx-auto py-10">
      <h1 class="mb-4 text-2xl">{{ item.name }}</h1>

      {%- for item in item.cv -%}
      <div class="pb-10 md:lg-16">
      <p class="mb-2 text-gray-500">{{ item.year }}</p>
      <h2 class="mb-2 text-gray-500">{{ item.text }}</h2>
      </div>
      {%- endfor -%}
      </div>

  </section>
{%- endfor -%}
