---
layout: default
title: Životopis
---

{%- for item in site.data.members -%}

  <section>
    <div class="max-w-xl mx-auto py-10">
      <h1 class="mb-4 text-2xl">{{ item.name }}</h1>

      <p class="pb-10 text-gray-600">{{ item.cv }}</p>
      </div>

  </section>
{%- endfor -%}
