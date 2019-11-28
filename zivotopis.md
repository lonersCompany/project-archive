---
layout: default
title: Životopis
---

{%- for item in site.data.members -%}

  <section>
    <div class="max-w-lg mx-auto my-10 px-4 pb-24">
      <h1 class="mb-4 text-2xl">{{ item.name }}</h1>

      {%- for field in item.cv -%}
      <div class="pb-10 md:lg-16">
      <p class="mb-2 text-gray-500">{{ field.year }}</p>
      <h2 class="mb-2 text-2xl text-gray-500">{{ field.text }}</h2>
      </div>
      {%- endfor -%}
        </div>

  </section>
{%- endfor -%}
