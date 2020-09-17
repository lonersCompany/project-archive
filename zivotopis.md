---
layout: default
title: Životopis
---

<div class="pb-24">
{%- for item in site.data.members -%}

  <section class="py-10">
    <div class="max-w-lg mx-auto px-4 text-block">
      <h1 class="mb-4 text-2xl">{{ item.name }}</h1>
      <p class="text-lg pb-10 text-gray-600">{{ item.cv }}</p>
    </div>

  </section>
{%- endfor -%}
</div>
